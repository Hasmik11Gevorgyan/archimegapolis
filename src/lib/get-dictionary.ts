import "server-only";
import type { Locale } from "@/types/i18n";

const dictionaries = {
    en: () => import("@/dictionaries/en.json").then((module) => module.default),
    ru: () => import("@/dictionaries/ru.json").then((module) => module.default),
    hy: () => import("@/dictionaries/hy.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
    dictionaries[locale]?.() ?? dictionaries.en();
