import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "AI/ML Development Company | Custom Machine Learning Solutions | SPACIVA",
  description: "SPACIVA engineers custom AI & Machine Learning solutions, predictive models, neural networks, and computer vision systems.",
  alternates: {
    canonical: "/ai-ml-development",
  },
};

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
    <main className="min-h-screen pt-36 pb-24 bg-white px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Hero Section */}
        <div className="mb-32 md:mb-48 max-w-5xl">
          <span className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-6">AI/ML Engineering</span>
          <h1 className="text-5xl sm:text-7xl md:text-[80px] font-bold tracking-tightest leading-[1.05] text-[#0f172a] mb-8">
            Predictive Models <br />
            <span className="italic text-slate-400 font-serif">Engineered from Scratch.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed mb-12">
            We design, train, and deploy production-ready predictive models, neural networks, and computer vision systems. Turn raw operational data into your company's strongest strategic asset.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-5 bg-[#0f172a] text-white text-[15px] font-bold rounded-sm transition-all hover:bg-slate-800 shrink-0"
          >
            Inquire About AI/ML Solutions
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 mb-32 md:mb-48 border-t border-slate-200 pt-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-8">Actionable Value</h2>
          </div>
          <div className="lg:col-span-7 space-y-8 text-lg md:text-xl leading-relaxed text-slate-500 font-medium">
            <p>
              We avoid generic SaaS wrappers. Our engineers build custom datasets, design bespoke neural structures, and host systems securely on scalable cloud architectures (AWS/Vercel/Docker) with 100% full source code ownership.
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
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-16">Practical Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((item) => (
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
                Co-Engineer Your <br/><span className="italic text-slate-400 font-serif">ML Product.</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium max-w-xl">
                Connect with a senior ML engineer to scope your models, compute requirements, and deployment maps.
              </p>
            </div>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-[#0f172a] text-white text-[15px] font-bold rounded-sm transition-all hover:bg-slate-800 shrink-0"
            >
              Book a Scoping Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
