import { Project, Service, Stat } from "@/types";

export const projects: Project[] = [
    {
        id: "1",
        slug: "meridian-tower",
        title: "Meridian Tower",
        location: "Dubai, UAE",
        area: 12500,
        category: "commercial",
        year: 2024,
        description: "A soaring 45-story tower that redefines the Dubai skyline.",
        longDescription:
            "Meridian Tower stands as a testament to modern architectural ambition. Rising 45 stories above Dubai's Financial District, its crystalline facade captures and refracts light throughout the day, creating an ever-changing visual spectacle. The tower integrates passive solar design principles with cutting-edge building management systems to achieve LEED Platinum certification. The ground-level plaza features sculpted water features and native desert landscaping, creating a premium oasis for residents and visitors alike.",
        heroImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
        images: [
            "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
        ],
        specs: [
            { label: "Total Area", value: "12,500 m²" },
            { label: "Floors", value: "45" },
            { label: "Height", value: "198m" },
            { label: "Completion", value: "2024" },
            { label: "Client", value: "Meridian Properties LLC" },
            { label: "Status", value: "Completed" },
        ],
        tags: ["Skyscraper", "LEED Platinum", "Mixed-Use"],
        featured: true,
    },
    {
        id: "2",
        slug: "villa-lumina",
        title: "Villa Lumina",
        location: "Santorini, Greece",
        area: 850,
        category: "residential",
        year: 2023,
        description: "An exclusive clifftop residence merging raw stone with precision glass.",
        longDescription:
            "Perched dramatically on Santorini's volcanic caldera, Villa Lumina is a masterclass in site-responsive architecture. The design philosophy centered on maximizing the relationship between interior space and the infinite Aegean horizon. Thick volcanic tuff walls provide natural thermal mass, dramatically reducing cooling loads without mechanical assistance. Floor-to-ceiling curved glass walls pull the landscape into every living space. The infinity pool appears to dissolve into the sea 200 meters below, creating a seamless visual continuity.",
        heroImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
        ],
        specs: [
            { label: "Total Area", value: "850 m²" },
            { label: "Bedrooms", value: "5" },
            { label: "Pool Area", value: "120 m²" },
            { label: "Completion", value: "2023" },
            { label: "Client", value: "Private Commission" },
            { label: "Status", value: "Completed" },
        ],
        tags: ["Luxury Villa", "Cliffside", "Infinity Pool"],
        featured: true,
    },
    {
        id: "3",
        slug: "axiom-cultural-center",
        title: "Axiom Cultural Center",
        location: "Berlin, Germany",
        area: 8200,
        category: "commercial",
        year: 2024,
        description: "A forward-thinking cultural hub designed for community and creativity.",
        longDescription:
            "The Axiom Cultural Center reimagines civic architecture for the 21st century. Located in the heart of Berlin's creative district, the building's exterior shell is a parametrically designed lattice of weathering steel and glass that references the layered history of the city. Inside, a series of interlocking 'discovery zones' – galleries, performance spaces, workshops, and libraries – are arranged around a dramatic central atrium bathed in diffused natural light. The project earned the German Architecture Prize for its innovative approach to public space.",
        heroImage: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&q=80",
        images: [
            "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&q=80",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
        ],
        specs: [
            { label: "Total Area", value: "8,200 m²" },
            { label: "Floors", value: "6" },
            { label: "Capacity", value: "2,400 visitors" },
            { label: "Completion", value: "2024" },
            { label: "Client", value: "Berlin City Council" },
            { label: "Status", value: "Completed" },
        ],
        tags: ["Cultural", "Public Space", "Award-Winning"],
        featured: true,
    },
    {
        id: "4",
        slug: "casa-nevada",
        title: "Casa Nevada",
        location: "Aspen, Colorado, USA",
        area: 650,
        category: "residential",
        year: 2023,
        description: "Mountain retreat that harmonizes alpine tradition with contemporary luxury.",
        longDescription:
            "Casa Nevada is a high-altitude private residence that celebrates the drama of Colorado's mountain landscape. The design process began with extensive site analysis to understand seasonal sun angles, prevailing winds, and snowfall patterns. These environmental data points shaped every formal decision, from the deep cantilevered roof overhangs that shed snow and create sheltered outdoor terraces, to the strategic placement of glazing that frames curated mountain views while minimizing heat loss. Hand-selected local stone forms the primary exterior and interior finish, creating a palette that is deeply rooted in place.",
        heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
        ],
        specs: [
            { label: "Total Area", value: "650 m²" },
            { label: "Bedrooms", value: "4" },
            { label: "Altitude", value: "2,850m" },
            { label: "Completion", value: "2023" },
            { label: "Client", value: "Private Commission" },
            { label: "Status", value: "Completed" },
        ],
        tags: ["Mountain Retreat", "Stone & Glass", "Sustainable"],
        featured: false,
    },
    {
        id: "5",
        slug: "onyx-headquarters",
        title: "Onyx Headquarters",
        location: "Singapore",
        area: 23000,
        category: "commercial",
        year: 2022,
        description: "A tropical tech campus that revolutionizes the workplace experience.",
        longDescription:
            "Onyx Headquarters redefines the corporate campus typology for a tropical context. Rather than a single monolithic block, the design comprises six interconnected pavilions arranged around a lush internal garden courtyard. Sky gardens at every third floor blur the boundary between interior and exterior, allowing vegetation to cascade down the building's facade. The campus accommodates 3,000 employees across research labs, collaborative studios, and executive offices, all connected by a continuous 'innovation loop' — a walking and cycling path that encourages informal exchange.",
        heroImage: "https://images.unsplash.com/photo-1551038247-3d935f541124?w=1200&q=80",
        images: [
            "https://images.unsplash.com/photo-1551038247-3d935f541124?w=1200&q=80",
            "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1200&q=80",
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80",
        ],
        specs: [
            { label: "Total Area", value: "23,000 m²" },
            { label: "Buildings", value: "6 Pavilions" },
            { label: "Employees", value: "3,000" },
            { label: "Completion", value: "2022" },
            { label: "Client", value: "Onyx Technologies" },
            { label: "Status", value: "Completed" },
        ],
        tags: ["Corporate Campus", "Biophilic Design", "Tropical"],
        featured: true,
    },
    {
        id: "6",
        slug: "maison-noir",
        title: "Maison Noir",
        location: "Paris, France",
        area: 420,
        category: "residential",
        year: 2022,
        description: "A bold Parisian townhouse exploring the tension between old and new.",
        longDescription:
            "Maison Noir is an architectural intervention within a protected 19th-century Haussmann building in the 8th arrondissement of Paris. The dual challenge was to preserve the elegant historic street facade while dramatically reinventing the interior for a 21st-century lifestyle. The solution introduces a dark-toned interior world — black-stained oak, anthracite stone, and blackened steel — that exists in deliberate and dramatic contrast to the cream-colored plaster and ornate moldings of the original structure. A new glass-floored bridge connects the historic front rooms to a contemporary rear pavilion.",
        heroImage: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&q=80",
        images: [
            "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&q=80",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
        ],
        specs: [
            { label: "Total Area", value: "420 m²" },
            { label: "Floors", value: "4" },
            { label: "Style", value: "Renovation" },
            { label: "Completion", value: "2022" },
            { label: "Client", value: "Private Commission" },
            { label: "Status", value: "Completed" },
        ],
        tags: ["Renovation", "Historic Building", "Paris"],
        featured: false,
    },
];

