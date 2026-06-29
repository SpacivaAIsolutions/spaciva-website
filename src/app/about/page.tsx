import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About SPACIVA | AI Software Agency Based in Ahmedabad, India",
  description: "SPACIVA is an Ahmedabad-based AI software agency engineering custom AI automation, CRM platforms, LMS systems, and web applications.",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    title: "Custom Over Cookie-Cutter",
    desc: "We never use templates or drag-and-drop builders. Everything is engineered from scratch to fit your specific business — because generic tools produce generic results.",
  },
  {
    title: "Ownership First",
    desc: "Every client leaves with full source code, documentation, and deployment access. We don't hold your business hostage with proprietary platforms or recurring license fees.",
  },
  {
    title: "Transparency",
    desc: "Fixed-price scoping. Weekly progress demos. Direct communication with the engineers building your system. No account managers translating between you and the people doing the work.",
  },
  {
    title: "Measurable Outcomes",
    desc: "We define success metrics before we write a single line of code. ROI, time saved, conversion rates, search rankings — we track what matters and report on it honestly.",
  },
];

const expertise = [
  { category: "AI & Machine Learning", items: ["OpenAI", "Anthropic", "LangChain", "Pinecone", "Python", "FastAPI"] },
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "MongoDB", "Prisma ORM"] },
  { category: "Cloud & DevOps", items: ["AWS", "Vercel", "Docker", "CI/CD Pipelines"] },
];

const stats = [
  { value: "40+", label: "Enterprise Projects Delivered" },
  { value: "3.2x", label: "Average ROI Delivered" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "48h", label: "Response Guarantee" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-36 pb-24 bg-white px-6">
      <div className="max-w-[1400px] mx-auto">

        {/* Hero Section */}
        <div className="mb-32 md:mb-48 max-w-4xl">
          <span className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-6">Our Agency</span>
          <h1 className="text-5xl sm:text-7xl md:text-[80px] font-bold tracking-tightest leading-[1.05] text-[#0f172a] mb-8">
            Engineered for <br />
            <span className="italic text-slate-400 font-serif">Enterprise Quality.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            SPACIVA builds advanced technical solutions that solve complex operations challenges. We combine AI engineering with robust software ecosystems to deliver measurable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 mb-32 md:mb-48 border-t border-slate-200 pt-16">
          {/* Story Column */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-8">Our Story</h2>
          </div>
          <div className="lg:col-span-7 space-y-8 text-lg md:text-xl leading-relaxed text-slate-500 font-medium">
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

        {/* Stats Section */}
        <div className="mb-32 md:mb-48">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col border-l border-slate-200 pl-6">
                <span className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-2">{stat.value}</span>
                <span className="text-sm font-bold tracking-widest uppercase text-slate-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-32 md:mb-48 border-t border-slate-200 pt-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-16">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {values.map((v, i) => (
              <div key={v.title} className="flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold text-slate-400 w-4">0{i + 1}</span>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">{v.title}</h3>
                </div>
                <p className="text-lg text-slate-500 font-medium leading-relaxed pl-8">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="mb-32 md:mb-48 border-t border-slate-200 pt-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-16">Technical Stack</h2>
          <div className="flex flex-col gap-12">
            {expertise.map((exp) => (
              <div key={exp.category} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-b border-slate-100 pb-12 last:border-0">
                <div className="md:col-span-4">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900">{exp.category}</h3>
                </div>
                <div className="md:col-span-8 flex flex-wrap gap-x-8 gap-y-4">
                  {exp.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-slate-300" />
                      <span className="text-lg text-slate-500 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-slate-200 pt-24 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tightest text-[#0f172a] mb-6">
                Ready to <span className="italic text-slate-400 font-serif">build?</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium max-w-xl">
                Let's discuss how we can automate your operations and scale your software infrastructure.
              </p>
            </div>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-[#0f172a] text-white text-[15px] font-bold rounded-sm transition-all hover:bg-slate-800 shrink-0"
            >
              Get in Touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
