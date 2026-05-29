import type { Metadata } from "next";
import { CheckCircle, ArrowRight, Brain, Cpu, Database, Network, LineChart, Code } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "AI/ML Development Company | Custom Machine Learning Solutions | SPACIVA",
  description: "SPACIVA engineers custom AI & Machine Learning solutions, predictive models, neural networks, and computer vision systems. Ahmedabad, India.",
  keywords: [
    "AI/ML development company India",
    "custom machine learning solutions",
    "predictive analytics development",
    "deep learning company India",
    "neural networks developer",
    "AI software company Ahmedabad"
  ],
};

const capabilities = [
  {
    icon: Brain,
    title: "Predictive Analytics & Modelling",
    desc: "Train machine learning models on historical datasets to forecast market trends, predict customer churn, optimize pricing models, and identify operational risks before they impact your business.",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    icon: Network,
    title: "Deep Learning & Neural Networks",
    desc: "Architect custom neural networks (CNNs, RNNs) for complex pattern recognition, natural language processing, audio translation, and multi-modal data synthesis.",
    color: "bg-violet-500/10 text-violet-500 border-violet-500/20",
  },
  {
    icon: Database,
    title: "Custom Data Pipeline Engineering",
    desc: "Build secure, automated ETL (Extract, Transform, Load) pipelines to ingest raw data, sanitize features, handle vector embeddings, and continuously retrain production ML models safely.",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  {
    icon: Cpu,
    title: "On-Premise & Edge AI Deployment",
    desc: "Deploy lightweight, quantized ML models directly on edge devices, local servers, or private clouds. Maintain absolute data privacy and achieve sub-millisecond offline response speeds.",
    color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
  {
    icon: LineChart,
    title: "Recommendation Engines",
    desc: "Develop hyper-personalized content and product recommendation algorithms tailored to user behavior, increase customer engagement, and boost e-commerce average order values (AOV).",
    color: "bg-rose-500/10 text-rose-500 border-rose-500/20",
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
              SPACIVA AI/ML Engineering
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
            >
              Enterprise AI &amp; Machine Learning <br className="hidden sm:inline" />
              Products <span className="gradient-text">Engineered from Scratch</span>
            </h1>
            <p className="text-sm sm:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We design, train, and deploy production-ready predictive models, neural networks, and computer vision systems. Turn raw operational data into your company&apos;s strongest strategic asset.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg hover:shadow-violet/30 hover:scale-[1.02] transition-all duration-300"
              >
                Inquire About AI/ML Solutions <ArrowRight size={15} />
              </a>
              <a
                href="/solutions"
                className="text-sm font-semibold transition-colors duration-200 hover:text-[var(--text-primary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                See Core Capabilities →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Intro */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-20" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Machine Learning That Delivers Actionable Value</h2>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                We avoid generic SaaS wrappers. Our engineers build custom datasets, design bespoke neural structures, and host systems securely on scalable cloud architectures (AWS/Vercel/Docker) with 100% full source code ownership.
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

        {/* Industries We Serve */}
        <AnimatedSection>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Practical Applications</h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Secure pattern-matching and forecasting models built for diverse industries.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-20">
            {useCases.map((item) => (
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
            <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Co-Engineer Your Machine Learning Product</h3>
            <p className="text-sm max-w-xl mx-auto mb-6" style={{ color: "var(--text-secondary)" }}>
              Connect with a senior ML engineer to scope your models, compute requirements, and deployment containerization maps.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Book an ML Scoping Call <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
