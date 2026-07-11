import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About SPACIVA | AI Software Agency Based in Ahmedabad, India",
  description: "SPACIVA is an Ahmedabad-based AI software agency engineering custom AI automation, CRM platforms, LMS systems, and web applications.",
  alternates: {
    canonical: "/about",
  },
};

const J = "'Cabinet Grotesk', sans-serif";
const I = "'Geist Sans', sans-serif";

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
  { value: "12+", label: "Custom Solutions Delivered" },
  { value: "10+", label: "Businesses Supported" },
  { value: "100%", label: "Code Ownership" },
  { value: "24h", label: "Response Guarantee" },
];

export default function AboutPage() {
  return (
    <main className="theme-redesign min-h-screen pt-28 pb-24 bg-[#F7F6F2] px-5 lg:px-10 text-[#0E0E0C]" style={{ fontFamily: I }}>
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="mb-24 max-w-4xl pt-16">
          <span className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
            <span
              className="text-xs font-semibold text-[#FF4D00] uppercase tracking-[0.14em]"
              style={{ fontFamily: I }}
            >
              Our Agency
            </span>
          </span>
          <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight text-[#0E0E0C] mb-8" style={{ fontFamily: J }}>
            Engineered for <br />
            <span className="italic font-light text-[#6B6A65]">Bespoke Performance.</span>
          </h1>
          <p className="text-[#6B6A65] text-lg sm:text-xl leading-relaxed max-w-2xl" style={{ fontFamily: I }}>
            SPACIVA builds advanced technical solutions that solve complex operational challenges. We combine custom engineering with scalable cloud ecosystems to deliver measurable business impact.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-28 border-t border-black/[0.07] pt-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0E0E0C]" style={{ fontFamily: J }}>Our Story</h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-[#6B6A65]" style={{ fontFamily: I }}>
            <p>
              SPACIVA was founded with a single belief: that high-performance technical systems and custom automation should be built around the way a business operates—not the other way around.
            </p>
            <p>
              Based in Ahmedabad, Gujarat, we design and build tools that growing businesses actually use to operate and scale: custom management dashboards that match real sales processes, automation flows that eliminate repetitive manual entries, and websites engineered for conversion.
            </p>
            <p>
              Today, we serve partners globally — delivering fully owned, custom solutions with direct developer collaboration, predictable roadmaps, and fixed scopes.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-28">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col border-l border-black/[0.08] pl-6">
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0E0E0C] mb-2" style={{ fontFamily: J }}>{stat.value}</span>
                <span className="text-xs font-semibold text-[#6B6A65] uppercase tracking-wider" style={{ fontFamily: I }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-28 border-t border-black/[0.07] pt-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0E0E0C] mb-16" style={{ fontFamily: J }}>Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {values.map((v, i) => (
              <div key={v.title} className="p-8 bg-white border border-black/[0.06] rounded-3xl shadow-[0_1px_4px_rgba(0,0,0,0.02)] hover:border-[#FF4D00]/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold text-[#FF4D00]" style={{ fontFamily: I }}>0{i + 1}</span>
                  <h3 className="text-lg font-bold tracking-tight text-[#0E0E0C]" style={{ fontFamily: J }}>{v.title}</h3>
                </div>
                <p className="text-sm text-[#6B6A65] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="mb-28 border-t border-black/[0.07] pt-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0E0E0C] mb-16" style={{ fontFamily: J }}>Technical Capabilities</h2>
          <div className="flex flex-col gap-8">
            {expertise.map((exp) => (
              <div key={exp.category} className="grid grid-cols-1 md:grid-cols-12 gap-6 border-b border-black/[0.05] pb-8 last:border-0">
                <div className="md:col-span-4">
                  <h3 className="text-base font-bold text-[#0E0E0C]" style={{ fontFamily: J }}>{exp.category}</h3>
                </div>
                <div className="md:col-span-8 flex flex-wrap gap-2">
                  {exp.items.map((item) => (
                    <span key={item} className="text-xs px-3 py-1.5 rounded-full bg-white border border-black/[0.06] text-[#6B6A65] font-medium" style={{ fontFamily: I }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-black/[0.07] pt-20 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E0E0C] mb-4" style={{ fontFamily: J }}>
                Ready to <span className="italic font-light text-[#6B6A65]">build?</span>
              </h2>
              <p className="text-sm text-[#6B6A65] max-w-xl" style={{ fontFamily: I }}>
                Let&apos;s discuss how we can automate your operations and engineer your custom software.
              </p>
            </div>
            <a
              href="/contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white bg-[#0E0E0C] hover:bg-[#2a2a28] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-[15px]"
              style={{ fontFamily: J }}
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
