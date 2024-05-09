'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

export default function NavLink({href, children} : NavLinkProps) {
    const currentPath = usePathname();
    let cssClass = "";

    console.log(`currentPath: ${currentPath}`);

    if(
        currentPath.startsWith(`/${href}`) && 
        !(href === "" && currentPath != "/")
    ) {
        cssClass += " text-blue-500";
    }

    return (
        <Link href={`/${href}`} className={cssClass}>
            {children}
        </Link>
    );
}