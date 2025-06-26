import React from "react";

import Breadcrumb from "@/components/about";
import Story from "@/components/about/story";
import Statistics from "@/components/about/statistics";
import ValueSection from "@/components/about/value-sect";
import Testimonial from "@/components/about/testimonial";
import CallToAction from "@/components/about/callToAction";

/**
 * AboutPage Component
 *
 * Renders the About Us page for SIMAC.
 *
 * Sections:
 * - Breadcrumb: Navigation aid for the About page.
 * - Story: Overview of SIMAC's history and impact.
 * - Statistics: Key statistics and achievements.
 * - ValueSection: Core values, vision, and mission, presented responsively.
 */
const AboutPage = () => {
  return (
    <div>
      {/* show the breadcrumb on about us page */}
      {/* <Breadcrumb />
      <Story />
      <Statistics />
      <ValueSection /> */}
      <Testimonial />
      <CallToAction />
      {/* Add more sections as needed */}
    </div>
  );
};

export default AboutPage;
