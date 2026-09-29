"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, Store, Brain, Shield, Cloud, Smartphone, Database, Zap, CheckCircle2, ChevronRight, BarChart, Settings, Box, RefreshCw, Eye, ShieldCheck, Wrench, Package, FileText, Monitor, Cpu, ChevronDown, List, Layers, LineChart, MessageSquare, Briefcase, Calendar, Users, Home, Building, UserPlus, FileSignature, Key, MapPin } from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const CHALLENGES = [
  {
    title: "Lead Management",
    desc: "High volumes of inquiries often get lost without centralized lead tracking.",
    icon: UserPlus
  },
  {
    title: "Property Listings",
    desc: "Managing thousands of properties across multiple channels becomes inefficient.",
    icon: Home
  },
  {
    title: "Customer Follow-ups",
    desc: "Manual communication leads to missed opportunities and lower conversions.",
    icon: MessageSquare
  },
  {
    title: "Property Visits",
    desc: "Scheduling site visits and managing appointments manually wastes time.",
    icon: Calendar
  },
  {
    title: "Fragmented Systems",
    desc: "CRM, inventory, sales, and marketing often operate separately.",
    icon: Layers
  },
  {
    title: "Project Visibility",
    desc: "Developers need real-time dashboards for sales, inventory, and project progress.",
    icon: Building
  },
  {
    title: "Tenant & Rental Management",
    desc: "Managing leases, rent collection, and maintenance manually creates operational overhead.",
    icon: Key
  },
  {
    title: "Data-Driven Decisions",
    desc: "Businesses require analytics to understand sales performance and customer behavior.",
    icon: BarChart
  }
];

const SOLUTIONS = [
  {
    title: "Real Estate CRM",
    desc: "Lead tracking, follow-ups, customer management, broker collaboration, and sales pipeline.",
    icon: Users
  },
  {
    title: "Property Management System",
    desc: "Manage properties, tenants, leases, maintenance requests, rent collection, and documents.",
    icon: Key
  },
  {
    title: "Property Listing Portal",
    desc: "Residential, commercial, rental, and luxury property marketplaces with advanced search.",
    icon: Search
  },
  {
    title: "Builder Sales Platform",
    desc: "Inventory management, booking, pricing, payment schedules, and customer communication.",
    icon: Building
  },
  {
    title: "Rental Management Platform",
    desc: "Tenant onboarding, lease tracking, maintenance management, and online rent payments.",
    icon: Home
  },
  {
    title: "Broker Management Software",
    desc: "Broker onboarding, commission management, lead allocation, and reporting.",
    icon: Briefcase
  },
  {
    title: "Construction Project Dashboard",
    desc: "Track project milestones, budgets, contractors, approvals, and timelines.",
    icon: MapPin
  },
  {
    title: "Visitor & Site Visit Management",
    desc: "Appointment scheduling, digital check-ins, reminders, and follow-up automation.",
    icon: Calendar
  },
  {
    title: "Real Estate Analytics Dashboard",
    desc: "Sales trends, inventory reports, lead conversion, project performance, and executive KPIs.",
    icon: LineChart
  },
  {
    title: "Customer Portal",
    desc: "Booking status, payment schedules, documents, support, and project updates.",
    icon: Monitor
  }
];

const AI_SOLUTIONS = [
  {
    title: "AI Property Assistant",
    desc: "Answer buyer questions, recommend properties, and qualify leads 24/7."
  },
  {
    title: "AI Lead Qualification",
    desc: "Automatically score and prioritize leads based on buying intent."
  },
  {
    title: "AI Property Recommendation Engine",
    desc: "Suggest properties based on customer preferences and browsing behavior."
  },
  {
    title: "AI Document Processing",
    desc: "Extract information from agreements, KYC documents, and contracts."
  },
  {
    title: "AI Virtual Assistant",
    desc: "Handle appointment booking, FAQs, and customer follow-ups."
  },
  {
    title: "AI Market Insights",
    desc: "Analyze pricing trends, demand, and investment opportunities."
  },
  {
    title: "AI Sales Copilot",
    desc: "Help sales teams with lead insights, follow-up suggestions, and opportunity tracking."
  },
  {
    title: "Predictive Analytics",
    desc: "Forecast sales, inventory demand, and project performance."
  }
];

const INDUSTRIES = [
  "Real Estate Developers",
  "Builders",
  "Property Consultants",
  "Brokerage Firms",
  "Commercial Real Estate",
  "Residential Real Estate",
  "Rental & Leasing Companies",
  "Co-working Spaces",
  "Property Management Companies",
  "Real Estate Investment Firms",
  "Smart City Projects",
  "PropTech Startups"
];

