import React from "react";

import ProductCard from "./ProductCard";
import CustomButton from "@/components/ui/CustomButton";
import { instrumentData } from "@/constants/data";

const InstrumentsSection = () => {
  return (
    <section className="bg-white py-10 md:py-4">
      <div className="max-w-8xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Best Instruments
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-y-2 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-2">
          {instrumentData.map((instrument) => (
            <ProductCard key={instrument.id} {...instrument} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <CustomButton
          as="link"
          href="/store/instruments"
          btnText="Browse All Instruments"
          styles="bg-[#5C1B23] border-2 border-transparent text-[#FFE3BB] hover:bg-[#FFE3BB] hover:text-[#6C1D45]"
        />
      </div>
    </section>
  );
};

export default InstrumentsSection;
