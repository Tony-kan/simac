import React from "react";
import GalleryImage from "./GalleryImage";

interface ThreeImageRowProps {
  images: string[];
}

/**
 * A component that renders a row of three images using a grid layout.
 *
 * @example
 * <ThreeImageRow images={["image1.jpg", "image2.jpg", "image3.jpg"]} />
 *
 * @param {string[]} images - An array of image URLs for the three images to display.
 *
 * @returns {JSX.Element} A JSX element representing the three-image row.
 */

const ThreeImageRow = ({ images }: ThreeImageRowProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {images.map((src, index) => (
        <GalleryImage
          key={index}
          src={src}
          alt={`Gallery image ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ThreeImageRow;
