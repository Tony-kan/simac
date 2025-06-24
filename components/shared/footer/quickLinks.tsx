import React from "react";
import { footerLinks } from "@/constants/links";
import Link from "next/link";

{
  /* A QuickLinks component renders a list of quick links for easy navigation. It maps through an array of footer links and displays each link as a list item with hover effects. */
}
const QuickLinks = () => {
  return (
    // Todo: added the padding of 10
    <div className=" p-10">
      <h3 className="text-2xl font-bold mb-4 italic">Quick links</h3>
      <ul className="space-y-2 text-xl">
        {footerLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.url}
              className="text-gray-300 hover:text-yellow-300 transition-colors"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
