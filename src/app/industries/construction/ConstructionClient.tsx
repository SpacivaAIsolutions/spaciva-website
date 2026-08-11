"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Brain, Cloud, Database, Zap, CheckCircle2, ChevronRight, BarChart, HardHat, Hammer, Map, ClipboardList, Briefcase, FileText, Truck, Users, ShieldAlert, MonitorSmartphone, Smartphone, Factory, MapPin, Search, ChevronDown, Wrench, FileSearch, Building2, Landmark, Building, LineChart } from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const CHALLENGES = [
  {
    title: "Project Delays",
    desc: "Poor planning and communication often cause missed deadlines and increased costs.",
    icon: Clock
  },
  {
    title: "Site Coordination",
    desc: "Managing contractors, engineers, suppliers, and field teams across multiple projects becomes difficult.",
    icon: MapPin
  },
  {
    title: "Budget Control",
    desc: "Tracking costs, procurement, invoices, and project spending requires centralized systems.",
    icon: LineChart
  },
  {
    title: "Equipment & Asset Tracking",
    desc: "Construction equipment needs continuous monitoring to reduce downtime and improve utilization.",
    icon: Truck
  },
  {
    title: "Workforce Management",
    desc: "Managing attendance, shifts, certifications, and productivity across multiple sites is challenging.",
    icon: Users
  },
  {
    title: "Safety & Compliance",
    desc: "Ensuring safety inspections, incident reporting, and regulatory compliance requires digital processes.",
    icon: ShieldAlert
  },
  {
    title: "Document Management",
    desc: "Blueprints, contracts, permits, and revisions must remain organized and accessible.",
    icon: FileText
  },
  {
    title: "Real-Time Visibility",
    desc: "Project managers need live dashboards showing progress, risks, costs, and resource allocation.",
    icon: BarChart
  }
];

const SOLUTIONS = [
  {
    title: "Construction Project Management System",
    desc: "Plan projects, assign tasks, monitor milestones, budgets, timelines, and team collaboration.",
    icon: Briefcase
  },
  {
    title: "Construction ERP",
    desc: "Manage procurement, finance, inventory, workforce, payroll, and project operations from one platform.",
    icon: Database
  },
  {
    title: "Contractor Management Portal",
    desc: "Manage subcontractors, onboarding, documentation, work orders, payments, and compliance.",
    icon: HardHat
  },
  {
    title: "Site Inspection App",
    desc: "Digital inspections, quality assurance, issue tracking, and reporting from mobile devices.",
    icon: ClipboardList
  },
  {
    title: "Material Management System",
    desc: "Track procurement, inventory, deliveries, suppliers, and material consumption.",
    icon: PackageOpen
  },
  {
    title: "Equipment Management Platform",
    desc: "Monitor equipment availability, maintenance schedules, utilization, and operating costs.",
    icon: Wrench
  },
  {
    title: "Workforce Management System",
    desc: "Attendance, shift scheduling, payroll integration, certifications, and workforce productivity.",
    icon: Users
  },
  {
    title: "Document Management System",
    desc: "Store contracts, blueprints, permits, RFIs, drawings, and project documentation securely.",
    icon: FileSearch
  },
  {
    title: "Tender & Bid Management",
    desc: "Manage bidding processes, vendor submissions, project estimates, and approvals.",
    icon: FileText
  },
  {
    title: "Executive Dashboard",
    desc: "Monitor project progress, financial performance, resource utilization, safety metrics, and KPIs.",
    icon: BarChart
  }
];

