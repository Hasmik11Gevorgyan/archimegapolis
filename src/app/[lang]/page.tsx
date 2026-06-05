import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/types/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main>
      <Navbar lang={lang} dict={dict.nav} common={dict.common} />
      <HeroSection dict={dict.hero} common={dict.common} />
      <AboutSection dict={dict.about} />
      <ServicesSection dict={dict.services} />
      <ProjectsSection lang={lang} dict={dict.projects} />
      <WhyUsSection dict={dict.whyUs} />
      <ContactSection dict={dict.contact} />
      <Footer lang={lang} dict={dict.nav} common={dict.common} />
    </main>
  );
}
