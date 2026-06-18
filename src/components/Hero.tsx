"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, BarChart3, Box, Play, CheckCircle2, Zap, Bot, Layout, Terminal, Code2 } from "lucide-react";
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
          <a
            href="/solutions"
            className="flex items-center justify-center gap-2 px-8 py-4 text-[15px] font-semibold text-[#0f172a] bg-transparent border border-slate-300 rounded-sm hover:bg-slate-50 transition-colors w-full sm:w-auto min-w-[200px]"
          >
            Book A Demo
          </a>
        </motion.div>
      </div>

      {/* Abstract Mockup Grid (Dstudio Style) */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 mt-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[500px] md:h-[600px]">

          {/* Left Column Mockup */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex-1 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 overflow-hidden relative group hover:shadow-md transition-shadow">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-blue-600">
                    <Bot size={18} />
                  </div>
                  <span className="text-sm font-bold text-slate-800">AI Engine</span>
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Active</span>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-full bg-slate-50 rounded-lg p-3 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                    <div className="flex-1 h-2 bg-slate-200 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-[200px] bg-slate-900 rounded-2xl border border-slate-800 shadow-xl p-6 relative overflow-hidden group hover:border-slate-700 transition-colors">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-slate-400">api/v1/generate</span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
              </div>
              <pre className="text-[10px] font-mono text-emerald-400 leading-relaxed">
                <code>
                  {`{
  "status": 200,
  "response": {
    "model": "gpt-4-turbo",
    "tokens": 420,
    "latency": "120ms"
  }
}`}
                </code>
              </pre>
            </div>
          </div>

          {/* Center Main Mockup */}
          <div className="md:col-span-5 bg-white rounded-3xl border border-slate-100 shadow-md p-2 overflow-hidden relative hover:shadow-lg transition-shadow">
            <div className="w-full h-full bg-slate-50 rounded-[20px] border border-slate-100/50 p-6 flex flex-col relative overflow-hidden">
              {/* Background gradient blur */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-violet-400 opacity-20 blur-[80px] rounded-full"></div>
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-400 opacity-20 blur-[80px] rounded-full"></div>

              <div className="flex items-center justify-between mb-8 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-sm">
                    <Layout size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Dashboard UI</h3>
                    <p className="text-[11px] text-slate-500 font-medium">Analytics Overview</p>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                  ))}
                </div>
              </div>

              {/* Chart Mockup */}
              <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-100 p-5 flex flex-col z-10">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <p className="text-[11px] text-slate-500 font-medium mb-1">Total Revenue</p>
                    <h4 className="text-2xl font-bold text-slate-900">$124,500.00</h4>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">+14.5%</span>
                </div>

                <div className="flex-1 flex items-end gap-2">
                  {[40, 70, 45, 90, 65, 80, 100].map((height, i) => (
                    <div key={i} className="flex-1 bg-slate-100 rounded-t-sm relative group overflow-hidden">
                      <div
                        className="absolute bottom-0 left-0 w-full bg-indigo-500 transition-all duration-1000 group-hover:bg-indigo-600"
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Mockup */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <div className="h-[240px] bg-indigo-600 rounded-2xl p-6 relative overflow-hidden text-white hover:bg-indigo-700 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 blur-[30px] rounded-full"></div>
              <Layout className="mb-4 text-indigo-300" size={24} />
              <h4 className="text-lg font-bold mb-2">Scalable Systems</h4>
              <p className="text-sm text-indigo-200 leading-relaxed">
                Microservices architecture designed to handle millions of requests flawlessly.
              </p>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></div>
                  ))}
                </div>
                <ArrowRight size={16} className="text-white opacity-80" />
              </div>
            </div>

            <div className="flex-1 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                  <Code2 size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Custom Components</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Pixel-perfect UI built from scratch to match your exact brand guidelines.
                  </p>
                </div>
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
