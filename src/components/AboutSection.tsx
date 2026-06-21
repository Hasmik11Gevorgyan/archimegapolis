"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "@/lib/hooks";
import Section from "./Section";

function StatCounter({ value, label, suffix = "" }: { value: string; label: string; suffix?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true });
    const numericValue = parseInt(value, 10);
    const count = useCountUp(inView ? numericValue : 0, 2000);

    return (
        <div ref={ref} className="text-center lg:text-left">
            <div className="font-display text-5xl lg:text-6xl font-bold text-accent mb-2">
                {count}
                {suffix}
            </div>
            <div className="text-text-muted text-sm tracking-widest uppercase">
                {label}
            </div>
        </div>
    );
}

interface AboutSectionProps {
    dict: {
        tagline: string;
        title1: string;
        accent: string;
        title2: string;
        p1: string;
        p2: string;
        stat1: string;
        stat2: string;
        stat3: string;
    };
}

export default function AboutSection({ dict }: AboutSectionProps) {
    return (
        <Section id="about" className="bg-bg-secondary py-16 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left: Text */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="w-10 h-px bg-accent" />
                            <span className="text-accent text-xs tracking-[0.3em] uppercase font-medium">
                                {dict.tagline}
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight"
                        >
                            {dict.title1}{" "}
                            <span className="gold-gradient">{dict.accent}</span>{" "}
                            {dict.title2}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-text-muted text-lg leading-relaxed mb-6"
                        >
                            {dict.p1}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="text-text-muted leading-relaxed"
                        >
                            {dict.p2}
                        </motion.p>
                    </div>

                    {/* Right: Stats */}
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10 lg:gap-12">
                            {[
                                { value: "7", label: dict.stat1, suffix: "+" },
                                { value: "250", label: dict.stat2, suffix: "+" },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="relative pl-6 sm:border-l border-border-subtle"
                                >
                                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent via-accent/50 to-transparent hidden sm:block" />
                                    <StatCounter
                                        value={stat.value}
                                        label={stat.label}
                                        suffix={stat.suffix}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
