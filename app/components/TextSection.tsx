"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextSectionProps {
    children: ReactNode;
    align?: "left" | "center" | "right";
    className?: string;
}

export default function TextSection({ children, align = "center", className = "" }: TextSectionProps) {
    const alignmentClasses = {
        left: "items-start text-left ml-0 md:ml-24",
        center: "items-center text-center mx-auto",
        right: "items-end text-right mr-0 md:mr-24 ml-auto",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, margin: "-10%" }}
            className={`w-full flex flex-col p-12 pointer-events-auto ${alignmentClasses[align]} ${className}`}
        >
            {children}
        </motion.div>
    );
}
