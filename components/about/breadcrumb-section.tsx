import Link from "next/link";
import React from "react";

/**
 * Breadcrumb Component
 *
 * Renders a simple breadcrumb navigation for the About page.
 *
 * Features:
 * - Shows navigation path: Home > About us
 * - Uses accessible <nav> and <ol> elements with aria-label for screen readers
 * - Includes SVG chevrons as separators
 * - Responsive and styled with Tailwind CSS
 *
 * TODO:
 * - Make the breadcrumb dynamic if more pages are added
 * - Highlight the current page more clearly
 */
const Breadcrumb = () => {
  return (
    <div>
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 text-2xl text-[##5C1B23] pl-19 py-8 bg-[#FFE3BBB2]">
          <li>
            <Link
              href="/"
              className="block transition-colors hover:text-gray-900"
            >
              {" "}
              Home{" "}
            </Link>
          </li>

          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <a href="#" className="block transition-colors hover:text-gray-900">
              {" "}
              About us{" "}
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
