"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Sparkles, Code2, Cpu, Smartphone,
  Cloud, PenTool, CheckCircle2, ChevronDown, Building2,
  HeartPulse, GraduationCap, Factory, Landmark, ShoppingBag,
  Truck, Rocket, Hotel, Shield
} from "lucide-react";

// --- DATA ---

const WHAT_WE_DO = [
  {
    title: "AI Solutions",
    skills: ["LLMs", "AI Agents", "Automation"],
    icon: Cpu,
    color: "#7C3AED",
  },
  {
    title: "Web Applications",
    skills: ["React", "Next.js", "Node.js"],
    icon: Code2,
    color: "#4F46E5",
  },
  {
    title: "Mobile Apps",
    skills: ["Flutter", "React Native"],
    icon: Smartphone,
    color: "#5B21B6",
  },
  {
    title: "UI/UX Design",
    skills: ["Research", "Wireframes", "Design Systems"],
    icon: PenTool,
    color: "#C4B5FD",
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "CI/CD"],
    icon: Cloud,
    color: "#334155",
  },
  {
    title: "Custom Software",
    skills: ["ERP", "CRM", "Internal Tools"],
    icon: Sparkles,
    color: "#7C3AED",
  }
];

const HERO_SERVICES = [
  { title: "Business Websites", desc: "Corporate · E-Commerce · Redesigns", color: "#F97316", bg: "#FFF7ED" },
  { title: "Custom Software", desc: "CRMs · ERPs · Operations Dashboards", color: "#0F172A", bg: "#F1F5F9" },
  { title: "AI Automation", desc: "Chatbots · WhatsApp · Workflows", color: "#7C3AED", bg: "#F5F3FF" },
  { title: "Mobile Apps", desc: "iOS & Android Applications", color: "#10B981", bg: "#ECFDF5" },
  { title: "Ongoing Support", desc: "Maintenance & Technical Partner", color: "#3B82F6", bg: "#EFF6FF" },
];

const WHY_CHOOSE_US = [
  "Senior Engineers",
  "AI-first Development",
  "Fast Delivery",
  "Scalable Architecture",
  "Security Focused",
  "Long-term Support"
];

const INDUSTRIES = [
  { name: "Healthcare", icon: HeartPulse },
  { name: "Education", icon: GraduationCap },
  { name: "Manufacturing", icon: Factory },
  { name: "Finance", icon: Landmark },
  { name: "Real Estate", icon: Building2 },
  { name: "Retail", icon: ShoppingBag },
  { name: "Logistics", icon: Truck },
  { name: "Startups", icon: Rocket },
  { name: "Hospitality", icon: Hotel },
  { name: "Government", icon: Shield },
];

const FAQS = [
  { q: "How does your pricing work?", a: "We offer transparent, milestone-based pricing tailored to your specific project requirements. For ongoing work, we also provide dedicated team retainers." },
  { q: "What is your typical timeline?", a: "Most MVPs and core web applications are delivered within 6 to 12 weeks. Complex enterprise or AI solutions may take 3 to 6 months depending on the scope." },
  { q: "Who owns the code?", a: "You do. Upon project completion and final payment, 100% of the intellectual property and source code is transferred to your company." },
  { q: "Do you sign NDAs?", a: "Absolutely. We are happy to sign a Non-Disclosure Agreement before any initial discovery calls or code audits to protect your ideas." },
  { q: "Do you offer post-launch support?", a: "Yes. We offer long-term maintenance and technical support contracts to ensure your application scales securely over time." },
];

// --- COMPONENTS ---

