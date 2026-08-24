"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowDown, Receipt, ClipboardCheck, Wallet, FileSignature,
  ClipboardList, Landmark, Truck, ScanLine, ChevronDown, CheckCircle2, Flag,
  FileText, ShieldCheck, Package, Wrench, BookOpen,
  Calculator, CreditCard, Building2, LayoutGrid, BarChart3, HardDrive,
  FolderOpen, Mail, Workflow, Shuffle, GitBranch, MessageSquare, Video,
  ShoppingBag, ShoppingCart, Database, Sheet, Grid3x3, Link2,
} from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import TrustStrip from "@/components/TrustStrip";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const WHAT_WE_PROCESS = [
  { title: "Supplier invoices and bills", desc: "Vendor, invoice number, dates, line items, tax, currency, and totals extracted and validated, then posted into your accounting system as a draft or a matched entry.", icon: Receipt },
  { title: "Purchase orders and delivery notes", desc: "Three-way matching between PO, delivery note, and invoice: quantities and prices reconciled automatically, discrepancies flagged with the specific line that doesn't agree.", icon: ClipboardCheck },
  { title: "Receipts and expense claims", desc: "Photographed receipts read, categorised against your chart of accounts, checked against policy limits, and pushed into your expense tool.", icon: Wallet },
  { title: "Contracts and agreements", desc: "Key terms pulled out: parties, dates, renewal and notice periods, payment terms, liability caps, into a searchable register, so renewals stop surprising you.", icon: FileSignature },
  { title: "Forms and applications", desc: "Intake forms, onboarding packs, claims, KYC documents: fields extracted, completeness checked, missing items chased automatically.", icon: ClipboardList },
  { title: "Statements and remittances", desc: "Bank statements, supplier statements, and remittance advice parsed and reconciled against your open items, with unmatched entries queued for review.", icon: Landmark },
  { title: "Shipping and customs documents", desc: "Bills of lading, packing lists, and customs paperwork read into your order or inventory system instead of a spreadsheet somebody maintains.", icon: Truck },
  { title: "Handwritten and low-quality scans", desc: "Faxed, photographed, skewed, and handwritten documents. Accuracy is lower and we'll tell you honestly where the line is, but a bad scan isn't automatically a no.", icon: ScanLine },
];

const ACCURACY_STEPS = [
  {
    title: "Every field gets a confidence score",
    desc: "The system doesn't just return a value, it returns how sure it is. You set the threshold. Above it, the document posts automatically. Below it, it goes to a review queue with the uncertain field highlighted and the original document beside it, so a human confirms one number in four seconds instead of typing twelve fields in six minutes.",
  },
  {
    title: "Business rules catch what extraction can't",
    desc: "Confidence scores only tell you whether the text was read correctly, not whether the answer makes sense. So we layer your actual rules on top: line items must sum to the subtotal, tax must be the right rate for that vendor's jurisdiction, the invoice number must not already exist, the amount must fall within the range that vendor normally bills. A perfectly-read invoice that fails a business rule still gets flagged.",
  },
  {
    title: "It gets better because corrections feed back",
    desc: "Every human correction is captured. Templates for your recurring suppliers get tuned against real errors, and the exception rate drops over the first few months rather than sitting where it started. This is exactly the work the monthly plan covers: a document pipeline that nobody tunes is a pipeline whose accuracy quietly decays as your suppliers change their templates.",
  },
];

const PROCESS = [
  { step: "01", title: "Capture", desc: "Documents arrive however they already arrive: a monitored inbox, a shared drive or SharePoint folder, an upload form, a scanner, or an API from your supplier portal. Nobody changes how they send you things." },
  { step: "02", title: "Classify", desc: "The system identifies what each document is: invoice, PO, receipt, contract, something unrecognised, and routes it down the right path. Unknown types go to a queue rather than being force-fit into the wrong workflow." },
  { step: "03", title: "Extract", desc: "Fields are read, including line-item tables, using the right tool for the document rather than one model for everything. Clean digital PDFs are parsed directly. Scans and photos go through OCR first. Variable, unstructured layouts go to a document model." },
  { step: "04", title: "Validate", desc: "Confidence thresholds and your business rules run. Duplicate checks, PO matching, tax and total arithmetic, vendor lookup against your master list, currency handling." },
  { step: "05", title: "Route and post", desc: "Clean documents post straight into QuickBooks, Xero, NetSuite, Zoho Books, Tally, Sage, or your own database. Flagged ones land in a review queue. Approvals route to the right person, with escalation when they sit too long." },
  { step: "06", title: "Monitor and tune", desc: "Accuracy, exception rate, and throughput tracked on a dashboard you can actually see. Templates retuned as supplier formats change, alerts if the exception rate climbs. This is the monthly plan, and it's scoped in from day one." },
];

