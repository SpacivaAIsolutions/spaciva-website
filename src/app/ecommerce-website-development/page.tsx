import type { Metadata } from "next";
import { CheckCircle, ArrowRight, ShoppingCart, ShieldCheck, Zap, Database, Percent, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "E-Commerce Website Development | Custom Storefronts | SPACIVA",
  description: "SPACIVA designs and builds custom e-commerce web applications, headless Shopify platforms, headless WooCommerce integrations, and custom subscription models.",
  keywords: [
    "custom e-commerce development",
    "headless commerce developer",
    "Shopify React frontend builder",
    "e-commerce web development India",
    "subscription platform development",
    "Next.js commerce company"
  ],
};

const capabilities = [
  {
    icon: ShoppingCart,
    title: "Headless Commerce (Next.js & Shopify)",
    desc: "Achieve sub-second page loads. We separate your frontend (Next.js/React) from your store backend (Shopify, BigCommerce), yielding 100/100 Google PageSpeed scores that maximize ad click ROI.",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Secure Custom Checkouts",
    desc: "Avoid cart abandonment. Build custom, single-page, responsive checkout checkout paths with integrated fraud detection, recurring sub-models, and localized pricing.",
    color: "bg-violet-500/10 text-violet-500 border-violet-500/20",
  },
  {
    icon: Database,
    title: "ERP & Inventory Synchronization",
    desc: "Real-time sync. Connect your custom storefront directly to logistics warehouses, Salesforce CRM, custom ERP systems, and automated billing software with zero latency.",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  {
    icon: Percent,
    title: "Loyalty & Subscription Logic",
    desc: "Create bespoke recurring subscription systems, loyalty points calculators, automated referral programs, and personalized checkout discounting logic built from scratch.",
    color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
];

const pillars = [
  { name: "Ultra-Fast Page Speeds", desc: "A 100ms lag reduces conversions by 7%. We build lightweight static-rendered storefronts that load instantly, raising your standard store conversion rates." },
  { name: "Dynamic Merchandising", desc: "Show automated cross-sell triggers, personalized bundles, and smart relative recommendations driven by our in-house machine learning models." },
  { name: "Uncompromised Data Security", desc: "Secure SSL, tokenized credit-card gateways, automated PCI compliance, and robust sanitization that prevents injections and unauthorized checkout leaks." },
  { name: "Advanced Product Filtering", desc: "Instant, server-side faceted search and filtering (ElasticSearch/Typesense) that helps customers find exactly what they want in less than 2 seconds." },
];

export default function EcommerceDevelopmentPage() {
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
              SPACIVA E-Commerce Solutions
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
            >
              Enterprise Storefronts &amp; <br className="hidden sm:inline" />
              Custom <span className="gradient-text">E-Commerce Development</span>
            </h1>
            <p className="text-sm sm:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We engineer custom headless shopping architectures, secure subscription platforms, and high-performance checkout pipelines designed to lift conversions and maximize lifetime order values (LTV).
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg hover:shadow-violet/30 hover:scale-[1.02] transition-all duration-300"
              >
                Inquire About Custom Commerce <ArrowRight size={15} />
              </a>
              <a
                href="/solutions"
                className="text-sm font-semibold transition-colors duration-200 hover:text-[var(--text-primary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                Learn About Headless Benefits →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Intro */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-20" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Why Choose Custom Headless Architecture?</h2>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Traditional themes bloat code and slow down mobile shoppers. By disconnecting your design layer from the transaction layer, you gain absolute branding freedom, extreme speed advantages, and seamless multi-channel product synchronization.
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
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Engineered for Scalability &amp; ROI</h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Our core design and logic metrics keep store transaction pipes fully operational and frictionless.</p>
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
            <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Design a High-Performance Storefront</h3>
            <p className="text-sm max-w-xl mx-auto mb-6" style={{ color: "var(--text-secondary)" }}>
              Work with our lead headless developer to audit your current store metrics, design migration maps, and plan high-performance speed lifts.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Book an E-Commerce Scoping Call <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
