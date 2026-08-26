"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Cloud, Database, Zap, CheckCircle2, ChevronRight, BarChart, Landmark, Users, Search, Code, Smartphone, Briefcase, ChevronDown, Lightbulb, TrendingUp, MonitorSmartphone, Layers, Settings, FileText, CreditCard, PiggyBank, Lock, RefreshCcw, ShieldCheck, Wallet } from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const CHALLENGES = [
  {
    title: "Disconnected Financial Platforms",
    desc: "Banks, payment systems, accounting software, and CRMs often operate independently.",
    icon: Layers
  },
  {
    title: "Legacy Banking Systems",
    desc: "Modern digital experiences become difficult on aging infrastructure.",
    icon: Database
  },
  {
    title: "Payment Complexity",
    desc: "Multiple gateways, currencies, settlements, and compliance create engineering challenges.",
    icon: CreditCard
  },
  {
    title: "Financial Data Synchronization",
    desc: "Accounting, ERP, billing, and operational systems drift out of sync.",
    icon: RefreshCcw
  },
  {
    title: "Manual Reconciliation",
    desc: "Finance teams spend hours matching transactions across multiple platforms.",
    icon: FileText
  },
  {
    title: "Security & Compliance",
    desc: "Financial applications require secure authentication, auditability, and access controls.",
    icon: ShieldCheck
  },
  {
    title: "Customer Experience",
    desc: "Users expect instant onboarding, fast payments, and self-service financial tools.",
    icon: Smartphone
  },
  {
    title: "Operational Visibility",
    desc: "Leadership needs real-time dashboards for payments, revenue, fraud, and customer activity.",
    icon: BarChart
  }
];

const SOLUTIONS = [
  {
    title: "Unified Accounting Integration",
    desc: "Connect QuickBooks, Xero, NetSuite, Sage, and others through a single integration layer with normalized entities.",
    icon: RefreshCcw
  },
  {
    title: "Payment Gateway Platform",
    desc: "Secure payment processing with multi-gateway support, wallets, subscriptions, refunds, and settlements.",
    icon: CreditCard
  },
  {
    title: "Embedded Finance Platform",
    desc: "Add financial capabilities directly into SaaS products, marketplaces, and enterprise applications.",
    icon: Code
  },
  {
    title: "Digital Banking Platform",
    desc: "Customer onboarding, KYC, account management, transaction history, cards, and transfers.",
    icon: Landmark
  },
  {
    title: "Lending & Loan Management",
    desc: "Application workflows, underwriting, approvals, repayments, EMI schedules, and collections.",
    icon: PiggyBank
  },
  {
    title: "Wealth Management Platform",
    desc: "Investment portfolios, performance dashboards, financial planning, and advisor portals.",
    icon: TrendingUp
  },
  {
    title: "Expense & Spend Management",
    desc: "Corporate cards, reimbursements, approvals, policy enforcement, and finance dashboards.",
    icon: Wallet
  },
  {
    title: "Billing & Subscription Platform",
    desc: "Recurring billing, invoicing, payment reminders, tax calculations, and revenue tracking.",
    icon: FileText
  },
  {
    title: "Treasury & Cash Management",
    desc: "Liquidity monitoring, account reconciliation, payment approvals, and forecasting.",
    icon: Database
  },
  {
    title: "Financial Analytics Dashboard",
    desc: "Revenue, cash flow, transactions, customer insights, payment performance, and fraud monitoring.",
    icon: BarChart
  }
];

const AI_SOLUTIONS = [
  {
    title: "AI Accounting Assistant",
    desc: "Automate invoice matching, bookkeeping support, reconciliation, and financial workflows."
  },
  {
    title: "AI Fraud Detection",
    desc: "Detect suspicious transactions using behavioral analytics and anomaly detection."
  },
  {
    title: "AI Financial Copilot",
    desc: "Help finance teams analyze cash flow, generate reports, and answer operational questions."
  },
  {
    title: "AI Invoice Processing",
    desc: "Extract structured data from invoices, receipts, purchase orders, and financial documents."
  },
  {
    title: "AI Credit Risk Analysis",
    desc: "Assist lending teams with credit evaluation and customer risk insights."
  },
  {
    title: "AI Financial Knowledge Assistant",
    desc: "Search accounting policies, financial documents, compliance procedures, and internal knowledge bases."
  },
  {
    title: "AI Customer Support",
    desc: "Provide instant answers about payments, invoices, accounts, subscriptions, and transactions."
  },
  {
    title: "AI Executive Reporting",
    desc: "Generate summaries of revenue, expenses, cash flow, collections, and operational metrics."
  }
];

const INDUSTRIES = [
  "FinTech Startups",
  "Digital Banks",
  "NBFCs",
  "Payment Providers",
  "Accounting Software Companies",
  "ERP Vendors",
  "Insurance Companies",
  "Wealth Management Firms",
  "Lending Platforms",
  "Investment Companies",
  "Enterprise Finance Teams",
  "B2B SaaS Companies"
];

