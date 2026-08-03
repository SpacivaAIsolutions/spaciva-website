"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Factory, Activity, Brain, Server, Shield, Cloud, Smartphone, Database, Zap, CheckCircle2, ChevronRight, BarChart, Settings, Box, RefreshCw, Eye, ShieldCheck, Wrench, Package, FileText, Monitor, Cpu, ChevronDown, List, Layers, LineChart, MessageSquare, Briefcase, Calendar, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const CHALLENGES = [
  {
    title: "Production Inefficiencies",
    desc: "Manual workflows reduce productivity and increase operational costs.",
    icon: Activity
  },
  {
    title: "Inventory Mismanagement",
    desc: "Poor stock visibility causes shortages, overstocking, and production delays.",
    icon: Box
  },
  {
    title: "Lack of Real-Time Data",
    desc: "Decision-makers struggle without live production insights.",
    icon: Eye
  },
  {
    title: "Legacy Software",
    desc: "Disconnected systems make scaling difficult.",
    icon: Server
  },
  {
    title: "Equipment Downtime",
    desc: "Unexpected machine failures interrupt production.",
    icon: Wrench
  },
  {
    title: "Quality Control",
    desc: "Maintaining consistent product quality across production lines is difficult without digital monitoring.",
    icon: ShieldCheck
  },
  {
    title: "Supply Chain Complexity",
    desc: "Tracking suppliers, warehouses, and deliveries becomes increasingly difficult.",
    icon: RefreshCw
  },
  {
    title: "Manual Reporting",
    desc: "Teams spend hours preparing reports instead of improving production.",
    icon: FileText
  }
];

const SOLUTIONS = [
  {
    title: "Manufacturing ERP",
    desc: "Manage production, procurement, inventory, finance, and workforce from one centralized platform.",
    icon: Server
  },
  {
    title: "Manufacturing Execution System (MES)",
    desc: "Monitor production activities, machine utilization, and shop-floor performance in real time.",
    icon: Monitor
  },
  {
    title: "Production Planning System",
    desc: "Optimize schedules, resources, and production capacity.",
    icon: Calendar
  },
  {
    title: "Inventory Management",
    desc: "Track raw materials, warehouse inventory, finished goods, and procurement.",
    icon: Package
  },
  {
    title: "Warehouse Management System",
    desc: "Improve storage efficiency, barcode tracking, and dispatch operations.",
    icon: Box
  },
  {
    title: "Quality Management Software",
    desc: "Digital inspections, quality audits, compliance, and defect tracking.",
    icon: ShieldCheck
  },
  {
    title: "Supply Chain Platform",
    desc: "Supplier management, logistics visibility, and procurement automation.",
    icon: RefreshCw
  },
  {
    title: "Maintenance Management System",
    desc: "Schedule preventive maintenance and monitor equipment health.",
    icon: Wrench
  },
  {
    title: "Manufacturing CRM",
    desc: "Manage customers, quotations, distributors, and after-sales support.",
    icon: Users
  },
  {
    title: "Executive Dashboard",
    desc: "Real-time KPIs, production metrics, downtime analysis, and financial insights.",
    icon: BarChart
  }
];

const AI_SOLUTIONS = [
  {
    title: "AI Predictive Maintenance",
    desc: "Predict equipment failures before they happen."
  },
  {
    title: "AI Quality Inspection",
    desc: "Detect manufacturing defects using computer vision."
  },
  {
    title: "AI Demand Forecasting",
    desc: "Improve production planning with predictive analytics."
  },
  {
    title: "Production Optimization",
    desc: "AI recommends efficient scheduling and resource allocation."
  },
  {
    title: "Document Intelligence",
    desc: "Automatically process purchase orders, invoices, and factory documents."
  },
  {
    title: "AI Knowledge Assistant",
    desc: "Help factory teams quickly access SOPs, manuals, and documentation."
  },
  {
    title: "Computer Vision",
    desc: "Monitor production lines and identify anomalies automatically."
  },
  {
    title: "Industrial Analytics",
    desc: "Analyze production trends for continuous improvement."
  }
];

const INDUSTRIES = [
  "Automotive Manufacturing",
  "Electronics Manufacturing",
  "Food Processing",
  "Textile Manufacturing",
  "Chemical Manufacturing",
  "Pharmaceutical Manufacturing",
  "Plastic Manufacturing",
  "Steel & Metal Industries",
  "Packaging Industry",
  "Furniture Manufacturing",
  "Consumer Goods",
  "Industrial Equipment"
];

const SERVICES = [
  "Manufacturing ERP Development",
  "Industrial Dashboard Development",
  "AI Application Development",
  "Cloud Infrastructure",
  "Mobile Applications",
  "IoT Integration",
  "API Integration",
  "DevOps",
  "Data Analytics",
  "UI/UX Design"
];

