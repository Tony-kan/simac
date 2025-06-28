"use client"


import { Search } from 'lucide-react'
import React from 'react'


const SearchBar = ({ isMobile = false}: {isMobile?:boolean}) => (
    <div className={`relative transition-all duration-200${isMobile ? "my-4 w-full" :"w-48 lg:w-64"}`}>
        <input
        type='text'
        placeholder='Search..'
        className={`bg-gray-200 pl-4 pr-10 py-2 border-gray-400 rounded-md w-full ${!isMobile ? "md:w-64" :""}`}
        autoFocus={isMobile}
        />

        <Search className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'/>
    </div>
);




export default SearchBar