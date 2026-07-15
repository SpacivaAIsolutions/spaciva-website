import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Company India | Next.js & React Experts | SPACIVA Ahmedabad",
  description: "SPACIVA builds high-performance Next.js web applications, dashboards, and portals from Ahmedabad, India. Server-side rendering, CI/CD pipelines, and mobile-first design.",
  alternates: {
    canonical: "/web-development-company-india",
  },
};

const J = "'Cabinet Grotesk', sans-serif";
const I = "'Geist Sans', sans-serif";

const capabilities = [
  {
    title: "Custom Web Application Development",
    desc: "From complex SaaS dashboards to multi-role portals, we build full-stack web applications tailored to your business logic. No templates — pure custom engineering with clean, documented code.",
  },
  {
    title: "Next.js & React Development",
    desc: "We specialize in Next.js App Router with server-side rendering (SSR) and static site generation (SSG) for lightning-fast page loads and top Core Web Vitals scores.",
  },
  {
    title: "API Development & Integrations",
    desc: "We build secure REST and GraphQL APIs optimized for low latency. We integrate with payment gateways, communication tools, analytics platforms, and any third-party service.",
  },
  {
    title: "Dashboard & Admin Panel Development",
    desc: "Data-rich dashboards with live charts, filterable tables, role-based access, and exportable reports. Built for internal teams who need clarity and speed in their daily operations.",
  },
  {
    title: "Mobile-First Responsive Design",
    desc: "Every interface we build is designed mobile-first and tested across devices and screen sizes. Your users get a flawless experience whether on a smartphone or desktop.",
  },
  {
    title: "DevOps & Deployment",
    desc: "We set up CI/CD pipelines with GitHub Actions, Docker containerization, and cloud deployment on AWS, Vercel, or Netlify. Automated testing ensures stable deployments.",
  },
];

const techStack = [
  { category: "Frontend", items: ["Next.js 15/16", "React 19", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "FastAPI", "REST APIs", "GraphQL", "WebSockets"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM"] },
  { category: "Cloud & DevOps", items: ["AWS", "Vercel", "Docker", "GitHub Actions", "CI/CD"] },
];

export default function WebDevelopmentIndiaPage() {
  return (
    <main className="theme-redesign relative min-h-screen pt-36 pb-24 bg-[#F7F6F2] px-5 lg:px-10 text-[#0E0E0C]" style={{ fontFamily: I }}>
      {/* Dot matrix background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(14,14,12,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-24 max-w-4xl pt-12">
          <span className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
            <span className="text-xs font-semibold text-[#FF4D00] uppercase tracking-[0.14em]" style={{ fontFamily: I }}>
              Web Engineering
            </span>
          </span>
          <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight text-[#0E0E0C] mb-8" style={{ fontFamily: J }}>
            High-Performance <br />
            <span className="italic font-light text-[#6B6A65]">Web Applications.</span>
          </h1>
          <p className="text-[#6B6A65] text-lg sm:text-xl leading-relaxed max-w-2xl mb-12" style={{ fontFamily: I }}>
            We build custom web apps and portals using Next.js 15, React 19, and serverless cloud infrastructure — engineered for speed, reliability, and measurable business outcomes.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-6 py-4 bg-[#0E0E0C] text-[#F7F6F2] hover:bg-[#FF4D00] transition-colors rounded-full text-xs font-semibold tracking-wide"
            style={{ fontFamily: J }}
          >
            Start Your Project
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-28 border-t border-black/[0.07] pt-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0E0E0C]" style={{ fontFamily: J }}>Built to Scale</h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-[#6B6A65]" style={{ fontFamily: I }}>
            <p>
              Whether you need a complex SaaS platform, an internal enterprise portal, or an API-driven e-commerce architecture, we engineer web solutions from the ground up to handle high traffic and complex logic.
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-28 border-t border-black/[0.07] pt-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0E0E0C] mb-16" style={{ fontFamily: J }}>Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {capabilities.map((c, i) => (
              <div key={c.title} className="flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold text-[#FF4D00] w-4" style={{ fontFamily: I }}>0{i + 1}</span>
                  <h3 className="text-xl font-bold tracking-tight text-[#0E0E0C]" style={{ fontFamily: J }}>{c.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-[#6B6A65] pl-8" style={{ fontFamily: I }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-28 border-t border-black/[0.07] pt-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0E0E0C] mb-16" style={{ fontFamily: J }}>Modern Technology Stack</h2>
          <div className="flex flex-col gap-10">
            {techStack.map((exp) => (
              <div key={exp.category} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-b border-black/[0.06] pb-8 last:border-0">
                <div className="md:col-span-4">
                  <h3 className="text-lg font-bold tracking-tight text-[#0E0E0C]" style={{ fontFamily: J }}>{exp.category}</h3>
                </div>
                <div className="md:col-span-8 flex flex-wrap gap-x-8 gap-y-3">
                  {exp.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#FF4D00]" />
                      <span className="text-sm text-[#6B6A65]" style={{ fontFamily: I }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-black/[0.07] pt-20 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0E0E0C] mb-6 leading-tight" style={{ fontFamily: J }}>
                Start Your <br /><span className="italic font-light text-[#6B6A65]">Web Project.</span>
              </h2>
              <p className="text-[#6B6A65] text-sm leading-relaxed max-w-xl" style={{ fontFamily: I }}>
                Let's build an incredibly fast Next.js system tailored to your custom business logic.
              </p>
            </div>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-6 py-4 bg-[#0E0E0C] text-[#F7F6F2] hover:bg-[#FF4D00] transition-colors rounded-full text-xs font-semibold tracking-wide shrink-0"
              style={{ fontFamily: J }}
            >
              Inquire About Web Development
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
