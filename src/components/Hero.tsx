"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, BarChart3, Box, Play, CheckCircle2, Zap, Bot, Layout, Terminal, Code2, Brain, Database, Cloud } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[120vh] flex flex-col items-center justify-start overflow-hidden pt-36 pb-20 bg-[var(--bg-primary)]">

      {/* Top Header Text */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center w-full mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[88px] font-bold tracking-tightest leading-[1.02] mb-6 text-[#0f172a]"
        >
          AI-Driven Custom Software <br className="hidden sm:inline" />
          Engineered Right Away
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-[22px] max-w-3xl mx-auto mb-10 leading-relaxed text-slate-600 font-medium tracking-tight"
        >
          From concept to deployment — we build bespoke AI agents, scalable SaaS, and enterprise CRMs designed precisely for your business.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <a
            href="/contact"
            className="flex items-center justify-center gap-2 px-8 py-4 text-[15px] font-semibold text-white bg-[#0f172a] rounded-sm hover:bg-slate-800 transition-colors w-full sm:w-auto min-w-[200px]"
          >
            Get Started Free
          </a>
        </motion.div>
      </div>

      {/* Informational Capabilities Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 mt-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* AI Block */}
          <div className="md:col-span-2 bg-[#0f172a] p-10 md:p-14 rounded-sm flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-500/20 transition-colors duration-700"></div>
            <div className="relative z-10">
              <Brain className="text-blue-400 mb-6" size={40} />
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Proprietary AI Agents</h3>
              <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
                We build and train custom AI agents using your company's proprietary data. Automate customer support, streamline internal operations, and unlock 24/7 productivity.
              </p>
            </div>
            <div className="relative z-10 mt-12 flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                <CheckCircle2 size={16} className="text-blue-400" /> GPT-4 & Claude
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                <CheckCircle2 size={16} className="text-blue-400" /> RAG Architecture
              </div>
            </div>
          </div>

          {/* Web Apps Block */}
          <div className="bg-white border border-slate-200 p-10 rounded-sm flex flex-col justify-between group hover:border-slate-300 transition-colors">
            <div>
              <Layout className="text-slate-900 mb-6" size={40} />
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Enterprise Web Apps</h3>
              <p className="text-slate-600 leading-relaxed">
                High-performance, scalable web applications built with modern frameworks. We prioritize speed, security, and exceptional user experience.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-sm uppercase tracking-wider">Next.js</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-sm uppercase tracking-wider">React</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-sm uppercase tracking-wider">Node.js</span>
            </div>
          </div>

          {/* CRM Block */}
          <div className="bg-white border border-slate-200 p-10 rounded-sm flex flex-col justify-between group hover:border-slate-300 transition-colors">
            <div>
              <Database className="text-slate-900 mb-6" size={40} />
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Custom CRMs</h3>
              <p className="text-slate-600 leading-relaxed">
                Ditch the bloated software. We architect custom CRM solutions tailored specifically to your unique sales pipelines and data requirements.
              </p>
            </div>
          </div>

          {/* DevOps Block */}
          <div className="md:col-span-2 bg-slate-50 border border-slate-200 p-10 md:p-14 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 group hover:border-slate-300 transition-colors">
            <div>
              <Cloud className="text-slate-900 mb-6" size={40} />
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">End-to-End Delivery</h3>
              <p className="text-slate-600 text-lg max-w-xl leading-relaxed">
                From robust cloud architecture on AWS to secure CI/CD pipelines, we ensure your software is deployed flawlessly and scales infinitely.
              </p>
            </div>
            <div className="shrink-0 hidden md:block">
              <div className="w-24 h-24 rounded-full border-4 border-slate-200 flex items-center justify-center border-t-blue-500 animate-[spin_4s_linear_infinite]">
                <Terminal className="text-slate-400" size={32} />
              </div>
            </div>
          </div>

        </div>
      </motion.div>

      {/* Decorative Grid Background lines (very subtle) */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: 0.5 }}></div>
    </section>
  );
}
