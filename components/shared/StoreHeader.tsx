"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Simac_Logo } from "@/constants/images";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { storeNavLinks } from "@/constants/links";

// Mobile Menu: Main container slide-in
const mobileMenuVariants = {
  closed: { x: "100%" },
  open: {
    x: "0%",
    transition: { type: "tween", ease: "easeInOut", duration: 0.4 },
  },
};

// Mobile Menu: Staggered links container
const mobileLinkContainerVariants = {
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};

// Mobile Menu: Individual link animation
const mobileLinkVariants = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0 },
};

// Header: Nav/Search switch
const navSearchVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

/**
 * The StoreHeader component is a header component specifically designed for the store pages.
 * It displays the logo, navigation links, search input, and icons for the cart and account.
 * On mobile devices, it also includes a mobile-specific menu that overlays the content when opened.
 *
 * @returns {JSX.Element}
 */
const StoreHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsSearchOpen(false);
    }
  }, [isMobileMenuOpen]);

  const NavLink = ({
    href,
    children,
    className = "",
    onClick = () => {},
  }: INavLinkProps) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`transition-colors duration-300 font-bold ${
          isActive ? "text-[#5C1B23]" : "text-gray-800 hover:text-[#5C1B23]"
        } ${className}`}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  };

  return (
    <>
      <header className="sticky top-0 bg-white shadow-sm z-40">
        {/* Top bar shipping info */}
        <div className="bg-[#5C1B23] py-2 text-center text-xs sm:text-sm text-white">
          Free shipping over MWK 450, 000 |{" "}
          <Link href="/shipping-info" className="underline hover:text-gray-200">
            Learn more
          </Link>
        </div>

        {/* Main header content */}
        <div className="container px-6 h-full max-w-screen flex justify-between items-center gap-4">
          <div className="flex-shrink-0 ml-0 lg:ml-8 size-18 md:size-22 lg:size-32">
            <Link href="/stores" className="block">
              <Image
                src={Simac_Logo}
                alt="SIMAC Store Logo"
                width={40}
                height={40}
                className="w-auto h-auto"
              />
            </Link>
          </div>

          {/* Right side: Navigation, Search, and Icons */}
          <div className="flex-grow flex justify-end items-center h-full">
            <div className="hidden md:flex items-center gap-20">
              <nav className="flex items-center gap-20">
                {storeNavLinks.map((link) => (
                  <NavLink key={link.id} href={link.url}>
                    {link.title}
                  </NavLink>
                ))}
              </nav>
              <form className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full max-w-xs pl-9 pr-3 py-2 bg-gray-100 border-2 border-transparent focus:border-[#5C1B23] focus:bg-white focus:outline-none rounded-md transition-colors"
                />
              </form>
              <div className="flex items-center gap-10 mr-10">
                <Link
                  href="/account"
                  aria-label="My Account"
                  className="text-gray-600 hover:text-[#5C1B23] transition-colors"
                >
                  <User size={22} />
                </Link>
                <Link
                  href="/cart"
                  aria-label="Shopping Cart"
                  className="text-gray-600 hover:text-[#5C1B23] transition-colors relative"
                >
                  <ShoppingCart size={22} />
                </Link>
              </div>
            </div>

            {/* --- MOBILE VIEW (up to md) --- */}
            <div className="md:hidden flex-grow flex justify-end items-center">
              <AnimatePresence mode="wait">
                {!isSearchOpen ? (
                  <motion.div
                    key="mobile-nav-icons"
                    variants={navSearchVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="flex items-center gap-6"
                  >
                    <button
                      onClick={() => setIsSearchOpen(true)}
                      aria-label="Open search"
                      className="text-gray-600 hover:text-[#5C1B23] transition-colors"
                    >
                      <Search size={22} />
                    </button>
                    <Link
                      href="/cart"
                      aria-label="Shopping Cart"
                      className="text-gray-600 hover:text-[#5C1B23] transition-colors relative"
                    >
                      <ShoppingCart size={22} />
                    </Link>
                    <Link
                      href="/account"
                      aria-label="My Account"
                      className="text-gray-600 hover:text-[#5C1B23] transition-colors relative"
                    >
                      <User size={24} />
                    </Link>
                    <button
                      onClick={() => setIsMobileMenuOpen(true)}
                      aria-label="Open menu"
                      className="text-gray-600 hover:text-[#5C1B23] transition-colors"
                    >
                      <Menu size={28} />
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="mobile-search-view"
                    variants={navSearchVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full"
                  >
                    <form className="w-full relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Search size={20} className="text-gray-400" />
                      </div>
                      <input
                        type="search"
                        placeholder="Search and press enter..."
                        className="w-full pl-10 pr-10 py-2 border-2 border-gray-300 focus:border-[#5C1B23] focus:outline-none rounded-md transition-colors"
                        autoFocus
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <button
                          onClick={() => setIsSearchOpen(false)}
                          type="button"
                          aria-label="Close search"
                          className="text-gray-500 hover:text-gray-800"
                        >
                          <X size={24} />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-white z-50 flex flex-col md:hidden"
          >
            <div className="flex-shrink-0 flex justify-between items-center p-4 border-b">
              <h2 className="font-bold text-xl">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            <nav
              className="flex-grow flex flex-col justify-between p-6"
              aria-label="Mobile Navigation"
            >
              <motion.div
                variants={mobileLinkContainerVariants}
                initial="closed"
                animate="open"
                className="space-y-4"
              >
                {storeNavLinks.map((link) => (
                  <motion.div key={link.id} variants={mobileLinkVariants}>
                    <NavLink
                      href={link.url}
                      className="block text-lg py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.title}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StoreHeader;
