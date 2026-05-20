import { HeroSection } from "~/components/sections/HeroSection";
import { FeaturesSection } from "~/components/sections/FeaturesSection";
import { PortfolioSection } from "~/components/sections/PortfolioSection";
import { CTASection } from "~/components/sections/CTASection";
import { ServicesSection } from "~/components/sections/ServicesSection";
import { AboutSection } from "~/components/sections/AboutSection";
import { TeamSection } from "~/components/sections/TeamSection";
import { ContactSection } from "~/components/sections/ContactSection";
 
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <PortfolioSection preview />
      <AboutSection />
      <TeamSection />
      <CTASection />
      <ContactSection />
    </>
  );
}