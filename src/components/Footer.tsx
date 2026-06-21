"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Facebook, ArrowUp } from "lucide-react";
import Image from "next/image";
import logoImage from "../../public/logo_gold.png";

interface FooterProps {
    lang: string;
    dict: {
        about: string;
        services: string;
        projects: string;
        contact: string;
    };
    common: {
        navigation: string;
        contact: string;
        rights: string;
        privacy: string;
        terms: string;
        footerDesc: string;
        addressLine1: string;
        addressLine2: string;
        phone: string;
    };
}

export default function Footer({ lang, dict, common }: FooterProps) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    const navLinks = [
        { label: dict.about, href: "#about" },
        { label: dict.services, href: "#services" },
        { label: dict.projects, href: "#projects" },
        { label: dict.contact, href: "#contact" },
    ];

    const socialLinks = [
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Facebook, href: "#", label: "Facebook" },
    ];

    return (
        <footer className="pt-24 pb-12 border-t border-border-subtle" style={{ backgroundColor: 'var(--color-footer)' }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <a href={`/${lang}`} className="relative group inline-block mb-8">
                            <Image
                                src={logoImage}
                                alt="Archimegapolis Logo"
                                className="h-10 lg:h-12 w-auto hover:opacity-90 transition-opacity duration-300"
                            />
                        </a>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-xs mb-8">
                            {common.footerDesc}
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="w-10 h-10 border border-slate-600 flex items-center justify-center text-slate-300 hover:text-accent hover:border-accent transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-slate-100 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                            {common.navigation}
                        </h4>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-slate-300 hover:text-accent text-sm transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-slate-100 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                            {common.contact}
                        </h4>
                        <ul className="space-y-4 text-sm text-slate-300">
                            <li>
                                <a href="https://www.google.com/maps/search/?api=1&query=Vedi,+Spandaryan+7/1" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300 block">
                                    {common.addressLine1}
                                </a>
                            </li>
                            <li>
                                <a href="https://www.google.com/maps/search/?api=1&query=Vedi,+Spandaryan+7/1" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300 block">
                                    {common.addressLine2}
                                </a>
                            </li>
                            <li>
                                <a href="tel:+37494567416" className="hover:text-accent transition-colors duration-300 block">
                                    {common.phone}
                                </a>
                            </li>
                            <li>
                                <a href="mailto:archimegapolis@gmail.com" className="text-accent underline underline-offset-4 hover:text-text-primary transition-colors duration-300 block">
                                    archimegapolis@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Back to top */}
                    <div className="flex flex-col items-start lg:items-end justify-between uppercase">
                        <button
                            onClick={scrollToTop}
                            className="bg-slate-700 border border-slate-600 p-6 hover:border-accent group transition-all duration-500"
                        >
                            <ArrowUp
                                size={24}
                                className="text-accent group-hover:-translate-y-1 transition-transform duration-300"
                            />
                        </button>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-12 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-slate-400 text-[10px] tracking-[0.1em] font-medium">
                        © {currentYear} ARCHIMEGAPOLIS. {common.rights}
                    </div>
                    <div className="flex gap-8 text-[10px] tracking-[0.1em] font-medium uppercase text-slate-400">
                        <a href="#" className="hover:text-accent transition-colors">
                            {common.privacy}
                        </a>
                        <a href="#" className="hover:text-accent transition-colors">
                            {common.terms}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
