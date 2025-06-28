// import Footer from "@/components/shared/footer";
import MainHeader from "@/components/shared/MainHeader";
// import StoreHeader from "@/components/shared/StoreHeader";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen">
      <MainHeader />
    
      {children}
    </main>
  );
};

export default RootLayout;
