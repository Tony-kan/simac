import React from "react";
import Link from "next/link";

interface IBreadcrumbsProps {
  category: string;
  productName: string;
}

/**
 * Breadcrumbs component renders a navigation bar with links to the store
 * and current product category and name.
 *
 * @param {IBreadcrumbsProps} props - Optional props for the component.
 * @param {string} props.category - The category of the product.
 * @param {string} props.productName - The name of the product.
 * @returns {React.ReactElement} The rendered component.
 */
const Breadcrumbs = ({ category, productName }: IBreadcrumbsProps) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex px-4 md:px-8  mb-6 bg-[#FFE3BB] items-center  h-14 md:h-16 lg:h-24"
    >
      <ol className="flex items-center space-x-1  font-bold text-sm md:text-md lg:text-lg text-[#5C1B23]">
        <li>
          <Link href="/store">
            <div className="hover:text-gray-700">Store</div>
          </Link>
        </li>
        <li>
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
          </svg>
        </li>
        <li>
          <Link href={`/store/${category.toLowerCase()}`}>
            <div className="hover:text-gray-700">{category}</div>
          </Link>
        </li>
        <li>
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
          </svg>
        </li>
        <li className="font-extrabold text-sm md:text-md lg:text-lg">
          {productName}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
