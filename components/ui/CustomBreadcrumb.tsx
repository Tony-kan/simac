import Link from "next/link";
import React from "react";

type BreadcrumbItem = {
  label: string;
  href?: string;
  isCurrent?: boolean;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  containerClass?: string;
  itemClass?: string;
  currentItemClass?: string;
  separatorClass?: string;
  homeIcon?: React.ReactNode;
};

/**
 * Customizable Breadcrumb Component
 *
 * Features:
 * - Dynamic breadcrumb items passed as props
 * - Customizable separators between items
 * - Special styling for current page
 * - Optional home icon
 * - Full CSS customization through class props
 * - Accessible navigation with proper ARIA attributes
 *
 * Props:
 * @param {BreadcrumbItem[]} items - Array of breadcrumb items
 * @param {React.ReactNode} [separator] - Custom separator component (default: chevron icon)
 * @param {string} [containerClass] - Additional classes for container
 * @param {string} [itemClass] - Additional classes for all items
 * @param {string} [currentItemClass] - Additional classes for current item
 * @param {string} [separatorClass] - Additional classes for separators
 * @param {React.ReactNode} [homeIcon] - Optional home icon for first item
 *
 * Example usage:
 * <Breadcrumb
 *   items={[
 *     { label: "Home", href: "/" },
 *     { label: "Blog", href: "/blog" },
 *     { label: "Post", isCurrent: true }
 *   ]}
 *   currentItemClass="text-gray-900 font-bold"
 *   containerClass="py-4"
 * />
 */
const CustomBreadcrumb = ({
  items = [],
  separator,
  containerClass = "",
  itemClass = "",
  currentItemClass = "",
  separatorClass = "",
  homeIcon,
}: BreadcrumbProps) => {
  // Default separator if not provided
  const defaultSeparator = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`size-4 ${separatorClass}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  const finalSeparator = separator || defaultSeparator;

  return (
    <nav aria-label="Breadcrumb">
      <ol className={`${containerClass}`}>
        {items.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === items.length - 1;
          const isCurrent = item.isCurrent || isLast;

          return (
            <React.Fragment key={index}>
              {index > 0 && (
                <li className={separatorClass} aria-hidden="true">
                  {finalSeparator}
                </li>
              )}

              <li
                className={`${itemClass} ${isCurrent ? currentItemClass : ""}`}
              >
                {item.href && !isCurrent ? (
                  <Link
                    href={item.href}
                    className="flex items-center transition-colors hover:text-gray-900"
                    aria-current={isCurrent ? "page" : undefined}
                  >
                    {isFirst && homeIcon}
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={`${isCurrent ? currentItemClass : ""}`}
                    aria-current="page"
                  >
                    {isFirst && homeIcon}
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default CustomBreadcrumb;