const TOOL_GROUPS = [
  {
    category: "Accounting and ERP", icon: Calculator, items: [
      { name: "QuickBooks", icon: Receipt },
      { name: "Xero", icon: Calculator },
      { name: "NetSuite", icon: Building2 },
      { name: "Zoho Books", icon: LayoutGrid },
      { name: "Tally", icon: BarChart3 },
      { name: "Sage", icon: BookOpen },
      { name: "Odoo", icon: Grid3x3 },
      { name: "SAP Business One", icon: Database },
    ],
  },
  {
    category: "Expense and AP", icon: CreditCard, items: [
      { name: "Expensify", icon: Wallet },
      { name: "Ramp", icon: CreditCard },
      { name: "Bill.com", icon: Receipt },
      { name: "Dext", icon: ScanLine },
    ],
  },
  {
    category: "Storage and intake", icon: FolderOpen, items: [
      { name: "Google Drive", icon: HardDrive },
      { name: "SharePoint", icon: FolderOpen },
      { name: "Dropbox", icon: HardDrive },
      { name: "S3", icon: Database },
      { name: "Monitored email inboxes", icon: Mail },
    ],
  },
  {
    category: "Workflow and comms", icon: Workflow, items: [
      { name: "Slack", icon: MessageSquare },
      { name: "Teams", icon: Video },
      { name: "n8n", icon: Workflow },
      { name: "Make", icon: Shuffle },
      { name: "Zapier", icon: GitBranch },
    ],
  },
  {
    category: "Commerce", icon: ShoppingBag, items: [
      { name: "Shopify", icon: ShoppingCart },
      { name: "WooCommerce", icon: Package },
      { name: "Stripe", icon: CreditCard },
    ],
  },
  {
    category: "Data", icon: Database, items: [
      { name: "Postgres", icon: Database },
      { name: "MySQL", icon: HardDrive },
      { name: "Google Sheets", icon: Sheet },
      { name: "Airtable", icon: Grid3x3 },
      { name: "Your own API", icon: Link2 },
    ],
  },
];

const WHAT_CHANGES = [
  {
    title: "Supplier invoice entry",
    manual: "Open the email. Download the PDF. Read the figures. Type twelve fields into the accounting system. Check them. Rename and file the document.",
    manualStat: "5–8 min",
    manualCaption: "Per invoice, error-prone once the pile builds up.",
    automated: "Read on arrival, validated against your rules, posted as a draft entry with the document attached.",
    automatedStat: "Seconds",
    automatedCaption: "A person reviews only what was flagged.",
  },
  {
    title: "PO matching",
    manual: "Find the PO. Compare quantities and prices line by line. Chase the discrepancy by email. Remember to follow up.",
    manualStat: "20+ min",
    manualCaption: "Whenever anything disagrees.",
    automated: "Matched automatically, with the specific mismatched line surfaced and the supplier query drafted.",
    automatedStat: "Exceptions only",
    automatedCaption: "You only see the ones that actually disagree.",
  },
  {
    title: "Month-end close",
    manual: "A backlog cleared in a rush over three days, because entry was deprioritised all month.",
    manualStat: "3 days",
    manualCaption: "Errors cluster exactly where you can least afford them.",
    automated: "The ledger is current because entry happened on arrival, every day, without anyone scheduling it.",
    automatedStat: "Day zero",
    automatedCaption: "Close starts from a clean position.",
  },
];

