"use client";

import { motion } from "framer-motion";
import { Home, Building2, Layers, Monitor, FileText, ArrowRight } from "lucide-react";
import Section from "./Section";

const iconMap = {
    Home,
    Building2,
    Layers,
    Monitor,
    FileText,
};

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
    const servicesData = [
        {
            id: "1",
            icon: "Home",
            ...dict.residentialDesign,
        },
        {
            id: "2",
            icon: "Building2",
            ...dict.commercialArchitecture,
        },
        {
            id: "3",
            icon: "Layers",
            ...dict.interiorPlanning,
        },
        {
            id: "4",
            icon: "Monitor",
            ...dict.visualization,
        },
        {
            id: "5",
            icon: "FileText",
            ...dict.documentation,
        },
    ];

    return (
        <Section id="services" className="bg-bg-primary py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
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

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-text-muted text-lg max-w-md"
                    >
                        {dict.subheading}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, idx) => {
                        const Icon = iconMap[service.icon as keyof typeof iconMap];
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="group relative bg-bg-secondary p-10 border border-border-subtle hover:border-accent/50 transition-all duration-500 overflow-hidden"
                            >
                                {/* Hover background glow */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-bg-primary border border-border-subtle flex items-center justify-center mb-8 group-hover:border-accent transition-colors duration-500">
                                        <Icon className="w-6 h-6 text-accent" />
                                    </div>

                                    <h3 className="font-display text-2xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-text-muted leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-text-primary group/btn">
                                        <span className="group-hover/btn:mr-2 transition-all">{service.details}</span>
                                        <ArrowRight size={14} className="text-accent" />
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
