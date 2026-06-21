"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import Section from "./Section";
import Button from "./Button";

interface ContactSectionProps {
    dict: {
        tagline: string;
        title1: string;
        accent: string;
        subheading: string;
        email: string;
        phoneLabel: string;
        studio: string;
        address: string;
        form: {
            name: string;
            email: string;
            phone: string;
            type: string;
            typeRes: string;
            typeCom: string;
            typeInt: string;
            typeVis: string;
            typeOther: string;
            message: string;
            submit: string;
            sending: string;
            successTitle: string;
            successText: string;
            backToHome: string;
        };
    };
}

export default function ContactSection({ dict }: ContactSectionProps) {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus("success");
    };

    if (status === "success") {
        return (
            <Section id="contact" className="bg-bg-primary py-24 lg:py-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-xl mx-auto text-center"
                >
                    <div className="w-20 h-20 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle size={40} className="text-accent" />
                    </div>
                    <h2 className="font-display text-4xl font-bold text-text-primary mb-4">
                        {dict.form.successTitle}
                    </h2>
                    <p className="text-text-muted mb-10 leading-relaxed">
                        {dict.form.successText}
                    </p>
                    <Button variant="outline" onClick={() => setStatus("idle")}>
                        {dict.form.backToHome}
                    </Button>
                </motion.div>
            </Section>
        );
    }

    return (
        <Section id="contact" className="bg-bg-primary py-16 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left: Info */}
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
                            {dict.title1} <span className="gold-gradient">{dict.accent}</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-text-muted text-lg mb-12 leading-relaxed"
                        >
                            {dict.subheading}
                        </motion.p>

                        <div className="space-y-10">
                            {[
                                {
                                    icon: Mail,
                                    label: dict.email,
                                    value: "archimegapolis@gmail.com",
                                    href: "mailto:archimegapolis@gmail.com"
                                },
                                { icon: Phone, label: dict.phoneLabel, value: "+37494567416", href: "tel:+37494567416" },
                                {
                                    icon: MapPin,
                                    label: dict.studio,
                                    value: dict.address,
                                    href: "https://www.google.com/maps/search/?api=1&query=Vedi,+Spandaryan+7/1"
                                },
                            ].map((item, idx) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                                    className="flex gap-6"
                                >
                                    <div className="w-12 h-12 border border-border-subtle flex items-center justify-center shrink-0">
                                        <item.icon size={20} className="text-accent" />
                                    </div>
                                    <div>
                                        <div className="text-text-muted text-[10px] uppercase tracking-[0.2em] font-bold mb-1">
                                            {item.label}
                                        </div>
                                        <a 
                                            href={item.href} 
                                            target={item.icon === MapPin ? "_blank" : undefined} 
                                            rel={item.icon === MapPin ? "noopener noreferrer" : undefined} 
                                            className="text-text-primary font-medium hover:text-accent transition-colors cursor-pointer block"
                                        >
                                            {item.value}
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-bg-secondary p-8 lg:p-12 border border-border-subtle"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-muted ml-1">
                                        {dict.form.name}
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full bg-bg-primary border border-border-subtle px-4 py-3 text-text-primary focus:outline-none focus:border-accent transition-all duration-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-muted ml-1">
                                        {dict.form.email}
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        className="w-full bg-bg-primary border border-border-subtle px-4 py-3 text-text-primary focus:outline-none focus:border-accent transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-muted ml-1">
                                        {dict.form.phone}
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full bg-bg-primary border border-border-subtle px-4 py-3 text-text-primary focus:outline-none focus:border-accent transition-all duration-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-muted ml-1">
                                        {dict.form.type}
                                    </label>
                                    <select className="w-full bg-bg-primary border border-border-subtle px-4 py-3 text-text-primary focus:outline-none focus:border-accent transition-all duration-300 appearance-none">
                                        <option>{dict.form.typeRes}</option>
                                        <option>{dict.form.typeCom}</option>
                                        <option>{dict.form.typeInt}</option>
                                        <option>{dict.form.typeVis}</option>
                                        <option>{dict.form.typeOther}</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-muted ml-1">
                                    {dict.form.message}
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    className="w-full bg-bg-primary border border-border-subtle px-4 py-3 text-text-primary focus:outline-none focus:border-accent transition-all duration-300 resize-none"
                                />
                            </div>

                            <Button
                                size="lg"
                                className="w-full"
                                disabled={status === "loading"}
                            >
                                {status === "loading" ? (
                                    dict.form.sending
                                ) : (
                                    <>
                                        {dict.form.submit} <Send size={16} className="ml-2" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
