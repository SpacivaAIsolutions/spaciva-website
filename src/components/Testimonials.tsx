"use client";

import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote: "SPACIVA helped us redesign our funnel and improve acquisition quality. We saw a clear uplift in conversions and a much stronger user journey overall.",
    name: "Himanshu",
    role: "Co-founder",
    company: "Wildmind AI",
    initial: "H",
    stars: 5,
  },
  {
    quote: "Their SEO work was structured, fast, and measurable. Rankings and organic traffic improved significantly, and we started getting consistent inbound leads.",
    name: "Neelesh Patel",
    role: "Founder",
    company: "Unoloft",
    initial: "N",
    stars: 5,
  },
  {
    quote: "They understood our niche and executed content and campaigns that actually reached the right audience. The growth in reach and engagement was excellent.",
    name: "Vivek Patel",
    role: "Creator",
    company: "Vachnamrut AI",
    initial: "V",
    stars: 5,
  },
  {
    quote: "SPACIVA delivered better quality leads with smart targeting and clear creative direction. Results were consistent and communication was always smooth.",
    name: "Jay Suthar",
    role: "Director",
    company: "Sidhraj Developers",
    initial: "J",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-center" style={{ color: "var(--color-electric-blue)" }}>
            Client Stories
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
          >
            Trusted by growing businesses
          </h2>
          <p className="text-sm max-w-lg mx-auto text-center mb-16 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Real results from real clients — businesses that partnered with SPACIVA and saw measurable growth.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.08}>
              <div
                className="p-6 rounded-2xl border h-full flex flex-col transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                  boxShadow: "var(--shadow-sm)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-md)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-sm)")}
              >
                <Stars count={t.stars} />

                <p className="text-[13px] leading-relaxed flex-1 mb-5" style={{ color: "var(--text-secondary)" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{ background: "var(--bg-navy)" }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>{t.name}</p>
                    <p className="text-[10px] mt-0.5" style={{ color: "var(--text-muted)" }}>{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