const SERVICES = [
  "Custom Software Development",
  "AI & Machine Learning",
  "Web Engineering",
  "Mobile App Development",
  "Cloud & DevOps",
  "UI/UX Design",
  "Data Engineering",
  "API Integration"
];

const WHY_SPACIVA = [
  "Custom PropTech Solutions",
  "AI-Powered Sales Automation",
  "Scalable Cloud Infrastructure",
  "Modern Customer Experiences",
  "Secure Document Management",
  "High-Performance Property Portals",
  "100% Code Ownership",
  "Long-Term Product Partnership"
];

const KPIS = [
  "Lead Conversion Rate",
  "Property Sales",
  "Site Visit Bookings",
  "Customer Response Time",
  "Occupancy Rate",
  "Rental Collection",
  "Sales Velocity",
  "Inventory Turnover"
];

const FAQS = [
  {
    q: "Can you build custom real estate portals?",
    a: "Yes, we build scalable and customizable property listing portals with advanced search, filtering, map integrations, and agent dashboards."
  },
  {
    q: "Do you develop property management software?",
    a: "Absolutely. We develop comprehensive property management systems to handle tenant onboarding, lease agreements, rent collection, and maintenance requests."
  },
  {
    q: "Can you create broker CRM platforms?",
    a: "Yes, we design specialized CRM solutions for brokers to manage leads, track interactions, allocate properties, and automate follow-ups efficiently."
  },
  {
    q: "Do you build mobile apps for real estate businesses?",
    a: "Yes, we build high-performance mobile apps for both iOS and Android to facilitate property search, virtual tours, and tenant services on the go."
  },
  {
    q: "Can AI automate lead qualification?",
    a: "Yes, our AI solutions can engage with prospects, ask qualifying questions, score leads based on intent, and route them to the right sales agent."
  },
  {
    q: "Can you integrate maps, payment gateways, and CRMs?",
    a: "Definitely. We integrate seamlessly with Google Maps, payment providers (Stripe, Razorpay), and third-party CRM systems to create a unified digital ecosystem."
  },
  {
    q: "Do you develop rental management systems?",
    a: "Yes, we create end-to-end rental management software designed for leasing companies to track payments, manage vacancies, and streamline operations."
  },
  {
    q: "Do you provide long-term maintenance and support?",
    a: "Yes, we offer ongoing technical support, continuous optimization, and scalable cloud hosting to ensure your real estate platform remains fast and secure."
  }
];

