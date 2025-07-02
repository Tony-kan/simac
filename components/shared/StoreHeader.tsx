"use client";

// Shared UI Components
import React, { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import Logo from "../ui/Store/logo";

import StoreNav from "../ui/StoreNav";

import { AnimatePresence, motion } from "framer-motion";
import { linkVariants, menuVariants } from  "../ui/Store/AnimateStore"
import SearchBar from "../ui/Store/SearchBar";
import UserActions from "../ui/Store/UserAction";




const StoreHeader = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm">
        {/* Top bar */}
        <div className="bg-[#5C1B23] py-2 text-center text-sm text-white">
            Free shipping over MWK 450,000 |{" "}
            <Link href="/shipping-info" className="underline">
            Learn more
            </Link>
        </div>

        {/* Main container */}
        <div className="w-full mx-auto px-4 py-2 transition-all duration-200">
            {/* Mobile: Logo + buttons */}
            <div className="flex items-center justify-between lg:hidden">
            <Logo width={80} height={80}/>
            <div className="flex items-center gap-4">
                <button onClick={() => setIsSearchOpen((prev) => !prev)}>
                {isSearchOpen ? <X size={20} /> : <Search size={20} />}
                </button>
                <button onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            </div>

            {/* Mobile: Search */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    >
                    <SearchBar isMobile />
                    </motion.div>
                )}
            </AnimatePresence>
    

            {/* Desktop Layout */}
            <div className="hidden lg:flex justify-between items-center">
            <div className="flex items-center gap-70  pl-0 lg:pl-0 lg:mr-6">
                <Logo width={100} height={100}/>
                <nav className="flex ml-8">
                <StoreNav />
                </nav>
            </div>
            <div className="flex items-center gap-4">
                <SearchBar />
                <UserActions />
            </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
            {isMobileMenuOpen && (
            <motion.div 
            className="lg:hidden mt-4 pb-4 border-t transition-all duration-300 ease-in-out transform origin-top"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
                <motion.nav className="flex flex-col gap-4 pt-4">
                <motion.div variants={linkVariants}>
                <StoreNav onClick={() => setIsMobileMenuOpen(false)} />
                </motion.div>
                <motion.div variants={linkVariants}>
                <UserActions />
                </motion.div>
                </motion.nav>
            </motion.div>
            )}

            </AnimatePresence>
        </div>
        </header>
    );
};

export default StoreHeader;
