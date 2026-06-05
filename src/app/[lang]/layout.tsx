import type { Metadata } from "next";
import { i18n, Locale } from "@/types/i18n";
import "../globals.css";
import { getDictionary } from "@/lib/get-dictionary";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: {
      default: dict.metadata.title,
      template: `%s | ${dict.metadata.title.split('|')[0].trim()}`,
    },
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
    authors: [{ name: "Archimegapolis" }],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: lang === 'en' ? 'en_US' : lang === 'ru' ? 'ru_RU' : 'hy_AM',
      url: "https://archimegapolis.com",
      siteName: "Archimegapolis",
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Archimegapolis Architecture Studio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} className="scroll-smooth">
      <body className="bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
