"use client"

import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = ({ isMobile = false }: { isMobile?: boolean }) => (
  <div
    className={`relative flex items-center transition-all duration-300 ${
      isMobile ? "w-full my-2" : "w-48 lg:w-64"
    }`}
  >
    <input
      type="text"
      placeholder="Search..."
      className={`bg-gray-100 pl-4 pr-10 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-300`}
      autoFocus={isMobile}
    />
    <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
  </div>
)

export default SearchBar
