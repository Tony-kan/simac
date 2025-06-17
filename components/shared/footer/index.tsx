import React from "react";
import QuickLinks from "./quickLinks";
import ContactUs from "./contactUs";
import Newsletter from "./newsletter";
import BottomBar from "./bottomBar";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Todo: removed margin and horizintal padding */}
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  border-b border-orange-200">
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
