// app/components/sections/FeaturesSection.tsx
import { ScrollRevealElement } from "~/components/interactive/ScrollRevealElement";
import { AnimatedCounter } from "~/components/interactive/AnimatedCounter";
import { services } from "~/data/services";

// Icon map - sesuaikan dengan icon yang ada di data/services.ts kamu
const featureIcons: Record<string, string> = {
  code: "💻",
  video: "🎬",
  palette: "🎨",
  star: "⭐",
  "trending-up": "📈",
  briefcase: "💼",
  default: "⚡",
};

// Stats untuk animated counter section
const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Happy Clients" },
];

export function FeaturesSection() {
  return (
    <section className="section-padding bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950">
      <div className="container-max">
        {/* Section Header */}
        <ScrollRevealElement className="text-center mb-16">
          <span className="caption text-blue-600 dark:text-cyan-400 mb-3 block">
            ✦ Layanan Kami
          </span>
          <h2 className="heading-2 text-slate-900 dark:text-white mb-4">
            Solusi Video{" "}
            <span className="gradient-blue-to-cyan">Premium</span> untuk Brand Kamu
          </h2>
          <p className="body-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Dari konsep hingga produksi akhir, kami menghadirkan konten visual
            berkualitas tinggi yang membuat brand kamu bersinar.
          </p>
        </ScrollRevealElement>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.slice(0, 6).map((service, index) => (
            <ScrollRevealElement
              key={service.id ?? index}
              delay={index * 80}
              direction="up"
            >
              <div className="card-elevated p-6 h-full group cursor-default dark:border-slate-700 dark:bg-slate-800/50 hover:dark:bg-slate-800/70">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {featureIcons[service.icon ?? "default"] ?? featureIcons.default}
                </div>

                {/* Content */}
                <h3 className="heading-4 text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="body-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA link */}
                <div className="mt-4 flex items-center gap-1 text-blue-600 dark:text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <span>Pelajari lebih lanjut</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </ScrollRevealElement>
          ))}
        </div>

        {/* Stats Bar */}
        <ScrollRevealElement direction="scale">
          <div className="rounded-2xl gradient-blue-dark dark:bg-gradient-to-r dark:from-blue-900 dark:to-cyan-900 p-8 md:p-12 glow-blue dark:glow-blue-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-white font-bold">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="body-sm text-blue-200 dark:text-cyan-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollRevealElement>
      </div>
    </section>
  );
}
