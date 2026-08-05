"use client";

import { motion } from "framer-motion";
import { ArrowRight, PackageOpen, LayoutGrid, Server, ShieldCheck, Database, Cloud } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const METRICS = [
  { num: "5,000+", lbl: "SKUs under management" },
  { num: "10,000+", lbl: "Rows per bulk batch" },
  { num: "80%", lbl: "Faster data entry" },
  { num: "65%", lbl: "Less reconciliation time" },
  { num: "Live", lbl: "QuickBooks sync" },
];

const PROBLEM_FEATURES = [
  {
    num: "/01",
    title: "Spreadsheet sprawl",
    desc: "Multiple workbooks held overlapping SKU lists. Nobody trusted a single “current” file, and version conflicts were routine."
  },
  {
    num: "/02",
    title: "Double entry to accounting",
    desc: "Every movement had to be re-keyed into QuickBooks. Stock and ledger drifted apart until someone spent days reconciling."
  },
  {
    num: "/03",
    title: "Unsafe bulk imports",
    desc: "Large Excel drops had no validation pipeline — bad part numbers, missing costs, and duplicate SKUs landed silently."
  },
  {
    num: "/04",
    title: "Slow close cycles",
    desc: "Month-end reconciliation consumed days. Ops waited on finance; finance waited on Ops. Neither had a live view of truth."
  }
];

const SOLUTION_FEATURES = [
  {
    num: "/01",
    title: "SKU catalog & stock movements",
    desc: "Central master for parts identity, quantities, locations, and transaction history — receipts, issues, and adjustments in one place."
  },
  {
    num: "/02",
    title: "Bulk Excel & CSV pipeline",
    desc: "Import and export batches of 10,000+ rows with streaming parsers and job status so large catalogs update without locking the UI."
  },
  {
    num: "/03",
    title: "Field-level validation",
    desc: "Required fields, duplicate SKU checks, and type/range rules run before commit — bad rows are rejected with actionable error reports."
  },
  {
    num: "/04",
    title: "Real-time QuickBooks sync",
    desc: "Inventory-relevant accounting entities sync through a dedicated QuickBooks adapter so stock movements and the ledger stay aligned."
  },
  {
    num: "/05",
    title: "JWT role-based access",
    desc: "Operators, managers, and finance see only what their role allows — catalog edits and sync actions are permission-gated."
  },
  {
    num: "/06",
    title: "Reconciliation-ready reports",
    desc: "Movement history and sync status give finance a clear trail from warehouse action to QuickBooks record."
  }
];

const ARCHITECTURE = [
  {
    title: "Frontend",
    tags: ["React.js", "Inventory UI", "Bulk upload UX"]
  },
  {
    title: "Backend",
    tags: ["Node.js", "Express.js", "REST API", "JWT"]
  },
  {
    title: "Data & jobs",
    tags: ["PostgreSQL", "Batch workers", "CSV / Excel parsers"]
  },
  {
    title: "Accounting",
    tags: ["QuickBooks API", "OAuth sync", "Entity mapping"]
  }
];

const OUTCOMES = [
  { num: "80%", title: "Faster data entry", desc: "Bulk validated imports replaced row-by-row spreadsheet edits across a 5,000+ SKU catalog." },
  { num: "65%", title: "Less reconciliation", desc: "Live QuickBooks sync cut the days lost matching warehouse movements to accounting records." },
  { num: "10k+", title: "Rows per batch", desc: "Excel and CSV pipelines handle large catalog refreshes without locking operators out of the app." },
  { num: "Single", title: "Source of stock truth", desc: "One SKU master replaced conflicting workbooks — stockouts and overstock became visible earlier." },
  { num: "Aligned", title: "Ops and finance", desc: "Warehouse actions and ledger entries share a sync trail, so close is review — not archaeology." },
  { num: "Live", title: "In production", desc: "PartsFlow shipped end-to-end: catalog, bulk ops, auth, and QuickBooks — not a prototype left on a laptop." }
];

