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
          background: #0D0D0D;
          position: relative;
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
          color: #7EE8A2;
          margin-bottom: 20px;
        }

        .about-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 700;
          color: #F0EDE6;
          margin: 0 0 24px;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .about-title em {
          font-style: italic;
          color: #7EE8A2;
        }

        .about-lead {
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(240,237,230,0.7);
          margin: 0 0 16px;
        }

        .about-body {
          font-size: 0.9rem;
          line-height: 1.75;
          color: rgba(240,237,230,0.45);
          margin: 0 0 36px;
        }

        .about-tagline {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 24px;
          border-left: 2px solid #7EE8A2;
          background: rgba(126,232,162,0.04);
        }

        .about-tagline__mark {
          font-size: 3rem;
          line-height: 0.6;
          color: #7EE8A2;
          opacity: 0.5;
          flex-shrink: 0;
        }

        .about-tagline p {
          font-size: 1rem;
          font-style: italic;
          color: rgba(240,237,230,0.6);
          margin: 0;
          line-height: 1.6;
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
          border-bottom: 1px solid rgba(255,255,255,0.06);
          opacity: 0;
          transform: translateX(24px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }

        .about-value:first-child {
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .about-value--visible {
          opacity: 1;
          transform: translateX(0);
        }

        .about-value__num {
          font-size: 0.72rem;
          font-weight: 700;
          color: rgba(126,232,162,0.5);
          letter-spacing: 0.1em;
          flex-shrink: 0;
          padding-top: 4px;
          min-width: 24px;
        }

        .about-value__title {
          font-size: 1rem;
          font-weight: 600;
          color: #F0EDE6;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
        }

        .about-value__desc {
          font-size: 0.85rem;
          line-height: 1.65;
          color: rgba(240,237,230,0.4);
          margin: 0;
        }
      `}</style>
    </section>
  );
}
