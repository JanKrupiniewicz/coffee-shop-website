'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/util/types";

export default function NavLink({href, children} : NavLinkProps) {
    const currentPath = usePathname();
    let cssClass = "text-2xl lato text-stone-500 hover:text-stone-700 transition-colors duration-300 ease-in-out cursor-pointer";

    console.log(`currentPath: ${currentPath}`);

    if (
        currentPath.startsWith(`/${href}`) && 
        !(href === "" && currentPath != "/")
    ) {
        cssClass += " text-black font-bold";
    }

    return (
        <Link href={`/${href}`} className={cssClass}>
            {children}
        </Link>
    );
}