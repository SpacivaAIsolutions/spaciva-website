"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, BarChart3, Box, Play, CheckCircle2, Zap, Bot, Layout, Terminal, Code2, Brain, Database, Cloud } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[120vh] flex flex-col items-center justify-start overflow-hidden pt-36 pb-20 bg-[var(--bg-primary)]">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-400/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-violet-400/20 blur-[120px]"
        />
      </div>

      {/* Top Header Text */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center w-full mb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="mb-6"
        >
          <h1 className="text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[88px] font-bold tracking-tightest leading-[1.02] text-[#0f172a] flex flex-wrap justify-center gap-x-4 sm:gap-x-5">
            {["AI-Driven", "Custom", "Software"].map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                {word}
              </motion.span>
            ))}
            <div className="basis-full h-0 hidden sm:block"></div>
            {["Engineered", "Right", "Away"].map((word, i) => (
              <motion.span
                key={i + 3}
                variants={{
                  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className={word === "Away" ? "text-blue-600" : ""}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-[22px] max-w-3xl mx-auto mb-10 leading-relaxed text-slate-600 font-medium tracking-tight"
        >
          From concept to deployment — we build bespoke AI agents, scalable SaaS, and enterprise CRMs designed precisely for your business.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full relative"
        >
          {/* Animated Glow Behind Button */}
          <motion.div
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[60px] bg-blue-500/40 blur-xl rounded-full -z-10"
          ></motion.div>

          <a
            href="/contact"
            className="group relative flex items-center justify-center gap-2 px-8 py-4 text-[15px] font-bold text-white bg-[#0f172a] rounded-full hover:bg-blue-600 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.5)] transition-all duration-300 w-full sm:w-auto min-w-[200px] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Connect
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
          </a>
        </motion.div>
      </div>

      {/* Informational Capabilities Section - Bento Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 mt-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* AI Block - 8 columns */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-8 bg-[#0f172a] rounded-[32px] p-10 md:p-12 relative overflow-hidden group border border-slate-800 shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-600/20 transition-all duration-700"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20">
                  <Brain className="text-blue-400" size={28} />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight">AI & Machine Learning Systems</h3>
                <p className="text-slate-400 text-lg max-w-xl leading-relaxed mb-10">
                  We don't just use APIs; we build robust, custom AI architectures. From fine-tuning LLMs on your proprietary data to deploying complex RAG (Retrieval-Augmented Generation) pipelines, we turn AI into your core competitive advantage.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-auto">
                {['OpenAI GPT-4', 'Anthropic Claude', 'Llama 3', 'LangChain', 'Pinecone Vector DB'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-slate-800/80 text-slate-300 text-sm font-semibold rounded-full border border-slate-700/50 backdrop-blur-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Web Apps Block - 4 columns */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-white rounded-[32px] p-10 relative overflow-hidden group border border-slate-200 shadow-xl"
          >
            <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-50 transition-colors duration-300">
              <Layout className="text-slate-900 group-hover:text-blue-600 transition-colors duration-300" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">High-Performance Web Apps</h3>
            <p className="text-slate-600 leading-relaxed mb-10">
              Scalable, lightning-fast web applications engineered with modern JavaScript frameworks. We prioritize flawless UX, ironclad security, and SEO optimization.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['Next.js', 'React', 'Node.js', 'TypeScript'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-md uppercase tracking-wider group-hover:bg-slate-200 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CRM Block - 5 columns */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-5 bg-blue-600 rounded-[32px] p-10 relative overflow-hidden group shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"></div>
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/10 rounded-tl-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/20">
                <Database className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Bespoke CRMs & LMS</h3>
              <p className="text-blue-100 leading-relaxed mb-10">
                Ditch bloated SaaS subscriptions. We architect custom multi-tenant CRM and LMS platforms tailored perfectly to your unique sales pipelines and internal workflows.
              </p>
              <ul className="mt-auto space-y-3">
                {['100% Codebase Ownership', 'No Per-Seat Licenses', 'Custom Workflows'].map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-white/90 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-blue-300" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* DevOps Block - 7 columns */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-7 bg-white rounded-[32px] p-10 md:p-12 border border-slate-200 shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-10 group"
          >
            <div className="flex-1">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-slate-200 transition-colors">
                <Cloud className="text-slate-900" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Cloud & DevOps Mastery</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We ensure your software is deployed flawlessly and scales infinitely. From robust AWS cloud architecture to secure, automated CI/CD pipelines.
              </p>
              <div className="flex flex-wrap gap-3">
                {['AWS', 'Docker', 'Kubernetes', 'CI/CD Pipelines'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-slate-50 text-slate-600 text-sm font-semibold rounded-full border border-slate-200 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden sm:flex shrink-0 w-32 h-32 rounded-full border-4 border-slate-100 items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-t-4 border-blue-500 animate-[spin_3s_linear_infinite]"></div>
              <div className="absolute inset-2 rounded-full border-r-4 border-slate-300 animate-[spin_4s_linear_infinite_reverse]"></div>
              <Terminal className="text-slate-400 group-hover:text-blue-500 transition-colors duration-300" size={36} />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Grid Background lines (very subtle) */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: 0.5 }}></div>
    </section>
  );
}
