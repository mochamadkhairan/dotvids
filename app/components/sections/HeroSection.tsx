import { Link } from "react-router";
import { ScrollRevealElement } from "~/components/interactive/ScrollRevealElement";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <ScrollRevealElement>
          <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
            ✨ Premium Video Production Agency
          </span>
        </ScrollRevealElement>

        <ScrollRevealElement delay={100}>
          <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-6 leading-tight">
            We Create{" "}
            <span className="gradient-text">Visual Stories</span>{" "}
            That Convert
          </h1>
        </ScrollRevealElement>

        <ScrollRevealElement delay={200}>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            DotVids menghadirkan produksi video premium yang menggabungkan kreativitas,
            teknologi, dan strategi untuk membangun brand yang berkesan.
          </p>
        </ScrollRevealElement>

        <ScrollRevealElement delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1"
            >
              Lihat Portfolio
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1"
            >
              Hubungi Kami
            </Link>
          </div>
        </ScrollRevealElement>
      </div>
    </section>
  );
}