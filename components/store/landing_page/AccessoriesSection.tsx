import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { allAccessories } from "@/constants/data";
import CustomButton from "@/components/ui/CustomButton";

const categories = ["All", "Strings", "Cases", "Cables", "Drumsticks"];

/**
 * AccessoriesSection component renders a section displaying a list of musical accessories.
 *
 * The section features a heading, a tabs interface to filter by category, and a grid of cards.
 * Each card represents an accessory with details such as name, price, image, and rating.
 * The section also includes a button to link to the full list of accessories available in the store.
 *
 * The component is styled with responsive grid layout to adapt to different screen sizes.
 * It does not manage any state or side effects, focusing solely on rendering the UI.
 */
const AccessoriesSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredAccessories =
    activeTab === "All"
      ? allAccessories
      : allAccessories.filter((item) => item.category === activeTab);

  return (
    <section className="bg-gray-50 py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Essential Accessories
          </h2>
        </div>

        {/* 5. TABS INTERFACE */}
        <div className="mt-10 flex justify-center border-b border-gray-200">
          <nav className="-mb-px flex space-x-6" aria-label="Tabs">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`${
                  activeTab === category
                    ? "border-[#5C1B23] text-[#5C1B23] "
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>

        {/* 6. RENDER FILTERED CARDS */}
        <div className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-8">
          {filteredAccessories.slice(0, 4).map((accessory) => (
            <ProductCard key={accessory.id} {...accessory} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <CustomButton
          as="link"
          href="/store/accessories"
          btnText="Browse All Accessories"
          styles="bg-[#5C1B23] border-2 border-transparent text-[#FFE3BB] hover:bg-[#FFE3BB] hover:text-[#6C1D45]"
        />
      </div>
    </section>
  );
};

export default AccessoriesSection;
