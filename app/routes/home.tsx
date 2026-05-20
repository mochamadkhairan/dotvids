import { HeroSection } from "~/components/sections/HeroSection";
import { FeaturesSection } from "~/components/sections/FeaturesSection";
import { PortfolioSection } from "~/components/sections/PortfolioSection";
import { CTASection } from "~/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PortfolioSection preview />  {/* preview=true → hanya 6 item */}
      <CTASection />
    </>
  );
}