const AI_SOLUTIONS = [
  {
    title: "AI Progress Monitoring",
    desc: "Analyze project status using images, reports, and field data."
  },
  {
    title: "AI Cost Forecasting",
    desc: "Predict project costs and identify budget overruns before they occur."
  },
  {
    title: "AI Safety Assistant",
    desc: "Provide instant access to safety procedures, compliance guidelines, and incident reporting."
  },
  {
    title: "AI Document Intelligence",
    desc: "Extract information from contracts, drawings, invoices, and project documents."
  },
  {
    title: "AI Equipment Monitoring",
    desc: "Predict equipment maintenance needs and reduce downtime."
  },
  {
    title: "AI Project Assistant",
    desc: "Help project managers access schedules, documents, specifications, and project information."
  },
  {
    title: "AI Workforce Analytics",
    desc: "Track productivity, labor allocation, and workforce performance."
  },
  {
    title: "AI Executive Insights",
    desc: "Generate real-time project summaries and identify operational risks."
  }
];

const INDUSTRIES = [
  "Construction Companies",
  "Infrastructure Firms",
  "Civil Engineering Companies",
  "General Contractors",
  "Subcontractors",
  "Architects",
  "Engineering Consultants",
  "EPC Companies",
  "Commercial Builders",
  "Residential Builders",
  "Smart City Projects",
  "Government Infrastructure Projects"
];

const SERVICES = [
  "Custom Software Development",
  "AI & Machine Learning",
  "Web Engineering",
  "Mobile App Development",
  "Cloud & DevOps",
  "Data Engineering",
  "UI/UX Design",
  "API Integration"
];

const WHY_SPACIVA = [
  "Custom Construction Platforms",
  "AI-Driven Project Intelligence",
  "Cloud-Based Collaboration",
  "Mobile-First Field Operations",
  "Real-Time Reporting & Analytics",
  "Scalable Enterprise Architecture",
  "100% Code Ownership",
  "Long-Term Technology Partnership"
];

const KPIS = [
  "Project Completion Rate",
  "Budget Accuracy",
  "Equipment Utilization",
  "Workforce Productivity",
  "Safety Compliance",
  "Material Waste Reduction",
  "On-Time Delivery",
  "Customer Satisfaction"
];

const FAQS = [
  {
    q: "Can you build custom construction management software?",
    a: "Yes, we develop custom construction management platforms that integrate scheduling, budgeting, resource allocation, and field collaboration into a single system tailored to your unique workflows."
  },
  {
    q: "Do you develop contractor management platforms?",
    a: "Absolutely. We build secure portals to help you manage subcontractors, track their certifications, assign work orders, and process payments transparently."
  },
  {
    q: "Can AI improve construction project planning?",
    a: "Yes, AI can analyze historical project data to forecast costs, predict potential delays, and optimize resource allocation before ground is even broken."
  },
  {
    q: "Can you integrate BIM and existing ERP systems?",
    a: "Yes, we can integrate Building Information Modeling (BIM) software, accounting tools, and legacy ERP systems using robust API integrations."
  },
  {
    q: "Do you develop mobile apps for field teams?",
    a: "Yes, we build cross-platform mobile applications with offline capabilities so field engineers can submit daily reports, track time, and log issues from remote sites."
  },
  {
    q: "Can you digitize site inspections and safety reporting?",
    a: "Definitely. We replace paper-based forms with digital inspection apps that allow teams to capture photos, log GPS coordinates, and immediately route safety issues for resolution."
  },
  {
    q: "Do you modernize legacy construction software?",
    a: "Yes, we help construction and engineering firms migrate from outdated on-premise software to modern, secure, cloud-based architectures."
  },
  {
    q: "Do you provide long-term support and maintenance?",
    a: "Yes, we offer ongoing maintenance, server monitoring, security updates, and continuous feature enhancements to ensure your platform scales with your business."
  }
];

// Reusable custom icons missing from the import list
function Clock(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
}

function PackageOpen(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22v-9"/><path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 .93 1.67v9.52a1.93 1.93 0 0 1-.93 1.67l-4.2 2.36M8.83 2.21a1.67 1.67 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0-.93 1.67v9.52a1.93 1.93 0 0 0 .93 1.67l4.2 2.36"/><path d="M2.07 6.24l9.93 5.76"/><path d="M21.93 6.24L12 12"/><path d="M12 12l9.93-5.76"/><path d="M12 12L2.07 6.24"/></svg>
}

