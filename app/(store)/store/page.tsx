"use client";

import AccessoriesSection from "@/components/store/landing_page/AccessoriesSection";
import StoreBanner from "@/components/store/landing_page/StoreBanner";
import InstrumentsSection from "@/components/store/landing_page/InstrumentsSection";
import PolicySection from "@/components/store/landing_page/PolicySection";
import React, { useEffect, useState } from "react";

const bannerPromotions = [
  {
    title: "Save 10% This Week",
    subtitle: "On all Violin & Viola String Sets",
  },
  {
    title: "New Arrivals",
    subtitle: "Explore our latest collection of handcrafted cellos.",
  },
  {
    title: "Free Shipping",
    subtitle: "On all orders over MWk300,000!",
  },
  {
    title: "Welcome to Our Store",
    subtitle: "Discover the perfect instrument for your musical journey.",
  },
];

const BANNER_CHANGE_INTERVAL_MS = 6000;

const StoreHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerPromotions.length);
    }, BANNER_CHANGE_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, []);

  // Get the current promotion object based on the `currentIndex` from state.
  const currentPromotion = bannerPromotions[currentIndex];

  return (
    <main className="h-full min-h-screen">
      <StoreBanner
        title={currentPromotion.title}
        subtitle={currentPromotion.subtitle}
      />
      <PolicySection />
      <InstrumentsSection />
      <AccessoriesSection />
    </main>
  );
};

export default StoreHome;
