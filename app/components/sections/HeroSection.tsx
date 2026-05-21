import { Link } from "react-router";
import { ScrollRevealElement } from "~/components/interactive/ScrollRevealElement";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950">
      {/* Dark mode background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-blue-950/5 to-slate-900/5 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900" />

      {/* Gradient orbs - visible in dark mode */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-400/5 dark:bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Logo with Creative Background */}
          <ScrollRevealElement>
            <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
              {/* Animated background shapes */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-blue-600/20 dark:from-blue-600/30 dark:via-cyan-500/15 dark:to-blue-700/30" />

                {/* Floating elements */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-2xl animate-float" />
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-400/15 dark:bg-cyan-500/25 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
              </div>

              {/* Logo */}
              <div className="relative z-10">
                <img
                  src="/logo.png"
                  alt="DotVids Logo"
                  className="h-48 lg:h-64 w-auto object-contain drop-shadow-lg"
                />
              </div>

              {/* Decorative border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-blue-400/20 dark:border-blue-500/30" />
            </div>
          </ScrollRevealElement>

          {/* Right Column - Intro Text & CTA */}
          <div className="space-y-8">
            <ScrollRevealElement>
              <span className="inline-block px-4 py-2 rounded-full bg-blue-600/10 dark:bg-blue-600/20 border border-blue-500/30 dark:border-blue-500/40 text-blue-600 dark:text-blue-400 text-sm font-medium">
                ✨ Premium Video Production Agency
              </span>
            </ScrollRevealElement>

            <ScrollRevealElement delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white leading-tight">
                We Create{" "}
                <span className="gradient-text">Visual Stories</span>{" "}
                That Convert
              </h1>
            </ScrollRevealElement>

            <ScrollRevealElement delay={200}>
              <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                DotVids menghadirkan produksi video premium yang menggabungkan kreativitas,
                teknologi, dan strategi untuk membangun brand yang berkesan dan engagement
                yang tinggi.
              </p>
            </ScrollRevealElement>

            <ScrollRevealElement delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/portfolio"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1 text-center"
                >
                  Lihat Portfolio
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  Hubungi Kami
                </Link>
              </div>
            </ScrollRevealElement>
          </div>
        </div>
      </div>
    </section>
  );
}