"use client";

import {
  mainNavLinks,
  subNavLinks,
  quickLinksDropdown,
} from "@/constants/links";
import React, { useState, useEffect } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Simac_Logo } from "@/constants/images";

//Todo: create a mobile_tablet nav,desktop nav
//Todo: make it responsive - mobile first. Add smooth framer animations/transitions
//Todo: Add search functionality.Note: quickLinks(dropdown menu),expand when hover - mobile when clicked
//! Alert,Do not use this function
//? questions need attentions
//* Highlighted comments */

// --- Animation Variants ---
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
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
};

// Mobile Menu: Individual link animation
const mobileLinkVariants = {
  closed: { opacity: 0, x: 50 },
  open: { opacity: 1, x: 0 },
};

// Mobile Menu: Collapsible section animation
const collapsibleVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// Desktop: Quick Links dropdown
const quickLinksVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

// Header: Nav/Search switch
const navSearchVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

/**
 * The main header component for the website.
 *
 * This component renders the main header for the website, including the logo,
 * navigation links, and search bar. It also handles the mobile menu overlay.
 *
 * The component uses the `useState` and `useEffect` hooks to manage the state of
 * the mobile menu and the search bar.
 *
 * The component renders a `header` element with a `nav` element inside it. The
 * `nav` element contains the main navigation links and the search bar. The
 * component also renders a mobile menu overlay that is displayed when the user
 * clicks on the mobile menu button.
 *
 * @return {React.ReactElement} The main header component.
 */
const MainHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isMobileQuickLinksOpen, setIsMobileQuickLinksOpen] = useState(false);

  // Effect to handle body scroll lock for mobile menu
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsMobileQuickLinksOpen(false);
    }
  }, [isMobileMenuOpen]);

  /**
   * A functional component that renders a styled link using the Next.js Link component.
   *
   * @param {string} href - The URL the link points to.
   * @param {React.ReactNode} children - The content to be displayed inside the link.
   * @param {string} [className] - Optional additional CSS classes for styling.
   * @param {React.MouseEventHandler<HTMLAnchorElement>} [onClick] - Optional click handler function.
   */

  const NavLink = ({
    href,
    children,
    className = "",
    onClick = () => {},
  }: INavLinkProps) => (
    <Link
      href={href}
      className={`text-gray-700 hover:text-[#5C1B23] transition-colors duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );

  return (
    <>
      <header className="relative border-b border-gray-300  bg-white h-[12vh] min-h-[80px] lg:h-[18vh] lg:min-h-[120px] shadow-sm">
        {/* Desktop header  */}
        <div className="container px-6 h-full max-w-screen flex justify-between items-center gap-4">
          <div className="flex-shrink-0 ml-0 lg:ml-8 size-18 md:size-22 lg:size-32">
            <Link
              href="/"
              className="text-2xl lg:text-3xl font-bold text-gray-800"
            >
              <Image
                src={Simac_Logo}
                alt="Logo"
                width={40}
                height={40}
                className="w-auto h-auto"
              />
            </Link>
          </div>
          <div className="flex-grow flex justify-end h-full">
            <AnimatePresence mode="wait">
              {!isSearchOpen ? (
                <motion.div
                  key="nav-view"
                  variants={navSearchVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full h-full"
                >
                  <div className="hidden lg:flex flex-col justify-between h-full mr-4">
                    <div className="flex justify-end items-center gap-6 mt-8 text-sm text-gray-500">
                      {subNavLinks.map((item) =>
                        item.title === "Quick Links" ? (
                          <motion.div
                            key={item.id}
                            className="relative"
                            onHoverStart={() => setIsQuickLinksOpen(true)}
                            onHoverEnd={() => setIsQuickLinksOpen(false)}
                          >
                            <button className="flex items-center gap-1 hover:text-[#5C1B23]">
                              {item.title}
                              <motion.div
                                animate={{ rotate: isQuickLinksOpen ? 180 : 0 }}
                              >
                                <ChevronDown size={16} />
                              </motion.div>
                            </button>
                            <AnimatePresence>
                              {isQuickLinksOpen && (
                                <motion.div
                                  variants={quickLinksVariants}
                                  initial="hidden"
                                  animate="visible"
                                  exit="hidden"
                                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg border z-20"
                                >
                                  {quickLinksDropdown.map((link) => (
                                    <NavLink
                                      key={link.id}
                                      href={link.url}
                                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                    >
                                      {link.title}
                                    </NavLink>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        ) : (
                          <NavLink key={item.id} href={item.url}>
                            {item.title}
                          </NavLink>
                        )
                      )}
                      <button
                        onClick={() => setIsSearchOpen(true)}
                        aria-label="Open search"
                        className="hover:text-[#5C1B23]"
                      >
                        <Search size={18} />
                      </button>
                    </div>
                    <nav className="flex justify-end items-center gap-6 mb-4 font-medium">
                      {mainNavLinks.map((item) => (
                        <NavLink
                          key={item.id}
                          href={item.url}
                          className="text-base font-semibold"
                        >
                          {item.title}
                        </NavLink>
                      ))}
                    </nav>
                  </div>
                  <div className="lg:hidden flex items-center justify-end h-full gap-4">
                    <button
                      onClick={() => setIsSearchOpen(true)}
                      aria-label="Open search"
                      className="text-gray-600 hover:text-[#5C1B23]"
                    >
                      <Search size={24} />
                    </button>
                    <button
                      onClick={() => setIsMobileMenuOpen(true)}
                      aria-label="Open menu"
                      className="text-gray-600 hover:text-[#5C1B23]"
                    >
                      <Menu size={28} />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="search-view"
                  variants={navSearchVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full h-full flex items-center"
                >
                  <form className="w-full relative">
                    <input
                      type="search"
                      placeholder="Search and press enter..."
                      className="w-full pl-4 pr-12 py-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none rounded-md text-base lg:text-lg transition-colors"
                      autoFocus
                    />
                    <div className="absolute top-1/2 right-4 -translate-y-1/2 flex items-center gap-2">
                      <Search size={20} className="text-gray-400" />
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
      </header>

      {/* --- Mobile Menu View--- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-white z-50 px-8 lg:hidden"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="font-bold text-xl">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            <motion.nav
              variants={mobileLinkContainerVariants}
              initial="closed"
              animate="open"
              className="flex flex-col p-4 space-y-2"
            >
              {/* Main Links */}
              {mainNavLinks.map((item) => (
                <motion.div key={item.id} variants={mobileLinkVariants}>
                  <NavLink
                    onClick={() => setIsMobileMenuOpen(false)}
                    href={item.url}
                    className="text-lg py-2 block w-full font-semibold"
                  >
                    {item.title}
                  </NavLink>
                </motion.div>
              ))}

              <div className="border-t my-4"></div>

              {/* Sub Links with Collapsible "Quick Links" */}
              {subNavLinks.map((item) => (
                <motion.div
                  key={item.id}
                  variants={mobileLinkVariants}
                  className="overflow-hidden"
                >
                  {item.title === "Quick Links" ? (
                    <>
                      <button
                        onClick={() =>
                          setIsMobileQuickLinksOpen(!isMobileQuickLinksOpen)
                        }
                        className="w-full flex justify-between items-center text-base font-semibold text-gray-500 py-1 hover:text-[#5C1B23] transition-colors"
                      >
                        <span>{item.title}</span>
                        <motion.div
                          animate={{ rotate: isMobileQuickLinksOpen ? 180 : 0 }}
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {isMobileQuickLinksOpen && (
                          <motion.div
                            variants={collapsibleVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="flex flex-col pl-4 mt-1"
                          >
                            {quickLinksDropdown.map((link) => (
                              <NavLink
                                key={link.id}
                                href={link.url}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="py-2 text-sm block w-full"
                              >
                                {link.title}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      onClick={() => setIsMobileMenuOpen(false)}
                      href={item.url}
                      className="text-base text-gray-500 py-1 block w-full font-semibold"
                    >
                      {item.title}
                    </NavLink>
                  )}
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainHeader;
