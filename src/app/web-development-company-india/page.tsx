import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Company India | Next.js & React Experts | SPACIVA Ahmedabad",
  description: "SPACIVA builds high-performance Next.js web applications, dashboards, and portals from Ahmedabad, India. Server-side rendering, CI/CD pipelines, and mobile-first design.",
  alternates: {
    canonical: "/web-development-company-india",
  },
};

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
    <main className="min-h-screen pt-36 pb-24 bg-white px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Hero Section */}
        <div className="mb-32 md:mb-48 max-w-5xl">
          <span className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-6">Web Engineering</span>
          <h1 className="text-5xl sm:text-7xl md:text-[80px] font-bold tracking-tightest leading-[1.05] text-[#0f172a] mb-8">
            High-Performance <br />
            <span className="italic text-slate-400 font-serif">Web Applications.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed mb-12">
            We build custom web apps and portals using Next.js 15, React 19, and serverless cloud infrastructure — engineered for speed, reliability, and measurable business outcomes.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-5 bg-[#0f172a] text-white text-[15px] font-bold rounded-sm transition-all hover:bg-slate-800 shrink-0"
          >
            Start Your Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 mb-32 md:mb-48 border-t border-slate-200 pt-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-8">Built to Scale</h2>
          </div>
          <div className="lg:col-span-7 space-y-8 text-lg md:text-xl leading-relaxed text-slate-500 font-medium">
            <p>
              Whether you need a complex SaaS platform, an internal enterprise portal, or an API-driven e-commerce architecture, we engineer web solutions from the ground up to handle high traffic and complex logic.
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-32 md:mb-48 border-t border-slate-200 pt-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-16">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {capabilities.map((c, i) => (
              <div key={c.title} className="flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold text-slate-400 w-4">0{i + 1}</span>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">{c.title}</h3>
                </div>
                <p className="text-lg text-slate-500 font-medium leading-relaxed pl-8">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-32 md:mb-48 border-t border-slate-200 pt-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-16">Modern Technology Stack</h2>
          <div className="flex flex-col gap-12">
            {techStack.map((exp) => (
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
                Start Your <br/><span className="italic text-slate-400 font-serif">Web Project.</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium max-w-xl">
                Let's build an incredibly fast Next.js system tailored to your custom business logic.
              </p>
            </div>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-[#0f172a] text-white text-[15px] font-bold rounded-sm transition-all hover:bg-slate-800 shrink-0"
            >
              Inquire About Web Development
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
