"use client";

import React from "react";

const CallToAction = () => {
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
        <button className="bg-[#FFE3BB] hover:bg-yellow-300 text-[#6C1D45] font-bold py-3 px-6 rounded">
          Support Our Mission
        </button>
        <button className="bg-[#5C1B23] hover:bg-[#5a1839] text-white font-bold py-3 px-6 rounded">
          Explore Our Programs
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
