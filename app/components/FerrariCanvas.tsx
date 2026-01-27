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
        const currentDpr = window.devicePixelRatio || 1;

        // Handle resizing - set canvas dimensions to match display size * DPR
        if (canvas.width !== width * currentDpr || canvas.height !== height * currentDpr) {
            canvas.width = width * currentDpr;
            canvas.height = height * currentDpr;
            // Set display size via CSS
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
        }

        // Reset transform and scale for DPR
        ctx.setTransform(currentDpr, 0, 0, currentDpr, 0, 0);

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Calculate scale to COVER the screen (Math.max)
        const scale = Math.max(width / img.width, height / img.height);
        const x = (width - img.width * scale) / 2;
        const y = (height - img.height * scale) / 2;

        // Enable high-quality image smoothing for upscaled images
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
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFCC00] text-black">
                <div className="text-center flex flex-col items-center">
                    {/* Ferrari Prancing Horse Logo */}
                    <div className="mb-8 animate-pulse">
                        <img
                            src="/ferrari-logo.png"
                            alt="Ferrari Logo"
                            className="w-32 h-32 md:w-40 md:h-40 object-contain"
                        />
                    </div>
                    {/* Loading Percentage */}
                    <p className="text-4xl md:text-6xl font-bold font-mono tracking-wider">
                        {(loadedCount / FRAME_COUNT * 100).toFixed(0)}%
                    </p>
                    <p className="text-xs md:text-sm opacity-60 mt-4 uppercase tracking-widest">Loading</p>
                </div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="h-[500vh] w-full relative z-10">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Main Layer: Canvas with sharpening CSS */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        filter: 'contrast(1.15) brightness(1.02) saturate(1.15)',
                        imageRendering: 'crisp-edges'
                    }}
                />
            </div>
        </div>
    );
}
