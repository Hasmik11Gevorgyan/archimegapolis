"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "./Button";
import { useCountUp } from "@/lib/hooks";

function StatCounter({ value, label, suffix = "", className = "text-center" }: { value: string; label: string; suffix?: string, className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true });
    const numericValue = parseInt(value, 10);
    const count = useCountUp(inView ? numericValue : 0, 2000);

    return (
        <div ref={ref} className={className}>
            <div className="text-accent font-display text-2xl font-bold">
                {count}{suffix}
            </div>
            <div className="text-text-muted text-[10px] sm:text-xs tracking-widest uppercase mt-1">
                {label}
            </div>
        </div>
    );
}

interface HeroSectionProps {
    dict: {
        tagline: string;
        title1: string;
        accent: string;
        title2: string;
        subheading: string;
        years: string;
        projects: string;
        continents: string;
    };
    common: {
        exploreProjects: string;
        ourStory: string;
        scroll: string;
    };
}

export default function HeroSection({ dict, common }: HeroSectionProps) {
    const scrollToProjects = () => {
        document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollIndicator = () => {
        document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=85')",
                    }}
                />
                {/* Light overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/80 via-bg-primary/70 to-bg-primary" />
                <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/80 via-transparent to-bg-primary/60" />
            </div>

            {/* Animated accent line */}
            <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                className="absolute left-12 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-accent to-transparent origin-top hidden lg:block"
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
                <div className="max-w-3xl">
                    {/* Tag line */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="w-12 h-px bg-accent" />
                        <span className="text-accent text-xs tracking-[0.3em] uppercase font-medium">
                            {dict.tagline}
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-text-primary leading-[1.05] mb-6"
                    >
                        {dict.title1}{" "}
                        <span className="gold-gradient">{dict.accent}</span>{" "}
                        {dict.title2}
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        className="text-text-muted text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
                    >
                        {dict.subheading}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.0 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button size="lg" onClick={scrollToProjects}>
                            {common.exploreProjects}
                        </Button>
                        <Button variant="outline" size="lg" href="#about">
                            {common.ourStory}
                        </Button>
                    </motion.div>

                    {/* Stats bar - Mobile & Tablet */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.3 }}
                        className="mt-12 flex lg:hidden gap-6 sm:gap-12 border-l border-border-subtle pl-6 text-left"
                    >
                        {[
                            { val: "7", label: dict.years, suffix: "+" },
                            { val: "250", label: dict.projects, suffix: "+" },
                            { val: "5", label: dict.continents, suffix: "" },
                        ].map((stat) => (
                            <StatCounter 
                                key={stat.label}
                                value={stat.val}
                                label={stat.label}
                                suffix={stat.suffix}
                                className="text-left"
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Stats bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="absolute bottom-24 left-0 right-0 z-10 hidden lg:block"
            >
                <div className="max-w-7xl mx-auto px-12 flex justify-end">
                    <div className="flex gap-12 border-l border-border-subtle pl-12 text-left">
                        {[
                            { val: "7", label: dict.years, suffix: "+" },
                            { val: "250", label: dict.projects, suffix: "+" },
                            { val: "5", label: dict.continents, suffix: "" },
                        ].map((stat) => (
                            <StatCounter 
                                key={stat.label}
                                value={stat.val}
                                label={stat.label}
                                suffix={stat.suffix}
                                className="text-center"
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <button
                onClick={scrollIndicator}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group cursor-pointer"
                aria-label="Scroll down"
            >
                <span className="text-text-muted text-xs tracking-widest uppercase">
                    {common.scroll}
                </span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <ChevronDown size={20} className="text-accent" />
                </motion.div>
            </button>
        </section>
    );
}