function HeroSection() {
  return (
    <section className="px-6 md:px-12 max-w-[1800px] 2xl:px-16 mx-auto pt-24 pb-24 lg:pt-32 lg:pb-32 flex flex-col lg:flex-row items-start gap-16">
      <div className="flex-1 text-center lg:text-left flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-[3rem] md:text-[4.5rem] leading-[1.1] font-extrabold tracking-tight mb-6 text-[#0F172A]">
            Let's Turn Your Business Challenges Into <span className="text-[#7C3AED]">Smart Solutions.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#334155] max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-medium">
            From the first conversation to deployment, we help you make confident technology decisions that support long-term growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link href="/contact" className="group relative w-full sm:w-auto pl-6 pr-2 py-2 h-[56px] rounded-full bg-[#7C3AED] text-white font-bold hover:bg-[#6D28D9] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-between gap-4 shadow-xl shadow-[#7C3AED]/20 overflow-hidden">
              <div className="relative h-6 w-[150px] overflow-hidden flex items-center">
                <span className="absolute inset-0 flex items-center transition-transform duration-300 group-hover:-translate-y-full">
                  Discuss Your Idea
                </span>
                <span className="absolute inset-0 flex items-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  Get Solution
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 z-10 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-5 h-5 text-[#7C3AED]" />
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Creative Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col sm:flex-row flex-wrap gap-4 mx-auto lg:mx-0 w-full max-w-2xl"
        >
          {/* Transparent Development */}
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-2xl px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(124,58,237,0.1)] hover:-translate-y-1 transition-all duration-300 group cursor-default">
            <div className="w-8 h-8 rounded-full bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-colors duration-300">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <span className="text-[#0F172A] font-bold text-[13px] tracking-wide">Transparent Development</span>
          </div>

          {/* Weekly Progress Updates */}
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-2xl px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(124,58,237,0.1)] hover:-translate-y-1 transition-all duration-300 group cursor-default">
            <div className="w-8 h-8 rounded-full bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-colors duration-300">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
            </div>
            <span className="text-[#0F172A] font-bold text-[13px] tracking-wide">Weekly Progress Updates</span>
          </div>

          {/* Scalable Architecture */}
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-2xl px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(124,58,237,0.1)] hover:-translate-y-1 transition-all duration-300 group cursor-default">
            <div className="w-8 h-8 rounded-full bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-colors duration-300">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" /></svg>
            </div>
            <span className="text-[#0F172A] font-bold text-[13px] tracking-wide">Scalable Architecture</span>
          </div>
        </motion.div>
      </div>

      <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-12 lg:mt-0">
        <div className="flex flex-col gap-4 relative z-10 pl-0 lg:pl-12">
          {HERO_SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex items-center justify-between bg-white rounded-3xl p-5 border border-[#E2E8F0] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#C4B5FD] transition-all duration-300 cursor-default group transform ${index % 2 === 0 ? 'lg:-translate-x-4' : 'lg:translate-x-4'}`}
            >
              <div className="flex items-center gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: service.bg }}
                >
                  <div
                    className="w-4 h-4 rounded-full shadow-sm"
                    style={{ backgroundColor: service.color }}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] text-lg mb-0.5">{service.title}</h3>
                  <p className="text-sm font-medium text-[#334155]">{service.desc}</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#94A3B8] group-hover:text-[#7C3AED] group-hover:translate-x-1 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const partners = [
    { type: 'img', name: "Siddhraj", logo: "/partnerslogo/siddhraj.jpeg", className: "h-20 md:h-28 lg:h-32 object-contain mix-blend-darken shrink-0" },
    { type: 'img', name: "Unoloft", logo: "/partnerslogo/unoloft.webp", className: "h-8 md:h-10 lg:h-11 object-contain shrink-0" },
    { type: 'img', name: "Kofeko", logo: "/partnerslogo/Kofeko.svg", className: "h-5 md:h-6 lg:h-7 object-contain shrink-0" },
    { type: 'img', name: "Aditya Chemicals", logo: "/partnerslogo/adityachemicals.svg", className: "h-10 md:h-12 lg:h-14 object-contain shrink-0" },
    { type: 'img', name: "3nStar", logo: "/partnerslogo/3nstar.png", className: "h-8 md:h-10 lg:h-12 object-contain shrink-0" },
    { type: 'img', name: "Veda", logo: "/partnerslogo/veda.webp", className: "h-12 md:h-16 lg:h-20 object-contain mix-blend-darken shrink-0" },
    { type: 'img', name: "Cerata", logo: "/partnerslogo/cerata.webp", className: "h-10 md:h-12 lg:h-14 object-contain shrink-0" },
    { type: 'img', name: "Shubham", logo: "/partnerslogo/shubham.png", className: "h-10 md:h-12 lg:h-14 object-contain shrink-0" },
    { type: 'img', name: "Consultup India", logo: "/partnerslogo/consultupindia.webp", className: "h-10 md:h-12 lg:h-14 object-contain shrink-0" },
    { type: 'text', name: "navdrin", className: "text-xl md:text-2xl font-extrabold text-[#0F172A] tracking-tight shrink-0" }
  ];

  return (
    <section className="py-10 bg-white border-t border-[#E2E8F0] shadow-sm relative z-20 overflow-hidden">
      <div className="max-w-[1800px] 2xl:px-16 mx-auto px-6 md:px-12 relative">
        <p className="text-center text-sm font-bold text-[#94A3B8] uppercase tracking-wider mb-8">Trusted by ambitious brands worldwide</p>

        {/* Gradient fades for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            className="flex w-max"
          >
            {/* Render 2 identical sets for seamless infinite scroll */}
            {[1, 2].map((set) => (
              <div key={set} className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20">
                {partners.map((p, idx) => (
                  p.type === 'text'
                    ? <span key={idx} className={`${p.className} whitespace-nowrap px-4`}>{p.name}</span>
                    : <img key={idx} src={p.logo} alt={p.name} className={`${p.className} w-auto max-w-none`} />
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="bg-[#0E0E0C] py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#7C3AED]/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-[#7C3AED]/10 to-transparent pointer-events-none" />

      <div className="px-6 md:px-12 max-w-[1800px] 2xl:px-16 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">What We Do</h2>
          <p className="text-white/60 font-medium max-w-2xl mx-auto text-lg">We engineer powerful digital products, from advanced AI automation to high-performance corporate applications.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {WHAT_WE_DO.map((service, index) => {
            let spanClass = "md:col-span-4";
            if (index === 0) spanClass = "md:col-span-12 lg:col-span-8 lg:row-span-2";
            if (index === 1 || index === 2) spanClass = "md:col-span-6 lg:col-span-4";

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group flex flex-col bg-white/[0.03] backdrop-blur-xl rounded-[2rem] p-6 lg:p-8 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_30px_rgba(0,0,0,0.2)] hover:bg-white/[0.06] hover:border-[#7C3AED]/40 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_30px_rgba(124,58,237,0.2)] transition-all duration-500 overflow-hidden relative ${spanClass}`}
              >
                {/* Decorative glowing orb inside the card */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover:bg-[#7C3AED]/30 group-hover:scale-150" />

                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <div className="relative z-10 mt-auto">
                  <h3 className="font-bold text-white text-2xl lg:text-3xl mb-4">{service.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-white/70 border border-white/10 group-hover:border-white/20 group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Abstract Data Visualization inside the big AI Solutions card */}
                {index === 0 && (
                  <div className="absolute bottom-8 right-8 w-1/3 h-1/3 hidden lg:flex flex-col justify-end gap-3 opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#7C3AED] to-white rounded-full blur-[0.5px]" />
                    <div className="w-4/5 h-1 bg-gradient-to-r from-transparent via-[#7C3AED] to-white rounded-full blur-[0.5px] ml-auto" />
                    <div className="w-11/12 h-1 bg-gradient-to-r from-transparent via-[#7C3AED] to-white rounded-full blur-[0.5px] ml-auto" />
                    <div className="w-3/4 h-1 bg-gradient-to-r from-transparent via-[#7C3AED] to-white rounded-full blur-[0.5px] ml-auto" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  return (
    <section className="bg-[#F8FAFC] py-24 relative overflow-hidden border-y border-[#E2E8F0]">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#7C3AED]/5 to-transparent pointer-events-none" />
      <div className="px-6 md:px-12 max-w-[1800px] 2xl:px-16 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#0E0E0C]">Why Choose Us</h2>
          <p className="text-[#334155] font-medium max-w-2xl mx-auto">We focus on measurable outcomes and technical excellence.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            {WHY_CHOOSE_US.map((reason, index) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-[#7C3AED]/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#7C3AED]" />
                </div>
                <span className="font-bold text-[#0F172A] text-lg">{reason}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-[#E2E8F0] bg-white hidden md:block"
          >
            {/* Minimal Browser Frame */}
            <div className="h-10 bg-[#F1F5F9] border-b border-[#E2E8F0] flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            {/* Image */}
            <img
              src="/dashboard-mockup.png"
              alt="SaaS Dashboard Analytics"
              className="w-full h-[calc(100%-2.5rem)] object-cover object-bottom"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="px-6 md:px-12 max-w-[1800px] 2xl:px-16 mx-auto py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#0F172A]">Industries We Serve</h2>
        <p className="text-[#334155] font-medium max-w-2xl mx-auto">Transforming operations across global sectors.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {INDUSTRIES.map((industry, index) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-center gap-3 bg-white border border-[#E2E8F0] shadow-sm rounded-full px-6 py-3 hover:border-[#7C3AED] hover:shadow-md transition-all duration-300 cursor-default"
          >
            <industry.icon className="w-5 h-5 text-[#7C3AED]" />
            <span className="font-bold text-[#0F172A] text-sm">{industry.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FAQItem({ faq, isOpen, onClick }: { faq: typeof FAQS[0], isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border border-[#E2E8F0] bg-white rounded-2xl overflow-hidden mb-4 shadow-sm hover:border-[#C4B5FD] transition-colors">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="font-bold text-lg text-[#0F172A]">{faq.q}</span>
        <ChevronDown className={`w-5 h-5 text-[#7C3AED] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 text-[#334155] leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 md:px-12 max-w-3xl mx-auto pt-8 pb-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#0F172A]">Common Questions</h2>
        <p className="text-[#334155] font-medium">Everything you need to know about working with us.</p>
      </div>

      <div>
        {FAQS.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="cta" className="px-6 md:px-12 max-w-[1800px] 2xl:px-16 mx-auto pb-24">
      <div className="bg-[#0F172A] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C3AED]/30 via-[#0F172A]/0 to-[#0F172A]/0 pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
            Not Sure What to Build or How to Scale your business ?
          </h2>
          <p className="text-lg text-white/70 mb-10 font-medium">
            Every successful product starts with clarity. Share your business challenge, and we'll help you define the right strategy, choose the right technology, and build a solution that scales.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="group relative w-full sm:w-auto pl-6 pr-2 py-2 h-[56px] rounded-full bg-[#7C3AED] text-white font-bold hover:bg-[#6D28D9] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-between gap-4 shadow-xl shadow-[#7C3AED]/20 overflow-hidden">
              <div className="relative h-6 w-[150px] overflow-hidden flex items-center">
                <span className="absolute inset-0 flex items-center transition-transform duration-300 group-hover:-translate-y-full text-left">
                  Discuss Your Idea
                </span>
                <span className="absolute inset-0 flex items-center translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-left">
                  Get Solution
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 z-10 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-5 h-5 text-[#7C3AED]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- MAIN LAYOUT ---

import Footer from "@/components/Footer";

export default function CreativeLandingPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-hidden selection:bg-[#7C3AED]/20 selection:text-[#7C3AED]">
      {/* Background Dot Grid */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #E2E8F0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <main className="relative z-10">
        <HeroSection />
        <WhatWeDoSection />
        <PartnersSection />
        <WhyChooseUsSection />
        <IndustriesSection />
        <FAQSection />
        <CTASection />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
