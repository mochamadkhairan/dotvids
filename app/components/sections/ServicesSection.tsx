import { useRef, useEffect, useState } from "react";
import { services } from "~/data/services";

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="services-section"
    >
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <span className="services-label">What We Do</span>
          <h2 className="services-title">
            Layanan yang <br />
            <em>kami tawarkan</em>
          </h2>
          <p className="services-subtitle">
            Dari konsep hingga tayang — kami hadir di setiap tahap perjalanan visual brand kamu.
          </p>
        </div>

        {/* Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-index={index}
              className={`service-card ${visibleCards.has(index) ? "service-card--visible" : ""}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div
                className="service-card__icon"
                style={{ color: service.accent }}
              >
                {service.icon}
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <ul className="service-card__features">
                {service.features.map((feat) => (
                  <li key={feat} className="service-card__feature">
                    <span
                      className="service-card__dot"
                      style={{ background: service.accent }}
                    />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          padding: 120px 0;
          background: #ffffff;
          transition: background-color 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .dark .services-section {
          background: #050810;
        }

        .services-section::before {
          content: '';
          position: absolute;
          top: -1px;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(200,169,110,0.4), transparent);
          opacity: 1;
        }

        .dark .services-section::before {
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent);
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .services-header {
          max-width: 540px;
          margin-bottom: 72px;
        }

        .services-label {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 20px;
          transition: color 0.3s ease;
        }

        .dark .services-label {
          color: #22d3ee;
        }

        .services-title {
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 700;
          line-height: 1.1;
          color: #0f172a;
          margin: 0 0 20px;
          letter-spacing: -0.02em;
          transition: color 0.3s ease;
        }

        .dark .services-title {
          color: #ffffff;
        }

        .services-title em {
          font-style: italic;
          color: #2563eb;
          transition: color 0.3s ease;
        }

        .dark .services-title em {
          color: #22d3ee;
        }

        .services-subtitle {
          font-size: 1rem;
          line-height: 1.7;
          color: #64748b;
          margin: 0;
          transition: color 0.3s ease;
        }

        .dark .services-subtitle {
          color: #cbd5e1;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(30,41,59,0.3);
          border: 1px solid rgba(30,41,59,0.3);
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        .dark .services-grid {
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.2);
        }

        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }

        .service-card {
          background: #ffffff;
          padding: 36px 32px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.5s ease, transform 0.5s ease, background-color 0.3s ease;
          cursor: default;
          position: relative;
          overflow: hidden;
        }

        .dark .service-card {
          background: rgba(59,130,246,0.05);
        }

        .service-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(59,130,246,0.03);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .dark .service-card::after {
          background: rgba(34,211,238,0.1);
        }

        .service-card:hover::after {
          opacity: 1;
        }

        .service-card--visible {
          opacity: 1;
          transform: translateY(0);
        }

        .service-card__icon {
          font-size: 28px;
          margin-bottom: 20px;
          display: block;
          line-height: 1;
        }

        .service-card__title {
          font-size: 1.15rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 12px;
          letter-spacing: -0.01em;
          transition: color 0.3s ease;
        }

        .dark .service-card__title {
          color: #ffffff;
        }

        .service-card__desc {
          font-size: 0.875rem;
          line-height: 1.65;
          color: #64748b;
          margin: 0 0 24px;
          transition: color 0.3s ease;
        }

        .dark .service-card__desc {
          color: #cbd5e1;
        }

        .service-card__features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .service-card__feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          color: #64748b;
          letter-spacing: 0.01em;
          transition: color 0.3s ease;
        }

        .dark .service-card__feature {
          color: #94a3b8;
        }

        .service-card__dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          flex-shrink: 0;
          opacity: 0.8;
        }
      `}</style>
    </section>
  );
}