const SERVICES = [
  "AI & Machine Learning",
  "Custom Software Development",
  "Cloud & DevOps",
  "API Development",
  "Data Engineering",
  "Web Engineering",
  "Mobile Development",
  "Security Engineering"
];

const WHY_SPACIVA = [
  "Secure Platform Architecture",
  "Enterprise API Integration",
  "AI-Powered Automation",
  "Scalable Infrastructure",
  "Custom Financial Platforms",
  "Long-Term Technology Partnership"
];

const KPIS = [
  "Transactions Processed",
  "API Response Time",
  "Payment Success Rate",
  "Accounting Sync Accuracy",
  "Reconciliation Time",
  "Financial Automation Rate",
  "Customer Onboarding Time",
  "Fraud Detection Accuracy"
];

const FAQS = [
  {
    q: "Can you integrate multiple accounting platforms into one application?",
    a: "Yes, we build unified integration layers that connect your application to QuickBooks, Xero, NetSuite, Sage, and more, all through a single, normalized API."
  },
  {
    q: "Do you develop payment gateway platforms?",
    a: "Yes, we build secure payment orchestration layers that handle multiple gateways, wallets, subscriptions, settlements, and recurring billing."
  },
  {
    q: "Can you build embedded finance products?",
    a: "Absolutely. We help SaaS companies and marketplaces embed financial capabilities—such as lending, wallets, and invoicing—directly into their core user experience."
  },
  {
    q: "Can AI automate financial operations?",
    a: "Yes. AI can drastically reduce manual work by automating invoice processing (OCR), matching transactions for reconciliation, and detecting anomalous fraudulent activities in real-time."
  },
  {
    q: "Do you integrate QuickBooks, Xero, NetSuite, and other accounting software?",
    a: "Yes, we specialize in seamless, bi-directional synchronization with all major accounting platforms, ensuring financial ledgers are always up-to-date with operational data."
  },
  {
    q: "Can you modernize legacy financial systems?",
    a: "We help financial institutions safely migrate away from aging monoliths to secure, scalable, cloud-native microservices, ensuring zero downtime and complete data integrity."
  },
  {
    q: "Do you develop secure digital banking platforms?",
    a: "Yes. We build end-to-end digital banking experiences, including secure KYC onboarding, ledger management, transaction processing, and user-friendly mobile applications."
  },
  {
    q: "Do you provide long-term support?",
    a: "We act as a long-term technology partner, providing continuous security auditing, platform scaling, API version management, and feature enhancements."
  }
];

