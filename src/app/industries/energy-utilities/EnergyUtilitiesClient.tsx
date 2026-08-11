"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Brain, Cloud, Database, Zap, CheckCircle2, ChevronRight, BarChart, UtilityPole, Sun, Activity, Droplet, Fuel, HardHat, Cog, AlertTriangle, MonitorSmartphone, Smartphone, Factory, MapPin, Search, ChevronDown, Wrench, ShieldAlert, LineChart, FileText } from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const CHALLENGES = [
  {
    title: "Aging Infrastructure",
    desc: "Legacy systems make monitoring and maintenance inefficient.",
    icon: Factory
  },
  {
    title: "Asset Monitoring",
    desc: "Managing power plants, substations, pipelines, and renewable assets requires real-time visibility.",
    icon: Activity
  },
  {
    title: "High Operational Costs",
    desc: "Manual processes increase downtime and maintenance expenses.",
    icon: LineChart
  },
  {
    title: "Energy Consumption Tracking",
    desc: "Organizations need accurate monitoring of electricity, gas, and water usage.",
    icon: Zap
  },
  {
    title: "Customer Service",
    desc: "Billing, service requests, and outage reporting often rely on disconnected systems.",
    icon: Smartphone
  },
  {
    title: "Predictive Maintenance",
    desc: "Unexpected equipment failures lead to costly downtime.",
    icon: Wrench
  },
  {
    title: "Regulatory Compliance",
    desc: "Energy businesses must meet strict reporting, safety, and environmental standards.",
    icon: ShieldAlert
  },
  {
    title: "Sustainability Goals",
    desc: "Companies need accurate carbon reporting and renewable energy analytics.",
    icon: Sun
  }
];

const SOLUTIONS = [
  {
    title: "Energy Management System (EMS)",
    desc: "Monitor energy production, distribution, consumption, and operational performance.",
    icon: Zap
  },
  {
    title: "Smart Grid Platform",
    desc: "Real-time grid monitoring, load balancing, outage detection, and infrastructure management.",
    icon: UtilityPole
  },
  {
    title: "Utility Billing System",
    desc: "Customer billing, metering, payment processing, invoicing, and account management.",
    icon: FileText
  },
  {
    title: "Renewable Energy Management",
    desc: "Solar, wind, hydro, and battery storage monitoring with production analytics.",
    icon: Sun
  },
  {
    title: "Asset Management System",
    desc: "Track equipment, maintenance schedules, inspections, warranties, and lifecycle performance.",
    icon: Cog
  },
  {
    title: "Smart Meter Platform",
    desc: "Collect, analyze, and visualize electricity, gas, and water meter data.",
    icon: Activity
  },
  {
    title: "Outage Management System",
    desc: "Track incidents, assign field teams, communicate with customers, and restore services faster.",
    icon: AlertTriangle
  },
  {
    title: "Customer Self-Service Portal",
    desc: "Usage history, bills, payments, outage reports, and service requests.",
    icon: MonitorSmartphone
  },
  {
    title: "Field Workforce Management",
    desc: "Schedule technicians, optimize routes, assign maintenance tasks, and monitor field operations.",
    icon: HardHat
  },
  {
    title: "Executive Operations Dashboard",
    desc: "Real-time KPIs, asset health, energy consumption, revenue, downtime, and sustainability metrics.",
    icon: BarChart
  }
];

const AI_SOLUTIONS = [
  {
    title: "Predictive Maintenance",
    desc: "Detect equipment failures before they cause outages using AI and sensor data."
  },
  {
    title: "AI Energy Forecasting",
    desc: "Forecast electricity demand and optimize generation capacity."
  },
  {
    title: "AI Grid Optimization",
    desc: "Improve grid efficiency by analyzing consumption patterns and balancing loads."
  },
  {
    title: "AI Energy Assistant",
    desc: "Help operators access technical documentation, maintenance procedures, and operational insights."
  },
  {
    title: "AI Document Processing",
    desc: "Automate invoices, inspection reports, maintenance logs, and compliance documentation."
  },
  {
    title: "AI Sustainability Analytics",
    desc: "Track emissions, renewable energy production, and ESG reporting."
  },
  {
    title: "AI Fault Detection",
    desc: "Identify abnormal equipment behavior using IoT sensor data."
  },
  {
    title: "AI Customer Support",
    desc: "Automate billing questions, outage information, and service requests."
  }
];

