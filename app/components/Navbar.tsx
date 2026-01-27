"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(true);

    // Hide navbar after scrolling past hero section (100vh)
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > window.innerHeight * 0.15) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    });

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{
                opacity: visible ? 1 : 0,
                y: visible ? 0 : -20
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-6 left-18 right-14 z-50 px-8 flex items-center justify-between"
            style={{ pointerEvents: visible ? 'auto' : 'none' }}
        >
            {/* Left - Ferrari Logo (Separate) */}
            <div className="pointer-events-auto">
                <img
                    src="/logo.png"
                    alt="Ferrari Logo"
                    className="h-18 w-auto object-contain"
                    style={{ mixBlendMode: 'multiply' }}
                />
            </div>

            {/* Right - Menu Container */}
            <div className="pointer-events-auto flex items-center gap-8">

                {/* Navigation Links */}
                <Link href="#" className="text-white font-semibold text-sm hover:text-white/80 transition-colors">
                    Dashboard
                </Link>

             <Link href="#" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                    Orders
                </Link>

                <Link href="#" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                    Products
                </Link>

                {/* Search Icon */}
                <button className="text-white/70 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>

                {/* Profile Avatar */}
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center overflow-hidden">
                    <img src="/ferrari-logo.png" alt="Profile" className="w-full h-full object-cover" />
                </div>

                {/* Upgrade Button */}
                <button className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-4 py-2 rounded-xl transition-colors flex items-center gap-2 text-sm font-medium border border-white/10">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Upgrade
                </button>

            </div>
        </motion.nav>
    );
}
