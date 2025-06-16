import React from "react";
import QuickLinks from "./quickLinks";
import ContactUs from "./contactUs";
import Newsletter from "./newsletter";
import BottomBar from "./bottomBar";

const Footer = () => {
  return (
      <footer className="bg-black text-white pt-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white">
            <QuickLinks />
            <ContactUs />
            <Newsletter />
          </div>
          <BottomBar />
        </div>
      </footer>
  );
};

export default Footer;