export default function RealEstateClient() {
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
              <Building className="w-4 h-4" />
              Real Estate & PropTech Solutions
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Build Smarter Real Estate Platforms That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#7C3AED]">Sell, Manage, and Scale</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed">
              Spaciva develops modern real estate software, AI-powered PropTech platforms, property management systems, CRM solutions, and digital experiences that help builders, brokers, agencies, and developers streamline operations and close deals faster.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <AnimatedCtaButton
                href="/contact"
                label="Book a Real Estate Consultation"
                hoverLabel="Let's Talk Business"
              />
              <a href="#solutions" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 border border-slate-200 font-bold text-center hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Explore PropTech Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Digital Challenges in Real Estate</h2>
            <p className="text-lg text-slate-600">The real estate industry requires modern, connected platforms to overcome operational friction and meet modern buyer expectations.</p>
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
                  <challenge.icon className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">{challenge.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-16 md:py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#7C3AED]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">PropTech Solutions We Build</h2>
            <p className="text-lg text-slate-300">We develop end-to-end real estate software ecosystems to streamline operations for builders, brokers, and agencies.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map((sol, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-[#7C3AED]/40 transition-colors"
              >
                <div className="w-12 h-12 bg-[#7C3AED]/15 rounded-xl flex items-center justify-center mb-6">
                  <sol.icon className="w-6 h-6 text-[#C4B5FD]" />
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
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">AI-Powered PropTech Solutions</h2>
              <p className="text-lg text-slate-600 mb-8">
                Harness AI to automatically qualify leads, guide property buyers 24/7, and generate powerful market insights.
              </p>
              <div className="flex items-center gap-3 text-slate-900 font-bold">
                <CheckCircle2 className="text-[#7C3AED]" /> Smart Lead Qualification
              </div>
              <div className="flex items-center gap-3 text-slate-900 font-bold mt-4">
                <CheckCircle2 className="text-[#7C3AED]" /> 24/7 Virtual Assistants
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
            {["Business Discovery", "Sales & Workflow Analysis", "Platform Architecture", "UI/UX Design", "Development", "Testing", "Deployment", "Optimization & Support"].map((step, idx, arr) => (
              <div key={idx} className="flex items-center w-full sm:w-auto">
                <div className="bg-[#0F172A] text-white font-bold px-5 sm:px-6 py-3 rounded-full shadow-lg text-sm w-full sm:w-auto text-center sm:whitespace-nowrap">
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
      <section className="py-16 md:py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Why Real Estate Companies Choose Spaciva</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {WHY_SPACIVA.map((why, idx) => (
                  <div key={idx} className="flex gap-4 items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-[#7C3AED]/40 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#7C3AED]/15 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#C4B5FD]" />
                    </div>
                    <span className="font-bold text-white/90 text-sm leading-snug">{why}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Technology Stack</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Frontend</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["Next.js", "React", "Flutter"].map(t => <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white/80">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Backend & Database</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis"].map(t => <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white/80">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">AI & Integration</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["OpenAI", "Claude", "Gemini", "LangChain", "Google Maps", "Payment Gateways", "WhatsApp API"].map(t => <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white/80">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Cloud</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["AWS", "Azure", "Docker", "Kubernetes"].map(t => <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white/80">{t}</span>)}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-16 md:py-24 bg-[#0F172A] text-white relative overflow-hidden border-t border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[500px] h-[300px] bg-[#7C3AED]/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-5 lg:px-10 text-center relative z-10">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 text-[#C4B5FD] text-xs font-bold uppercase tracking-widest mb-5">
            What We Optimize
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-white">Key Business Metrics We Optimize</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {KPIS.map((kpi, idx) => (
              <span key={idx} className="px-5 py-2.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 font-bold text-white text-sm hover:bg-[#7C3AED]/20 hover:border-[#7C3AED]/50 transition-colors">
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
                  <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0", openFaq === idx && "rotate-180 text-[#7C3AED]")} />
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7C3AED]/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">Ready to Build the Future of Real Estate?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Whether you're launching a PropTech startup, modernizing your sales process, or building a complete property management platform, Spaciva helps you create scalable software that drives growth and delivers exceptional customer experiences.
          </p>
          <AnimatedCtaButton
            href="/contact"
            label="Build Your PropTech Solution"
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
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Real Estate CRM</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Property Management System</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">AI Property Assistant</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Customer Portal</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Analytics Dashboard</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Document Management</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">AI & Machine Learning</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Web Engineering</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Mobile Development</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Custom Software</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Cloud & DevOps</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Industries</h4>
              <ul className="space-y-4">
                <li><a href="/industries/construction" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Construction & Infrastructure</a></li>
                <li><a href="/industries/finance" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Finance & FinTech</a></li>
                <li><a href="/industries/hospitality" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Hospitality</a></li>
                <li><a href="/industries/retail-ecommerce" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Retail</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Long Form Content */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 prose prose-lg prose-slate text-slate-600">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Custom Real Estate Software Development & PropTech Solutions</h2>
          <p className="mb-6 leading-relaxed">
            The real estate industry is rapidly evolving as developers, brokers, agencies, and property management companies embrace digital transformation to improve customer experiences and streamline operations. Buyers expect intuitive property search, virtual tours, online bookings, transparent communication, and fast support, while businesses need centralized systems for sales, inventory, documentation, and analytics.
          </p>
          <p className="mb-6 leading-relaxed">
            Spaciva develops custom <strong>real estate software</strong> tailored to the unique workflows of the property industry. Our solutions include <strong>real estate CRM platforms</strong>, <strong>property management systems</strong>, <strong>property listing portals</strong>, <strong>builder sales platforms</strong>, <strong>rental management software</strong>, customer portals, mobile applications, and AI-powered automation.
          </p>
          <p className="mb-6 leading-relaxed">
            Our platforms help businesses manage leads, schedule property visits, automate customer communication, track project progress, manage inventory, and generate real-time business insights. By integrating AI, cloud infrastructure, mapping services, payment gateways, and analytics, we enable real estate companies to improve operational efficiency and deliver better experiences to buyers, tenants, and investors.
          </p>
          <p className="leading-relaxed">
            Whether you're a real estate developer managing multiple projects, a brokerage firm handling thousands of leads, or a PropTech startup building the next digital property platform, Spaciva delivers secure, scalable, and future-ready software designed to support long-term business growth.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
