import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { NotFoundImage } from "@/constants/images";
import { validateImageUrl } from "@/lib/utils";

/**
 * A reusable component to render a product card.
 *
 * Props:
 *   id: string, the unique identifier for the product
 *   name: string, the name of the product
 *   price: number, the price of the product
 *   imageUrl: string, the URL of the product image
 *   rating: number, the rating of the product (1-5)
 *   reviewCount: number, the number of reviews for the product
 *
 * Features:
 * - Displays a product image with a hover overlay to "View Details"
 * - Displays the product name, price, and rating
 * - Uses Next.js Image for optimized images
 * - Uses Tailwind CSS for styling
 */
const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  rating,
  reviewCount,
}: IProductCardProps) => {
  // A helper function to render the stars dynamically
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return stars;
  };
  const validImageUrl = validateImageUrl(imageUrl, NotFoundImage);

  return (
    <Link href={`/store/instruments/${id}`} passHref>
      <div className="group relative block overflow-hidden transition-shadow duration-300 hover:shadow-lg">
        <div className="relative h-[200px] w-full">
          <Image
            src={validImageUrl}
            alt={name}
            fill
            // objectFit="contain"
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />

          {/* --- Hover Overlay --- */}
          {/* A link within a link is invalid HTML, so this is now a simple div */}
          <div className="absolute inset-0 flex items-center justify-center  bg-opacity-0 p-4 opacity-0 transition-all duration-300 group-hover:bg-opacity-60 group-hover:opacity-100">
            <div className="transform rounded-md bg-white px-6 py-2 text-sm font-semibold text-black">
              View Details
            </div>
          </div>
        </div>

        {/* --- Product Info --- */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 truncate">{name}</h3>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-lg font-semibold text-gray-900">
              MWK{price.toFixed(2)}
            </p>
          </div>
          {/* 2. DYNAMIC STARS: The star rendering logic is now dynamic */}
          <div className="flex items-center gap-1 text-yellow-500 pt-2">
            {renderStars()}
            <span className="ml-2 text-sm font-medium text-gray-600">
              ({reviewCount})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
