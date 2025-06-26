"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Simac_Logo } from "@/constants/images";
import { Search, ShoppingCart, User,Menu ,X} from 'lucide-react';

//Basic structure for shop header done 
//remaining some adjustements
///////////////////////////////////////////////

const StoreHeader = () => {
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen]  = useState(false);

    return (
        // Ma Clean code avuta apa Tailwind ai yaiayai


        <header className="bg-white shadow-sm">
            {/* Top bar ship info */}
            
            <div className="bg-[#5C1B23] py-2 text-center text-sm text-white">
                Free shipping over MWK 450, 000 | <Link href="/shipping-info" className=" underline">Learn more</Link>
            </div>
            
            {/*main header content */}


        <div className="container mx-auto px-1 py-1">

            {/* mobile top row (logo and menu button)  */}

            <div className="flex items-center justify-between md:hidden">
                <Link href="/stores" >
                    <Image
                        src={Simac_Logo}
                        alt="Logo"
                        width={10}
                        height={10}
                        className="w-auto h-auto"
                    />
                    {/* SIMAC STORE */}
                </Link>


                <div className='flex items-center gap-4'>
                    <button onClick={() => setIsSearchOpen(!isSearchOpen)} >
                        <Search size={20} />
                    </button>

                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} />: <Menu size={24} />}
                    </button>

                    </div>
                </div>

                {/**Search bar (for mobile ) */}

                {isSearchOpen && (
                    <div className="md:hidden my-4">
                        <div className="relative">
                            <input 
                                type="text"
                                placeholder="Search..."
                                className="bg-gray-200 pl-4 pr-10 py-2 border-gray-400 rounded-md w-full"
                                autoFocus
                            />
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                )}

                {/**Desktop Layout  */}
                <div className='hidden md:flex md:items-center md:justify-between gap-4' >
                    {/*logo and navigation */}
                <div className="flex items-center gap-8">
                    <Link href="/stores" className="text-xl font-bold">
                    <Image
                    src={Simac_Logo}
                    alt="Logo"
                    width={40}
                    height={40}
                    className="w-auto h-auto"
                />
                    {/* SIMAC STORE */}
                    </Link>

                    <nav className="flex justify-center gap-10 ">
                        <Link href="/store/instruments" className="hover:text-[#5C1B23] font-bold">
                        Instruments
                        </Link>

                        <Link href="/store/accessories" className="hover:text-[#5C1B23] font-bold">
                        Accessories
                        </Link>
                    </nav>
                </div>

                {/**Search and icons */}
                <div className='flex items-center gap-4'>
                    <div className="relative">
                        <input 
                        type="text"
                        placeholder="Search..."
                        className="bg-gray-200 pl-4 pr-10 py-2 border-gray-400 rounded-md w-full md:w-64"
                        />

                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    
                    <div className="flex gap-4">

                        <button className="p-2 hover:text-[#5C1B23]">
                            <User size={20} />
                        </button>

                        <button className="p-2 hover:text-[#5C1B23] relative">
                            <ShoppingCart size={20} />
                            {/* <span className="absolute -top-1 -right-1 bg-[#5C1B23] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                0
                            </span> */}
                        </button>
                    </div>
                </div>
                </div>

                {/**Mobile menu */}
                {isMobileMenuOpen && (
                    <div className='md:hidden mt-4 pb-4 border-t' >
                        <nav className='flex flex-col gap-4 pt-4' >
                            <Link 
                                href="/store/instruments" 
                                className="hover:text-[#5C1B23] py-2 font-bold"
                                onClick={() => setIsMobileMenuOpen(false)}
                                >
                                Instruments
                            </Link>

                            <Link 
                                href="/store/accessories" 
                                className="hover:text-[#5C1B23] font-bold"
                                onClick={() => setIsMobileMenuOpen(false)}
                                >
                                Accessories
                            </Link>

                            <div className='flex gap-4 justify-center mt-2'>
                                <button className="p-2 hover:text-[#5C1B23]">
                                    <User size={20} />
                                </button>

                                <button className="p-2 hover:text-[#5C1B23] relative">
                                    <ShoppingCart size={20} />
                                    {/* <span className="absolute -top-1 -right-1 bg-[#5C1B23] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        0
                                    </span> */}
                                </button>

                            </div>

                        </nav>


                    </div>
                )}

                </div>
                </header>
                );
                };


export default StoreHeader;

