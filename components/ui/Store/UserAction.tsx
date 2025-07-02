"use client";
import React from "react";
import { ShoppingCart, User } from "lucide-react";


const UserActions = () => (
    <div className="flex gap-4 justify-center mt-2 md:mt-0">
        <button className="p-2 hover:text-[#5C1B23]">
        <User size={20} />
        </button>
        <button className="p-2 hover:text-[#5C1B23] relative">
        <ShoppingCart size={20} />
        {/* Badge Example */}
        {/* <span className="absolute -top-1 -right-1 bg-[#5C1B23] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span> */}
        </button>
    </div>
);

export default UserActions;
