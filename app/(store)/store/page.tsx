import AccessoriesSection from "@/components/store/landing_page/AccessoriesSection";
import StoreBanner from "@/components/store/landing_page/Banner";
import InstrumentsSection from "@/components/store/landing_page/InstrumentsSection";
import PolicySection from "@/components/store/landing_page/PolicySection";
import React from "react";

const StoreHome = () => {
  return (
    <main className="h-full min-h-screen">
      <StoreBanner />
      <PolicySection />
      <InstrumentsSection />
      <AccessoriesSection />
    </main>
  );
};

export default StoreHome;
