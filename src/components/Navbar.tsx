"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Dictionary } from "@/types/i18n";
import Button from "./Button";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
    lang: string;
    dict: Record<string, string>;
    common: Record<string, string>;
}

export default function Navbar({ lang, dict, common }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: dict.about, href: "#about" },
        { label: dict.services, href: "#services" },
        { label: dict.projects, href: "#projects" },
        { label: dict.contact, href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-bg-primary/90 backdrop-blur-md py-4 border-b border-border-subtle" : "bg-transparent py-8"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
                {/* Logo */}
                <a href={`/${lang}`} className="relative group flex items-center">
                    <img
                        src="/logo.png"
                        alt="Archimegapolis Logo"
                        className="h-12 lg:h-14 w-auto hover:opacity-90 transition-opacity duration-300"
                    />
                </a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-12">
                    <div className="flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-xs uppercase tracking-[0.2em] font-medium text-text-muted hover:text-accent transition-colors relative group py-2"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-6 border-l border-border-subtle pl-10">
                        <LanguageSwitcher currentLang={lang as any} />
                        <Button variant="outline" size="sm" href="#contact">
                            {common.enquire}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 lg:hidden">
                    <LanguageSwitcher currentLang={lang as any} />
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-text-primary p-2 focus:outline-none"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden absolute top-full left-0 right-0 bg-bg-primary overflow-hidden border-b border-border-subtle"
                    >
                        <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] gap-8 p-6 overflow-y-auto">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="font-display text-4xl font-bold text-text-primary hover:text-accent transition-colors"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8"
                            >
                                <Button size="lg" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                                    {common.enquire} <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
