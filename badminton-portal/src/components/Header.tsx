"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Columns", href: "/columns" },
    { name: "Circles", href: "/circles" },
    { name: "Guide", href: "/guide" },
    { name: "Players", href: "/players" },
    { name: "Gear", href: "/gear" },
    { name: "Schedule", href: "/schedule" },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 inset-x-0 z-50 bg-badminton-green/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                <Link href="/" className="text-xl font-black italic tracking-tighter">
                    THE<span className="text-badminton-yellow">COURT</span>
                </Link>
                <div className="flex gap-8 items-center text-[10px] font-black tracking-widest uppercase">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`${isActive
                                    ? "text-badminton-yellow border-b-2 border-badminton-yellow pb-1"
                                    : "text-white/50 hover:text-white"
                                    } transition-colors`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
