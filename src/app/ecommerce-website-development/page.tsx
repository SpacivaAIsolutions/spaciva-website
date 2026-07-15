import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "E-Commerce Website Development | Custom Storefronts | SPACIVA",
  description: "SPACIVA designs and builds custom e-commerce web applications, headless Shopify platforms, headless WooCommerce integrations, and custom subscription models.",
  alternates: {
    canonical: "/ecommerce-website-development",
  },
};

const J = "'Cabinet Grotesk', sans-serif";
const I = "'Geist Sans', sans-serif";

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
              E-Commerce Solutions
            </span>
          </span>
          <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight text-[#0E0E0C] mb-8" style={{ fontFamily: J }}>
            Enterprise <br />
            <span className="italic font-light text-[#6B6A65]">Storefronts.</span>
          </h1>
          <p className="text-[#6B6A65] text-lg sm:text-xl leading-relaxed max-w-2xl mb-12" style={{ fontFamily: I }}>
            We engineer custom headless shopping architectures, secure subscription platforms, and high-performance checkout pipelines designed to lift conversions and maximize lifetime order values (LTV).
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-6 py-4 bg-[#0E0E0C] text-[#F7F6F2] hover:bg-[#FF4D00] transition-colors rounded-full text-xs font-semibold tracking-wide"
            style={{ fontFamily: J }}
          >
            Inquire About Custom Commerce
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-28 border-t border-black/[0.07] pt-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0E0E0C]" style={{ fontFamily: J }}>Headless Architecture</h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-[#6B6A65]" style={{ fontFamily: I }}>
            <p>
              Traditional themes bloat code and slow down mobile shoppers. By disconnecting your design layer from the transaction layer, you gain absolute branding freedom, extreme speed advantages, and seamless multi-channel product synchronization.
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

        {/* Practical Applications */}
        <div className="mb-28 border-t border-black/[0.07] pt-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0E0E0C] mb-16" style={{ fontFamily: J }}>Scalability & ROI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((item) => (
              <div key={item.name} className="flex flex-col border-l border-black/[0.08] pl-6 py-1">
                <h3 className="text-base font-bold text-[#0E0E0C] mb-2 tracking-tight" style={{ fontFamily: J }}>{item.name}</h3>
                <p className="text-xs text-[#6B6A65] leading-relaxed" style={{ fontFamily: I }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-black/[0.07] pt-20 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0E0E0C] mb-6 leading-tight" style={{ fontFamily: J }}>
                Design a High-Performance <br /><span className="italic font-light text-[#6B6A65]">Storefront.</span>
              </h2>
              <p className="text-[#6B6A65] text-sm leading-relaxed max-w-xl" style={{ fontFamily: I }}>
                Work with our lead headless developer to audit your current store metrics, design migration maps, and plan speed lifts.
              </p>
            </div>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-6 py-4 bg-[#0E0E0C] text-[#F7F6F2] hover:bg-[#FF4D00] transition-colors rounded-full text-xs font-semibold tracking-wide shrink-0"
              style={{ fontFamily: J }}
            >
              Book an E-Commerce Scoping Call
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
