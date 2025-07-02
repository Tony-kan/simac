import CustomButton from "@/components/ui/CustomButton";
import React from "react";

const StoreBanner = ({
  title = "Welcome to Our Store",
  subtitle,
}: IStoreBannerProps) => {
  return (
    <div className="relative w-full bg-store-banner h-[500px] bg-gradient-to-r  flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Centered content, positioned above the overlay */}
      <div className="relative z-10 text-white text-center">
        <h1
          className={`text-3xl sm:text-4xl font-bold ${
            subtitle ? "mb-4" : "mb-10"
          }`}
        >
          {title}
        </h1>

        {subtitle && <p className="text-lg mb-10">{subtitle}</p>}

        <CustomButton
          as="link"
          href="/store"
          btnText="Shop Now"
          styles="bg-white border-2 border-transparent text-black hover:bg-[#FFE3BB] hover:text-[#6C1D45]"
        />
      </div>
    </div>
  );
};

export default StoreBanner;
