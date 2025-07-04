import { ISortOption } from "@/types";
import React from "react";

const FilterSortBar = ({ sortOption, setSortOption }: IFilterSortBarProps) => {
  return (
    <div className="flex justify-end items-center">
      <div className="flex items-center md:space-x-2 md:px-6">
        <label
          htmlFor="sort"
          className="text-xs md:text-sm font-medium truncate text-center w-16 md:w-22 text-black"
        >
          Sort by:
        </label>
        <select
          id="sort"
          name="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value as ISortOption)}
          className="block w-full font-bold text-xs px-0 md:px-2 py-2 md:text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="newest">Date: New to Old</option>
          <option value="oldest">Date: Old to New</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="alpha-asc">Alphabetically: A-Z</option>
          <option value="alpha-desc">Alphabetically: Z-A</option>
          <option value="rating-desc">Best Rating</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSortBar;
