import React from "react";

import Breadcrumb from "@/components/about";
import Story from "@/components/about/story";
const AboutPage = () => {
  return (
    <div>
      {/* show the breadcrumb on about us page */}
      <Breadcrumb />
      <Story />
    </div>
  );
};

export default AboutPage;