export default function ConstructionClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-slate-50 -z-10" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#7C3AED]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-sm font-semibold mb-6">
              <HardHat className="w-4 h-4" />
              Construction & Infrastructure Technology
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Build Smarter Construction Operations with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#7C3AED]">Intelligent Digital</span> Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed">
              Spaciva develops AI-powered construction software that helps contractors, builders, infrastructure companies, and engineering firms manage projects, streamline operations, improve collaboration, and deliver projects on time and within budget.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <AnimatedCtaButton
                href="/contact"
                label="Book a Construction Consultation"
                hoverLabel="Let's Talk Business"
              />
              <a href="#solutions" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 border border-slate-200 font-bold text-center hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Explore Construction Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Construction Challenges We Help Solve</h2>
            <p className="text-lg text-slate-600">The construction industry requires unified platforms to connect the office with the field and control complex project variables.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHALLENGES.map((challenge, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <challenge.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">{challenge.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Construction Software Solutions We Build</h2>
            <p className="text-lg text-slate-300">We develop enterprise-grade software to manage every phase of the construction lifecycle, from planning to handover.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map((sol, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <sol.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{sol.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[260px] h-[260px] md:w-[500px] md:h-[500px] bg-[#7C3AED]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold mb-6">
                <Brain className="w-4 h-4" />
                Artificial Intelligence
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">AI-Powered Construction Technology</h2>
              <p className="text-lg text-slate-600 mb-8">
                Leverage AI to monitor site progress, automate document processing, forecast costs, and enhance site safety.
              </p>
              <div className="flex items-center gap-3 text-slate-900 font-bold">
                <CheckCircle2 className="text-[#7C3AED]" /> Automated Progress Tracking
              </div>
              <div className="flex items-center gap-3 text-slate-900 font-bold mt-4">
                <CheckCircle2 className="text-[#7C3AED]" /> AI Project Intelligence
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <div className="grid sm:grid-cols-2 gap-6">
                {AI_SOLUTIONS.map((ai, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-purple-100 transition-all"
                  >
                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                      <Zap className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{ai.title}</h3>
                    <p className="text-sm text-slate-600">{ai.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries & Services */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            
            <div>
              <h2 className="text-3xl font-extrabold mb-8 text-slate-900">Businesses We Serve</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {INDUSTRIES.map((ind, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-700 font-medium bg-white px-4 py-3 rounded-xl border border-slate-100 shadow-sm">
                    <ChevronRight className="w-4 h-4 text-blue-500 shrink-0" /> {ind}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold mb-8 text-slate-900">Our Services</h2>
              <div className="flex flex-wrap gap-3">
                {SERVICES.map((srv, idx) => (
                  <div key={idx} className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm font-bold text-slate-800 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-default">
                    {srv}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-slate-900">Development Process</h2>
          
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-stretch sm:items-center gap-3 sm:gap-4 relative">
            {["Business Discovery", "Construction Workflow Analysis", "Solution Architecture", "UX/UI Design", "Software Development", "Testing", "Deployment", "Training", "Continuous Support"].map((step, idx, arr) => (
              <div key={idx} className="flex items-center w-full sm:w-auto">
                <div className="bg-slate-900 text-white font-bold px-5 sm:px-6 py-3 rounded-full shadow-lg text-sm w-full sm:w-auto text-center sm:whitespace-nowrap">
                  {step}
                </div>
                {idx < arr.length - 1 && (
                  <ArrowRight className="hidden sm:block w-5 h-5 mx-2 text-slate-300 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Spaciva & Tech Stack */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Why Construction Companies Choose Spaciva</h2>
              <div className="space-y-4">
                {WHY_SPACIVA.map((why, idx) => (
                  <div key={idx} className="flex gap-4 items-center p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="font-bold text-slate-200">{why}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Technology Stack</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Frontend</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["Next.js", "React", "Flutter"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-semibold">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Backend & Database</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["Node.js", "Python", "Go", ".NET", "PostgreSQL", "MongoDB", "Redis"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-semibold">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">AI & Integration</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["OpenAI", "Claude", "LangChain", "Computer Vision", "Autodesk APIs", "BIM Platforms", "Google Maps", "GPS Services"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-semibold">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Cloud</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["AWS", "Azure", "Docker", "Kubernetes"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-semibold">{t}</span>)}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-2xl font-bold mb-10 text-white/90 uppercase tracking-wider">Key Business Metrics We Optimize</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {KPIS.map((kpi, idx) => (
              <span key={idx} className="px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm font-bold text-white shadow-lg">
                {kpi}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "border rounded-2xl overflow-hidden transition-all duration-300",
                  openFaq === idx ? "border-blue-500 bg-blue-50/50" : "border-slate-200 bg-white hover:border-blue-200"
                )}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 font-bold text-slate-900"><span className="min-w-0 text-sm sm:text-base leading-snug">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0", openFaq === idx && "rotate-180 text-blue-600")} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="px-6 pb-5 text-slate-600 leading-relaxed text-sm">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">Ready to Digitize Your Construction Operations?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Whether you're managing infrastructure projects, commercial construction, or residential developments, Spaciva builds intelligent software that improves collaboration, increases project visibility, and helps you deliver projects more efficiently.
          </p>
          <AnimatedCtaButton
            href="/contact"
            label="Build Your Construction Platform"
            hoverLabel="Let's Talk Business"
            size="lg"
            className="mx-auto"
          />
        </div>
      </section>

      {/* Related Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Solutions</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Construction Management System</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Contractor Management Portal</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Site Inspection App</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Equipment Management Platform</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Workforce Management System</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Executive Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Custom Software Development</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">AI & Machine Learning</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Mobile Development</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Cloud & DevOps</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Data Engineering</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Industries</h4>
              <ul className="space-y-4">
                <li><a href="/industries/real-estate" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Real Estate</a></li>
                <li><a href="/industries/manufacturing" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Manufacturing</a></li>
                <li><a href="/industries/energy-utilities" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Energy & Utilities</a></li>
                <li><a href="/industries/logistics" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Logistics</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Long Form Content */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 prose prose-lg prose-slate text-slate-600">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Construction Software Development & AI-Powered Project Management Solutions</h2>
          <p className="mb-6 leading-relaxed">
            The construction industry is becoming increasingly digital as companies adopt technology to improve project planning, site coordination, cost control, and operational efficiency. Modern construction businesses need software that connects office teams, field engineers, contractors, suppliers, and clients through a single digital platform.
          </p>
          <p className="mb-6 leading-relaxed">
            Spaciva develops custom <strong>construction software</strong> for contractors, infrastructure companies, engineering firms, architects, and project developers. Our expertise includes <strong>construction management systems</strong>, <strong>contractor portals</strong>, <strong>construction ERP platforms</strong>, <strong>workforce management software</strong>, <strong>site inspection applications</strong>, material management systems, equipment tracking solutions, and AI-powered analytics dashboards.
          </p>
          <p className="mb-6 leading-relaxed">
            Our solutions help construction businesses manage projects, monitor budgets, coordinate field teams, track equipment, digitize inspections, and automate reporting. By integrating cloud infrastructure, AI, mobile technology, analytics, and document management, we enable construction companies to improve collaboration, reduce delays, minimize operational risks, and make faster business decisions.
          </p>
          <p className="leading-relaxed">
            Whether you're building a construction ERP, digitizing field operations, or creating a smart infrastructure platform, Spaciva delivers scalable, secure, and future-ready software designed to support complex construction workflows.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
