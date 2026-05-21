// app/components/sections/CTASection.tsx
import { Link } from "react-router";
import { ScrollRevealElement } from "~/components/interactive/ScrollRevealElement";

interface CTASectionProps {
  /** Override judul default */
  title?: string;
  /** Override subtitle default */
  subtitle?: string;
  /** Label tombol utama */
  primaryLabel?: string;
  /** Href tombol utama */
  primaryHref?: string;
  /** Label tombol sekunder */
  secondaryLabel?: string;
  /** Href tombol sekunder */
  secondaryHref?: string;
}

export function CTASection({
  title = "Siap Membawa Brand Kamu ke Level Berikutnya?",
  subtitle = "Konsultasi gratis dengan tim kreatif kami. Ceritakan visimu dan biarkan kami wujudkan menjadi konten yang memukau.",
  primaryLabel = "Mulai Project Sekarang",
  primaryHref = "/contact",
  secondaryLabel = "Lihat Portfolio",
  secondaryHref = "/portfolio",
}: CTASectionProps) {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-blue-700 to-blue-900 dark:from-blue-950 dark:to-slate-950">
      {/* Background glow blobs */}
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/20 dark:bg-cyan-500/10 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-blue-400/10 dark:bg-cyan-500/10 blur-3xl pointer-events-none"
      />

      <div className="container-max relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <ScrollRevealElement>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 dark:bg-cyan-500/20 border border-white/30 dark:border-cyan-500/30 caption text-white dark:text-cyan-300 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-cyan-400 animate-pulse" />
              Let's Work Together
            </span>
          </ScrollRevealElement>

          {/* Heading */}
          <ScrollRevealElement delay={80}>
            <h2 className="display-md text-white dark:text-white mb-6 leading-tight">
              {title.split("Brand Kamu").length > 1 ? (
                <>
                  {title.split("Brand Kamu")[0]}
                  <span className="gradient-blue-to-cyan dark:bg-gradient-to-r dark:from-cyan-400 dark:to-blue-400">Brand Kamu</span>
                  {title.split("Brand Kamu")[1]}
                </>
              ) : (
                title
              )}
            </h2>
          </ScrollRevealElement>

          {/* Subtitle */}
          <ScrollRevealElement delay={160}>
            <p className="body-lg text-blue-100 dark:text-slate-300 mb-10 leading-relaxed">
              {subtitle}
            </p>
          </ScrollRevealElement>

          {/* Buttons */}
          <ScrollRevealElement delay={240}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={primaryHref}
                className="btn-base btn-glow px-8 py-4 text-base animate-glow-pulse bg-white dark:bg-cyan-500 text-blue-900 dark:text-slate-950 hover:bg-blue-50 dark:hover:bg-cyan-400"
              >
                {primaryLabel}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to={secondaryHref}
                className="btn-base btn-secondary px-8 py-4 text-base border-white/40 dark:border-cyan-400/40 text-white dark:text-cyan-300 hover:border-white dark:hover:border-cyan-400 hover:bg-white/10 dark:hover:bg-cyan-500/10"
              >
                {secondaryLabel}
              </Link>
            </div>
          </ScrollRevealElement>

          {/* Trust signals */}
          <ScrollRevealElement delay={320}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-blue-200 dark:text-slate-400">
              <span className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-emerald-400 dark:text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Konsultasi Gratis
              </span>
              <span className="w-1 h-1 rounded-full bg-white/40 dark:bg-slate-600" />
              <span className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-emerald-400 dark:text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Revisi Tanpa Batas
              </span>
              <span className="w-1 h-1 rounded-full bg-white/40 dark:bg-slate-600" />
              <span className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-emerald-400 dark:text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Garansi Kepuasan
              </span>
            </div>
          </ScrollRevealElement>
        </div>
      </div>
    </section>
  );
}
