"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Brain, Cloud, Database, Zap, CheckCircle2, ChevronRight, BarChart, Truck, Package, Map, MapPin, Navigation, PackageSearch, Smartphone, ClipboardList, Clock, BarChart2, MessageSquare, Briefcase, Warehouse, Compass, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const CHALLENGES = [
  {
    title: "Shipment Visibility",
    desc: "Businesses struggle to track shipments across multiple carriers and locations.",
    icon: MapPin
  },
  {
    title: "Fleet Management",
    desc: "Managing vehicles, drivers, maintenance schedules, and fuel costs becomes increasingly complex.",
    icon: Truck
  },
  {
    title: "Warehouse Operations",
    desc: "Manual inventory management slows fulfillment and increases operational errors.",
    icon: Warehouse
  },
  {
    title: "Route Planning",
    desc: "Inefficient delivery routes increase fuel costs and delivery times.",
    icon: Navigation
  },
  {
    title: "Supply Chain Coordination",
    desc: "Disconnected systems make collaboration between suppliers, warehouses, and transport partners difficult.",
    icon: Compass
  },
  {
    title: "Manual Documentation",
    desc: "Invoices, delivery notes, PODs, and shipment documents often require repetitive manual work.",
    icon: ClipboardList
  },
  {
    title: "Customer Communication",
    desc: "Customers expect real-time shipment tracking and delivery notifications.",
    icon: MessageSquare
  },
  {
    title: "Business Analytics",
    desc: "Without operational insights, logistics companies struggle to optimize performance and reduce costs.",
    icon: BarChart
  }
];

const SOLUTIONS = [
  {
    title: "Transportation Management System (TMS)",
    desc: "Manage shipments, carriers, dispatching, freight planning, invoicing, and transportation operations.",
    icon: Truck
  },
  {
    title: "Warehouse Management System (WMS)",
    desc: "Inventory tracking, barcode scanning, picking, packing, storage optimization, and warehouse automation.",
    icon: Warehouse
  },
  {
    title: "Fleet Management Platform",
    desc: "Vehicle tracking, maintenance scheduling, fuel monitoring, driver performance, and GPS integration.",
    icon: Compass
  },
  {
    title: "Courier Management Software",
    desc: "Pickup scheduling, route planning, delivery tracking, proof of delivery, and customer notifications.",
    icon: Package
  },
  {
    title: "Shipment Tracking Platform",
    desc: "Real-time tracking, shipment history, delivery updates, and customer portals.",
    icon: MapPin
  },
  {
    title: "Dispatch Management System",
    desc: "Assign deliveries, optimize driver allocation, manage delivery schedules, and monitor operations.",
    icon: Navigation
  },
  {
    title: "Driver Management Portal",
    desc: "Driver onboarding, schedules, performance analytics, payroll integration, and compliance tracking.",
    icon: Briefcase
  },
  {
    title: "Supply Chain Dashboard",
    desc: "Monitor suppliers, warehouses, transportation, procurement, and operational KPIs.",
    icon: BarChart2
  },
  {
    title: "Customer Portal",
    desc: "Shipment tracking, invoices, support requests, and order management.",
    icon: Smartphone
  },
  {
    title: "Logistics ERP",
    desc: "Integrate procurement, inventory, transportation, accounting, warehouse operations, and reporting into one platform.",
    icon: Database
  }
];

const AI_SOLUTIONS = [
  {
    title: "AI Route Optimization",
    desc: "Reduce delivery times and transportation costs using intelligent route planning."
  },
  {
    title: "Predictive Delivery Planning",
    desc: "Forecast delays and improve delivery accuracy."
  },
  {
    title: "AI Fleet Monitoring",
    desc: "Predict maintenance requirements and optimize vehicle utilization."
  },
  {
    title: "AI Warehouse Intelligence",
    desc: "Improve inventory placement and warehouse efficiency."
  },
  {
    title: "AI Shipment Assistant",
    desc: "Automatically answer shipment inquiries and delivery questions."
  },
  {
    title: "AI Document Processing",
    desc: "Extract information from invoices, bills of lading, customs documents, and delivery notes."
  },
  {
    title: "AI Demand Forecasting",
    desc: "Predict inventory requirements and logistics demand using historical data."
  },
  {
    title: "Logistics Analytics",
    desc: "Real-time dashboards for operational performance, costs, fleet utilization, and delivery metrics."
  }
];

