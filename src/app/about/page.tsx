import type { Metadata } from "next";
import { CheckCircle, ArrowRight, ShieldCheck, Cpu, Hourglass, Users, Star, GraduationCap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About SPACIVA | AI Software Agency Based in Ahmedabad, India",
  description: "SPACIVA is an Ahmedabad-based AI software agency engineering custom AI automation, CRM platforms, LMS systems, and web applications for businesses in India, UAE, UK, and USA.",
  keywords: [
    "about SPACIVA",
    "AI agency Ahmedabad",
    "software development company India",
    "custom software agency India",
    "who is SPACIVA",
    "SPACIVA AI solutions"
  ],
};

const values = [
  {
    icon: ShieldCheck,
    title: "Custom Over Cookie-Cutter",
    desc: "We never use templates, off-the-shelf themes, or drag-and-drop builders. Everything is engineered from scratch to fit your specific business — because generic tools produce generic results.",
  },
  {
    icon: Hourglass,
    title: "Ownership First",
    desc: "Every client leaves with full source code, documentation, and deployment access. We don't hold your business hostage with proprietary platforms or recurring license fees.",
  },
  {
    icon: Users,
    title: "Transparency",
    desc: "Fixed-price scoping. Weekly progress demos. Direct communication with the engineers building your system. No account managers translating between you and the people doing the work.",
  },
  {
    icon: Cpu,
    title: "Measurable Outcomes",
    desc: "We define success metrics before we write a single line of code. ROI, time saved, conversion rates, search rankings — we track what matters and report on it honestly.",
  },
];

const expertise = [
  { category: "AI & Machine Learning", items: ["OpenAI API", "Anthropic Claude API", "LangChain", "LlamaIndex", "Hugging Face", "Pinecone", "pgvector", "Python", "FastAPI"] },
  { category: "Frontend", items: ["Next.js 15/16", "React 19", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python FastAPI", "PostgreSQL", "MongoDB", "Prisma ORM"] },
  { category: "Cloud & DevOps", items: ["AWS (EC2, S3, Lambda)", "Vercel", "Docker", "GitHub Actions", "CI/CD"] },
  { category: "SEO Tools", items: ["Google Search Console", "Screaming Frog", "Google Analytics", "Next.js Metadata API", "JSON-LD Schema"] },
];

const stats = [
  { value: "40+", label: "Enterprise projects delivered" },
  { value: "3.2x", label: "Average ROI delivered to clients" },
  { value: "98%", label: "Client retention rate" },
  { value: "6+", label: "Countries served" },
  { value: "48h", label: "First response turnaround guarantee" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-1), transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-2), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-24">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              Our Agency
            </span>
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
            >
              Engineered for Enterprise <br />
              <span className="gradient-text font-black">Quality & Trust</span>
            </h1>
            <p
              className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              SPACIVA builds advanced technical solutions that solve complex operations challenges. We combine AI engineering with robust software ecosystems to deliver measurable impact.
            </p>
          </div>
        </AnimatedSection>

        {/* Our Story Block */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-24" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Our Story</h2>
            <div className="space-y-4 text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <p>
                SPACIVA was founded with a single belief: that enterprise-grade AI and software should be accessible to every ambitious business — not just Fortune 500 companies with eight-figure IT budgets.
              </p>
              <p>
                Based in Ahmedabad, Gujarat, we started by building the tools we wished existed for growing businesses: CRM systems that matched real sales processes, AI agents that actually reduced workload, and LMS platforms that employees completed voluntarily.
              </p>
              <p>
                Today, we serve clients across India, the UAE, the United Kingdom, and the United States — delivering 40+ enterprise projects with a 98% client retention rate.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Our Values */}
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Our Core Values</h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>The principles guiding our engineers, product designers, and strategists daily.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-electric-blue border border-blue-500/20">
                    <v.icon size={16} />
                  </div>
                  <h3 className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{v.title}</h3>
                </div>
                <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Technical Expertise */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-24" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-8 text-center" style={{ color: "var(--text-primary)" }}>
              Our Technical Expertise
            </h2>
            <div className="space-y-6">
              {expertise.map((exp) => (
                <div key={exp.category} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 border-b pb-4 last:border-b-0 last:pb-0" style={{ borderColor: "var(--border-subtle)" }}>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-electric-blue sm:w-1/4 shrink-0">{exp.category}</h3>
                  <div className="flex flex-wrap gap-1.5 flex-1">
                    {exp.items.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full border bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-[var(--border-subtle)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* By the Numbers Stats */}
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>By the Numbers</h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Proven track records of delivering enterprise velocity and robust quality.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-24">
            {stats.map((item) => (
              <div key={item.label} className="text-center p-5 rounded-2xl border bg-[var(--bg-card)] border-[var(--border-subtle)] flex flex-col justify-center">
                <p className="text-2xl sm:text-3xl font-extrabold gradient-text mb-1">{item.value}</p>
                <p className="text-[10px] leading-tight font-semibold" style={{ color: "var(--text-secondary)" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Partner with SPACIVA</h3>
            <p className="text-sm max-w-xl mx-auto mb-6" style={{ color: "var(--text-secondary)" }}>
              Ready to automate your workloads or scale your customer databases? Let&apos;s talk.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Get in Touch <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
