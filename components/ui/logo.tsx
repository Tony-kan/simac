"use client"

import React from "react";
import { Simac_Logo } from "@/constants/images";
import Link  from "next/link";
import Image from "next/image";

//Todo: This one will be the Logo used in the Store Header

/**
 * The Logo component renders a clickable logo image that links to the store page.
 * It uses the Next.js Link component for client-side navigation and the Image
 * component for optimized image rendering. The logo image is sourced from a 
 * constant and is displayed with a specified size.
 */

const Logo = ({width = 40,height=40} : {width?:number;height?:number}) =>(
    <Link href="/stores" className="flex ">
    <Image src={Simac_Logo} alt="Logo" width={width} height={height}  className="transition-all duration-200 ease-in-out"/>
    </Link>
);

export default Logo;