const WHY_SPACIVA = [
  "Custom Software Tailored to Your Factory",
  "Scalable Cloud Architecture",
  "AI-Driven Manufacturing Solutions",
  "ERP & MES Expertise",
  "Real-Time Production Dashboards",
  "100% Code Ownership",
  "Long-Term Technical Partnership"
];

const KPIS = [
  "Production Efficiency",
  "Machine Utilization",
  "Inventory Accuracy",
  "Downtime Reduction",
  "Quality Yield",
  "Order Fulfillment",
  "Warehouse Performance",
  "Production Cost"
];

const FAQS = [
  {
    q: "Can you build manufacturing ERP software?",
    a: "Yes, we specialize in building highly scalable, custom ERP systems tailored specifically to your manufacturing workflows, integrating procurement, production, inventory, and finance."
  },
  {
    q: "Do you develop manufacturing execution systems (MES)?",
    a: "Absolutely. We build MES solutions that connect to your shop floor, providing real-time visibility into machine utilization, production schedules, and worker efficiency."
  },
  {
    q: "Can AI improve manufacturing operations?",
    a: "Yes, AI significantly enhances manufacturing through predictive maintenance, automated quality inspections via computer vision, intelligent demand forecasting, and workflow automation."
  },
  {
    q: "Can you integrate with existing ERP systems?",
    a: "Yes. We build robust API integrations and middle-layer solutions to connect modern dashboards, mobile apps, or AI agents seamlessly with your existing legacy ERPs."
  },
  {
    q: "Do you build production monitoring dashboards?",
    a: "Yes, we design powerful executive and operational dashboards that visualize real-time KPIs, production metrics, machine downtime, and financial data."
  },
  {
    q: "Can you integrate IoT devices into manufacturing software?",
    a: "Yes, our team can integrate IoT data streams (using MQTT, OPC UA, Modbus, etc.) directly into your software for real-time monitoring and predictive analytics."
  },
  {
    q: "How secure is manufacturing data?",
    a: "We implement enterprise-grade security protocols, including end-to-end encryption, role-based access control (RBAC), and secure cloud infrastructure to protect sensitive intellectual property and operational data."
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. We act as your long-term technical partner, providing continuous maintenance, performance optimization, and scalable feature additions long after the initial launch."
  }
];

