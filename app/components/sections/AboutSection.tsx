import { useRef, useEffect, useState } from "react";

const values = [
  {
    symbol: "01",
    title: "Visual-First",
    desc: "Kami percaya bahwa gambar berbicara lebih keras dari kata-kata. Setiap keputusan kreatif kami dimulai dari pertanyaan: apa yang ingin audiens rasakan?",
  },
  {
    symbol: "02",
    title: "Storytelling Otentik",
    desc: "Tidak ada template. Setiap brand punya cerita unik — tugas kami adalah menemukannya dan menyampaikannya dengan cara yang paling jujur.",
  },
  {
    symbol: "03",
    title: "Detail Tanpa Kompromi",
    desc: "Dari pemilihan font di motion graphic hingga timing cut di editing — kami obsesif terhadap detail karena hal kecil yang membuat perbedaan besar.",
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about-section">
      <div className="about-container">

        {/* Left col — text content */}
        <div className={`about-content ${visible ? "about-content--visible" : ""}`}>
          <span className="about-label">About Us</span>

          <h2 className="about-title">
            Kami bukan <br />
            sekadar <em>production house</em>
          </h2>

          <p className="about-lead">
            DotVids lahir dari keyakinan bahwa setiap brand layak punya cerita visual yang kuat — bukan hanya yang punya budget besar.
          </p>

          <p className="about-body">
            Kami adalah tim kreatif yang terobsesi dengan visual storytelling. Sejak 2014, kami telah membantu puluhan brand — dari startup hingga perusahaan multinasional — untuk berkomunikasi lebih baik melalui video.
          </p>

          <div className="about-tagline">
            <span className="about-tagline__mark">"</span>
            <p>Every frame tells a story. We make sure it's yours.</p>
          </div>
        </div>

        {/* Right col — values */}
        <div className="about-values">
          {values.map((val, i) => (
            <div
              key={val.symbol}
              className={`about-value ${visible ? "about-value--visible" : ""}`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              <span className="about-value__num">{val.symbol}</span>
              <div>
                <h3 className="about-value__title">{val.title}</h3>
                <p className="about-value__desc">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 120px 0;
          background: #ffffff;
          position: relative;
          transition: background-color 0.3s ease;
        }

        .dark .about-section {
          background: #050810;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: -1px;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(126,232,162,0.3), transparent);
        }

        .dark .about-section::before {
          background: linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent);
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        @media (max-width: 860px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 56px;
          }
        }

        .about-content {
          opacity: 0;
          transform: translateX(-24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .about-content--visible {
          opacity: 1;
          transform: translateX(0);
        }

        .about-label {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 20px;
          transition: color 0.3s ease;
        }

        .dark .about-label {
          color: #22d3ee;
        }

        .about-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 24px;
          line-height: 1.15;
          letter-spacing: -0.02em;
          transition: color 0.3s ease;
        }

        .dark .about-title {
          color: #ffffff;
        }

        .about-title em {
          font-style: italic;
          color: #2563eb;
          transition: color 0.3s ease;
        }

        .dark .about-title em {
          color: #22d3ee;
        }

        .about-lead {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #404854;
          margin: 0 0 16px;
          transition: color 0.3s ease;
        }

        .dark .about-lead {
          color: #cbd5e1;
        }

        .about-body {
          font-size: 0.9rem;
          line-height: 1.75;
          color: #64748b;
          margin: 0 0 36px;
          transition: color 0.3s ease;
        }

        .dark .about-body {
          color: #94a3b8;
        }

        .about-tagline {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 24px;
          border-left: 2px solid #2563eb;
          background: rgba(37,99,235,0.05);
          transition: border-color 0.3s ease, background-color 0.3s ease;
        }

        .dark .about-tagline {
          border-left-color: #22d3ee;
          background: rgba(34,211,238,0.08);
        }

        .about-tagline__mark {
          font-size: 3rem;
          line-height: 0.6;
          color: #2563eb;
          opacity: 0.5;
          flex-shrink: 0;
          transition: color 0.3s ease;
        }

        .dark .about-tagline__mark {
          color: #22d3ee;
        }

        .about-tagline p {
          font-size: 1rem;
          font-style: italic;
          color: #475569;
          margin: 0;
          line-height: 1.6;
          transition: color 0.3s ease;
        }

        .dark .about-tagline p {
          color: #cbd5e1;
        }

        .about-values {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .about-value {
          display: flex;
          gap: 24px;
          padding: 28px 0;
          border-bottom: 1px solid rgba(30,41,59,0.2);
          opacity: 0;
          transform: translateX(24px);
          transition: opacity 0.55s ease, transform 0.55s ease, border-color 0.3s ease;
        }

        .dark .about-value {
          border-bottom-color: rgba(59,130,246,0.2);
        }

        .about-value:first-child {
          border-top: 1px solid rgba(30,41,59,0.2);
        }

        .dark .about-value:first-child {
          border-top-color: rgba(59,130,246,0.2);
        }

        .about-value--visible {
          opacity: 1;
          transform: translateX(0);
        }

        .about-value__num {
          font-size: 0.72rem;
          font-weight: 700;
          color: rgba(37,99,235,0.6);
          letter-spacing: 0.1em;
          flex-shrink: 0;
          padding-top: 4px;
          min-width: 24px;
          transition: color 0.3s ease;
        }

        .dark .about-value__num {
          color: rgba(34,211,238,0.7);
        }

        .about-value__title {
          font-size: 1rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
          transition: color 0.3s ease;
        }

        .dark .about-value__title {
          color: #ffffff;
        }

        .about-value__desc {
          font-size: 0.85rem;
          line-height: 1.65;
          color: #64748b;
          margin: 0;
          transition: color 0.3s ease;
        }

        .dark .about-value__desc {
          color: #94a3b8;
        }
      `}</style>
    </section>
  );
}