const SECURITY = [
  {
    title: "Where is it processed and stored?",
    // TODO: client to confirm the actual hosting default (own cloud account, specific region, or
    // client infrastructure) and name it here. Kept general rather than inventing a specific
    // provider or region, per the source brief's "only publish lines you can stand behind."
    desc: "Hosting is scoped to your project, with regional hosting available where data residency (for example EU or UK) is a requirement. We'll confirm the exact setup before any documents move.",
  },
  {
    title: "Is our data used to train models?",
    desc: "No. We use commercial API tiers with training disabled, or self-hosted models where you need the data to never leave your environment. We'll show you exactly which providers are in the pipeline before you sign anything.",
  },
  {
    title: "Who can see it?",
    desc: "Access is limited to the engineers on your project, under NDA, with access logged. We sign NDAs before discovery and work under a standard MSA and SOW with clear IP transfer terms.",
  },
  {
    title: "And retention?",
    // TODO: client to confirm the actual default retention period for processed documents and
    // extracted data before publishing a specific figure.
    desc: "Retention is configurable per project rather than fixed, so processed documents and extracted data are kept only as long as you need them.",
  },
];

const FAQS = [
  {
    q: "How accurate is automated invoice processing?",
    a: "On clean digital PDFs from recurring suppliers, field-level accuracy is high enough to post automatically. On poor scans and handwriting it's meaningfully lower. That's why we use confidence thresholds and validation rules rather than quoting one number: the system routes what it isn't sure about to a person instead of guessing.",
  },
  {
    q: "What happens when it reads something wrong?",
    a: "It goes to a review queue with the uncertain field highlighted next to the original document. Someone confirms or corrects it in seconds, and that correction feeds back into tuning. Nothing posts silently on a low-confidence read.",
  },
  {
    q: "How long does it take to build?",
    a: "A single document type into one system is typically three to four weeks. A full AP pipeline with matching and approvals is usually five to seven. The biggest variable is how many different formats you receive, not the volume.",
  },
  {
    q: "Do we have to change our accounting system?",
    a: "No. We post into what you already use: QuickBooks, Xero, NetSuite, Zoho Books, Tally, Sage, or your own database. If your system has no API, we'll say so upfront and propose a file-based import rather than promising an integration that doesn't exist.",
  },
  {
    q: "How many documents do we need for this to be worth it?",
    a: "There's no hard threshold, but below roughly a hundred documents a month a custom build rarely pays back quickly, an off-the-shelf tool usually will. We'll tell you which side of that line you're on during the call.",
  },
  {
    q: "Can it handle handwriting and bad scans?",
    a: "Often, with a higher exception rate. Send us five real examples and we'll tell you honestly what to expect before you commit to anything.",
  },
  {
    q: "Is our data used to train AI models?",
    a: "No. We use API tiers with training disabled, or self-hosted models where the data needs to stay inside your environment.",
  },
  {
    q: "Who owns what you build?",
    a: "You do. Code, models, prompts, deployment pipelines, and documentation transfer to you on final payment. It runs in your accounts. If you stop working with us, it keeps running.",
  },
  // TODO: client to confirm real US/UK daily-overlap hours; rephrased to avoid an unverified number,
  // consistent with how the same fact is handled on the other service pages.
  {
    q: "How do you work with clients abroad?",
    a: "We're in Ahmedabad, India, and stay available for video calls in your US and UK working hours, not ours. A written update every Friday plus a short Loom walkthrough.",
  },
  // TODO: client to confirm real pricing ($X single document type, $Y full pipeline, $Z/month
  // partner plan) and restore the "What does it cost?" FAQ and the pricing section (Section 11)
  // once confirmed. Per the source spec: delete rather than publish ranges that can't be honoured.
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Document & Invoice Processing Automation",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "Automated extraction, validation, and posting of invoices, purchase orders, receipts, and contracts into your accounting or ERP system, with confidence-based human review.",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spaciva.tech/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://spaciva.tech/#what-we-do" },
    { "@type": "ListItem", position: 3, name: "Document & Invoice Processing", item: "https://spaciva.tech/services/document-invoice-processing" },
  ],
};