export default function FintechClient() {
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
              <Landmark className="w-4 h-4" />
              FinTech & Financial Technology Solutions
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Secure Financial Technology Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#7C3AED]">Future of Banking</span> & Payments
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed">
              From digital banking and embedded finance to accounting integrations, AI automation, and payment infrastructure, Spaciva builds secure, scalable FinTech platforms that help financial businesses innovate with confidence.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <AnimatedCtaButton
                href="/contact"
                label="Book a FinTech Consultation"
                hoverLabel="Let's Talk Business"
              />
              <a href="#solutions" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 border border-slate-200 font-bold text-center hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Explore Financial Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Modern Financial Systems Need More Than Secure Code</h2>
            <p className="text-lg text-slate-600">Financial technology requires deep architectural planning to handle compliance, synchronization, and massive transaction volumes gracefully.</p>
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
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Financial Platforms We Build</h2>
            <p className="text-lg text-slate-300">We develop enterprise-grade FinTech platforms that connect fragmented financial ecosystems.</p>
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
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">AI-Powered Financial Automation</h2>
              <p className="text-lg text-slate-600 mb-8">
                Reduce manual data entry, accelerate document processing, and identify fraudulent transactions with AI-driven financial platforms.
              </p>
              <div className="flex items-center gap-3 text-slate-900 font-bold">
                <CheckCircle2 className="text-[#7C3AED]" /> Intelligent Document Processing
              </div>
              <div className="flex items-center gap-3 text-slate-900 font-bold mt-4">
                <CheckCircle2 className="text-[#7C3AED]" /> Real-time Fraud Analytics
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

      {/* Featured Financial Solutions */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">Featured Financial Solutions</h2>
            <p className="text-lg text-slate-600">Enterprise platforms engineered for synchronization, compliance, and extreme reliability.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Solution 1 */}
            <div className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-50 text-[#7C3AED] rounded-xl flex items-center justify-center mb-6">
                <RefreshCcw className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Unified Accounting Integration</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                One sync engine connecting QuickBooks, Xero, Sage, NetSuite, Business Central, MYOB, FreshBooks, Zoho Books, Wave, ClearBooks, and Odoo.
              </p>
              <ul className="space-y-3">
                {["12+ accounting platforms supported", "OAuth token rotation & secure management", "Bi-directional ledger sync", "Retry queues & DLQs", "Normalized entity mapping", "Real-time financial synchronization"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution 2 */}
            <div className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-50 text-[#7C3AED] rounded-xl flex items-center justify-center mb-6">
                <Database className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">PartsFlow Inventory Platform</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                A massive inventory management engine seamlessly integrated directly with primary accounting systems, closing the gap between operations and finance.
              </p>
              <ul className="space-y-3">
                {["5,000+ SKU support", "Bulk CSV & Excel processing", "Live QuickBooks synchronization", "Role-based permissions & audits", "Financial reconciliation reporting"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution 3 */}
            <div className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-50 text-[#7C3AED] rounded-xl flex items-center justify-center mb-6">
                <CreditCard className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Payment Infrastructure Platform</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Multi-gateway payment orchestration allowing businesses to scale transactions securely with deep hooks into their financial ledger.
              </p>
              <ul className="space-y-3">
                {["Global gateway orchestration", "Automated settlement & reconciliation", "Recurring billing engine", "Proactive fraud monitoring", "Webhooks & API-first design"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution 4 */}
            <div className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-50 text-[#7C3AED] rounded-xl flex items-center justify-center mb-6">
                <Code className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Embedded Finance API</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Enable payments, invoicing, wallets, financing, and accounting capabilities natively inside third-party SaaS products and digital marketplaces.
              </p>
              <ul className="space-y-3">
                {["White-label component library", "B2B wallet infrastructure", "Embedded invoicing & collections", "Native lending capabilities", "Strict compliance guardrails"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Industries & Services */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-100">
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

      {/* Why Spaciva & Tech Stack */}
      <section className="py-16 md:py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Why Financial Companies Choose Spaciva</h2>
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
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">FinTech Technology Stack</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Backend & Database</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["Node.js", "Go", "Python", "PostgreSQL", "Redis", "MongoDB"].map(t => <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white/80">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Financial APIs</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["QuickBooks", "Xero", "NetSuite", "Stripe", "Razorpay", "Plaid", "Wise", "PayPal"].map(t => <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white/80">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Security</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["OAuth 2.0", "JWT", "RBAC", "Secrets Management", "Audit Logs"].map(t => <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white/80">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Cloud & Frontend</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["AWS", "Azure", "Docker", "Kubernetes", "Next.js", "React", "Flutter"].map(t => <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white/80">{t}</span>)}
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
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-white">Financial Metrics We Optimize</h2>
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
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">Building Financial Infrastructure That Businesses Trust</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Whether you're launching a FinTech startup, modernizing enterprise finance systems, or building secure payment infrastructure, Spaciva develops scalable financial technology designed for long-term growth.
          </p>
          <AnimatedCtaButton
            href="/contact"
            label="Build Your FinTech Platform"
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
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Unified Accounting Integration</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Payment Gateway Platform</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Embedded Finance Platform</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Digital Banking Platform</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Lending Management System</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Expense Management Platform</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Custom Software Development</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">API Development</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">AI & Machine Learning</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Cloud & DevOps</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Security Engineering</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Industries</h4>
              <ul className="space-y-4">
                <li><a href="/industries/startups" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Startups & SaaS</a></li>
                <li><a href="/industries/retail-ecommerce" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Retail & E-commerce</a></li>
                <li><a href="/industries/real-estate" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Real Estate (PropTech)</a></li>
                <li><a href="/industries/logistics" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Logistics & Supply Chain</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Long Form Content */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 prose prose-lg prose-slate text-slate-600">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">FinTech Software Development Services</h2>
          <p className="mb-6 leading-relaxed">
            Financial technology is transforming how businesses manage payments, accounting, lending, investments, and customer experiences. Modern financial platforms require secure architecture, reliable integrations, scalable infrastructure, and intelligent automation to keep pace with growing transaction volumes and evolving customer expectations.
          </p>
          <p className="mb-6 leading-relaxed">
            Spaciva develops custom <strong>FinTech software</strong> for startups, enterprises, banks, payment providers, accounting software vendors, and financial operations teams. Our expertise spans digital banking platforms, payment infrastructure, unified accounting integrations, lending systems, wealth management solutions, embedded finance, AI-powered financial automation, and enterprise reporting dashboards.
          </p>
          <p className="mb-6 leading-relaxed">
            One of our core strengths is building integration platforms that connect fragmented financial ecosystems. Instead of maintaining separate integrations for every accounting provider, businesses can operate through a unified synchronization layer supporting platforms such as <strong>QuickBooks, Xero, NetSuite, Sage, Business Central, MYOB, Zoho Books, and Odoo</strong>. This approach simplifies financial workflows, reduces reconciliation effort, and creates a consistent API surface for engineering teams.
          </p>
          <p className="mb-6 leading-relaxed">
            We also develop intelligent finance platforms that automate invoice processing, payment reconciliation, financial reporting, customer onboarding, fraud monitoring, and operational analytics using AI and workflow automation. Combined with secure cloud infrastructure, modern APIs, and enterprise-grade architecture, these platforms help financial organizations improve efficiency while maintaining reliability and control.
          </p>
          <p className="leading-relaxed">
            Whether you're launching a FinTech startup, expanding an existing financial product, or modernizing legacy finance systems, Spaciva delivers secure, scalable, and future-ready technology tailored to the demands of the financial industry.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
