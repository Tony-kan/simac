import Footer from "@/components/shared/footer";
import StoreHeader from "@/components/shared/StoreHeader";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen h-full">
      <StoreHeader />
      {children}
      <Footer />
    </main>
  );
};

export default RootLayout;
