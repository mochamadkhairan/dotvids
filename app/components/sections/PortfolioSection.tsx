// app/components/sections/PortfolioSection.tsx
import { useState } from "react";
import { Link } from "react-router";
import { ScrollRevealElement } from "~/components/interactive/ScrollRevealElement";
import { portfolioItems } from "~/data/portfolio";

// Kategori filter - sesuaikan dengan data portfolio.ts kamu
const categories = ["Semua", "Commercial", "Corporate", "Social Media", "Motion Graphics"];

interface PortfolioSectionProps {
  /** Jika true, hanya tampilkan preview 6 item (untuk homepage) */
  preview?: boolean;
}

export function PortfolioSection({ preview = false }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered =
    activeCategory === "Semua"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const displayed = preview ? filtered.slice(0, 6) : filtered;

  return (
    <section className="section-padding bg-white dark:bg-slate-950">
      <div className="container-max">
        {/* Section Header */}
        <ScrollRevealElement className="text-center mb-12">
          <span className="caption text-blue-600 dark:text-blue-400 mb-3 block">
            ✦ Portfolio Kami
          </span>
          <h2 className="heading-2 text-slate-900 dark:text-gray-50 mb-4">
            Karya yang{" "}
            <span className="gradient-blue-to-cyan">Bicara Sendiri</span>
          </h2>
          <p className="body-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Setiap project adalah cerita unik. Berikut sebagian karya terbaik
            kami yang telah membantu brand berkembang.
          </p>
        </ScrollRevealElement>

        {/* Category Tabs — hanya tampil di full page, bukan preview */}
        {!preview && (
          <ScrollRevealElement className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white glow-blue"
                    : "bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </ScrollRevealElement>
        )}

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((item, index) => (
            <ScrollRevealElement
              key={item.id ?? index}
              delay={index * 80}
              direction="up"
            >
              <div className="group relative rounded-xl overflow-hidden bg-slate-800 aspect-video cursor-pointer card-interactive">
                {/* Thumbnail image */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  /* Placeholder kalau belum ada gambar */
                  <div className="absolute inset-0 gradient-mesh-bg flex items-center justify-center">
                    <span className="text-4xl">🎬</span>
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Info reveal on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="caption text-blue-400 mb-1 block">
                    {item.category ?? "Project"}
                  </span>
                  <h3 className="heading-4 text-white mb-1">{item.title}</h3>
                  {item.description && (
                    <p className="body-sm text-slate-300 line-clamp-2">{item.description}</p>
                  )}
                </div>

                {/* Play icon badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 blur-backdrop flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                  <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </ScrollRevealElement>
          ))}
        </div>

        {/* CTA: Lihat semua — hanya tampil di preview mode */}
        {preview && (
          <ScrollRevealElement className="text-center mt-12">
            <Link
              to="/portfolio"
              className="btn-base btn-secondary px-8 py-3 text-base"
            >
              Lihat Semua Portfolio
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollRevealElement>
        )}

        {/* Empty state */}
        {displayed.length === 0 && (
          <div className="text-center py-16">
            <p className="body-lg text-slate-400">Belum ada project di kategori ini.</p>
          </div>
        )}
      </div>
    </section>
  );
}
