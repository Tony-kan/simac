"use client";

import React, { useState, useMemo } from "react";
import Breadcrumbs from "@/components/store/product_details/BreadCrumbs";
import FilterSortBar from "@/components/store/shared/FilterSortBar";
import ProductGrid from "@/components/store/shared/ProductGrid";
import { instrumentData } from "@/constants/data";
import { ISortOption } from "@/types";

const InstrumentsPage = () => {
  const [sortOption, setSortOption] = useState<ISortOption>("newest");

  // Memoize the sorted data to prevent re-sorting on every render
  const sortedInstruments = useMemo(() => {
    const sortedData = [...instrumentData]; // Create a mutable copy
    switch (sortOption) {
      case "price-asc":
        return sortedData.sort((a, b) => a.price - b.price);
      case "price-desc":
        return sortedData.sort((a, b) => b.price - a.price);
      case "alpha-asc":
        return sortedData.sort((a, b) => a.name.localeCompare(b.name));
      case "alpha-desc":
        return sortedData.sort((a, b) => b.name.localeCompare(a.name));
      case "oldest":
        return sortedData.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      case "rating-desc":
        return sortedData.sort((a, b) => b.rating - a.rating);
      case "newest":
      default:
        return sortedData.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }
  }, [sortOption]);

  return (
    <div className="bg-white">
      <Breadcrumbs category="Instruments" productName="All Instruments" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            All Instruments
          </h1>
          <p className="mt-2 max-w-2xl mx-auto text-md text-gray-500">
            Find the perfect instrument to create your masterpiece.
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="flex justify-between items-center my-4 mb-8">
          <h1 className="md:text-xl font-bold text-[#5C1B23]">
            {sortedInstruments.length} Instruments
          </h1>
          <FilterSortBar
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
        </div>

        {/* Product Display Section */}
        <ProductGrid products={sortedInstruments} itemsPerPage={8} />
      </div>
    </div>
  );
};

export default InstrumentsPage;