function FAQItem({ faq, index, isOpen, onClick }: { faq: typeof FAQS[0]; index: number; isOpen: boolean; onClick: () => void }) {
  const panelId = `docproc-faq-panel-${index}`;
  const buttonId = `docproc-faq-button-${index}`;

  return (
    <div className="border border-[#E2E8F0] bg-white rounded-2xl overflow-hidden mb-4 shadow-sm hover:border-[#C4B5FD] transition-colors">
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="flex-1 min-w-0 pr-3 font-bold text-base sm:text-lg text-[#0F172A]">{faq.q}</span>
        <ChevronDown className={cn("w-5 h-5 shrink-0 text-[#7C3AED] transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-[#334155] leading-relaxed">{faq.a}</div>
      </motion.div>
    </div>
  );
}

export default function DocumentProcessingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-clip selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero — light. Single column: no real anonymised invoice image to build the before/after
          visual from, and a mockup with placeholder text would undercut this page's whole
          argument, so it runs full-width text like the other service pages' same fallback. */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-slate-50 -z-10" />
        <div className="absolute top-20 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#7C3AED]/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[620px]">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
              Document & Invoice Processing
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Your team shouldn&apos;t be typing what a machine can read
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Invoices, purchase orders, receipts, contracts, forms: arriving as PDFs, scans, and email attachments, and getting retyped by hand into your accounting system. We build the layer that reads them, checks them, and files them, with a human reviewing only what genuinely needs a second look.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
              <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
              <a href="#what-we-process" className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#7C3AED] transition-colors">
                See what we process
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm font-semibold text-slate-500">
              Live in 3–4 weeks · You own the code, the models, and the data
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip sectionClassName="py-10 bg-white border-y border-[#E2E8F0]" fadeFrom="white" />

      {/* The problem — light, single column, larger body */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[680px] mx-auto px-5 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 text-slate-900">
              The cost isn&apos;t the typing. It&apos;s everything the typing causes.
            </h2>
            <div className="text-lg md:text-xl text-slate-600 leading-relaxed space-y-6">
              <p>Five to eight minutes per invoice doesn&apos;t sound like a crisis. Four hundred invoices a month does.</p>
              <p>But the real cost sits downstream. A transposed digit becomes a payment discrepancy that takes an hour to trace. A missed due date becomes a late fee. A PO that was never matched to its invoice becomes a supplier dispute six weeks later. Month-end takes three days longer than it should because half the ledger was entered in the last 48 hours by someone rushing.</p>
              <p>And nobody wants to do it, so it gets deprioritised, so it gets rushed, so the error rate goes up. The manual process doesn&apos;t just cost hours, it manufactures the exceptions that cost the most hours.</p>
            </div>
            <blockquote className="mt-10 border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-xl md:text-2xl font-bold text-slate-900 leading-snug">
              Document processing pays for itself in the errors it prevents, not the keystrokes it saves.
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* What we process — muted, 3-col card grid */}
      <section id="what-we-process" className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
              What We Process
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">If it&apos;s a document your team retypes, it&apos;s in scope</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_WE_PROCESS.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-slate-600 max-w-[680px]">
            Not listed? Send us five real examples of the document and we&apos;ll tell you within a week whether it&apos;s a good automation candidate, before you commit to anything.
          </p>
        </div>
      </section>

      {/* How accurate is it, really — the page's signature section. Visually heavier, its own
          tinted band, a custom confidence-threshold diagram instead of icons. */}
      <section className="py-16 md:py-28 bg-[#F5F3FF] border-y border-[#7C3AED]/10">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
              The honest answer: not 100%, and any vendor who says otherwise is selling you something
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Extraction accuracy depends on the document. A clean digital PDF from a supplier who uses the same template every month is close to solved. A crumpled photographed receipt is not. Anyone quoting you a single accuracy percentage before seeing your documents is quoting you a marketing number. Here&apos;s how we handle that instead.
            </p>
          </div>

          {/* Confidence-threshold diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
            role="img"
            aria-label="Diagram: every document is scored for confidence. Documents above your threshold post automatically. Documents below your threshold route to a human review queue with the uncertain field highlighted."
          >
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-2xl px-6 py-4 shadow-sm">
                <FileText className="w-5 h-5 text-slate-500" />
                <span className="font-bold text-slate-900">Every document is scored for confidence</span>
              </div>
              <ArrowDown className="w-5 h-5 text-slate-300 my-3" aria-hidden="true" />
              <div className="grid sm:grid-cols-2 gap-6 w-full max-w-2xl">
                <div className="flex flex-col items-center text-center bg-white border-2 border-[#7C3AED]/30 rounded-2xl p-6 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7C3AED] mb-1.5">Above your threshold</span>
                  <p className="font-bold text-slate-900">Posted automatically</p>
                </div>
                <div className="flex flex-col items-center text-center bg-white border-2 border-amber-300 rounded-2xl p-6 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                    <Flag className="w-6 h-6 text-amber-600" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wide text-amber-700 mb-1.5">Below your threshold</span>
                  <p className="font-bold text-slate-900">Routed to human review, original document attached</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-10">
            {ACCURACY_STEPS.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-6 md:p-8 shadow-sm"
              >
                <h3 className="font-bold text-slate-900 text-lg md:text-xl mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <blockquote className="mt-12 border-l-4 border-[#7C3AED] bg-white rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-lg md:text-xl font-bold text-slate-900 leading-snug shadow-sm">
            The goal isn&apos;t zero human involvement. It&apos;s moving humans from data entry to exception handling, and shrinking the exception pile every month.
          </blockquote>
        </div>
      </section>

      {/* How it works — light, vertical timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">From document to posted entry</h2>
          </div>

          <div>
            {PROCESS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative flex gap-6 md:gap-10 pb-12 last:pb-0"
              >
                <div className="flex flex-col items-center shrink-0">
                  <span className="text-4xl md:text-5xl font-light text-[#7C3AED] tabular-nums">{item.step}</span>
                  {idx < PROCESS.length - 1 && <div className="w-px flex-1 bg-[#E2E8F0] mt-4" />}
                </div>
                <div className="pt-2 md:pt-3">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed max-w-[680px]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Where it plugs in — muted */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">It posts into the system you already use</h2>
            <p className="text-lg text-slate-600">We don&apos;t ask you to move your accounting to a new platform. The extraction layer sits in front of what you&apos;re running today.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOOL_GROUPS.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#C4B5FD] transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center shrink-0">
                    <group.icon className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <h3 className="font-bold text-slate-900">{group.category}</h3>
                </div>
                <div className="flex flex-col gap-1">
                  {group.items.map((item) => (
                    <div key={item.name} className="flex items-center gap-2.5 py-1">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                        <item.icon className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-sm font-medium text-slate-600">{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-slate-600 max-w-[680px]">
            If your system has an API, we can post into it. If it doesn&apos;t, and some older accounting software genuinely doesn&apos;t, we&apos;ll tell you before you commit, and propose a file-based import instead of pretending otherwise. We&apos;ve built{" "}
            <Link href="/case-studies/unified-accounting" className="font-bold text-[#7C3AED] hover:underline">
              the accounting-sync side of this
            </Link>{" "}
            before, across QuickBooks, Xero, NetSuite, and a dozen other ledgers.
          </p>
        </div>
      </section>

      {/* What changes — light, tight inline comparison (deliberately not Template B's full-width
          split, so the two pages stay visually distinct) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">The same month-end, two ways</h2>
          </div>

          <div className="flex flex-col gap-6">
            {WHAT_CHANGES.map((row) => (
              <motion.div
                key={row.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm"
              >
                <h3 className="font-bold text-slate-900 px-6 pt-5 pb-3">{row.title}</h3>
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E8F0]">
                  <div className="p-6 bg-slate-50">
                    <span className="inline-block text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">By hand</span>
                    <p className="text-slate-500 text-sm leading-relaxed mb-3">{row.manual}</p>
                    <p className="text-xl font-extrabold text-slate-600 tracking-tight">{row.manualStat}</p>
                    <p className="text-xs font-semibold text-slate-400 mt-0.5">{row.manualCaption}</p>
                  </div>
                  <div className="p-6 bg-[#F5F3FF]">
                    <span className="inline-block text-xs font-bold uppercase tracking-wide text-[#7C3AED] mb-2">Automated</span>
                    <p className="text-slate-700 text-sm leading-relaxed mb-3">{row.automated}</p>
                    <p className="text-xl font-extrabold text-[#7C3AED] tracking-tight">{row.automatedStat}</p>
                    <p className="text-xs font-semibold text-[#7C3AED]/70 mt-0.5">{row.automatedCaption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <blockquote className="mt-10 border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 text-lg font-bold text-slate-900 leading-snug max-w-[680px]">
            Every hour of data entry you remove also removes the errors that hour was going to produce. That second saving is bigger, and it never shows up on the timesheet.
          </blockquote>
        </div>
      </section>

      {/* Off-the-shelf or custom? — muted */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">You may not need us for this</h2>
            <p className="text-lg text-slate-600">Plenty of teams are well served by an off-the-shelf tool, and we&apos;d rather say so on the call than sell you a build you didn&apos;t need.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 md:p-8 rounded-3xl border border-[#E2E8F0] bg-white">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-5">
                <Package className="w-6 h-6 text-slate-500" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">An off-the-shelf tool is probably right if</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Your documents are standard invoices, your volume is modest, your accounting system is one the tool already integrates with, and you&apos;re happy working the way the tool wants you to work. It&apos;ll be live in days and cost less upfront.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-3xl border-2 border-[#7C3AED]/30 bg-[#F5F3FF]">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#7C3AED]/20 flex items-center justify-center mb-5">
                <Wrench className="w-6 h-6 text-[#7C3AED]" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">A custom build makes sense when</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Per-document pricing has stopped making sense at your volume, your documents aren&apos;t standard invoices, your validation rules are specific to how your business actually works, you need it posting into a system nothing supports natively, or your data can&apos;t sit on someone else&apos;s platform. You also own it outright, which matters if this becomes core infrastructure.
              </p>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed max-w-[680px]">
            <span className="font-bold text-slate-900">Honest answer:</span> we often suggest starting with an off-the-shelf tool to prove the process, and building custom once you know your real volume, your real exception rate, and exactly which rules matter. That&apos;s a much better basis for the decision than a guess made upfront.
          </p>
        </div>
      </section>

      {/* Cross-link — where this fits against the other service pages */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-slate-600 leading-relaxed">
            <Link href="/services/email-inbox-automation" className="font-bold text-[#7C3AED] hover:underline">Email and inbox automation</Link>{" "}
            handles mail that arrives.{" "}
            <Link href="/services/workflow-automation" className="font-bold text-[#7C3AED] hover:underline">Workflow automation</Link>{" "}
            moves data between tools when the steps are known. <span className="font-bold text-slate-900">Document processing</span> turns unstructured files into clean, checked data.{" "}
            <Link href="/services/ai-agent-development" className="font-bold text-[#7C3AED] hover:underline">AI agents</Link>{" "}
            make judgement calls where the next step isn&apos;t fixed in advance. Most document-processing projects are workflow automation with an extraction layer in front, which is exactly what this page is.
          </p>
          <p className="mt-4 text-slate-500 text-sm">
            The extraction model, confidence scoring, and evaluation underneath this page is its own layer, covered on{" "}
            <Link href="/services/generative-ai-custom-llms" className="font-bold text-[#7C3AED] hover:underline">
              Generative AI &amp; Custom LLMs
            </Link>
            . And if the destination for that data is specifically your ERP, the connection itself is its own scope, covered on{" "}
            <Link href="/services/erp-systems" className="font-bold text-[#7C3AED] hover:underline">
              ERP systems
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Security and your data — light, compact, no icons */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-slate-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Security</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Where your documents actually go</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl">Invoices and contracts are among the most sensitive things a business handles. Three questions we get asked every time, answered plainly.</p>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {SECURITY.map((item) => (
              <div key={item.title}>
                <h3 className="font-bold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
        Pricing section intentionally omitted: the source spec puts an open three-column pricing
        table here, but explicitly says to delete the section rather than publish figures that
        aren't confirmed yet. TODO: client to confirm single-document-type, full-pipeline, and
        monthly-partner pricing, then restore this section and the matching FAQ entry.
      */}

      {/* FAQ — light, accordion, answers always in the DOM */}
      <section className="py-16 md:py-24 px-5 lg:px-10 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Common questions</h2>
        </div>

        <div>
          {FAQS.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openFaq === index}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            />
          ))}
        </div>
      </section>

      {/* Closing CTA — dark, full-bleed */}
      <section className="px-5 lg:px-10 max-w-7xl mx-auto py-16 md:py-24">
        <div className="bg-[#0F172A] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C3AED]/30 via-[#0F172A]/0 to-[#0F172A]/0 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
              Send us five real invoices. We&apos;ll tell you what&apos;s automatable.
            </h2>
            <p className="text-lg text-white/70 mb-10 font-medium">
              Book a 30-minute call. We&apos;ll look at your actual documents, tell you honestly what accuracy to expect and where the exceptions will be, and give you a fixed price if it&apos;s worth building.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AnimatedCtaButton href="/contact" label="Book a discovery call" hoverLabel="Let's Talk" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
