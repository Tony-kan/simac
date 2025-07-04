"use client";

import React, { useState } from "react";
import TwoImageRow from "@/components/gallery/TwoImageRow";
import ThreeImageRow from "@/components/gallery/ThreeImageRow";
import { galleryData } from "@/constants/data";
import CustomButton from "@/components/ui/CustomButton";

/**
 * GalleryPage component renders a page displaying a gallery of images.
 *
 * The gallery is divided into sections, each with either 2 or 3 images. The
 * sections are initially collapsed, and a "Load More" button is displayed to show
 * more sections.
 *
 * The component uses the useState hook to keep track of which sections are
 * currently visible. When the user clicks the "Load More" button, the number of
 * visible sections is incremented by 2.
 *
 * The component renders the sections that are currently visible, and a "Load
 * More" button if there are more sections to display.
 */
const GalleryPage = () => {
  const [visibleRows, setVisibleRows] = useState(2);

  const handleLoadMore = () => {
    setVisibleRows((prev) => prev + 2);
  };

  const rowsToDisplay = galleryData.slice(0, visibleRows);

  return (
    <div className="min-h-screen p-4 font-sans sm:p-4">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Our Gallery
        </h1>

        <div className="space-y-4">
          {rowsToDisplay.map((row, index) => {
            if (row.type === "two") {
              return (
                <TwoImageRow
                  key={index}
                  images={row.images}
                  splitRatio={row.ratio as "60-40" | "40-60"}
                />
              );
            }
            if (row.type === "three") {
              return <ThreeImageRow key={index} images={row.images} />;
            }
            return null;
          })}
        </div>

        {visibleRows < galleryData.length && (
          <div className="mt-6 text-center">
            <CustomButton
              as="button"
              btnText="Load More"
              handleClick={handleLoadMore}
              styles="mx-auto min-w-64"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
