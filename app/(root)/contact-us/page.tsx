"use client";
import Footer from "@/components/shared/footer";
import ContactForm from "@/components/ui/Contact/ContactForm";
import ContactLink from "@/components/ui/Contact/ContactLink";
import MapComponent from "@/components/ui/Contact/MapComponent";
import { SCaR_Project_Image } from "@/constants/images";
import Image from "next/image";

// import InteractiveMap from "@/components/ui/InteractiveMap";

// import Image from "next/image";
import React from "react";

const ContactUsPage = () => {
  return (
    <main className="w-full min-h-screen">
      <section className="bg-amber-100 px-3 py-6">
        <ContactLink/>

      </section>

      <section className="bg-[#5C1B23] flex-col justify-between py-16 text-center text-white">
        <h1 className="font-bold text-2xl p-4">Contact Us</h1>
        <p className="font-extralight py-6">Get in touch with SIMAC. We&#39;d love to hear from you</p>
      </section>

      <section>
        <h1 className="bg-amber-100 flex justify-center text-2xl py-4 font-bold text-[#5C1B23]"> Our Location </h1> 
        <MapComponent/>
        {/* <InteractiveMap/> */}
      </section>

      
      {/* <section className="flex flex-col lg:flex-row items-stretch justify-center py-8 bg-white"> */}
      <section className="flex flex-col lg:flex-row w-full h-auto lg:h-[600px] bg-white">
        {/* <div className="w-full lg:w-1/2 flex items-end justify-center p-0 m-0"> */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="w-full h-full">
            <ContactForm />
            </div>
      </div>
      {/* <div className="w-full lg:w-1/2 flex items-end justify-start p-0 m-0"> */}
       <div className="w-full lg:w-1/2">
            <Image
              src={SCaR_Project_Image}
              alt="Contact Us"
              // width={800}
              // height={200}
              quality={100}
              className="w-full h-full object-cover"
            />
      </div>
      
      </section>
      <Footer />
    </main>

  );
};

export default ContactUsPage;
