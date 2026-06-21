"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import Button from "./Button";
import { Project } from "@/types";
import { projects as allProjects } from "@/data";

interface LocalizedProjectItem {
    title: string;
    location: string;
    description: string;
    tags: string[];
}

interface ProjectsSectionProps {
    lang: string;
    dict: {
        tagline: string;
        title1: string;
        accent: string;
        filterAll: string;
        filterRes: string;
        filterCom: string;
        viewProject: string;
        items: Record<string, LocalizedProjectItem>;
    };
}

export default function ProjectsSection({ lang, dict }: ProjectsSectionProps) {
    const [filter, setFilter] = useState<"all" | "residential" | "commercial">("all");

    // Map hardcoded projects data to localized content from dictionary
    const localizedProjects = allProjects.map(project => {
        const localized = dict.items[project.slug];
        if (!localized) return project;
        return {
            ...project,
            title: localized.title,
            location: localized.location,
            description: localized.description,
            tags: localized.tags
        };
    });

    const filteredProjects = localizedProjects.filter((p) => {
        if (filter === "all") return true;
        return p.category === filter;
    });

    const filterOptions = [
        { id: "all", label: dict.filterAll },
        { id: "residential", label: dict.filterRes },
        { id: "commercial", label: dict.filterCom },
    ];

    return (
        <Section id="projects" className="bg-bg-primary py-16 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
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
                            className="font-display text-4xl lg:text-5xl font-bold text-text-primary leading-tight"
                        >
                            {dict.title1} <span className="gold-gradient">{dict.accent}</span>
                        </motion.h2>
                    </div>

                    {/* Filters */}
                    <div className="flex gap-4 sm:gap-8 overflow-x-auto pb-2 scrollbar-hide">
                        {filterOptions.map((opt) => (
                            <button
                                key={opt.id}
                                onClick={() => setFilter(opt.id as any)}
                                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 whitespace-nowrap ${filter === opt.id
                                        ? "text-accent border-b border-accent pb-1"
                                        : "text-text-muted hover:text-text-primary pb-1 border-b border-transparent"
                                    }`}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative"
                            >
                                <a href={`/${lang}/projects/${project.slug}`} className="block">
                                    <div className="aspect-[4/5] overflow-hidden border border-border-subtle relative">
                                        <img
                                            src={project.heroImage}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                        <div className="absolute bottom-8 left-8 right-8">
                                            <div className="flex gap-2 mb-4 flex-wrap">
                                                {project.tags.slice(0, 2).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-[9px] uppercase tracking-widest bg-bg-primary/80 backdrop-blur-sm border border-border-subtle px-2 py-1 text-text-primary"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <h3 className="font-display text-2xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-text-muted text-xs uppercase tracking-widest mt-2">
                                                {project.location}
                                            </p>
                                        </div>

                                        <div className="absolute top-8 right-8 w-12 h-12 bg-accent flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                            <ArrowUpRight size={24} className="text-bg-primary" />
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="mt-20 text-center">
                    <Button variant="outline" size="lg" href={`/${lang}/#projects`}>
                        {dict.viewProject}
                    </Button>
                </div>
            </div>
        </Section>
    );
}
