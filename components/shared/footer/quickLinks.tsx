// Todo: quick links component
import React from "react";
import { quickLinks } from "@/constants/links";
import Link from "next/link";
const QuickLinks = () => {
  return (
    <div>
      <div>
        <h1 className="text-lg font-bold mb-4 italic">Quick links</h1>
        <ul className="pace-y-2">
          {quickLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuickLinks;
