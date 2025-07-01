import React from "react";

import Story from "@/components/about/aboutWhoWeAreAndStory";
import Statistics from "@/components/about/stat-section";
import ValueSection from "@/components/about/value-section";
import Testimonial from "@/components/about/testimonial-section";
import CallToAction from "@/components/about/callToAction-section";
import CustomBreadcrumb from "@/components/ui/CustomBreadcrumb";

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

      <CustomBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About us", isCurrent: true },
        ]}
        // homeIcon={<HomeIcon size={16} className="mr-1" />}
        containerClass="flex items-center gap-1 pl-19 py-8 bg-[#FFE3BBB2] text-lg sm:text-xl md:text-2xl font-bold text-[#5C1B23]"
        // currentItemClass="text-gray-900"
      />
      <Story />
      <Statistics />
      <ValueSection />
      <Testimonial />
      <CallToAction />
      {/* Add more sections as needed */}
    </div>
  );
};

export default AboutPage;
