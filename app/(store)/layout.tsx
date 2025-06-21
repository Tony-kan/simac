import StoreHeader from "@/components/shared/StoreHeader";
import React from "react";

const RootLayout = ({ children } :{ children: React.ReactNode }) => {
    return(
            <main className="h-screen">
                <StoreHeader />
                {children}
            </main>
    );
};

export default RootLayout;