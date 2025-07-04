"use client";

import React, { useState } from "react";
import Image from "next/image";
import { NotFoundImage } from "@/constants/images";

/**
 * ProductImageGallery
 *
 * A component to render a product image gallery.
 *
 * Features:
 * - Displays a main image and a list of thumbnails.
 * - Thumbnails are clickable and update the main image.
 * - Uses Next.js Image for optimized images.
 *
 * Props:
 *   images: Array of image URLs.
 *   productName: string, the name of the product.
 */
const ProductImageGallery = ({
  images,
  productName,
}:IProductImageGalleryProps) => {
  const [mainImage, setMainImage] = useState(images[0] || NotFoundImage);

  return (
    <section>
      {/* Main Image */}
      <div className="aspect-3/2 w-full overflow-hidden  hover:cursor-pointer">
        <Image
          src={mainImage}
          alt={`Main image of ${productName}`}
          width={400}
          height={400}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Thumbnail List */}
      <div className="mt-4 grid grid-cols-5 gap-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setMainImage(img)}
            className={`aspect-3/2 w-full overflow-hidden rounded-md border-2 ${
              mainImage === img ? "border-[#5C1B23]" : "border-transparent"
            } hover:border-[#5C1B23] transition-colors duration-200`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1} of ${productName}`}
              width={100}
              height={100}
              className="h-full w-full object-contain"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProductImageGallery;
