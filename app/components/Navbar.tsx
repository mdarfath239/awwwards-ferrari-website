"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(true);

    /* Removed scroll hide logic to keep navbar visible in Hero per request */

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{
                opacity: visible ? 1 : 0,
                y: visible ? 0 : -20
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
        >
            <div className="pointer-events-auto bg-[#0a0a0ae6] backdrop-blur-md border border-white/10 rounded-full px-8 py-3 flex items-center gap-10 shadow-2xl">
                <span className="font-bold tracking-tight text-white text-lg">Ferrari F1</span>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
                    <Link href="#" className="hover:text-red-500 transition-colors">Overview</Link>
                    <Link href="#" className="hover:text-red-500 transition-colors">Aerodynamics</Link>
                    <Link href="#" className="hover:text-red-500 transition-colors">Power Unit</Link>
                    <Link href="#" className="hover:text-red-500 transition-colors">Chassis</Link>
                    <Link href="#" className="hover:text-red-500 transition-colors">Specs</Link>
                </div>

                <button className="bg-transparent text-white text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full border border-red-500 hover:bg-red-600/20 hover:shadow-[0_0_20px_rgba(220,20,60,0.5)] transition-all">
                    Discover Engineering
                </button>
            </div>
        </motion.nav>
    );
}
