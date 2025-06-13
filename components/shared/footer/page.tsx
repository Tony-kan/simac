import React from "react";
import QuickLinks from "@/components/shared/footer/quickLinks";
import ContactUs from "./contactUs";
import Newsletter from "./newsletter";
import BottomBar from "./bootomBar";

const Footer = () => {
  return (
    <footer className="row-start-3 bg-black text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-10">
        <QuickLinks />
        <ContactUs />
        <Newsletter />
      </div>
      <BottomBar />
    </footer>
  );
};

export default Footer;
