
import React from "react";

const ContactUsPage = () => {
  return (
    <main>
      <section>

      </section>

      <section className="bg-[#5C1B23] flex-col justify-between py-4 text-center text-white">
        <h1 className="font-bold text-2xl p-4">Contact Us</h1>
        <p className="font-extralight py-6">Get in touch with SIMAC. We&#39;d love to hear from you</p>
      </section>

      <section>
       <h1 className="bg-amber-100 flex justify-center text-2xl py-4 font-bold text-[#5C1B23]"> Our Location </h1> 
      </section>

      <section className="border flex-col py-4 px-4">
        <h2 className="text-[#5C1B23] font-bold">Get in Touch</h2>
        <form className="flex-1/4">
        <label>Name</label>
        <input
        type="text"
        placeholder="Your name" 
        className="border"
        />
        <label>Email</label>
        <input 
        type="text"
        placeholder="Your email@example.com"
        className="border"
        />
        <label>Subject</label>
        <input 
        type="text"
        placeholder="Subject of the message"
        className="border"
        />
        <label>Message</label>
        <textarea className="border">

        </textarea>
        </form>
      
      </section>
    </main>

  );
};

export default ContactUsPage;
