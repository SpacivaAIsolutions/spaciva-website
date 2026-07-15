import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Activity,
  ShoppingCart,
  Box,
  GraduationCap,
  Truck,
  Megaphone,
  Compass,
  Car,
  Home,
  Utensils,
  Trophy,
  Factory,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap,
  Layers,
  Database
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

// Type definitions
interface ProblemSolution {
  painPoint: string;
  consequence: string;
  resolution: string;
}

interface IndustryData {
  title: string;
  metaDesc: string;
  keywords: string[];
  name: string;
  headline: string;
  subheadline: string;
  icon: any;
  overview: string;
  problems: ProblemSolution[];
  solutions: { title: string; desc: string }[];
  impactMetric: { value: string; label: string };
  techStack: string[];
}

// 12 Industries Data Dictionary
const industries: Record<string, IndustryData> = {
  healthcare: {
    title: "Custom Healthcare Software Development | HIPAA Compliant | SPACIVA",
    metaDesc: "SPACIVA engineers custom secure, HIPAA-compliant healthcare software, medical QMS, CAPA platforms, patient portals, and automated clinical workflows.",
    keywords: ["healthcare software development", "medical QMS system", "HIPAA compliant software", "clinical workflow automation", "pharmaceutical quality management"],
    name: "Healthcare & Pharmaceuticals",
    headline: "Secure, HIPAA-Compliant Healthcare Product Engineering",
    subheadline: "We build medical-grade Quality Management Systems (QMS), automated compliance workflows, and patient data portals with 100% data auditability.",
    icon: Activity,
    overview: "Modern healthcare and pharma operations demand absolute reliability, complete data security, and flawless regulatory alignment. We bridge the gap between complex medical standards and highly usable, automated software systems.",
    problems: [
      {
        painPoint: "Struggling with manual CAPA (Corrective and Preventive Action) and clinical audit tracking.",
        consequence: "Results in high operational friction, lost audit trails, and extreme regulatory non-compliance risks.",
        resolution: "We build automated compliance dashboards that log audit steps in real-time with automated follow-ups."
      },
      {
        painPoint: "Patient records and clinical telemetry are locked in fragmented legacy databases.",
        consequence: "Delays decision-making and poses severe patient data privacy leak vulnerabilities.",
        resolution: "We engineer secure, central, HIPAA-compliant databases featuring end-to-end encryption."
      },
      {
        painPoint: "Doctors and lab quality controllers spend hours on repetitive manual documentation.",
        consequence: "Increases burn-out rates and introduces human-entry transcription errors in critical test results.",
        resolution: "We deploy AI-powered clinical report summarization tools and optical form character recognition."
      }
    ],
    solutions: [
      { title: "Compliant QMS Platforms", desc: "Digital systems managing standard operating procedures (SOPs), employee training logs, and equipment calibrations." },
      { title: "Interactive Patient Portals", desc: "User-friendly client hubs for telehealth bookings, direct laboratory telemetry downloads, and digital prescriptions." },
      { title: "Clinical Workflow Engines", desc: "Automate lab intake tasks, schedule patient check-ins, and orchestrate emergency room queues." }
    ],
    impactMetric: { value: "100%", label: "HIPAA & FDA CFR Part 11 Compliance Audits Passed" },
    techStack: ["Next.js", "Python / FastAPI", "AWS KMS", "PostgreSQL", "Docker"]
  },
  "logistics-transportation": {
    title: "Logistics & Transportation Software Development | SPACIVA",
    metaDesc: "SPACIVA engineers custom logistics tracking systems, route optimization software, dispatch dashboards, and warehouse management tools.",
    keywords: ["logistics software development", "route optimization tools", "custom fleet tracking", "warehouse management software"],
    name: "Logistics & Transportation",
    headline: "Intelligent Fleet, Route, & Logistics Engineering",
    subheadline: "We build real-time GPS tracking hubs, mathematical route planning engines, and automated warehouse dispatch software.",
    icon: Truck,
    overview: "Efficiency is everything in supply chain networks. We develop reliable, high-performance tracking and dispatch systems that minimize transport delays and maximize load utility.",
    problems: [
      {
        painPoint: "Dispatchers planning routes manually using spreadsheets and scattered maps.",
        consequence: "Leads to massive fuel waste, delayed deliveries, and low fleet capacity optimization.",
        resolution: "We integrate route-finding APIs (Mapbox, Google Maps) that calculate routes instantly."
      },
      {
        painPoint: "Warehouse teams lacking real-time visibility on incoming and outgoing freight loads.",
        consequence: "Triggers warehouse dock bottlenecks, costly trailer detention fees, and tracking errors.",
        resolution: "We build live, collaborative schedule boards displaying dock allocations and load updates."
      },
      {
        painPoint: "Drivers struggling with outdated, heavy mobile apps that crash and drain battery.",
        consequence: "Results in missing proof-of-delivery (PoD) signs, tracking gaps, and driver frustration.",
        resolution: "We develop ultra-lightweight progressive web apps (PWAs) that work seamlessly offline."
      }
    ],
    solutions: [
      { title: "Real-Time Fleet Dashboards", desc: "Live web dashboards map fleet vehicle telemetry, fuel consumption, speed alerts, and ETA updates." },
      { title: "Digital Proof of Delivery", desc: "Secure mobile client signature capture, photo upload confirmations, and automated invoicing on delivery." },
      { title: "Route Optimization Tools", desc: "Sophisticated algorithms that match multi-stop drop locations to minimize travel times and fuel consumption." }
    ],
    impactMetric: { value: "24%", label: "Average Reduction in Fleet Operational Fuel Costs" },
    techStack: ["React / Leaflet", "Go / Rust", "PostGIS", "Redis", "Mapbox APIs"]
  },
  "manufacturing-it-services": {
    title: "Manufacturing IT Services | Custom MES & IoT Solutions | SPACIVA",
    metaDesc: "SPACIVA develops custom manufacturing execution systems (MES), industrial IoT dashboards, quality control logs, and predictive maintenance portals.",
    keywords: ["manufacturing execution system", "industrial IoT software", "factory quality control", "predictive maintenance database"],
    name: "Manufacturing IT Services",
    headline: "Industrial IoT Dashboards & Factory Automation",
    subheadline: "We construct custom Manufacturing Execution Systems (MES), factory IoT data boards, and digital compliance quality control logs.",
    icon: Factory,
    overview: "Modern manufacturing thrives on data visibility. We bridge physical machines and digital dashboards, delivering execution and quality systems that keep assembly lines optimized.",
    problems: [
      {
        painPoint: "Factory managers tracking assembly line output and scrap rates using paper log sheets.",
        consequence: "Delays efficiency reporting by days, meaning problems are spotted only after wasting materials.",
        resolution: "We deploy live IoT dashboards showing actual machine counts, scrap rates, and efficiency rates."
      },
      {
        painPoint: "Unplanned machine breakdowns halting production and delaying crucial enterprise orders.",
        consequence: "Generates massive emergency mechanic fees and triggers heavy shipment delay penalties.",
        resolution: "We build predictive maintenance charts tracking vibrations and temperatures, flagging odd trends."
      },
      {
        painPoint: "Factory quality assurance (QA) reports scattered in mismatched filing cabinets.",
        consequence: "Dreads client QA audits and takes hours to track down historical raw material certificates.",
        resolution: "We construct digital QA logs tying component batches to tracking IDs with immediate lookup."
      }
    ],
    solutions: [
      { title: "Manufacturing Execution (MES)", desc: "Centralized web software tracking machine uptime, employee shifts, batch runs, and raw inventory counts." },
      { title: "Industrial IoT Boards", desc: "Real-time databases tracking hardware sensors telemetry (heat, vibration, cycle time) on active plant floors." },
      { title: "Traceability & QA Vaults", desc: "Digital inspection logs logging raw materials, batch certifications, and testing files securely." }
    ],
    impactMetric: { value: "OEE Up 14%", label: "Average Increase in Overall Equipment Effectiveness (OEE)" },
    techStack: ["Next.js / TypeScript", "Go", "InfluxDB / TimescaleDB", "MQTT Broker", "Docker"]
  }
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = industries[slug];
  if (!data) return {};

  return {
    title: `${data.title} | SPACIVA`,
    description: data.metaDesc,
    keywords: data.keywords,
    alternates: {
      canonical: `/industries/${slug}`,
    },
    openGraph: {
      title: `${data.title} | SPACIVA`,
      description: data.metaDesc,
      url: `https://spaciva.tech/industries/${slug}`,
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = industries[slug];

  if (!data) {
    notFound();
  }

  const IconComponent = data.icon;

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
          <div className="text-center mb-16">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              SPACIVA Industry Focus · {data.name}
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
            >
              {data.headline.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="gradient-text">{data.headline.split(" ").slice(-2).join(" ")}</span>
            </h1>
            <p className="text-sm sm:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {data.subheadline}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg hover:shadow-violet/30 hover:scale-[1.02] transition-all duration-300"
              >
                Inquire About Custom Solutions <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Overview Section */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-16" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-3 flex justify-center">
                <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-100/50 text-indigo-600">
                  <IconComponent size={54} />
                </div>
              </div>
              <div className="md:col-span-9 text-left">
                <h2 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>Industry Overview</h2>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {data.overview}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Problems We Solve Section (Problem-Led Content) */}
        <AnimatedSection>
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Client Friction Points We Solve</h2>
            <p className="text-sm max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              We don&apos;t just build features; we solve underlying structural business problems. Here is the actual operational friction we eliminate for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mb-16">
            {data.problems.map((prob, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border bg-white border-slate-200/60 shadow-sm hover:border-slate-300 transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="p-1 rounded bg-rose-50 text-rose-500 border border-rose-100">
                        <AlertTriangle size={14} />
                      </span>
                      <h4 className="text-[11.5px] uppercase font-bold text-rose-500 tracking-wider">The Problem</h4>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug mb-1">
                      {prob.painPoint}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed italic">
                      Consequence: {prob.consequence}
                    </p>
                  </div>
                  <div className="hidden md:block md:col-span-1 h-full border-r border-slate-100 self-stretch my-1" />
                  <div className="md:col-span-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="p-1 rounded bg-emerald-50 text-emerald-500 border border-emerald-100">
                        <CheckCircle2 size={14} />
                      </span>
                      <h4 className="text-[11.5px] uppercase font-bold text-emerald-500 tracking-wider">The SPACIVA Resolution</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {prob.resolution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Deliverable Solutions */}
        <AnimatedSection>
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Our Custom Capabilities</h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Core digital software and integrations we engineer for {data.name}.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {data.solutions.map((sol, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-[13px] font-bold text-slate-800 mb-2">{sol.title}</h3>
                  <p className="text-[11.5px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Results & Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          <div className="md:col-span-6 p-8 rounded-3xl border bg-slate-50 border-slate-200/60 flex flex-col justify-center items-center text-center">
            <span className="text-xs uppercase font-bold text-indigo-600 tracking-widest mb-2">Proven Track Record</span>
            <div className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-2 font-mono tracking-tight">{data.impactMetric.value}</div>
            <p className="text-[12px] text-slate-500 font-medium max-w-sm">{data.impactMetric.label}</p>
          </div>
          <div className="md:col-span-6 p-8 rounded-3xl border bg-white border-slate-200/60 flex flex-col justify-center text-left">
            <h3 className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-4">Core Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {data.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <AnimatedSection>
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Transform Your {data.name} Operations</h3>
            <p className="text-sm max-w-xl mx-auto mb-6" style={{ color: "var(--text-secondary)" }}>
              Work with our senior engineers and domain specialists to scope your requirements, draft databases layouts, and coordinate a secure rollout plan.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Book an Industry Discovery Call <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}

// Generate static params for Next.js static export/build optimizations
export function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}
