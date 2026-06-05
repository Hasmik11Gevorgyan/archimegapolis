"use client";

import { usePathname, useRouter } from "next/navigation";
import { i18n, Locale } from "@/types/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: "hy", label: "Հայերեն", short: "HY" },
        { code: "en", label: "English", short: "EN" },
        { code: "ru", label: "Русский", short: "RU" },
    ];

    const handleLocaleChange = (newLocale: string) => {
        if (!pathname) return;
        const segments = pathname.split("/");
        segments[1] = newLocale;
        router.push(segments.join("/"));
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const currentLangLabel = languages.find(l => l.code === currentLang)?.short;

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors py-2 px-3 rounded-md border border-border-subtle hover:border-accent/30 bg-bg-secondary/50 group"
            >
                <Globe size={16} className="group-hover:rotate-12 transition-transform" />
                <span className="text-xs font-bold tracking-widest">{currentLangLabel}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-32 bg-bg-secondary border border-border-subtle rounded-lg shadow-xl overflow-hidden z-50 glass"
                    >
                        <div className="py-1">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => handleLocaleChange(lang.code)}
                                    className={`w-full text-left px-4 py-3 text-xs tracking-widest uppercase font-medium transition-colors hover:bg-bg-primary ${currentLang === lang.code ? "text-accent" : "text-text-muted"
                                        }`}
                                >
                                    {lang.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
