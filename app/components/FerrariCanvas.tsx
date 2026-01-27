"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";

const FRAME_COUNT = 240;
const IMAGES_DIR = "/ezgif-31b5d5c66398d782-jpg";

export default function FerrariCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loadedCount, setLoadedCount] = useState(0);

    const { scrollY } = useScroll();
    // Smooth scroll physics - stiffness/damping tuned for high-end feel
    const smoothScroll = useSpring(scrollY, { stiffness: 45, damping: 15, mass: 1.2 });
    const [dpr, setDpr] = useState(1);

    // Load images
    useEffect(() => {
        if (typeof window !== "undefined") {
            setDpr(window.devicePixelRatio || 1);
        }

        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];

            const promises = Array.from({ length: FRAME_COUNT }, (_, i) => {
                return new Promise<void>((resolve, reject) => {
                    const img = new Image();
                    const frameNum = (i + 1).toString().padStart(3, "0");
                    img.src = `${IMAGES_DIR}/ezgif-frame-${frameNum}.jpg`;
                    img.onload = () => {
                        loadedImages[i] = img;
                        setLoadedCount((prev) => prev + 1);
                        resolve();
                    };
                    img.onerror = (e) => {
                        console.error(`Failed to load frame ${i + 1}`, e);
                        // Still resolve to not block everything, but maybe we should handle empty frames
                        resolve();
                    };
                });
            });

            await Promise.all(promises);
            setImages(loadedImages);
        };

        loadImages();
    }, []);

    const drawFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Handle resizing
        if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
        }

        // Draw Main Car
        ctx.clearRect(0, 0, width, height);

        // Calculate scale to COVER the screen (Math.max)
        // This removes any black/empty bars on the sides by ensuring the image fills the viewport.
        const scale = Math.max(width / img.width, height / img.height);
        const x = (width - img.width * scale) / 2;
        const y = (height - img.height * scale) / 2;

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // Resize handler
    useEffect(() => {
        const handleResize = () => {
            setDpr(window.devicePixelRatio || 1);
            const width = window.innerWidth;
            const height = window.innerHeight;

            if (canvasRef.current) {
                canvasRef.current.style.width = `${width}px`;
                canvasRef.current.style.height = `${height}px`;
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Update frame on scroll using SMOOTH Value
    useMotionValueEvent(smoothScroll, "change", (latest) => {
        if (images.length === 0) return;

        const maxScroll = window.innerHeight * 4;
        const progress = Math.min(Math.max(latest / maxScroll, 0), 1);

        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.floor(progress * FRAME_COUNT)
        );

        requestAnimationFrame(() => drawFrame(frameIndex));
    });

    // Initial draw
    useEffect(() => {
        if (images.length > 0 && canvasRef.current) {
            drawFrame(0);
        }
    }, [images, loadedCount]);

    if (loadedCount < FRAME_COUNT) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#9e0e0e] text-white">
                <div className="text-center">
                    <p className="text-2xl font-bold mb-4 font-mono">INITIALIZING ENGINEERING DATA</p>
                    <p className="text-sm opacity-70 font-mono">{(loadedCount / FRAME_COUNT * 100).toFixed(0)}%</p>
                </div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="h-[500vh] w-full relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#9e0e0e]">
                {/* Main Layer: Sharp Contain with Filters */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        // Contrast and brightness to fight blur
                        // Drop shadow to lift it off the background
                        filter: "contrast(1.2) brightness(1.1) saturate(1.1) drop-shadow(0 20px 50px rgba(0,0,0,0.5))"
                    }}
                />
            </div>
            {/* SVG Filter Removed for Performance/Smoothness */}
        </div>
    );
}
