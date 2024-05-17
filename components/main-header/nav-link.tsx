'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/util/types";

export default function NavLink({href, children} : NavLinkProps) {
    const currentPath = usePathname();
    let cssClass = "text-2xl text-stone-500 hover:text-stone-700 transition-colors duration-300 ease-in-out cursor-pointer";
    let springAnimation = { type: "spring", stiffness: 700, damping: 30 };

    if (
        currentPath.startsWith(`/${href}`) && 
        !(href === "" && currentPath != "/")
    ) {
        cssClass += " text-black font-bold fraunces";

    } else {
        cssClass += " lato";
    }

    return (
        <Link href={`/${href}`} className={cssClass}>
            <motion.p
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={springAnimation}
            >
                {children}
            </motion.p>
        </Link>
    );
}