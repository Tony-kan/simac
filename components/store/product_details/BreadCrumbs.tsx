import React from "react";
import Link from "next/link";

interface BreadcrumbsProps {
  category: string;
  productName: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ category, productName }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
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
        <li className="font-medium text-gray-800 truncate">{productName}</li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