const INDUSTRIES = [
  "Logistics Companies",
  "Third-Party Logistics (3PL)",
  "Courier Services",
  "Freight Forwarders",
  "Transportation Companies",
  "Warehouse Operators",
  "Cold Chain Logistics",
  "Supply Chain Providers",
  "E-commerce Fulfillment Centers",
  "Cargo & Shipping Companies",
  "Distribution Companies",
  "Import & Export Businesses"
];

const SERVICES = [
  "AI & Machine Learning",
  "Custom Software Development",
  "Web Engineering",
  "Mobile App Development",
  "Cloud & DevOps",
  "Data Engineering",
  "UI/UX Design",
  "IoT Integration",
  "API Integration"
];

const WHY_SPACIVA = [
  "AI-Driven Logistics Automation",
  "Real-Time Operational Visibility",
  "Scalable Cloud Infrastructure",
  "Intelligent Route Optimization",
  "Modern Driver & Fleet Management",
  "Custom Software Tailored to Your Workflow",
  "100% Code Ownership",
  "Long-Term Technology Partnership"
];

const KPIS = [
  "On-Time Delivery Rate",
  "Fleet Utilization",
  "Delivery Cost per Shipment",
  "Warehouse Accuracy",
  "Fuel Efficiency",
  "Driver Productivity",
  "Order Fulfillment Time",
  "Customer Satisfaction"
];

const FAQS = [
  {
    q: "Can you build a Transportation Management System (TMS)?",
    a: "Yes, we develop scalable TMS platforms to help you manage freight, automate dispatching, handle invoicing, and collaborate seamlessly with carriers."
  },
  {
    q: "Do you develop Warehouse Management Systems (WMS)?",
    a: "Absolutely. We build modern WMS solutions featuring barcode integration, optimized picking and packing workflows, and real-time inventory tracking."
  },
  {
    q: "Can AI optimize delivery routes?",
    a: "Yes, our AI algorithms analyze traffic, weather, and delivery windows to optimize routes dynamically, saving fuel and reducing delivery times."
  },
  {
    q: "Do you integrate GPS tracking and mapping services?",
    a: "Yes, we integrate with providers like Google Maps, Mapbox, and dedicated GPS APIs to provide live vehicle tracking and geofencing."
  },
  {
    q: "Can you build logistics mobile apps for drivers?",
    a: "Definitely. We develop cross-platform mobile apps that allow drivers to view assigned routes, update delivery statuses, capture signatures (POD), and communicate with dispatch."
  },
  {
    q: "Do you integrate barcode scanners and RFID systems?",
    a: "Yes, our logistics solutions support integration with mobile barcode scanning, RFID hardware, and IoT devices for automated warehouse and shipment tracking."
  },
  {
    q: "Can existing logistics software be modernized?",
    a: "Yes, we help logistics providers migrate from legacy on-premise systems to secure, scalable cloud architectures while preserving critical data."
  },
  {
    q: "Do you provide long-term maintenance and support?",
    a: "Yes, we offer ongoing technical support, proactive monitoring, server scaling during peak seasons, and continuous feature updates to keep your operations running smoothly."
  }
];