export default function ManufacturingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50">
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
              <Factory className="w-4 h-4" />
              Manufacturing Software Development
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Smart Manufacturing Software Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#7C3AED]">Modern Industries</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed">
              Transform production operations with custom manufacturing software, AI-powered automation, ERP solutions, production monitoring systems, and intelligent dashboards designed to improve efficiency, reduce downtime, and accelerate business growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="/contact" className="group relative w-full sm:w-auto pl-6 pr-2 py-2 h-[56px] rounded-full bg-[#7C3AED] text-white font-bold hover:bg-[#6D28D9] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-between gap-4 shadow-xl shadow-[#7C3AED]/20 overflow-hidden">
                <div className="relative h-6 w-[270px] overflow-hidden flex items-center">
                  <span className="absolute inset-0 flex items-center transition-transform duration-300 group-hover:-translate-y-full text-left whitespace-nowrap">
                    Book a Manufacturing Consultation
                  </span>
                  <span className="absolute inset-0 flex items-center translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-left whitespace-nowrap">
                    Let's Talk Business
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 z-10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-5 h-5 text-[#7C3AED]" />
                </div>
              </a>
              <a href="#solutions" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 border border-slate-200 font-bold text-center hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Explore Manufacturing Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Challenges Manufacturing Companies Face</h2>
            <p className="text-lg text-slate-600">Without the right digital infrastructure, manufacturers struggle to maintain visibility, quality, and speed across their supply chain and shop floors.</p>
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
      <section id="solutions" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Custom Manufacturing Software Solutions</h2>
            <p className="text-lg text-slate-300">From the shop floor to the executive suite, we build platforms that unify your entire production ecosystem.</p>
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

      {/* AI Solutions for Manufacturing */}
      <section className="py-24 bg-white relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7C3AED]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold mb-6">
                  <Brain className="w-4 h-4" />
                  Artificial Intelligence
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">AI for Smart Factories</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Leverage the power of artificial intelligence to predict equipment failures, automate quality control, and make data-driven decisions that optimize your entire supply chain.
                </p>
                <div className="flex items-center gap-3 text-slate-900 font-bold">
                  <CheckCircle2 className="text-[#7C3AED]" /> Data-Driven Accuracy
                </div>
                <div className="flex items-center gap-3 text-slate-900 font-bold mt-4">
                  <CheckCircle2 className="text-[#7C3AED]" /> Reduced Downtime
                </div>
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
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">

            <div>
              <h2 className="text-3xl font-extrabold mb-8 text-slate-900">Industries We Serve</h2>
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-slate-900">Development Process</h2>

          <div className="flex flex-wrap justify-center items-center gap-4 relative">
            {["Business Discovery", "Factory Workflow Analysis", "Solution Architecture", "UI/UX Design", "Software Development", "Testing", "Deployment", "Training", "Continuous Support"].map((step, idx, arr) => (
              <div key={idx} className="flex items-center">
                <div className="bg-slate-900 text-white font-bold px-6 py-3 rounded-full shadow-lg text-sm whitespace-nowrap">
                  {step}
                </div>
                {idx < arr.length - 1 && (
                  <ArrowRight className="w-5 h-5 mx-2 text-slate-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Spaciva & Tech Stack */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">

            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Why Manufacturers Choose Spaciva</h2>
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
                    {["React", "Next.js", "Flutter"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-semibold">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Backend & Database</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["Node.js", "Python", "Go", ".NET", "PostgreSQL", "MongoDB", "Redis"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-semibold">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">AI & Computer Vision</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["OpenAI", "LangChain", "TensorFlow", "PyTorch", "Computer Vision"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-semibold">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Cloud & IoT</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["AWS", "Azure", "Docker", "Kubernetes", "MQTT", "Modbus", "OPC UA"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-semibold">{t}</span>)}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Manufacturing KPIs */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-2xl font-bold mb-10 text-white/90 uppercase tracking-wider">Manufacturing KPIs We Optimize</h2>
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
      <section className="py-24 bg-white">
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
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-900"
                >
                  {faq.q}
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
      <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">Ready to Modernize Your Manufacturing Operations?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Whether you're upgrading legacy systems, implementing AI, or building a complete manufacturing platform, we'll help you design software that improves efficiency and scales with your business.
          </p>
          <a href="/contact" className="group relative w-full sm:w-auto pl-6 pr-2 py-2 h-[64px] rounded-full bg-[#7C3AED] text-white font-bold hover:bg-[#6D28D9] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-between gap-4 shadow-xl shadow-[#7C3AED]/20 overflow-hidden mx-auto inline-flex">
            <div className="relative h-6 w-[340px] overflow-hidden flex items-center justify-center text-lg">
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full whitespace-nowrap">
                Schedule a Manufacturing Strategy Call
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0 whitespace-nowrap">
                Let's Talk Business
              </span>
            </div>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 z-10 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-6 h-6 text-[#7C3AED]" />
            </div>
          </a>
        </div>
      </section>

      {/* Related Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Solutions</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Manufacturing ERP</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Production Management</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Inventory Management</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">AI Predictive Maintenance</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Smart Factory Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">AI Development</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Custom Software</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Cloud & DevOps</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Mobile Apps</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Data Engineering</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Industries</h4>
              <ul className="space-y-4">
                <li><a href="/industries/logistics" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Logistics</a></li>
                <li><a href="/industries/retail" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Retail</a></li>
                <li><a href="/industries/automotive" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Automotive</a></li>
                <li><a href="/industries/construction" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Construction</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Long Form Content */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 prose prose-lg prose-slate text-slate-600">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Manufacturing Software Development for Modern Industrial Businesses</h2>
          <p className="mb-6 leading-relaxed">
            Manufacturing companies are rapidly embracing digital transformation to improve productivity, reduce operational costs, and gain better visibility across production, inventory, and supply chains. Custom manufacturing software helps businesses replace disconnected spreadsheets and legacy systems with integrated platforms that streamline daily operations.
          </p>
          <p className="mb-6 leading-relaxed">
            At Spaciva, we build manufacturing software tailored to your business processes rather than forcing your team to adapt to generic solutions. Our expertise includes <strong>manufacturing ERP systems</strong>, <strong>production planning software</strong>, <strong>manufacturing execution systems (MES)</strong>, <strong>inventory management platforms</strong>, <strong>warehouse management systems</strong>, AI-powered analytics, and <strong>industrial automation solutions</strong>.
          </p>
          <p className="mb-6 leading-relaxed">
            We help manufacturers digitize production workflows, automate repetitive tasks, monitor equipment performance, and provide real-time operational <strong>manufacturing dashboards</strong>. By integrating AI, cloud infrastructure, IoT, and modern analytics, manufacturers can improve production efficiency, reduce downtime, optimize inventory, and make data-driven decisions faster.
          </p>
          <p className="leading-relaxed">
            Whether you're a growing manufacturer implementing your first digital platform or an established enterprise modernizing legacy infrastructure, our team designs scalable software that evolves with your operations. From production planning and quality management to predictive maintenance and executive reporting, Spaciva delivers secure, high-performance manufacturing solutions that support long-term growth.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
