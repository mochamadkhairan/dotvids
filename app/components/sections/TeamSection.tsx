import { useRef, useEffect, useState } from "react";
import { teamMembers as team } from "~/data/team";

export function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
    <section id="team" ref={sectionRef} className="team-section">
      <div className="team-container">
        <div className="team-header">
          <span className="team-label">Our People</span>
          <h2 className="team-title">
            Tim di balik <em>setiap frame</em>
          </h2>
        </div>

        <div className="team-grid">
          {team.map((member, i) => (
            <div
              key={member.id}
              className={`team-card ${visible ? "team-card--visible" : ""} ${activeIndex === i ? "team-card--active" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div
                className="team-card__avatar"
                style={{ borderColor: member.accentColor }}
              >
                <span
                  className="team-card__initials"
                  style={{ color: member.accentColor }}
                >
                  {member.initials}
                </span>
              </div>

              <div className="team-card__info">
                <h3 className="team-card__name">{member.name}</h3>
                <span
                  className="team-card__role"
                  style={{ color: member.accentColor }}
                >
                  {member.role}
                </span>
                <p className="team-card__bio">{member.bio}</p>
              </div>

              <div className="team-card__skills">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="team-card__skill"
                    style={{ borderColor: `${member.accentColor}33` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div
                className="team-card__line"
                style={{ background: member.accentColor }}
              />
            </div>
          ))}
        </div>

        {/* Bottom stat bar */}
        <div className={`team-stats ${visible ? "team-stats--visible" : ""}`}>
          {[
            { num: "10+", label: "Tahun Pengalaman" },
            { num: "200+", label: "Proyek Selesai" },
            { num: "80+", label: "Klien Puas" },
            { num: "15", label: "Tim Profesional" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="team-stat"
              style={{ transitionDelay: `${400 + i * 80}ms` }}
            >
              <span className="team-stat__num">{stat.num}</span>
              <span className="team-stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .team-section {
          padding: 120px 0;
          background: #ffffff;
          position: relative;
          transition: background-color 0.3s ease;
        }

        .dark .team-section {
          background: #050810;
        }

        .team-section::before {
          content: '';
          position: absolute;
          top: -1px;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent);
        }

        .team-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .team-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .team-label {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 16px;
          transition: color 0.3s ease;
        }

        .dark .team-label {
          color: #22d3ee;
        }

        .team-title {
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.02em;
          line-height: 1.15;
          transition: color 0.3s ease;
        }

        .dark .team-title {
          color: #ffffff;
        }

        .team-title em {
          font-style: italic;
          color: #2563eb;
          transition: color 0.3s ease;
        }

        .dark .team-title em {
          color: #22d3ee;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 64px;
        }

        @media (max-width: 960px) {
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 560px) {
          .team-grid { grid-template-columns: 1fr; }
        }

        .team-card {
          background: #ffffff;
          border: 1px solid rgba(30,41,59,0.2);
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.55s ease, transform 0.55s ease, border-color 0.3s ease, background-color 0.3s ease;
          cursor: default;
        }

        .dark .team-card {
          background: rgba(59,130,246,0.05);
          border-color: rgba(59,130,246,0.2);
        }

        .team-card--visible {
          opacity: 1;
          transform: translateY(0);
        }

        .team-card--active {
          border-color: rgba(59,130,246,0.4);
        }

        .dark .team-card--active {
          border-color: rgba(34,211,238,0.4);
        }

        .team-card__line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .team-card--active .team-card__line {
          opacity: 1;
        }

        .team-card__avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1.5px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(37,99,235,0.08);
          transition: background-color 0.3s ease;
        }

        .dark .team-card__avatar {
          background: rgba(34,211,238,0.1);
        }

        .team-card__initials {
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .team-card__info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .team-card__name {
          font-size: 1rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.01em;
          transition: color 0.3s ease;
        }

        .dark .team-card__name {
          color: #ffffff;
        }

        .team-card__role {
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .team-card__bio {
          font-size: 0.83rem;
          line-height: 1.6;
          color: #64748b;
          margin: 8px 0 0;
          transition: color 0.3s ease;
        }

        .dark .team-card__bio {
          color: #94a3b8;
        }

        .team-card__skills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
        }

        .team-card__skill {
          font-size: 0.72rem;
          padding: 3px 10px;
          border: 1px solid;
          color: #64748b;
          letter-spacing: 0.02em;
          transition: color 0.3s ease;
        }

        .dark .team-card__skill {
          color: #94a3b8;
        }

        .team-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(30,41,59,0.2);
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease, background-color 0.3s ease, border-color 0.3s ease;
        }

        .dark .team-stats {
          background: rgba(59,130,246,0.05);
          border-color: rgba(59,130,246,0.2);
        }

        .team-stats--visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 640px) {
          .team-stats { grid-template-columns: repeat(2, 1fr); }
        }

        .team-stat {
          padding: 32px 24px;
          border-right: 1px solid rgba(30,41,59,0.2);
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: border-color 0.3s ease;
        }

        .dark .team-stat {
          border-right-color: rgba(59,130,246,0.2);
        }

        .team-stat:last-child {
          border-right: none;
        }

        .team-stat__num {
          font-size: 2rem;
          font-weight: 700;
          color: #2563eb;
          letter-spacing: -0.03em;
          line-height: 1;
          transition: color 0.3s ease;
        }

        .dark .team-stat__num {
          color: #22d3ee;
        }

        .team-stat__label {
          font-size: 0.78rem;
          color: #64748b;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }

        .dark .team-stat__label {
          color: #94a3b8;
        }
      `}</style>
    </section>
  );
}
