import { AboutSection } from "~/components/sections/AboutSection";
import { TeamSection } from "~/components/sections/TeamSection";
import { CTASection } from "~/components/sections/CTASection";

export default function About() {
  return (
    <>
      {/* <div className="pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Tentang <span className="gradient-blue-to-cyan">DotVids</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Kami adalah production house kreatif yang berdedikasi untuk mengubah visi Anda
            menjadi konten visual yang memukau dan berdampak.
          </p>
        </div>
      </div> */}

      <AboutSection />
      <TeamSection />
      <CTASection
        title="Mari Berkolaborasi dengan DotVids"
        subtitle="Bawa visi kreatif Anda ke level berikutnya bersama tim profesional kami."
        primaryLabel="Hubungi Kami"
        primaryHref="/contact"
        secondaryLabel="Lihat Portfolio"
        secondaryHref="/portfolio"
      />
    </>
  );
}