export default function PartsFlowClient() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
              FinTech · Inventory Ops
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              PartsFlow <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#7C3AED]">Inventory</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed">
              An end-to-end spare-parts inventory control system for 5,000+ SKUs — with bulk Excel and CSV import/export, field-level validation, and real-time QuickBooks sync so warehouse stock and the ledger finally agree.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="/contact" className="group relative w-full sm:w-auto pl-6 pr-2 py-2 h-[56px] rounded-full bg-[#7C3AED] text-white font-bold hover:bg-[#6D28D9] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-between gap-4 shadow-xl shadow-[#7C3AED]/20 overflow-hidden">
                <div className="relative h-6 w-[200px] overflow-hidden flex items-center">
                  <span className="absolute inset-0 flex items-center transition-transform duration-300 group-hover:-translate-y-full text-left whitespace-nowrap">
                    Start a similar project
                  </span>
                  <span className="absolute inset-0 flex items-center translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-left whitespace-nowrap">
                    Let's Talk Business
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 z-10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-5 h-5 text-[#7C3AED]" />
                </div>
              </a>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-x divide-slate-100">
            {METRICS.map((metric, idx) => (
              <div key={idx} className={idx === 0 ? "" : "pl-6"}>
                <div className="text-3xl font-extrabold text-[#7C3AED] mb-1">{metric.num}</div>
                <div className="text-sm font-bold text-slate-600 uppercase tracking-wide">{metric.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 01: Problem */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">01. Problem</div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">Stock lived in spreadsheets. The ledger lived elsewhere.</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Spare-parts operations were stuck between warehouse reality and accounting fiction. SKUs sprawled across Excel files; receipts and issues were typed twice — once for inventory, again for QuickBooks. Month-end meant reconciling thousands of rows by hand while stockouts and overstock hid in the gaps.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Bulk updates were risky: a bad CSV could corrupt master data with no field-level validation. Role access was informal. The team needed a single system of record for parts that still spoke fluent QuickBooks at close.
              </p>
            </div>

            <div className="lg:w-2/3">
              <div className="grid sm:grid-cols-2 gap-6">
                {PROBLEM_FEATURES.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100"
                  >
                    <div className="text-2xl font-bold text-slate-300 mb-4 font-mono">{feature.num}</div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 & 03: Solution & What We Built */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">

          <div className="max-w-3xl mb-24">
            <div className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">02. Solution</div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">One inventory app. One ledger connection.</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              Spaciva built PartsFlow — a full-stack spare-parts inventory platform on React, Node.js, Express, and PostgreSQL. Operators manage 5,000+ SKUs with stock movements, role-based JWT access, and bulk Excel/CSV import-export that processes 10,000+ records per batch with field-level validation before anything hits the database.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed">
              A QuickBooks API adapter keeps inventory movements and accounting entities aligned in near real time, cutting reconciliation time by 65% and data entry time by 80%. Warehouse and finance finally share the same numbers.
            </p>
          </div>

          <div>
            <div className="text-sm font-bold text-[#7C3AED] uppercase tracking-widest mb-4">03. What we built</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-slate-900">Warehouse control that closes with the books.</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SOLUTION_FEATURES.map((feature, idx) => (
                <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="text-xl font-bold text-blue-300 mb-4 font-mono">{feature.num}</div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Section 04: Architecture */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <div className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">04. Architecture</div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">Classic MERN-era stack, production discipline.</h2>
            <p className="text-lg text-slate-600">A React SPA talks to an Express REST API backed by PostgreSQL. Bulk jobs run as background workers that validate, stage, and commit rows transactionally. The QuickBooks adapter isolates OAuth and API quirks so inventory domain logic stays clean.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARCHITECTURE.map((arch, idx) => (
              <div key={idx} className="p-6 border border-slate-200 rounded-3xl">
                <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  {idx === 0 && <LayoutGrid className="w-5 h-5 text-blue-500" />}
                  {idx === 1 && <Server className="w-5 h-5 text-blue-500" />}
                  {idx === 2 && <Database className="w-5 h-5 text-blue-500" />}
                  {idx === 3 && <Cloud className="w-5 h-5 text-blue-500" />}
                  {arch.title}
                </h4>
                <div className="flex flex-col gap-2">
                  {arch.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 05: Outcome */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-sm font-bold text-[#7C3AED] uppercase tracking-widest mb-4">05. Outcome</div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">Faster warehouse. Cleaner close.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OUTCOMES.map((out, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <div className="text-4xl font-extrabold text-blue-600 mb-4">{out.num}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{out.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{out.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project Nav */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex justify-between items-center">
            <a href="/case-studies/unified-accounting" className="text-left group block hover:bg-slate-50 p-6 rounded-2xl transition-colors">
              <span className="text-sm font-bold text-blue-600 block mb-2 uppercase tracking-wide">← Previous project</span>
              <span className="text-2xl font-extrabold text-slate-900 block mb-1">Unified Accounting</span>
              <span className="text-slate-500">Multi-Platform Sync</span>
            </a>
            <div />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
