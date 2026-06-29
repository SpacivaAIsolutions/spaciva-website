import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "E-Commerce Website Development | Custom Storefronts | SPACIVA",
  description: "SPACIVA designs and builds custom e-commerce web applications, headless Shopify platforms, headless WooCommerce integrations, and custom subscription models.",
  alternates: {
    canonical: "/ecommerce-website-development",
  },
};

const capabilities = [
  {
    title: "Headless Commerce (Next.js & Shopify)",
    desc: "Achieve sub-second page loads. We separate your frontend (Next.js/React) from your store backend (Shopify, BigCommerce), yielding 100/100 Google PageSpeed scores that maximize ad click ROI.",
  },
  {
    title: "Secure Custom Checkouts",
    desc: "Avoid cart abandonment. Build custom, single-page, responsive checkout paths with integrated fraud detection, recurring sub-models, and localized pricing.",
  },
  {
    title: "ERP & Inventory Synchronization",
    desc: "Real-time sync. Connect your custom storefront directly to logistics warehouses, Salesforce CRM, custom ERP systems, and automated billing software with zero latency.",
  },
  {
    title: "Loyalty & Subscription Logic",
    desc: "Create bespoke recurring subscription systems, loyalty points calculators, automated referral programs, and personalized checkout discounting logic built from scratch.",
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
    <main className="min-h-screen pt-36 pb-24 bg-white px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Hero Section */}
        <div className="mb-32 md:mb-48 max-w-5xl">
          <span className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-6">E-Commerce Solutions</span>
          <h1 className="text-5xl sm:text-7xl md:text-[80px] font-bold tracking-tightest leading-[1.05] text-[#0f172a] mb-8">
            Enterprise <br />
            <span className="italic text-slate-400 font-serif">Storefronts.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed mb-12">
            We engineer custom headless shopping architectures, secure subscription platforms, and high-performance checkout pipelines designed to lift conversions and maximize lifetime order values (LTV).
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-5 bg-[#0f172a] text-white text-[15px] font-bold rounded-sm transition-all hover:bg-slate-800 shrink-0"
          >
            Inquire About Custom Commerce
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 mb-32 md:mb-48 border-t border-slate-200 pt-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-8">Headless Architecture</h2>
          </div>
          <div className="lg:col-span-7 space-y-8 text-lg md:text-xl leading-relaxed text-slate-500 font-medium">
            <p>
              Traditional themes bloat code and slow down mobile shoppers. By disconnecting your design layer from the transaction layer, you gain absolute branding freedom, extreme speed advantages, and seamless multi-channel product synchronization.
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
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-16">Scalability & ROI</h2>
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
                Design a High-Performance <br/><span className="italic text-slate-400 font-serif">Storefront.</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium max-w-xl">
                Work with our lead headless developer to audit your current store metrics, design migration maps, and plan speed lifts.
              </p>
            </div>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-[#0f172a] text-white text-[15px] font-bold rounded-sm transition-all hover:bg-slate-800 shrink-0"
            >
              Book an E-Commerce Scoping Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
