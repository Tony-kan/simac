import React from "react";

import Breadcrumb from "@/components/about";
import Story from "@/components/about/story";
import Statistics from "@/components/about/statistics";
const AboutPage = () => {
  return (
    <div>
      {/* show the breadcrumb on about us page */}
      <Breadcrumb />
      <Story />
      <Statistics />
    </div>
  );
};

export default AboutPage;