export const services: Service[] = [
    {
        id: "1",
        title: "Residential Design",
        description:
            "Bespoke private homes and luxury residences tailored to your vision and way of life. From intimate pied-à-terres to sprawling country estates.",
        icon: "Home",
    },
    {
        id: "2",
        title: "Commercial Architecture",
        description:
            "Landmark office towers, retail environments, and mixed-use developments that strengthen brands and energize communities.",
        icon: "Building2",
    },
    {
        id: "3",
        title: "Interior Planning",
        description:
            "Holistic interior design that complements architectural intent. We craft spaces that are both functional masterworks and sensory experiences.",
        icon: "Layers",
    },
    {
        id: "4",
        title: "3D Visualization",
        description:
            "Photorealistic renders and immersive virtual walkthroughs that bring designs to life before a single stone is laid.",
        icon: "Monitor",
    },
    {
        id: "5",
        title: "Technical Documentation",
        description:
            "Precision construction documentation, specifications, and project management from concept through completion.",
        icon: "FileText",
    },
];

export const stats: Stat[] = [
    { value: "10", label: "Years Experience", suffix: "+" },
    { value: "120", label: "Projects Completed", suffix: "+" },
    { value: "50", label: "Happy Clients", suffix: "+" },
];

export const whyUsPoints = [
    {
        icon: "Award",
        title: "Award-Winning Design",
        description:
            "Recognized by international bodies including the World Architecture Festival and the Architectural Review.",
    },
    {
        icon: "Globe",
        title: "Global Portfolio",
        description:
            "Projects spanning five continents, bringing a nuanced understanding of climate, culture, and context to every commission.",
    },
    {
        icon: "Shield",
        title: "Uncompromising Quality",
        description:
            "An obsessive attention to detail at every scale, from site master planning to the specification of individual materials.",
    },
    {
        icon: "Users",
        title: "Collaborative Process",
        description:
            "We believe the best buildings emerge from a genuine dialogue between architect and client, built on trust and transparency.",
    },
    {
        icon: "Leaf",
        title: "Sustainable First",
        description:
            "Every project is approached with sustainability at its core — not as an add-on, but as a fundamental design principle.",
    },
    {
        icon: "Clock",
        title: "On Time, On Budget",
        description:
            "Rigorous project management systems ensure that our designs are delivered to the agreed timeline and financial framework.",
    },
];
