import React from "react";
import QuickLinks from "./quickLinks";
import ContactUs from "./contactUs";
import Newsletter from "./newsletter";
import BottomBar from "./bottomBar";

// {
/* A Footer component that renders the main footer section of the website. It organizes the footer into three columns—Quick Links, Contact Us, and Newsletter—using a responsive grid layout, and includes a bottom bar for additional information and social media links. */
const Footer = () => {
  return (
    <footer className="bg-black text-white m-auto">
      {/* Todo: removed margin and horizintal padding */}
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10  border-b border-[#FFE3BB]">
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
