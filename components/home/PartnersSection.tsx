import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import { partnersLogos } from "@/constants/images";

const PartnersSection = () => {
  const extendedPartners = [...partnersLogos, ...partnersLogos];
  const marqueeVariants = {
    animate: {
      x: [0, "-50%"], // Move from the start to the halfway point (where the duplicate starts)
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="sm:py-4 lg:py-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-start">
          <h1 className="text-3xl font-bold tracking-tight text-[#5C1B23] sm:text-3xl">
            Our partners
          </h1>
        </div>

        {/* The marquee container with a faded edge mask */}
        <div className="my-6 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <motion.div
            className="flex flex-nowrap "
            variants={marqueeVariants}
            animate="animate"
          >
            {extendedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 lg:mx-8 flex items-center justify-center"
              >
                <Image
                  className="h-24 w-auto object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