const INDUSTRIES = [
  "Electricity Providers",
  "Renewable Energy Companies",
  "Solar Energy Businesses",
  "Wind Energy Operators",
  "Oil & Gas Companies",
  "Water Utilities",
  "Gas Utilities",
  "Smart City Projects",
  "Utility Infrastructure Companies",
  "Energy Startups",
  "Industrial Energy Providers",
  "Power Generation Companies"
];

const SERVICES = [
  "AI & Machine Learning",
  "Custom Software Development",
  "Cloud & DevOps",
  "IoT Integration",
  "Web Engineering",
  "Mobile App Development",
  "Data Engineering",
  "API Integration",
  "Dashboard Development"
];

const WHY_SPACIVA = [
  "AI-Driven Operational Intelligence",
  "Scalable Cloud Infrastructure",
  "IoT & Smart Device Integration",
  "Secure Enterprise Applications",
  "Real-Time Monitoring Dashboards",
  "Data-Driven Decision Support",
  "100% Code Ownership",
  "Long-Term Technology Partnership"
];

const KPIS = [
  "Energy Production",
  "Energy Consumption",
  "Asset Utilization",
  "Equipment Downtime",
  "Grid Reliability",
  "Maintenance Costs",
  "Carbon Emissions",
  "Customer Satisfaction"
];

const FAQS = [
  {
    q: "Can you build Energy Management Systems (EMS)?",
    a: "Yes, we develop advanced EMS solutions that aggregate data across generation, distribution, and consumption points for complete operational visibility."
  },
  {
    q: "Do you develop smart grid monitoring software?",
    a: "Absolutely. We build real-time monitoring and analytics platforms tailored for smart grids to detect outages, balance loads, and visualize performance."
  },
  {
    q: "Can you integrate IoT sensors and smart meters?",
    a: "Yes, we integrate industrial IoT sensors (via MQTT, Modbus, OPC UA) and smart meters to stream telemetry directly into central analytical dashboards."
  },
  {
    q: "Can AI predict equipment failures?",
    a: "Yes, our predictive maintenance models utilize historical and real-time IoT data to detect anomalies and forecast failures before they cause critical downtime."
  },
  {
    q: "Do you build utility billing platforms?",
    a: "Yes, we develop end-to-end utility billing solutions including automated meter reading integration, dynamic tariff engines, invoicing, and customer payment portals."
  },
  {
    q: "Can you modernize legacy utility software?",
    a: "Yes, we assist energy and utility companies in securely migrating their outdated on-premise systems to modern, highly scalable, and secure cloud environments."
  },
  {
    q: "Do you support renewable energy monitoring?",
    a: "Yes, we build dedicated monitoring platforms for solar farms, wind operators, and battery storage facilities to track real-time yield and production analytics."
  },
  {
    q: "Do you provide long-term maintenance and support?",
    a: "Yes, we provide 24/7 technical support, infrastructure scaling, proactive security patches, and continuous feature development to ensure system reliability."
  }
];