export default function LogisticsClient() {
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
              <Truck className="w-4 h-4" />
              Logistics & Supply Chain Solutions
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Intelligent Logistics Software Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#7C3AED]">Faster, Smarter</span> Operations
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed">
              Spaciva develops AI-powered logistics software, transportation platforms, warehouse systems, and supply chain solutions that improve visibility, automate operations, reduce delivery costs, and help logistics businesses scale efficiently.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="/contact" className="group relative w-full sm:w-auto pl-6 pr-2 py-2 h-[56px] rounded-full bg-[#7C3AED] text-white font-bold hover:bg-[#6D28D9] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-between gap-4 shadow-xl shadow-[#7C3AED]/20 overflow-hidden">
                <div className="relative h-6 w-[230px] overflow-hidden flex items-center">
                  <span className="absolute inset-0 flex items-center transition-transform duration-300 group-hover:-translate-y-full text-left whitespace-nowrap">
                    Book a Logistics Consultation
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
                Explore Logistics Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Logistics Challenges We Help Solve</h2>
            <p className="text-lg text-slate-600">Modern supply chains require digital solutions to overcome operational bottlenecks and improve service delivery.</p>
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
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Logistics Platforms We Build</h2>
            <p className="text-lg text-slate-300">We engineer end-to-end software solutions tailored to the complex needs of transportation and warehousing.</p>
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
      <section className="py-24 bg-white relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7C3AED]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 sticky top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold mb-6">
                <Brain className="w-4 h-4" />
                Artificial Intelligence
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">AI-Powered Logistics & Supply Chain Solutions</h2>
              <p className="text-lg text-slate-600 mb-8">
                Leverage AI to predict delays, optimize delivery routes, and automate manual documentation across your supply chain.
              </p>
              <div className="flex items-center gap-3 text-slate-900 font-bold">
                <CheckCircle2 className="text-[#7C3AED]" /> Smart Route Optimization
              </div>
              <div className="flex items-center gap-3 text-slate-900 font-bold mt-4">
                <CheckCircle2 className="text-[#7C3AED]" /> Predictive Demand Forecasting
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-slate-900">Development Process</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-4 relative">
            {["Business Discovery", "Logistics Workflow Analysis", "Solution Architecture", "UX/UI Design", "Development", "Testing", "Deployment", "Training", "Continuous Support"].map((step, idx, arr) => (
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
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Why Logistics Companies Choose Spaciva</h2>
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
                    {["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-semibold">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">AI & Integration</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["OpenAI", "Computer Vision", "Google Maps API", "Mapbox", "GPS Tracking APIs", "Twilio", "Barcode & RFID"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-semibold">{t}</span>)}
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
      <section className="py-20 bg-blue-600 text-white">
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
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">Ready to Modernize Your Logistics Operations?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Whether you're managing fleets, warehouses, freight, or last-mile delivery, Spaciva develops intelligent logistics software that improves visibility, reduces operational costs, and helps your business scale with confidence.
          </p>
          <a href="/contact" className="group relative w-full sm:w-auto pl-6 pr-2 py-2 h-[64px] rounded-full bg-[#7C3AED] text-white font-bold hover:bg-[#6D28D9] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-between gap-4 shadow-xl shadow-[#7C3AED]/20 overflow-hidden mx-auto inline-flex">
            <div className="relative h-6 w-[230px] overflow-hidden flex items-center justify-center text-lg">
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full whitespace-nowrap">
                Build Your Logistics Platform
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
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Transportation Management System (TMS)</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Warehouse Management System (WMS)</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Fleet Management Platform</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Dispatch Management System</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Shipment Tracking Platform</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Logistics Analytics Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">AI & Machine Learning</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Custom Software Development</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Mobile Development</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Cloud & DevOps</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Data Engineering</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Industries</h4>
              <ul className="space-y-4">
                <li><a href="/industries/manufacturing" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Manufacturing</a></li>
                <li><a href="/industries/retail-ecommerce" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Retail & E-commerce</a></li>
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
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Logistics Software Development & Supply Chain Solutions</h2>
          <p className="mb-6 leading-relaxed">
            The logistics and supply chain industry depends on speed, visibility, and operational efficiency. As customer expectations continue to rise, logistics providers need technology that enables real-time shipment tracking, intelligent route planning, automated warehouse operations, and seamless communication across the supply chain.
          </p>
          <p className="mb-6 leading-relaxed">
            Spaciva develops custom <strong>logistics software</strong> tailored to transportation companies, courier services, freight forwarders, third-party logistics providers (3PL), warehouse operators, and e-commerce fulfillment businesses. Our solutions include <strong>transportation management systems (TMS)</strong>, <strong>warehouse management systems (WMS)</strong>, <strong>fleet management platforms</strong>, <strong>shipment tracking applications</strong>, dispatch software, customer portals, and AI-powered logistics automation.
          </p>
          <p className="mb-6 leading-relaxed">
            Our platforms help businesses optimize delivery routes, monitor fleets, automate warehouse operations, manage inventory, streamline dispatching, and generate real-time operational insights. By integrating cloud infrastructure, AI, GPS services, IoT devices, and analytics, logistics companies can improve efficiency, reduce transportation costs, minimize delays, and provide better customer experiences.
          </p>
          <p className="leading-relaxed">
            Whether you're building a modern logistics platform, digitizing warehouse operations, or implementing AI-driven supply chain automation, Spaciva delivers scalable, secure, and future-ready software designed to support long-term business growth.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
