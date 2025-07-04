import React from "react";
import GalleryImage from "./GalleryImage";

interface TwoImageRowProps {
  images: string[];
  splitRatio?: "60-40" | "40-60";
}

/**
 * A component that renders a two-image row with a flexible column span.
 *
 * @example
 * <TwoImageRow images={["image1.jpg", "image2.jpg"]} splitRatio="60-40" />
 *
 * @param {string[]} images - An array with two image URLs.
 * @param {string} [splitRatio="60-40"] - The column span ratio for the two images. Valid options are "60-40" and "40-60".
 *
 * @returns {JSX.Element} A JSX element representing the two-image row.
 */
const TwoImageRow = ({ images, splitRatio = "60-40" }: TwoImageRowProps) => {
  // Determine the column span classes based on the ratio
  const leftSpan = splitRatio === "60-40" ? "md:col-span-3" : "md:col-span-2";
  const rightSpan = splitRatio === "60-40" ? "md:col-span-2" : "md:col-span-3";

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
      <div className={leftSpan}>
        <GalleryImage src={images[0]} alt="Gallery image left" />
      </div>
      <div className={rightSpan}>
        <GalleryImage src={images[1]} alt="Gallery image right" />
      </div>
    </div>
  );
};

export default TwoImageRow;
