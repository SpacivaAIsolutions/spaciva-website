import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI/ML Development Company | Custom Machine Learning Solutions | SPACIVA",
  description: "SPACIVA engineers custom AI & Machine Learning solutions, predictive models, neural networks, and computer vision systems.",
  alternates: {
    canonical: "/ai-ml-development",
  },
};

const J = "'Cabinet Grotesk', sans-serif";
const I = "'Geist Sans', sans-serif";

const capabilities = [
  {
    title: "Predictive Analytics & Modelling",
    desc: "Train machine learning models on historical datasets to forecast market trends, predict customer churn, optimize pricing models, and identify operational risks before they impact your business.",
  },
  {
    title: "Deep Learning & Neural Networks",
    desc: "Architect custom neural networks (CNNs, RNNs) for complex pattern recognition, natural language processing, audio translation, and multi-modal data synthesis.",
  },
  {
    title: "Data Pipeline Engineering",
    desc: "Build secure, automated ETL pipelines to ingest raw data, sanitize features, handle vector embeddings, and continuously retrain production ML models safely.",
  },
  {
    title: "Edge AI Deployment",
    desc: "Deploy lightweight, quantized ML models directly on edge devices, local servers, or private clouds. Maintain absolute data privacy and achieve sub-millisecond offline response speeds.",
  },
];

const useCases = [
  { name: "Financial Risk Assessment", desc: "Predict loan default probabilities and automated fraud alerts using anomaly detection." },
  { name: "Predictive Maintenance", desc: "Monitor equipment IoT telemetry and predict structural failures before they halt production lines." },
  { name: "Computer Vision Systems", desc: "Automate visual inspections, object detection, and compliance QA checks on manufacturing floors." },
  { name: "Customer LTV Forecasting", desc: "Analyze onboarding touchpoints to predict customer lifetime value (LTV) and prioritize high-value pipelines." },
];

export default function AIMLDevelopmentPage() {
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
              AI/ML Engineering
            </span>
          </span>
          <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight text-[#0E0E0C] mb-8" style={{ fontFamily: J }}>
            Predictive Models <br />
            <span className="italic font-light text-[#6B6A65]">Engineered from Scratch.</span>
          </h1>
          <p className="text-[#6B6A65] text-lg sm:text-xl leading-relaxed max-w-2xl mb-12" style={{ fontFamily: I }}>
            We design, train, and deploy production-ready predictive models, neural networks, and computer vision systems. Turn raw operational data into your company's strongest strategic asset.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-6 py-4 bg-[#0E0E0C] text-[#F7F6F2] hover:bg-[#FF4D00] transition-colors rounded-full text-xs font-semibold tracking-wide"
            style={{ fontFamily: J }}
          >
            Inquire About AI/ML Solutions
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-28 border-t border-black/[0.07] pt-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0E0E0C]" style={{ fontFamily: J }}>Actionable Value</h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-[#6B6A65]" style={{ fontFamily: I }}>
            <p>
              We avoid generic SaaS wrappers. Our engineers build custom datasets, design bespoke neural structures, and host systems securely on scalable cloud architectures (AWS/Vercel/Docker) with 100% full source code ownership.
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
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0E0E0C] mb-16" style={{ fontFamily: J }}>Practical Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((item) => (
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
                Co-Engineer Your <br /><span className="italic font-light text-[#6B6A65]">ML Product.</span>
              </h2>
              <p className="text-[#6B6A65] text-sm leading-relaxed max-w-xl" style={{ fontFamily: I }}>
                Connect with a senior ML engineer to scope your models, compute requirements, and deployment maps.
              </p>
            </div>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-6 py-4 bg-[#0E0E0C] text-[#F7F6F2] hover:bg-[#FF4D00] transition-colors rounded-full text-xs font-semibold tracking-wide shrink-0"
              style={{ fontFamily: J }}
            >
              Book a Scoping Call
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
