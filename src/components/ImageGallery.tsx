"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Ruler, Calendar, X } from "lucide-react";
import { Project } from "@/types";

interface ImageGalleryProps {
    images: string[];
    title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
    const [current, setCurrent] = useState(0);
    const [lightbox, setLightbox] = useState(false);

    const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

    return (
        <>
            {/* Main gallery */}
            <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden bg-bg-secondary group">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        {/* Skeleton */}
                        <div className="absolute inset-0 bg-gradient-to-br from-bg-secondary to-border-subtle animate-pulse" />
                        <Image
                            src={images[current]}
                            alt={`${title} - Image ${current + 1}`}
                            fill
                            className="object-cover relative z-10 cursor-zoom-in"
                            sizes="100vw"
                            priority={current === 0}
                            onClick={() => setLightbox(true)}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Controls */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-bg-primary/80 border border-border-subtle hover:border-accent flex items-center justify-center transition-all duration-300 hover:bg-accent/10"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={20} className="text-text-primary" />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-bg-primary/80 border border-border-subtle hover:border-accent flex items-center justify-center transition-all duration-300 hover:bg-accent/10"
                            aria-label="Next image"
                        >
                            <ChevronRight size={20} className="text-text-primary" />
                        </button>
                    </>
                )}

                {/* Counter */}
                <div className="absolute bottom-6 right-6 z-20 px-3 py-1.5 bg-bg-primary/80 backdrop-blur text-xs text-text-muted">
                    {current + 1} / {images.length}
                </div>

                {/* Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`w-2 h-2 transition-all duration-300 ${i === current ? "bg-accent scale-125" : "bg-white/40"
                                }`}
                            aria-label={`Go to image ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4 px-6 lg:px-12 overflow-x-auto pb-2">
                {images.map((img, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`relative shrink-0 w-24 h-16 overflow-hidden border-2 transition-all duration-300 ${i === current ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                    >
                        <div className="absolute inset-0 bg-bg-secondary animate-pulse" />
                        <Image
                            src={img}
                            alt={`Thumbnail ${i + 1}`}
                            fill
                            className="object-cover"
                            sizes="96px"
                        />
                    </button>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setLightbox(false)}
                    >
                        <button
                            className="absolute top-6 right-6 w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:text-accent hover:border-accent transition-colors"
                            aria-label="Close lightbox"
                        >
                            <X size={20} />
                        </button>
                        <div className="relative max-w-5xl w-full h-[80vh]">
                            <Image
                                src={images[current]}
                                alt={`${title} fullscreen`}
                                fill
                                className="object-contain"
                                sizes="100vw"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
