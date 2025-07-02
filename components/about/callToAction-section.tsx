"use client";

import React from "react";
import CustomButton from "../ui/CustomButton";
// import { useRouter } from "next/router";

/**
 * CallToAction Component
 *
 * Renders a prominent call-to-action section encouraging users to join, support, or explore SIMAC.
 *
 * Features:
 * - Responsive layout with a heading, description, and two action buttons.
 * - Buttons for supporting the mission and exploring programs.
 *
 * TODO:
 * - Link the buttons to the appropriate donation and programs pages/routes.
 * - Add icons or illustrations for visual enhancement.
 * - Make the section more dynamic (e.g., props for custom text or actions).
 */
const CallToAction = () => {
  // const Router = useRouter();
  return (
    <section className="bg-[#D9D9D9] mt-2 py-12 px-6 md:px-20 text-center md:text-left">
      <h2 className="text-4xl font-semibold text-black mb-4">
        Join Us in Making a Difference
      </h2>
      <p className="mb-8 max-w-3xl">
        Whether you’re a budding artist, a parent seeking excellence in arts
        education, or a philanthropist passionate about cultural preservation,
        there’s a place for you at SIMAC.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        {/* TODO: Link to donation page */}
        {/* <button className="bg-[#FFE3BB] hover:bg-yellow-300 text-[#6C1D45] font-bold py-3 px-6 rounded">
          Support Our Mission
        </button> */}
        <CustomButton
          as="button"
          btnText="Support Our Mission"
          // styles="bg-[#FFE3BB] hover:bg-yellow-300 hover:text-[#5C1B23] text-[#6C1D45] font-bold py-3 px-6 rounded"
          handleClick={() => {
            // TODO: Link to donation page
            // Router.push("/donate");
          }}
        />
        {/* TODO: Link to programs page */}
        {/* <button className="bg-[#5C1B23] hover:bg-[#5a1839] text-white font-bold py-3 px-6 rounded">
          Explore Our Programs
        </button> */}
        <CustomButton
          as="button"
          btnText="Explore Our Programs"
          styles="bg-[#5C1B23] border border-transparent hover:bg-[#FFE3BB] hover:text-[#5C1B23] hover:border-[#5C1B23] text-white font-bold py-3 px-6 rounded"
          handleClick={() => {
            // TODO: Link program page
            // For navigation, use router.push("/programs") if needed.
            // Router.push("/programs");
          }}
        />
      </div>
    </section>
  );
};

export default CallToAction;
