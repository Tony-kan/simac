"use client"

import Link from "next/link";



type NavLinkProps = {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;

};


/**
 * A functional component that renders a styled link using the Next.js Link component.
 *
 * @param {string} href - The URL the link points to.
 * @param {React.ReactNode} children - The content to be displayed inside the link.
 * @param {React.MouseEventHandler<HTMLAnchorElement>} [onClick] - Optional click handler function.
 * @param {string} [className] - Optional additional CSS classes for styling.
 * @returns {JSX.Element} The styled link.
 */
const NavLink = ({
    href,
    children,
    onClick = () => {},
    className = "",
}: NavLinkProps) =>(
    <Link
    href = {href}
    onClick = { onClick}
    className={`hover:text-[#5C1B23] font-bold ${className}`} >

        {children}

    </Link>
);

export default NavLink;