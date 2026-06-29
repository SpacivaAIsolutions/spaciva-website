import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Web Design Company | High-Converting UI/UX | SPACIVA",
  description: "SPACIVA designs high-converting, modern, and fully custom website layouts, SaaS dashboard wireframes, and premium mobile interfaces.",
  alternates: {
    canonical: "/web-design",
  },
};

const capabilities = [
  {
    title: "Brand UI/UX Strategy",
    desc: "We analyze your audience, map out conversion-first sitemaps, and structure highly engaging typography, spacing rules, and color palettes that make your company stand out instantly.",
  },
  {
    title: "Custom High-Fidelity Layouts",
    desc: "100% bespoke Figma layouts. No generic themes or structural templates. We craft responsive web grids designed to present your value proposition clearly on both mobile and desktop screens.",
  },
  {
    title: "Dashboard & SaaS Wireframing",
    desc: "Design detailed analytics platforms, user account modules, and multi-tenant admin grids. Focus on usability, intuitive navigation, and clean information hierarchy.",
  },
  {
    title: "Interactive Prototypes",
    desc: "We deliver functional, clickable Figma prototypes so you can experience user paths, verify interactive states, and approve screens before our engineers write any code.",
  },
];

const pillars = [
  { name: "Conversion Optimization", desc: "Every layout we design features clear visual hierarchies, prominent call-to-actions, and smooth visitor pathways to double sales inquiries." },
  { name: "Aesthetic Sophistication", desc: "Tinted premium whites, high-end contrasts, and customized typography. Your brand will feel exceptionally high-end." },
  { name: "Design System Delivery", desc: "Complete Figma UI Kits on hand-off, including spacing tokens, unified components, dark/light variants, and fully documented type scales." },
  { name: "Developer-Ready Handoff", desc: "No guess-work. Layouts are mathematically aligned to Tailwind CSS grid guidelines, resulting in pixel-perfect final code builds." },
];

export default function WebDesignPage() {
  return (
    <main className="min-h-screen pt-36 pb-24 bg-white px-6">
      <div className="max-w-[1400px] mx-auto">

        {/* Hero Section */}
        <div className="mb-32 md:mb-48 max-w-5xl">
          <span className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-6">SPACIVA Design Studio</span>
          <h1 className="text-5xl sm:text-7xl md:text-[80px] font-bold tracking-tightest leading-[1.05] text-[#0f172a] mb-8">
            Premium Web <br />
            <span className="italic text-slate-400 font-serif">UI/UX Layouts.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed mb-12">
            We design custom visual products, SaaS wireframes, and corporate landing layouts. Turn first impressions into immediate customer trust through mathematically precise, aesthetic digital interfaces.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-5 bg-[#0f172a] text-white text-[15px] font-bold rounded-sm transition-all hover:bg-slate-800 shrink-0"
          >
            Start My Custom Design
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 mb-32 md:mb-48 border-t border-slate-200 pt-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-8">An Investment, Not an Overhead</h2>
          </div>
          <div className="lg:col-span-7 space-y-8 text-lg md:text-xl leading-relaxed text-slate-500 font-medium">
            <p>
              A generic template dilutes your business credibility. We treat design as your brand's strongest conversion leverage: structuring beautiful, highly refined visual grids that turn casual clicks into corporate sales accounts.
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

        {/* Practical Applications */}
        <div className="mb-32 md:mb-48 border-t border-slate-200 pt-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-16">Design Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((item) => (
              <div key={item.name} className="flex flex-col border-l border-slate-200 pl-6 py-2">
                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">{item.name}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-slate-200 pt-24 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tightest text-[#0f172a] mb-6">
                Collaborate with our <br /><span className="italic text-slate-400 font-serif">Lead UI Designer.</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium max-w-xl">
                Share your business model. We'll outline visual reference pathways, content grids, and present clickable wireframes within 5 days.
              </p>
            </div>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-[#0f172a] text-white text-[15px] font-bold rounded-sm transition-all hover:bg-slate-800 shrink-0"
            >
              Request a Design Consult
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
