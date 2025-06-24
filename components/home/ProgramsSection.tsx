import React from "react";
import CustomButton from "../ui/CustomButton";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { homepagePrograms } from "@/constants/data";

const ProgramsSection = () => {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-16 md:gap-24">
          {homepagePrograms.map((program, index) => (
            <div
              key={program.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {/* Image Container */}
              <div
                className={`relative w-full aspect-square lg:aspect-[2] rounded-sm shadow-2xl overflow-hidden
      
                  ${index % 2 !== 0 ? "lg:order-last" : ""}
                `}
              >
                <Image
                  src={program.image}
                  alt={program.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* info Container */}
              <div className="flex flex-col items-start text-left">
                <h3 className="text-2xl md:text-3xl font-bold">
                  {program.title}
                </h3>
                <p className="mt-4 text-base md:text-lg text-gray-600">
                  {program.description}
                </p>
                <div className="mt-6">
                  <CustomButton
                    as="link"
                    href={program.href}
                    btnText="Learn More"
                    icon={<FaArrowRight />}
                    iconPosition="right"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
