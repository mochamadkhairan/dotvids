import { useRef, useEffect, useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const serviceOptions = [
  "Video Production",
  "Motion Graphics",
  "Brand Film",
  "Social Content",
  "Event Coverage",
  "Post Production",
  "Lainnya",
];

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulasi submit — ganti dengan endpoint aktual kamu
    await new Promise((res) => setTimeout(res, 1500));
    setStatus("success");
  };

  return (
    <section id="contact" ref={sectionRef} className="contact-section">
      <div className="contact-container">

        {/* Left — info */}
        <div className={`contact-info ${visible ? "contact-info--visible" : ""}`}>
          <span className="contact-label">Get In Touch</span>
          <h2 className="contact-title">
            Siap mulai <br />
            <em>proyek bareng?</em>
          </h2>
          <p className="contact-desc">
            Ceritakan visi kamu — kami siap bantu wujudkan dalam bentuk visual yang tidak terlupakan.
          </p>

          <div className="contact-channels">
            {[
              { icon: "✉", label: "Email", value: "hello@dotvids.id" },
              { icon: "◎", label: "Instagram", value: "@dotvids.id" },
              { icon: "◷", label: "Response time", value: "≤ 24 jam" },
            ].map((ch) => (
              <div key={ch.label} className="contact-channel">
                <span className="contact-channel__icon">{ch.icon}</span>
                <div>
                  <span className="contact-channel__label">{ch.label}</span>
                  <span className="contact-channel__value">{ch.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className={`contact-form-wrap ${visible ? "contact-form-wrap--visible" : ""}`}>
          {status === "success" ? (
            <div className="contact-success">
              <span className="contact-success__icon">✓</span>
              <h3>Pesan terkirim!</h3>
              <p>Terima kasih sudah menghubungi kami. Tim DotVids akan membalas dalam 24 jam.</p>
              <button
                className="contact-btn"
                onClick={() => {
                  setStatus("idle");
                  setForm({ name: "", email: "", company: "", service: "", message: "" });
                }}
              >
                Kirim pesan lain
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label className="contact-form__label">Nama *</label>
                  <input
                    className="contact-form__input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nama lengkap"
                    required
                  />
                </div>
                <div className="contact-form__field">
                  <label className="contact-form__label">Email *</label>
                  <input
                    className="contact-form__input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@company.com"
                    required
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label className="contact-form__label">Perusahaan</label>
                  <input
                    className="contact-form__input"
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Nama perusahaan"
                  />
                </div>
                <div className="contact-form__field">
                  <label className="contact-form__label">Layanan</label>
                  <select
                    className="contact-form__input contact-form__select"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Pilih layanan...</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label">Ceritakan proyekmu *</label>
                <textarea
                  className="contact-form__input contact-form__textarea"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Apa yang ingin kamu buat? Brief singkat, timeline, budget — semakin detail semakin baik."
                  required
                  rows={5}
                />
              </div>

              <button
                type="submit"
                className={`contact-btn ${status === "loading" ? "contact-btn--loading" : ""}`}
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <span className="contact-btn__spinner" />
                ) : (
                  "Kirim Pesan →"
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 120px 0 80px;
          background: #ffffff;
          position: relative;
          transition: background-color 0.3s ease;
        }

        .dark .contact-section {
          background: #050810;
        }

        .contact-section::before {
          content: '';
          position: fixed;
          top: -1px;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent);
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: start;
        }

        @media (max-width: 860px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 56px;
          }
        }

        .contact-info {
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
          position: sticky;
          top: 80px;
        }

        .contact-info--visible {
          opacity: 1;
          transform: translateX(0);
        }

        .contact-label {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 20px;
          transition: color 0.3s ease;
        }

        .dark .contact-label {
          color: #22d3ee;
        }

        .contact-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 20px;
          line-height: 1.15;
          letter-spacing: -0.02em;
          transition: color 0.3s ease;
        }

        .dark .contact-title {
          color: #ffffff;
        }

        .contact-title em {
          font-style: italic;
          color: #2563eb;
          transition: color 0.3s ease;
        }

        .dark .contact-title em {
          color: #22d3ee;
        }

        .contact-desc {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #64748b;
          margin: 0 0 48px;
          transition: color 0.3s ease;
        }

        .dark .contact-desc {
          color: #94a3b8;
        }

        .contact-channels {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-channel {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .contact-channel__icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(37,99,235,0.3);
          color: #2563eb;
          font-size: 1rem;
          flex-shrink: 0;
          transition: border-color 0.3s ease, color 0.3s ease;
        }

        .dark .contact-channel__icon {
          border-color: rgba(34,211,238,0.3);
          color: #22d3ee;
        }

        .contact-channel > div {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .contact-channel__label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #94a3b8;
          transition: color 0.3s ease;
        }

        .dark .contact-channel__label {
          color: #64748b;
        }

        .contact-channel__value {
          font-size: 0.9rem;
          color: #404854;
          transition: color 0.3s ease;
        }

        .dark .contact-channel__value {
          color: #cbd5e1;
        }

        .contact-form-wrap {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s;
        }

        .contact-form-wrap--visible {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-form__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 560px) {
          .contact-form__row { grid-template-columns: 1fr; }
        }

        .contact-form__field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .contact-form__label {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #64748b;
          transition: color 0.3s ease;
        }

        .dark .contact-form__label {
          color: #94a3b8;
        }

        .contact-form__input {
          background: rgba(37,99,235,0.05);
          border: 1px solid rgba(37,99,235,0.2);
          color: #0f172a;
          padding: 12px 16px;
          font-size: 0.9rem;
          outline: none;
          font-family: inherit;
          transition: border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease;
          width: 100%;
          box-sizing: border-box;
        }

        .dark .contact-form__input {
          background: rgba(34,211,238,0.08);
          border-color: rgba(34,211,238,0.2);
          color: #ffffff;
        }

        .contact-form__input::placeholder {
          color: #cbd5e1;
          transition: color 0.2s ease;
        }

        .dark .contact-form__input::placeholder {
          color: #64748b;
        }

        .contact-form__input:focus {
          border-color: rgba(37,99,235,0.4);
        }

        .dark .contact-form__input:focus {
          border-color: rgba(34,211,238,0.4);
        }

        .contact-form__select {
          appearance: none;
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(37,99,235,0.4)' fill='none' stroke-width='1.5'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
        }

        .dark .contact-form__select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(34,211,238,0.4)' fill='none' stroke-width='1.5'/%3E%3C/svg%3E");
        }

        .contact-form__select option {
          background: #ffffff;
          color: #0f172a;
        }

        .dark .contact-form__select option {
          background: #1e293b;
          color: #ffffff;
        }

        .contact-form__textarea {
          resize: vertical;
          min-height: 140px;
        }

        .contact-btn {
          background: #2563eb;
          color: #ffffff;
          border: none;
          padding: 14px 32px;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          cursor: pointer;
          align-self: flex-start;
          font-family: inherit;
          transition: opacity 0.2s ease, transform 0.15s ease, background-color 0.2s ease;
          min-width: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dark .contact-btn {
          background: #22d3ee;
          color: #050810;
        }

        .contact-btn:hover {
          opacity: 0.88;
        }

        .dark .contact-btn:hover {
          opacity: 0.9;
        }

        .contact-btn:active {
          transform: scale(0.98);
        }

        .contact-btn--loading {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .contact-btn__spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(37,99,235,0.3);
          border-top-color: #2563eb;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        .dark .contact-btn__spinner {
          border-color: rgba(34,211,238,0.3);
          border-top-color: #22d3ee;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .contact-success {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          padding: 48px;
          border: 1px solid rgba(37,99,235,0.2);
          background: rgba(37,99,235,0.08);
          transition: border-color 0.3s ease, background-color 0.3s ease;
        }

        .dark .contact-success {
          border-color: rgba(34,211,238,0.2);
          background: rgba(34,211,238,0.08);
        }

        .contact-success__icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(37,99,235,0.15);
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .dark .contact-success__icon {
          background: rgba(34,211,238,0.15);
          color: #22d3ee;
        }

        .contact-success h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0;
          transition: color 0.3s ease;
        }

        .dark .contact-success h3 {
          color: #ffffff;
        }

        .contact-success p {
          font-size: 0.9rem;
          line-height: 1.65;
          color: #64748b;
          margin: 0;
          transition: color 0.3s ease;
        }

        .dark .contact-success p {
          color: #94a3b8;
        }
      `}</style>
    </section>
  );
}
