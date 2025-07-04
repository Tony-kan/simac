// import React from "react";

// const AccessoriesPage = () => {
//   return <div>AccessoriesPage</div>;
// };

// export default AccessoriesPage;

"use client"; // This must be a client component

import React, { useState, useMemo } from "react";
import Breadcrumbs from "@/components/store/product_details/BreadCrumbs";
import FilterSortBar from "@/components/store/shared/FilterSortBar";
import ProductGrid from "@/components/store/shared/ProductGrid";
// import { accessoriesData } from "@/constants/data";
import { ISortOption } from "@/types";
import { allAccessories } from "@/constants/data";

const AccessoriesPage = () => {
  const [sortOption, setSortOption] = useState<ISortOption>("newest");

  // Memoize the sorted data
  const sortedAccessories = useMemo(() => {
    const sortedData: IProductCardProps[] = [...allAccessories];
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
      <Breadcrumbs category="Accessories" productName="All Accessories" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            All Accessories
          </h1>
          <p className="mt-2 max-w-2xl mx-auto text-md text-gray-500">
            Everything you need to support your musical journey.
          </p>
        </div>

        {/* Filters and Sorting */}

        <div className="flex justify-between items-center my-4 mb-8">
          <h1 className="md:text-xl font-bold text-[#5C1B23]">
            {sortedAccessories.length} Accessories
          </h1>
          <FilterSortBar
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
        </div>

        {/* Product Display Section */}
        <ProductGrid products={sortedAccessories} itemsPerPage={8} />
      </div>
    </div>
  );
};

export default AccessoriesPage;
