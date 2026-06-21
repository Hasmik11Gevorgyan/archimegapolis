"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Section from "./Section";

interface WhyUsPoint {
    title: string;
    description: string;
}

interface WhyUsSectionProps {
    dict: {
        tagline: string;
        title1: string;
        accent: string;
        title2: string;
        subheading: string;
        points: WhyUsPoint[];
        satisfactionValue: string;
        satisfactionLabel: string;
    };
}

export default function WhyUsSection({ dict }: WhyUsSectionProps) {
    const points = dict.points || [];

    return (
        <Section id="why-us" className="bg-bg-secondary py-16 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left: Content */}
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
                            className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-8 leading-tight"
                        >
                            {dict.title1} <span className="gold-gradient">{dict.accent}</span> {dict.title2}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-text-muted text-lg leading-relaxed mb-12"
                        >
                            {dict.subheading}
                        </motion.p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {points.map((point, idx) => (
                                <motion.div
                                    key={point.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                                    className="flex flex-col gap-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 size={18} className="text-accent" />
                                        <h3 className="text-text-primary font-bold uppercase tracking-widest text-xs">
                                            {point.title}
                                        </h3>
                                    </div>
                                    <p className="text-text-muted text-sm leading-relaxed">
                                        {point.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Image / Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative group"
                    >
                        <div className="aspect-[4/5] overflow-hidden border border-border-subtle">
                            <img
                                src="https://images.unsplash.com/photo-1600607687940-47a04b6b107c?w=1000&q=80"
                                alt="Architecture design"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-110 group-hover:scale-100"
                            />
                        </div>

                        {/* Floating Element */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -bottom-10 -left-10 bg-bg-primary p-8 border border-border-subtle hidden xl:block shadow-2xl"
                        >
                            <div className="text-accent font-display text-4xl font-bold mb-1">
                                {dict.satisfactionValue}
                            </div>
                            <div className="text-text-muted text-[10px] uppercase tracking-[0.2em] font-bold">
                                {dict.satisfactionLabel}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
