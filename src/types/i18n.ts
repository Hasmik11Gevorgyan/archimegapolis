export type Locale = "en" | "ru" | "hy";

export const i18n = {
    defaultLocale: "hy" as const,
    locales: ["hy", "en", "ru"] as const,
};

export type Dictionary = typeof import("@/dictionaries/hy.json");
