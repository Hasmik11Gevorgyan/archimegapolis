"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Building2, Layers, Monitor, FileText, ArrowRight } from "lucide-react";
import Section from "./Section";

const iconMap = {
    Home,
    Building2,
    Layers,
    Monitor,
    FileText,
};

const images = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd64bd28?w=800&q=80",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
];

interface ServiceItem {
    title: string;
    description: string;
    details: string;
}

interface ServicesSectionProps {
    dict: {
        tagline: string;
        title1: string;
        accent: string;
        subheading: string;
        residentialDesign: ServiceItem;
        commercialArchitecture: ServiceItem;
        interiorPlanning: ServiceItem;
        visualization: ServiceItem;
        documentation: ServiceItem;
    };
}

export default function ServicesSection({ dict }: ServicesSectionProps) {
    const [activeIdx, setActiveIdx] = useState(0);

    const servicesData = [
        {
            id: "1",
            icon: "Home",
            image: images[0],
            ...dict.residentialDesign,
        },
        {
            id: "2",
            icon: "Building2",
            image: images[1],
            ...dict.commercialArchitecture,
        },
        {
            id: "3",
            icon: "Layers",
            image: images[2],
            ...dict.interiorPlanning,
        },
        {
            id: "4",
            icon: "Monitor",
            image: images[3],
            ...dict.visualization,
        },
        {
            id: "5",
            icon: "FileText",
            image: images[4],
            ...dict.documentation,
        },
    ];

    const activeService = servicesData[activeIdx];

    return (
        <Section id="services" className="bg-bg-primary py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="mb-12 lg:mb-16">
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
                        className="font-display text-4xl lg:text-5xl font-bold text-text-primary leading-tight"
                    >
                        {dict.title1} <span className="gold-gradient">{dict.accent}</span>
                    </motion.h2>
                </div>

                {/* Main 3-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    
                    {/* Left Column: Navigation Tabs */}
                    <div className="lg:col-span-3 flex flex-col gap-2 border-l border-border-subtle overflow-x-auto lg:overflow-visible">
                        {servicesData.map((service, idx) => {
                            const Icon = iconMap[service.icon as keyof typeof iconMap];
                            const isActive = idx === activeIdx;

                            return (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveIdx(idx)}
                                    className={`relative flex items-center gap-4 p-4 text-left transition-all duration-300 min-w-max lg:min-w-0 ${
                                        isActive
                                            ? "bg-bg-secondary text-text-primary"
                                            : "text-text-muted hover:text-text-primary hover:bg-bg-secondary/50"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTabIndicator"
                                            className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-accent hidden lg:block"
                                        />
                                    )}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTabIndicatorMobile"
                                            className="absolute left-0 bottom-0 right-0 h-[2px] bg-accent lg:hidden"
                                        />
                                    )}
                                    <span className="text-xs font-mono opacity-50 tracking-widest hidden sm:inline-block">
                                        0{idx + 1}
                                    </span>
                                    <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-accent" : ""}`} />
                                    <span className="font-bold text-sm uppercase tracking-wider">
                                        {service.title}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Middle Column: Details & Boxes */}
                    <div className="lg:col-span-5 flex flex-col justify-start">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIdx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="h-full flex flex-col gap-6"
                            >
                                <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-primary">
                                    {activeService.title}
                                </h3>
                                <p className="text-text-muted text-base sm:text-lg leading-relaxed">
                                    {activeService.description}
                                </p>

                                {/* Styled Info Box 1 */}
                                <div className="mt-2 sm:mt-4 p-6 border border-border-subtle rounded-xl bg-bg-secondary/30 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <h4 className="text-xs text-accent uppercase tracking-widest font-bold mb-3">
                                        {activeService.details}
                                    </h4>
                                    <p className="text-sm text-text-muted leading-relaxed relative z-10">
                                        Our comprehensive {activeService.title.toLowerCase()} services are designed to deliver exceptional results from concept to completion.
                                    </p>
                                </div>
                                
                                {/* Styled Info Box 2 */}
                                <div className="p-6 border border-border-subtle rounded-xl bg-bg-secondary/30 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <h4 className="text-xs text-accent uppercase tracking-widest font-bold mb-3">
                                        {dict.tagline}
                                    </h4>
                                    <p className="text-sm text-text-muted leading-relaxed relative z-10">
                                        We apply rigorous architectural standards and innovative engineering solutions to every project we undertake.
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column: Image */}
                    <div className="lg:col-span-4 h-64 sm:h-80 lg:h-auto lg:min-h-[500px] relative rounded-2xl overflow-hidden border border-border-subtle group">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeIdx}
                                src={activeService.image}
                                alt={activeService.title}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent"></div>
                    </div>

                </div>
            </div>
        </Section>
    );
}
