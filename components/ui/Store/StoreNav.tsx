"use client";
import React from "react";
import NavLink from "./NavLinks";

const StoreNav = ({ onClick = () => {} }: { onClick?: () => void }) => (
    <div className="flex flex-col  lg:flex-row lg:space-x-12 lg:gap-0 text-center">
        <NavLink href="/store/instruments" onClick={onClick} className="py-2 text-lg ">
        Instruments
        </NavLink>
        <NavLink href="/store/accessories" onClick={onClick} className="py-2 text-lg">
        Accessories
        </NavLink>
    </div>
);

export default StoreNav;
