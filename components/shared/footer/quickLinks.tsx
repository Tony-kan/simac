import React from "react";
import { quickLinks } from "@/constants/links";
import Link from "next/link";

const QuickLinks = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4 italic">Quick links</h3>
      <ul className="space-y-2 text-xl">
        {quickLinks.map((link) => (
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
