import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';



const validateFormData = (data: ContactFormData) =>{

    const {name, email, subject, message } = data

    if(!name || !email || !subject || !message){
        return { isValid: false, error:'All field are required'}
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        return{ isValid:false, error:'Invalid Email address.'};
    }
    return {isValid:true};

};


export  async function POST(req:Request){
    try{

        const body = await req.json();
        const {name,email,subject,message}=body 

        const {isValid, error } = validateFormData(body);
        if(!isValid){
            return NextResponse.json({error}, {status:400})
        }

        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS,
            },

        });

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to:process.env.EMAIL_TO,
            subject: `Contact Form: ${subject}`,
            text: `Name: ${name} \nEmail:${email} \n Subject:${subject}\n\n${message}`,
            html:`
            <h3>New Message from SIMAC Contact Form</h3>
            <p><strong>Name:</strong>${name}</p>
            <p><strong>Email:</strong>${email}</p>
            <p><strong>Subject:</strong>${subject}</p>
            <><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true },{ status: 200 }); //{Message:"Message sent Successfully"},

    } catch (error) {
        console.error('Send mail error ', error);
        return NextResponse.json({ error: 'Failed to Send the Mail. Please Try again later' }, { status: 500 });
    }
}