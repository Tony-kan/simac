"use client";
import ContactForm from "@/components/ui/ContactForm";
import ContactLink from "@/components/ui/ContactLink";
// import InteractiveMap from "@/components/ui/InteractiveMap";
import MapComponent from "@/components/ui/MapComponent";
import React from "react";

const ContactUsPage = () => {
  return (
    <main className="h-screen">
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

      

      <ContactForm />
      
    </main>

  );
};

export default ContactUsPage;