export default function EnergyUtilitiesClient() {
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
              <Zap className="w-4 h-4" />
              Energy & Utility Technology Solutions
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Intelligent Software for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#7C3AED]">Future of Energy</span> & Utilities
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed">
              Spaciva develops secure, scalable, and AI-powered software for energy providers, utility companies, renewable energy businesses, and infrastructure operators. Our solutions improve operational visibility, automate workflows, optimize asset performance, and accelerate digital transformation.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <AnimatedCtaButton
                href="/contact"
                label="Book an Energy Consultation"
                hoverLabel="Let's Talk Business"
              />
              <a href="#solutions" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 border border-slate-200 font-bold text-center hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Explore Energy Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Digital Challenges in the Energy Industry</h2>
            <p className="text-lg text-slate-600">The energy transition demands modern software to integrate disparate systems, optimize assets, and meet strict sustainability goals.</p>
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
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Software Solutions We Build</h2>
            <p className="text-lg text-slate-300">We develop intelligent enterprise software for utilities, smart grids, and renewable energy providers.</p>
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
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">AI-Powered Digital Energy Platforms</h2>
              <p className="text-lg text-slate-600 mb-8">
                Harness AI to analyze IoT telemetry, forecast energy demand, and predict equipment failures before they happen.
              </p>
              <div className="flex items-center gap-3 text-slate-900 font-bold">
                <CheckCircle2 className="text-[#7C3AED]" /> Predictive Maintenance Models
              </div>
              <div className="flex items-center gap-3 text-slate-900 font-bold mt-4">
                <CheckCircle2 className="text-[#7C3AED]" /> Smart Grid Optimization
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
            {["Energy Assessment", "Operational Workflow Analysis", "Solution Architecture", "UX/UI Design", "Software Development", "Testing & Security Validation", "Deployment", "Training", "Continuous Support"].map((step, idx, arr) => (
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
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Why Energy Companies Choose Spaciva</h2>
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
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Frontend & Backend</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["Next.js", "React", "Flutter", "Node.js", "Python", "Go", ".NET"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-semibold">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">IoT & Database</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["MQTT", "OPC UA", "Modbus", "LoRaWAN", "PostgreSQL", "MongoDB", "InfluxDB"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-semibold">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">AI & Integration</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["OpenAI", "LangChain", "TensorFlow", "PyTorch", "Computer Vision"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-semibold">{t}</span>)}
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
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">Ready to Modernize Your Energy & Utility Operations?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Whether you're managing renewable energy assets, utility infrastructure, or large-scale energy distribution, Spaciva builds intelligent software that improves efficiency, enhances operational visibility, and supports long-term sustainability.
          </p>
          <AnimatedCtaButton
            href="/contact"
            label="Build Your Energy Platform"
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
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Energy Management System (EMS)</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Utility Billing Platform</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Smart Grid Platform</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Asset Management System</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Field Workforce Management</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Executive Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">AI & Machine Learning</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Cloud & DevOps</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Data Engineering</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">IoT Integration</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Custom Software Development</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Industries</h4>
              <ul className="space-y-4">
                <li><a href="/industries/manufacturing" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Manufacturing</a></li>
                <li><a href="/industries/logistics" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Logistics</a></li>
                <li><a href="/industries/construction" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Construction & Infrastructure</a></li>
                <li><a href="/industries/government" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Government & Public Sector</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Long Form Content */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 prose prose-lg prose-slate text-slate-600">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Energy & Utility Software Development Services</h2>
          <p className="mb-6 leading-relaxed">
            The energy and utilities sector is rapidly evolving as organizations invest in digital infrastructure, renewable energy, and intelligent operational management. Modern energy companies need software that provides real-time monitoring, automates field operations, improves asset reliability, and supports data-driven decision-making.
          </p>
          <p className="mb-6 leading-relaxed">
            Spaciva develops custom software for electricity providers, renewable energy companies, water utilities, oil and gas operators, and infrastructure businesses. Our expertise includes <strong>energy management systems (EMS)</strong>, <strong>smart grid platforms</strong>, <strong>utility billing software</strong>, <strong>renewable energy monitoring solutions</strong>, field workforce management applications, customer portals, and AI-powered operational dashboards.
          </p>
          <p className="mb-6 leading-relaxed">
            Our platforms help organizations monitor energy production and consumption, automate maintenance workflows, manage customer accounts, integrate IoT devices, and generate actionable insights from operational data. By combining AI, cloud infrastructure, IoT, analytics, and secure enterprise architecture, we enable energy companies to reduce downtime, improve efficiency, optimize resource utilization, and achieve sustainability goals.
          </p>
          <p className="leading-relaxed">
            Whether you're building a renewable energy management platform, modernizing utility infrastructure, or developing an enterprise operations dashboard, Spaciva delivers scalable, secure, and future-ready technology designed to support the next generation of energy innovation.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
