import { PortfolioSection } from "~/components/sections/PortfolioSection";
import { CTASection } from "~/components/sections/CTASection";

export default function Portfolio() {
  return (
    <>
      {/* <div className="pt-20 md:pt-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Portfolio <span className="gradient-blue-to-cyan">Kami</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Lihat koleksi lengkap project-project kami yang telah membantu ratusan brand
            mencapai tujuan marketing mereka melalui konten visual yang powerful.
          </p>
        </div>
      </div> */}

      <PortfolioSection />

      <CTASection
        title="Ingin Proyek Anda Menjadi Portfolio Kami Berikutnya?"
        subtitle="Jika Anda memiliki visi kreatif yang ingin diwujudkan, mari kita kolaborasi untuk menciptakan sesuatu yang luar biasa."
        primaryLabel="Mulai Proyek Sekarang"
        primaryHref="/contact"
        secondaryLabel="Hubungi Tim Kami"
        secondaryHref="/contact"
      />
    </>
  );
}
