import Footer from "@/components/shared/footer";
import MainHeader from "@/components/shared/MainHeader";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen">
      <MainHeader />
      {children}
      {/* Footer - full width */}
      <Footer />
    </main>
  );
};

export default RootLayout;
