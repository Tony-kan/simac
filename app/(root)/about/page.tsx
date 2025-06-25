import React from "react";

import Breadcrumb from "@/components/about";
import Story from "@/components/about/story";
import Statistics from "@/components/about/statistics";
import ValueSection from "@/components/about/value-sect";
const AboutPage = () => {
  return (
    <div>
      {/* show the breadcrumb on about us page */}
      <Breadcrumb />
      <Story />
      <Statistics />
      <ValueSection />
      {/* Add more sections as needed */}
    </div>
  );
};

export default AboutPage;
