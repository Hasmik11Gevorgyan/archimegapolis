// Types for the architecture studio website

export interface Project {
    id: string;
    slug: string;
    title: string;
    location: string;
    area: number; // in m²
    category: "residential" | "commercial";
    year: number;
    description: string;
    longDescription: string;
    heroImage: string;
    images: string[];
    specs: ProjectSpec[];
    tags: string[];
    featured: boolean;
}

export interface ProjectSpec {
    label: string;
    value: string;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface Stat {
    value: string;
    label: string;
    suffix?: string;
}

export interface NavLink {
    label: string;
    href: string;
}

export interface TeamMember {
    name: string;
    role: string;
    image: string;
}

export type ProjectCategory = "all" | "residential" | "commercial";
