import type { Metadata } from "next";
import { CheckCircle, ArrowRight, Paintbrush, Compass, LayoutGrid, Layers, Sparkles, Monitor } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Professional Web Design Company | High-Converting UI/UX | SPACIVA",
  description: "SPACIVA designs high-converting, modern, and fully custom website layouts, SaaS dashboard wireframes, and premium mobile interfaces. Ahmedabad, India.",
  keywords: [
    "web design company Ahmedabad",
    "UI/UX design agency India",
    "custom web layout designer",
    "SaaS dashboard design",
    "mobile app UI designer India",
    "Figma design company"
  ],
};

const capabilities = [
  {
    icon: Compass,
    title: "Brand UI/UX Strategy",
    desc: "We analyze your audience, map out conversion-first sitemaps, and structure highly engaging typography, spacing rules, and color palettes that make your company stand out instantly.",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    icon: Paintbrush,
    title: "Custom High-Fidelity Layouts",
    desc: "100% bespoke Figma layouts. No generic themes or structural templates. We craft responsive web grids designed to present your value proposition clearly on both mobile and desktop screens.",
    color: "bg-violet-500/10 text-violet-500 border-violet-500/20",
  },
  {
    icon: LayoutGrid,
    title: "Complex Dashboard & SaaS Wireframing",
    desc: "Design detailed analytics platforms, user account modules, and multi-tenant admin grids. Focus on usability, intuitive navigation, and clean information hierarchy.",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  {
    icon: Layers,
    title: "Interactive Prototypes",
    desc: "We deliver functional, clickable Figma prototypes so you can experience user paths, verify interactive states, and approve screens before our engineers write any code.",
    color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
];

const pillars = [
  { name: "Conversion Optimization", desc: "Every layout we design features clear visual hierarchies, prominent call-to-actions, and smooth visitor pathways to double sales inquiries." },
  { name: "Aesthetic Sophistication", desc: "Tinted premium whites, high-end glassmorphism borders, and customized iconography. Your brand will feel exceptionally high-end." },
  { name: "Design System Delivery", desc: "Complete Figma UI Kits on hand-off, including spacing tokens, unified components, dark/light variants, and fully documented type scales." },
  { name: "Developer-Ready Handoff", desc: "No guess-work. Layouts are mathematically aligned to Tailwind CSS grid guidelines, resulting in pixel-perfect final code builds." },
];

export default function WebDesignPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Background radial highlight */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-1), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              SPACIVA Design Studio
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
            >
              Premium Web Design &amp; <br className="hidden sm:inline" />
              High-Converting <span className="gradient-text">UI/UX Layouts</span>
            </h1>
            <p className="text-sm sm:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We design custom visual products, SaaS wireframes, and corporate landing layouts. Turn first impressions into immediate customer trust through mathematically precise, aesthetic digital interfaces.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg hover:shadow-violet/30 hover:scale-[1.02] transition-all duration-300"
              >
                Start My Custom Design <ArrowRight size={15} />
              </a>
              <a
                href="/solutions"
                className="text-sm font-semibold transition-colors duration-200 hover:text-[var(--text-primary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                View Selected Work →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Intro */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-20" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Design as an Investment, Not an Overhead</h2>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                A generic template dilutes your business credibility. We treat design as your brand&apos;s strongest conversion leverage: structuring beautiful, highly refined visual grids that turn casual clicks into corporate sales accounts.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {capabilities.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.05}>
              <div
                className="p-6 rounded-2xl border h-full transition-all duration-300 hover:-translate-y-0.5 bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)]"
              >
                <div className={`p-3 rounded-xl border w-fit mb-4 ${c.color}`}>
                  <c.icon size={18} />
                </div>
                <h3 className="text-sm font-bold mb-2.5" style={{ color: "var(--text-primary)" }}>{c.title}</h3>
                <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{c.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Pillars */}
        <AnimatedSection>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Our Design Principles</h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Clean, sophisticated layouts engineered to increase sales interactions.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-20">
            {pillars.map((item) => (
              <div key={item.name} className="p-6 rounded-2xl border bg-[var(--bg-card)] border-[var(--border-subtle)]">
                <h3 className="text-xs font-bold mb-2 uppercase text-electric-blue tracking-widest">{item.name}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Call To Action */}
        <AnimatedSection>
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Collaborate with Our Lead UI Designer</h3>
            <p className="text-sm max-w-xl mx-auto mb-6" style={{ color: "var(--text-secondary)" }}>
              Share your business model. We&apos;ll outline visual reference pathways, content grids, and present clickable wireframes within 5 days.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Request a Free Design Consult <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
