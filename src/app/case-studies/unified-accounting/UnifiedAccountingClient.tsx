"use client";

import { motion } from "framer-motion";
import { ArrowRight, RefreshCcw, Layers, Database, Lock, CheckCircle2, Server, Cloud, Code, GitMerge, FileText, Zap, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const METRICS = [
  { num: "12+", lbl: "Accounting & ERP platforms" },
  { num: "70%", lbl: "Less manual data entry" },
  { num: "1,000+", lbl: "Sync events per day" },
  { num: "OAuth", lbl: "Token rotation secured" },
  { num: "Zero", lbl: "Token-leak incidents" },
];

const PROBLEM_FEATURES = [
  {
    num: "/01",
    title: "Manual multi-ledger work",
    desc: "Operators re-entered the same vendor and invoice data into multiple accounting systems, burning hours and creating mismatches that only showed up at close."
  },
  {
    num: "/02",
    title: "Costly connector dependency",
    desc: "Third-party integration platforms charged per user and limited how deeply entities could be mapped — expensive at scale and shallow when edge cases appeared."
  },
  {
    num: "/03",
    title: "Auth and sync fragility",
    desc: "OAuth tokens expired mid-batch; partial syncs left ledgers half-updated with no reliable retry or dead-letter path for failed events."
  },
  {
    num: "/04",
    title: "No shared abstraction",
    desc: "Each new platform meant another one-off integration. Onboarding NetSuite after QuickBooks should have been configuration — not a rewrite."
  }
];

const SOLUTION_FEATURES = [
  {
    num: "/01",
    title: "Bi-directional entity sync",
    desc: "Vendors, invoices, and payments sync both ways with conflict-aware upserts so neither system becomes a silent source of duplicates."
  },
  {
    num: "/02",
    title: "Platform adapter layer",
    desc: "Each ledger plugs in behind a common interface — from QuickBooks and Xero to NetSuite, Sage, Business Central, and Odoo — so adding a provider is an adapter, not a fork of the core."
  },
  {
    num: "/03",
    title: "OAuth 2.0 with rotation",
    desc: "Secure token storage, refresh, and rotation across platforms. Credentials never touch the client; expiry is handled before jobs fail mid-flight."
  },
  {
    num: "/04",
    title: "Scheduled and event-driven runs",
    desc: "Cron-style Lambda schedules plus webhook hooks keep syncs flowing whether the source system pushes or the worker pulls on interval."
  },
  {
    num: "/05",
    title: "Error queue and retries",
    desc: "Failed events are isolated, retried with backoff, and surfaced for ops review — partial syncs no longer vanish into log noise."
  },
  {
    num: "/06",
    title: "Admin sync visibility",
    desc: "Operators can inspect connection health, last successful sync, and entity counts without opening four different accounting UIs."
  }
];

const PLATFORMS = [
  { title: "QuickBooks Online", desc: "100+ integration patterns. App-store-ready OAuth. Certified-style QBO entity sync.", iconUrl: "https://www.google.com/s2/favicons?domain=quickbooks.intuit.com&sz=128" },
  { title: "QuickBooks Desktop", desc: "Legacy and modern connectivity. Desktop-to-cloud migration expertise.", iconUrl: "https://www.google.com/s2/favicons?domain=intuit.com&sz=128" },
  { title: "Xero", desc: "Invoice, contact, and payment sync. Built for UK, AU, and accounting-forward teams.", iconUrl: "https://www.google.com/s2/favicons?domain=xero.com&sz=128" },
  { title: "Sage", desc: "Sage 50, Sage Intacct, Sage Business Cloud. Multi-version support.", iconUrl: "https://www.google.com/s2/favicons?domain=sage.com&sz=128" },
  { title: "NetSuite", desc: "SuiteTalk / REST. Custom records and saved-search-driven ERP sync.", iconUrl: "https://www.google.com/s2/favicons?domain=netsuite.com&sz=128" },
  { title: "Business Central", desc: "Dynamics 365 Business Central API. Microsoft finance & operations stacks.", iconUrl: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128" },
  { title: "MYOB", desc: "Australian market accounting sync for SMB and mid-market SaaS.", iconUrl: "https://www.google.com/s2/favicons?domain=myob.com&sz=128" },
  { title: "FreshBooks", desc: "Invoice and expense sync. Time-tracking-friendly service workflows.", iconUrl: "https://www.google.com/s2/favicons?domain=freshbooks.com&sz=128" },
  { title: "Zoho Books", desc: "Zoho Financial Suite connectivity for products already in the Zoho ecosystem.", iconUrl: "https://www.google.com/s2/favicons?domain=zoho.com&sz=128" },
  { title: "Wave", desc: "Free accounting platform integration for SMB-focused SaaS products.", iconUrl: "https://www.google.com/s2/favicons?domain=waveapps.com&sz=128" },
  { title: "ClearBooks", desc: "UK market accounting platform. MTD-aware compliance patterns.", iconUrl: "https://www.google.com/s2/favicons?domain=clearbooks.co.uk&sz=128" },
  { title: "Odoo", desc: "Open-source ERP integration. Custom module hooks for Odoo finance.", iconUrl: "https://www.google.com/s2/favicons?domain=odoo.com&sz=128" }
];

const ARCHITECTURE = [
  {
    title: "Compute",
    tags: ["Node.js", "Express.js", "AWS Lambda", "API Gateway"]
  },
  {
    title: "Data",
    tags: ["PostgreSQL", "Sync job state", "Entity mapping"]
  },
  {
    title: "Auth & security",
    tags: ["OAuth 2.0", "Token rotation", "Secrets vault"]
  },
  {
    title: "Providers",
    tags: ["QuickBooks", "Xero", "Sage", "NetSuite", "Business Central", "MYOB", "FreshBooks", "Odoo", "Redis rate limits"]
  }
];

const OUTCOMES = [
  { num: "70%", title: "Less manual entry", desc: "Vendors, invoices, and payments move through automated pipelines instead of copy-paste between accounting UIs." },
  { num: "1,000+", title: "Events per day", desc: "Serverless workers absorb real-time financial traffic without provisioning a fleet that sits idle overnight." },
  { num: "12+", title: "Platforms, one core", desc: "QuickBooks, Xero, Sage, NetSuite, Business Central, MYOB, FreshBooks, Odoo share the same sync engine — new adapters plug in without rewriting the product." },
  { num: "Zero", title: "Token-leak incidents", desc: "OAuth rotation and vaulted secrets kept credentials off clients and out of logs across the production run." },
  { num: "Owned", title: "Integration IP", desc: "Replacing rented connectors with owned adapters cut recurring iPaaS spend and unlocked deeper entity mappings." },
  { num: "Live", title: "Zero-downtime scale", desc: "Lambda auto-scaling kept sync jobs healthy under load — no overnight batch window that blocked the next business day." }
];

export default function UnifiedAccountingClient() {
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
              FinTech · Accounting Integrations
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Unified Accounting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#7C3AED]">Integration</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed">
              A multi-platform sync layer so product and ops teams connect once and keep vendors, invoices, and payments aligned across the world’s leading accounting and ERP systems — QuickBooks, Xero, Sage, NetSuite, Business Central, MYOB, FreshBooks, Zoho Books, Wave, ClearBooks, Odoo, and more — without brittle one-off connectors or expensive per-user iPaaS fees.
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
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">Every ledger spoke a different dialect.</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Finance and product teams were juggling CSV exports, fragile custom scripts, and expensive third-party connectors just to keep vendors, invoices, and payments consistent across QuickBooks, Xero, Sage, NetSuite, Business Central, and a long tail of regional ledgers.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Each platform had its own auth model, rate limits, and entity shapes — so "sync" usually meant partial updates, silent failures, and month-end fire drills. The business needed an owned integration layer: one sync engine, modular adapters, and credentials that never leaked.
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
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">One sync engine. Adapters for every ledger that matters.</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              Spaciva designed a bi-directional Unified Accounting Integration platform: a shared sync core with modular adapters for all major accounting tools. Vendors, invoices, and payments flow through normalized entity mappers; OAuth 2.0 credentials rotate automatically; workers run on AWS Lambda so traffic spikes do not take the ledger offline.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed">
              Scheduled jobs and webhook triggers keep systems near real-time. Failed events land in a retry queue with visibility for operators. The result is owned integration logic — deeper mappings, predictable cost, and zero token-leak incidents.
            </p>
          </div>

          <div>
            <div className="text-sm font-bold text-[#7C3AED] uppercase tracking-widest mb-4">03. What we built</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-slate-900">Production plumbing for multi-ledger finance.</h2>

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

      {/* Section 03b: Platforms */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <div className="text-sm font-bold text-[#7C3AED] uppercase tracking-widest mb-4">03b. Platforms we support</div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">One unified API surface across accounting and ERP.</h2>
            <p className="text-lg text-slate-400">Need a platform not listed here? We have connected SaaS products to 50+ accounting and ERP systems — <a href="/contact" className="text-blue-400 hover:underline">talk to us</a> about your stack.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {PLATFORMS.map((platform, idx) => (
              <div key={idx} className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <img src={platform.iconUrl} alt={platform.title} className="w-6 h-6 object-contain" />
                </div>
                <h4 className="font-bold text-white mb-2">{platform.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 04: Architecture */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <div className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">04. Architecture</div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">Serverless workers, durable state, locked-down auth.</h2>
            <p className="text-lg text-slate-600">The stack is intentionally lean: an API layer fronts Lambda workers that read and write PostgreSQL, pull secrets from a secured vault, and call provider APIs through rate-aware adapters. Redis absorbs bursty rate-limit windows so a noisy tenant cannot starve the fleet.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARCHITECTURE.map((arch, idx) => (
              <div key={idx} className="p-6 border border-slate-200 rounded-3xl">
                <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  {idx === 0 && <Server className="w-5 h-5 text-blue-500" />}
                  {idx === 1 && <Database className="w-5 h-5 text-blue-500" />}
                  {idx === 2 && <ShieldCheck className="w-5 h-5 text-blue-500" />}
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
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">Ledgers that stay in step — without the spreadsheet tax.</h2>
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
            <div />
            <a href="/case-studies/partsflow" className="text-right group block hover:bg-slate-50 p-6 rounded-2xl transition-colors">
              <span className="text-sm font-bold text-blue-600 block mb-2 uppercase tracking-wide">Next project →</span>
              <span className="text-2xl font-extrabold text-slate-900 block mb-1">PartsFlow</span>
              <span className="text-slate-500">Spare Parts Inventory</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
