import React from 'react'
import QuickLinks from "@/components/shared/footerV/quickLinks";
import ContactUs from "./contactUs";


const Footerpage = () => {
  return (
    <div className="flex gap-20">
      <QuickLinks />
      <ContactUs />
    </div>
  );
}

export default Footerpage
