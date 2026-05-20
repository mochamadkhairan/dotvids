import { ServicesSection } from "~/components/sections/ServicesSection";
import { CTASection } from "~/components/sections/CTASection";

export default function Services() {
  return (
    <>
      {/* <div className="pt-20 md:pt-24 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Layanan <span className="gradient-blue-to-cyan">Kami</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Dari konsep kreatif hingga final delivery, kami menyediakan solusi produksi video
            yang komprehensif untuk membantu brand Anda bersinar.
          </p>
        </div>
      </div> */}

      <ServicesSection />

      <CTASection
        title="Siap Memulai Proyek Anda?"
        subtitle="Mari kita ciptakan sesuatu yang luar biasa bersama. Hubungi tim kami untuk konsultasi gratis."
        primaryLabel="Hubungi Tim Kami"
        primaryHref="/contact"
        secondaryLabel="Lihat Portfolio"
        secondaryHref="/portfolio"
      />
    </>
  );
}
