import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { MapPin, Ruler, Calendar, ArrowLeft } from "lucide-react";
import { projects as allProjects } from "@/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale, i18n } from "@/types/i18n";

interface PageProps {
    params: Promise<{ lang: Locale; slug: string }>;
}

export async function generateStaticParams() {
    const params: { lang: string; slug: string }[] = [];
    i18n.locales.forEach((lang) => {
        allProjects.forEach((p) => {
            params.push({ lang, slug: p.slug });
        });
    });
    return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang, slug } = await params;
    const dict = await getDictionary(lang);
    const project = allProjects.find((p) => p.slug === slug);

    if (!project) return {};

    const items = dict.projects.items as Record<string, any>;
    const localized = items[slug];
    const title = localized?.title || project.title;
    const description = localized?.description || project.description;

    return {
        title: `${title} | Archimegapolis`,
        description: description,
        openGraph: {
            title: title,
            description: description,
            images: [{ url: project.heroImage }],
        },
    };
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { lang, slug } = await params;
    const dict = await getDictionary(lang);
    const projectData = allProjects.find((p) => p.slug === slug);

    if (!projectData) notFound();

    // Map localized content
    const items = dict.projects.items as Record<string, any>;
    const localized = items[slug];
    const project = {
        ...projectData,
        title: localized?.title || projectData.title,
        description: localized?.description || projectData.description,
        longDescription: localized?.longDescription || projectData.longDescription,
        location: localized?.location || projectData.location,
        tags: localized?.tags || projectData.tags,
        specs: localized?.specs || projectData.specs,
    };

    const relatedData = allProjects
        .filter((p) => p.slug !== project.slug && p.category === project.category)
        .slice(0, 3);

    const related = relatedData.map(p => {
        const relatedLocalized = items[p.slug];
        return {
            ...p,
            title: relatedLocalized?.title || p.title,
            location: relatedLocalized?.location || p.location
        };
    });

    return (
        <>
            <Navbar lang={lang} dict={dict.nav} common={dict.common} />
            <main className="min-h-screen bg-bg-primary">
                {/* Hero image gallery */}
                <div className="pt-20">
                    <ImageGallery images={project.images} title={project.title} />
                </div>

                {/* Content */}
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                        {/* Main content */}
                        <div className="lg:col-span-2">
                            {/* Breadcrumb */}
                            <nav className="flex items-center gap-2 text-xs text-text-muted mb-8">
                                <Link href={`/${lang}`} className="hover:text-accent transition-colors">
                                    {dict.nav.about}
                                </Link>
                                <span>/</span>
                                <Link href={`/${lang}/#projects`} className="hover:text-accent transition-colors">
                                    {dict.nav.projects}
                                </Link>
                                <span>/</span>
                                <span className="text-text-primary">{project.title}</span>
                            </nav>

                            {/* Category */}
                            <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-xs tracking-widest uppercase mb-4">
                                {project.category === "residential" ? dict.projects.filterRes : dict.projects.filterCom}
                            </div>

                            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary leading-tight mb-4">
                                {project.title}
                            </h1>

                            <div className="flex flex-wrap gap-6 mb-8 text-sm text-text-muted">
                                <div className="flex items-center gap-2">
                                    <MapPin size={14} className="text-accent" />
                                    {project.location}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Ruler size={14} className="text-accent" />
                                    {project.area.toLocaleString()} m²
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={14} className="text-accent" />
                                    {project.year}
                                </div>
                            </div>

                            <div className="w-16 h-px bg-accent mb-8" />

                            <p className="text-text-muted text-lg leading-relaxed mb-4">
                                {project.description}
                            </p>
                            <p className="text-text-muted leading-relaxed whitespace-pre-line">
                                {project.longDescription}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-8">
                                {project.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-bg-secondary border border-border-subtle text-text-muted text-xs"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Specs sidebar */}
                        <aside>
                            <div className="bg-bg-secondary border border-border-subtle p-8 sticky top-28">
                                <h2 className="font-display text-lg font-semibold text-text-primary mb-6 pb-4 border-b border-border-subtle">
                                    {dict.projectDetail.specs}
                                </h2>
                                <dl className="space-y-4">
                                    {project.specs.map(({ label, value }: { label: string; value: string }) => (
                                        <div key={label}>
                                            <dt className="text-xs tracking-widest uppercase text-text-muted mb-1">
                                                {label}
                                            </dt>
                                            <dd className="text-text-primary font-medium">{value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </aside>
                    </div>

                    {/* Related Projects */}
                    {related.length > 0 && (
                        <section className="mt-24 pt-16 border-t border-border-subtle">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-10 h-px bg-accent" />
                                <h2 className="font-display text-2xl font-semibold text-text-primary">
                                    {dict.projectDetail.related}
                                </h2>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {related.map((p) => (
                                    <Link
                                        key={p.id}
                                        href={`/${lang}/projects/${p.slug}`}
                                        className="group relative overflow-hidden bg-bg-secondary border border-border-subtle hover:border-accent/50 transition-all duration-400"
                                    >
                                        <div className="relative h-56 overflow-hidden">
                                            <div className="absolute inset-0 bg-bg-secondary animate-pulse" />
                                            <Image
                                                src={p.heroImage}
                                                alt={p.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500 relative z-10"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent z-20" />
                                        </div>
                                        <div className="p-5">
                                            <h3 className="font-display text-lg font-semibold text-text-primary mb-1 group-hover:text-accent transition-colors">
                                                {p.title}
                                            </h3>
                                            <p className="text-text-muted text-sm">{p.location}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Back link */}
                    <div className="mt-12">
                        <Link
                            href={`/${lang}/#projects`}
                            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
                        >
                            <ArrowLeft size={16} />
                            {dict.common.backToAll}
                        </Link>
                    </div>
                </div>
            </main>
            <Footer lang={lang} dict={dict.nav} common={dict.common} />
        </>
    );
}
