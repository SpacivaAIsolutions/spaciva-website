"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowDown,
  Package, Database, ShoppingBag, Scale, Tag,
  Truck, Factory, Warehouse,
  Zap, RefreshCw, History, RotateCw,
  Building2, ClipboardList, LayoutDashboard, Workflow, Link2, Barcode,
} from "lucide-react";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const RAIL = [
  { id: "what-we-build", label: "What we build" },
  { id: "before-after", label: "Before & after" },
  { id: "accuracy", label: "Staying accurate" },
  { id: "how-it-works", label: "How it works" },
  { id: "systems", label: "Systems" },
  { id: "questions", label: "Questions" },
];

const CHAIN_LINKS = [
  { label: "Physical shelf", icon: Warehouse },
  { label: "System count", icon: Database },
  { label: "Channel listings", icon: ShoppingBag },
  { label: "Available to promise", icon: Scale },
  { label: "The number you quote", icon: Tag },
];

const CHAIN_BREAKS = [
  "Damage, shrinkage, and returns never recorded",
  "Sync lag, failed updates, manual edits nobody logged",
  "Each channel updated on its own schedule, or not at all",
  "Allocated, reserved, and in-transit stock counted as sellable",
];

const TABS = [
  {
    label: "DTC & multi-channel retail",
    icon: ShoppingBag,
    items: [
      { title: "Real-time multi-channel sync", desc: "Shopify, WooCommerce, Amazon, eBay, and your POS working from one number, updated on sale rather than on a schedule, with the update queued and retried rather than lost when a channel's API is slow." },
      { title: "Oversell prevention with real allocation", desc: "Available-to-promise calculated properly: on-hand minus allocated, reserved, and pending returns. So you can run a thin buffer instead of a defensive one and sell the stock you actually have." },
      { title: "Bundles and kits that decrement correctly", desc: "A bundle sale draws down its components across every channel, which is where most off-the-shelf sync tools quietly break." },
      { title: "Returns back into sellable stock", desc: "Inspected, graded, and returned to the correct location automatically rather than sitting in a corner uncounted." },
    ],
  },
  {
    label: "Distribution & wholesale",
    icon: Truck,
    items: [
      { title: "Multi-location stock with transfer logic", desc: "What's where, what's in transit, and what should move, with transfers tracked as their own state rather than a subtraction and an addition that can fail halfway." },
      { title: "Customer-specific pricing and availability", desc: "Different customers see different prices and, where you need it, different availability, without maintaining parallel catalogues by hand." },
      { title: "Purchase order and receiving workflow", desc: "POs raised against reorder logic, receipted line by line or in bulk, with discrepancies flagged at the dock rather than discovered at month-end." },
      { title: "Backorder and allocation rules", desc: "When stock is short, who gets it, decided by rules you set rather than by whoever emails first." },
    ],
    note: "Supplier documents can flow in through document and invoice processing.",
    noteLink: { href: "/services/document-invoice-processing", label: "document and invoice processing" },
  },
  {
    label: "Manufacturing",
    icon: Factory,
    items: [
      { title: "Bill of materials and component tracking", desc: "Finished goods, sub-assemblies, and raw materials tracked through production, with component availability checked before a build is committed." },
      { title: "Work order stock movements", desc: "Components consumed and finished goods created as one transaction, so WIP doesn't become a black hole between two counts." },
      { title: "Batch, lot, and expiry tracking", desc: "Full traceability where you need to answer “which customers got this batch,” including FEFO picking where expiry matters." },
      { title: "Production-aware reorder points", desc: "Reorder logic that accounts for committed builds, not just current sales velocity." },
    ],
  },
  {
    label: "Multi-warehouse & 3PL",
    icon: Warehouse,
    items: [
      { title: "Location-level accuracy", desc: "Bin, shelf, or zone, so picking doesn't depend on someone knowing where things usually are." },
      { title: "3PL and WMS integration", desc: "Stock levels, fulfilment status, and receipts synced with your logistics partner's system, with reconciliation reporting so you can prove the numbers agree." },
      { title: "Barcode and mobile scanning", desc: "Receiving, picking, counting, and transfers done on a phone or scanner, offline-capable, syncing when there's signal. This alone eliminates the largest single source of count drift." },
      { title: "Cycle counting instead of shutdowns", desc: "A rolling count schedule weighted by SKU value and movement, so accuracy is maintained continuously rather than restored annually." },
    ],
  },
];

const WEEK_NOW = [
  { day: "Monday", desc: "Export stock from three places, reconcile in a spreadsheet, update channel listings by hand." },
  { day: "Tuesday", desc: "An oversell on Amazon. Apologise, cancel, absorb the metric hit." },
  { day: "Wednesday", desc: "Purchasing decisions made from Monday's export, which is already wrong." },
  { day: "Thursday", desc: "A customer asks if something's in stock. Someone walks to the shelf to check." },
  { day: "Friday", desc: "A return arrives. It goes on the shelf. It doesn't go in the system." },
  { day: "Month-end", desc: "Variance is large enough that nobody trusts the number. Schedule a full count." },
];

const WEEK_AFTER = [
  { day: "Monday", desc: "The number is already right. Nobody exports anything." },
  { day: "Tuesday", desc: "A channel's API failed for six minutes. It retried, caught up, and alerted us. You didn't notice." },
  { day: "Wednesday", desc: "Reorder suggestions generated from live velocity and lead times. Someone approves them." },
  { day: "Thursday", desc: "The answer is on screen, with allocated and in-transit stock accounted for." },
  { day: "Friday", desc: "The return was scanned in on a phone at the returns desk. It's sellable stock." },
  { day: "Month-end", desc: "Cycle counts have been running weekly. Variance is small enough to explain." },
];

const ACCURACY = [
  { title: "Event-driven, not scheduled", icon: Zap, desc: "Stock updates fire on the transaction, not every fifteen minutes. Scheduled sync means a guaranteed window in which every channel is wrong, and that window is exactly where oversells live." },
  { title: "One authoritative source per SKU", icon: Database, desc: "Exactly one system owns the true count and everything else subscribes. Two systems both writing authoritatively is how counts silently diverge." },
  { title: "Queued, retried, never dropped", icon: RefreshCw, desc: "Channel APIs fail, throttle, and go down. Every update is queued with backoff and retry, and anything that can't be applied lands in a visible error queue, not a log file." },
  { title: "Available-to-promise, not on-hand", icon: Scale, desc: "Sellable stock is on-hand minus allocated, reserved, and pending. Publishing raw on-hand to channels is the single most common cause of overselling." },
  { title: "Movement history, not just a quantity", icon: History, desc: "Every change recorded with who, when, why, and what the count was before. Without it, an investigation into a variance has nowhere to start." },
  { title: "Cycle counting built in", icon: RotateCw, desc: "Rolling counts weighted by value and movement velocity, scheduled continuously. Accuracy maintained rather than restored." },
];

const PROCESS = [
  { step: "01", title: "Count and baseline", duration: "3–5 days", desc: "Before we build anything, we establish how wrong the number currently is and why. A sample count against system records across a representative SKU set, plus a map of every place stock data is entered or changed. You get that written baseline whether or not you hire us." },
  { step: "02", title: "Fixed scope and quote", duration: "2–3 days", desc: "A written scope, fixed price, and delivery date before any code is written, phased so you can see what goes live first. If scope moves, we re-quote in writing first." },
  { step: "03", title: "Build and parallel run", duration: "scoped per project", desc: "Built against your real catalogue, not sample data. Then the new sync runs alongside your current process and you compare the two before switching anything off. Written update every Friday plus a short Loom walkthrough." },
  { step: "04", title: "Go live by channel, then monitor", duration: "ongoing", desc: "One channel at a time, reconciled before the next. After launch: sync monitoring with alerting, error-queue review, reorder-logic tuning as velocity changes, and handling channel API changes. A named engineer stays on it." },
];

const BUY_TABLE = [
  { label: "Time to live", tool: "Weeks", custom: "Longer, scoped after the count and baseline" },
  { label: "Upfront cost", tool: "Low", custom: "Higher, fixed and quoted in writing" },
  { label: "Ongoing cost", tool: "Per-order or per-seat, grows with volume", custom: "Hosting plus a monthly plan" },
  { label: "Standard products and channels", tool: "Excellent", custom: "Overkill" },
  { label: "Complex BOM, bundles, batch rules", tool: "Constrained by the tool's model", custom: "Whatever your products actually are" },
  { label: "Unsupported channel or 3PL", tool: "Blocked, or via a fragile middleman", custom: "Anything with an API" },
  { label: "Performance at high SKU/order volume", tool: "Degrades, tier upgrades", custom: "Designed for your scale" },
  { label: "Ownership", tool: "You rent it", custom: "Code and data are yours" },
];

// Cin7, Katana, Linnworks, and inFlow are confirmed genuine delivery experience. Fishbowl is not,
// so it's held out of the main list per the source spec's fallback rather than implied as a
// credential.
const SYSTEM_GROUPS = [
  {
    category: "Sales channels and POS", icon: ShoppingBag, items: [
      "Shopify", "WooCommerce", "Magento", "BigCommerce", "Amazon", "eBay", "Etsy",
      "Walmart Marketplace", "Square", "Lightspeed",
    ],
  },
  {
    category: "Inventory, ERP, and accounting", icon: Building2, items: [
      "Cin7", "Katana", "Linnworks", "Zoho Inventory", "inFlow", "NetSuite", "Odoo",
      "Business Central", "SAP Business One", "QuickBooks", "Xero", "TallyPrime",
    ],
  },
  {
    category: "Warehouse, logistics, and shipping", icon: Truck, items: [
      "3PL and WMS APIs", "ShipStation", "Shipping carriers", "Barcode scanners and mobile scanning hardware",
    ],
  },
  {
    category: "Data and integration layer", icon: Link2, items: [
      "Postgres", "MySQL", "Redis", "Queueing and retry infrastructure", "n8n",
      "Custom Python and Node services", "REST", "GraphQL", "EDI and SFTP",
    ],
  },
];

const ROUTING = [
  { title: "Inventory management", desc: "The stock number needs to be right, everywhere, all the time. A data accuracy and synchronisation problem.", icon: Package, current: true },
  { title: "ERP systems", desc: "You need the financial and operational system of record, where stock is one module alongside purchasing, costing, and ledgers. If the pain is month-end and margin rather than overselling, start there.", icon: Building2, href: "/services/erp-systems" },
  { title: "Internal business tools", desc: "One team needs a screen for one job, a receiving app, a returns desk tool, rather than a whole inventory system.", icon: ClipboardList, href: "/services/internal-business-tools" },
  { title: "Custom dashboards", desc: "You need to see stock position, ageing, and dead capital, read-only, without changing how anything is recorded.", icon: LayoutDashboard, href: "/services/custom-dashboards" },
  { title: "Workflow automation", desc: "The systems are fine and they just need to talk. Often the cheapest real fix here.", icon: Workflow, href: "/services/workflow-automation" },
];

const PRICING_TIERS = [
  { label: "Multi-channel sync", desc: "One accurate stock number across your channels: event-driven sync, available-to-promise logic, retry queues, error handling, monitoring, and the first month of support.", bestFor: "the oversell problem, which is most enquiries.", from: "Scoped and quoted after the count and baseline" },
  { label: "Inventory system build", desc: "A full system shaped around your products and process, locations, transfers, POs and receiving, reorder logic, barcode scanning, migrated from your current setup and phased live.", bestFor: "teams whose product structure genuinely fights every off-the-shelf tool.", from: "Priced once we know your process and product structure" },
  { label: "Ongoing inventory partner", desc: "Sync monitoring, error-queue review, reorder-logic tuning, channel API changes, and a set amount of new work each month.", bestFor: "teams where channels and SKU ranges keep changing, most clients end up here.", from: "A monthly plan sized to your channels" },
];

const CASE_STUDIES = [
  { num: "80%", metric: "Faster data entry", title: "PartsFlow", desc: "A spare-parts distributor's warehouse team was hand-keying inventory movements into QuickBooks. Bulk validated imports and a live sync replaced row-by-row spreadsheet work across a 5,000+ SKU catalogue.", href: "/case-studies/partsflow" },
  { num: "70%", metric: "Less manual data entry", title: "Unified Accounting", desc: "Vendors, invoices, and payments moved through automated pipelines instead of copy-paste between accounting UIs, across QuickBooks, Xero, NetSuite, Sage, Business Central, and Odoo.", href: "/case-studies/unified-accounting" },
];

const FAQS = [
  { q: "How do you stop overselling across channels?", a: "Two things together. Updates fire on the transaction rather than on a schedule, so there's no window where channels are working from a stale number. And what gets published is available-to-promise, on-hand minus allocated, reserved, and pending returns, not raw on-hand. Publishing raw on-hand is the most common cause of overselling and it's usually one calculation away from fixed." },
  { q: "Can it sync Shopify and Amazon in real time?", a: "Yes, within what each channel's API allows. Amazon in particular throttles and processes some updates asynchronously, so “real time” means seconds to a couple of minutes rather than instant, and any vendor promising instant Amazon updates is describing something the API doesn't offer. We build with queueing and retry so a slow or failed update catches up rather than being lost." },
  { q: "We already use Cin7 / Katana / Linnworks. Do we have to replace it?", a: "Usually not, and we'll say so. A good share of enquiries here are solved by connecting the existing tool properly to the channels, warehouse, or accounting system it doesn't currently reach. That's a much smaller project than a replacement and we'll price it as one." },
  { q: "Our physical count never matches the system. Can software fix that?", a: "Not on its own, drift comes from movements that happen without being recorded. What software fixes is the recording: barcode scanning at receiving, picking, and returns so movements are captured where they happen, movement history so variances can be investigated instead of guessed at, and cycle counting so accuracy is maintained continuously rather than restored once a year." },
  { q: "Do you build barcode scanning?", a: "Yes, mobile-first, working on standard phones or dedicated scanners, with offline capture that syncs when there's signal. Receiving, picking, counting, and transfers. It's typically the single highest-impact component because it removes the largest source of count drift." },
  { q: "Can you handle bundles, kits, and BOMs?", a: "Yes, including nested bundles and multi-level bills of materials. Component availability is checked before a bundle or build is committed, and a sale decrements components correctly across every channel. This is where most off-the-shelf sync tools quietly break." },
  { q: "What about multiple warehouses and 3PLs?", a: "Location-level stock down to bin or zone, transfers tracked as their own state so a half-completed move can't vanish, and 3PL or WMS integration with reconciliation reporting so you can prove the numbers agree rather than assume it." },
  { q: "How long does it take?", a: "It depends on how clean your SKU data is and how many channels are involved, not how many units you hold, that's what the baseline measures before you get a date. Multi-channel sync includes a parallel run. Full system builds run longer and go live channel by channel." },
  { q: "What happens to our existing stock data?", a: "Audited and cleansed before it moves, with the rules agreed in writing, then validated against the source before anything is switched off. Your current process keeps running in parallel until the new one reconciles. We don't do cutovers that depend on everything being right first time." },
  { q: "What if a channel changes its API?", a: "They do, usually without warning. Every sync ships with alerting so we find out before you do, and fixes to anything we built are covered by the monthly plan. Unmonitored syncs failing silently is the main way inventory accuracy quietly decays after a project ends." },
  { q: "Who owns the code and the data?", a: "You do. Source code, database, integration configuration, and documentation transfer to you on final payment, whether or not you keep us on a monthly plan. It runs in your accounts." },
  // TODO: client to confirm real US/UK daily-overlap hours; rephrased to avoid an unverified
  // number, consistent with how the same fact is handled on the other service pages.
  { q: "How do you work with clients abroad?", a: "We're in Ahmedabad, India, and stay available for video calls in your US and UK working hours, not ours. A written update every Friday plus a short Loom walkthrough of what moved." },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Inventory Management Software Development",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "Custom inventory systems that keep one accurate stock number across every channel and location, multi-channel sync, available-to-promise logic, barcode scanning, and reorder rules.",
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
    { "@type": "ListItem", position: 3, name: "Inventory Management", item: "https://spaciva.tech/services/inventory-management" },
  ],
};

function TabbedExplorer() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = e.key === "ArrowRight" ? (active + 1) % TABS.length : (active - 1 + TABS.length) % TABS.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Built around how your stock moves" className="flex flex-wrap gap-2 mb-8" onKeyDown={onKeyDown}>
        {TABS.map((tab, i) => (
          <button
            key={tab.label}
            ref={(el) => { tabRefs.current[i] = el; }}
            role="tab"
            id={`inv-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`inv-tabpanel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all border",
              active === i
                ? "bg-[#7C3AED] text-white border-[#7C3AED] shadow-lg shadow-[#7C3AED]/20"
                : "bg-white text-slate-600 border-[#E2E8F0] hover:border-[#C4B5FD] hover:text-[#7C3AED]"
            )}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid">
        {TABS.map((tab, i) => (
          <div
            key={tab.label}
            role="tabpanel"
            id={`inv-tabpanel-${i}`}
            aria-labelledby={`inv-tab-${i}`}
            aria-hidden={active !== i}
            className={cn(
              "[grid-area:1/1] transition-all duration-300 ease-out",
              active === i ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-1 pointer-events-none"
            )}
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              {tab.items.map((item) => (
                <div key={item.title} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-[#C4B5FD] hover:bg-white hover:shadow-md transition-all">
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            {tab.noteLink && (
              <p className="text-sm text-slate-500 leading-relaxed bg-white border border-dashed border-slate-200 rounded-xl px-4 py-3">
                Supplier documents can flow in through{" "}
                <Link href={tab.noteLink.href} className="font-bold text-[#7C3AED] hover:underline">{tab.noteLink.label}</Link>.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function InventoryManagementClient() {
  const [activeRail, setActiveRail] = useState(RAIL[0].id);

  useEffect(() => {
    const sections = RAIL.map((r) => document.getElementById(r.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveRail(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-clip selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero — light, centred (Template B's signature, distinct from A/C's two-column heroes).
          Beneath the copy: a five-link leakage chain with three marked break points, replacing
          B-1's manual/automated split and B-3's document journey. */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50 to-slate-50 -z-10" />

        <div className="max-w-[780px] mx-auto px-5 lg:px-10 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
              Inventory Management
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              One stock number. Everywhere. Always current.
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Most inventory problems aren&apos;t storage problems, they&apos;re synchronisation problems. The shelf says one thing, the system says another, and three sales channels each believe something different. We build the layer that keeps them agreeing, so you stop overselling, stop stocking out on your best SKUs, and stop reconciling by hand on Mondays.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
              <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
              <a href="#what-we-build" className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#7C3AED] transition-colors">
                See how it works
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm font-semibold text-slate-500 mb-12">
              <Link href="/case-studies/partsflow" className="font-bold text-[#7C3AED] hover:underline">80% faster data entry across a 5,000+ SKU catalogue</Link> · You own the code
            </p>
          </motion.div>

          {/* Leakage chain */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            role="img"
            aria-label="Diagram: a five-link chain showing where a stock number leaks. Physical shelf, where damage, shrinkage, and returns go unrecorded. Then system count, where sync lag and unlogged manual edits creep in. Then channel listings, where each channel updates on its own schedule or not at all. Then available to promise, where allocated, reserved, and in-transit stock gets miscounted as sellable. Finally, the number you quote a customer, which by then may not be accurate."
          >
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-0 text-left">
              {CHAIN_LINKS.map((link, idx) => (
                <div key={link.label} className="flex md:flex-1 md:flex-col items-center">
                  <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col items-center text-center gap-2">
                    <span className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center">
                      <link.icon className="w-5 h-5 text-[#7C3AED]" />
                    </span>
                    <span className="font-bold text-sm text-slate-900">{link.label}</span>
                  </div>
                  {idx < CHAIN_LINKS.length - 1 && (
                    <div className="flex md:flex-col items-center justify-center shrink-0 py-2 md:py-1 px-1">
                      <ArrowDown className="w-4 h-4 text-slate-300" aria-hidden="true" />
                      <span className="text-[10px] font-bold uppercase tracking-wide text-amber-600 text-center max-w-[110px] leading-tight px-1">
                        {CHAIN_BREAKS[idx]}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
          <p className="mt-6 text-sm text-slate-500 max-w-[600px] mx-auto">
            Every business has at least one of these breaks. Most have three and only notice the one that caused an oversell.
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip sectionClassName="py-10 bg-white border-y border-[#E2E8F0]" fadeFrom="white" />

      {/* The problem — prose, centred, targets the problem-phrased keyword cluster */}
      <section className="py-16 md:py-24">
        <div className="max-w-[720px] mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 text-slate-900">You didn&apos;t oversell because you were careless</h2>
          <div className="text-slate-600 text-lg leading-relaxed text-left space-y-5 mb-10">
            <p>You oversold because the Amazon listing was working from a number that was fourteen minutes old, and in those fourteen minutes the same unit sold on Shopify. Nobody made a mistake. The systems just weren&apos;t talking fast enough, and the customer found out before you did.</p>
            <p>Then it compounds. You get cautious, so you pad every channel with a buffer, and now you&apos;re deliberately not selling stock you have, on every SKU, permanently. That&apos;s the invisible half of the problem: the safety margin that stops the oversells is also a standing tax on revenue.</p>
            <p>Meanwhile the count itself has drifted. A return came back and went on the shelf but not into the system. A damaged unit got written off in a WhatsApp message. A pallet arrived and got received in bulk against a PO that had two SKUs on it. By quarter-end the variance is big enough that somebody schedules a full count, the warehouse shuts for a day, and the number is accurate for about a week.</p>
            <p>And the purchasing decisions on top of all this are being made from a spreadsheet that was exported on Monday, by someone who knows it&apos;s wrong and is guessing by how much.</p>
          </div>
          <blockquote className="border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 text-lg font-bold text-slate-900 leading-snug text-left">
            The cost of a wrong stock number is never one wrong stock number. It&apos;s a cancelled order, a padded buffer on every SKU, a purchase order sized by guesswork, and a full count that fixes it for a week.
          </blockquote>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-16">
          {/* Sticky left rail */}
          <nav aria-label="Page sections" className="hidden lg:block">
            <div className="sticky top-32 py-16">
              <div className="relative flex flex-col gap-7">
                <span className="absolute left-[7px] top-[7px] bottom-[7px] w-px bg-slate-200" aria-hidden="true" />
                {RAIL.map((item) => {
                  const isActive = activeRail === item.id;
                  return (
                    <a key={item.id} href={`#${item.id}`} className="group relative flex items-center gap-3">
                      <span
                        className={cn(
                          "relative z-10 w-[15px] h-[15px] rounded-full border-2 shrink-0 transition-all duration-300",
                          isActive
                            ? "bg-[#7C3AED] border-[#7C3AED] shadow-[0_0_0_4px_rgba(124,58,237,0.15)]"
                            : "bg-white border-slate-300 group-hover:border-[#C4B5FD]"
                        )}
                      />
                      <span
                        className={cn(
                          "text-sm font-semibold leading-snug transition-colors duration-300",
                          isActive ? "text-[#7C3AED]" : "text-slate-400 group-hover:text-slate-600"
                        )}
                      >
                        {item.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </nav>

          <div className="min-w-0">
            {/* What we build — tabbed explorer, by business shape */}
            <section id="what-we-build" className="py-16 md:py-24 scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
                  What We Build
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Built around how your stock actually moves</h2>
                <p className="text-lg text-slate-600">Same engineering underneath. What changes is which problem it&apos;s pointed at.</p>
              </div>
              <TabbedExplorer />
              <p className="mt-10 text-slate-600 max-w-[680px]">
                Moving data between systems on a schedule is{" "}
                <Link href="/services/workflow-automation" className="font-bold text-[#7C3AED] hover:underline">workflow automation</Link>{" "}
                and is often cheaper as its own scope. If your problem is entirely &quot;these two systems don&apos;t talk,&quot; say so on the call, that&apos;s a smaller project than anything on this page and we&apos;ll price it that way.
              </p>
            </section>

            {/* Before and after — light throughout, a week day by day */}
            <section id="before-after" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">What changes in your week</h2>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div>
                  <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest mb-4">A week now</h3>
                  <div className="flex flex-col gap-4">
                    {WEEK_NOW.map((row) => (
                      <div key={row.day} className="bg-slate-50 rounded-2xl p-5">
                        <span className="font-bold text-slate-900 text-sm block mb-1">{row.day}</span>
                        <p className="text-slate-500 text-sm leading-relaxed">{row.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 md:mt-0">
                  <h3 className="font-bold text-[#7C3AED] text-xs uppercase tracking-widest mb-4">A week after</h3>
                  <div className="flex flex-col gap-4">
                    {WEEK_AFTER.map((row) => (
                      <div key={row.day} className="bg-[#F5F3FF] rounded-2xl p-5">
                        <span className="font-bold text-slate-900 text-sm block mb-1">{row.day}</span>
                        <p className="text-slate-700 text-sm leading-relaxed">{row.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-white border-2 border-[#7C3AED]/20 rounded-2xl p-6 md:p-8">
                <p className="text-slate-700 leading-relaxed">
                  <Link href="/case-studies/partsflow" className="font-bold text-[#7C3AED] hover:underline">PartsFlow</Link>{" "}
                  — a spare-parts distributor whose warehouse team was hand-keying inventory movements into QuickBooks across a 5,000+ SKU catalogue. Bulk validated imports and a live sync replaced row-by-row spreadsheet work:{" "}
                  <span className="font-bold text-slate-900">80% faster data entry</span>.
                </p>
              </div>
            </section>

            {/* How accuracy is maintained — six-item technical credibility grid, after the
                before/after since this reader wants the outcome first */}
            <section id="accuracy" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Six things that keep the number right</h2>
                <p className="text-lg text-slate-600">Any tool can store a quantity. Keeping it true under real conditions takes six specific things, and most off-the-shelf sync breaks on at least one.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {ACCURACY.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
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
                Where a step genuinely needs judgement, grading a return, matching a mislabelled supplier delivery to a PO, that&apos;s an{" "}
                <Link href="/services/ai-agent-development" className="font-bold text-[#7C3AED] hover:underline">AI agent</Link>{" "}
                sitting inside one step of an otherwise deterministic system. Most inventory work isn&apos;t that, and we&apos;ll tell you which of your steps genuinely is.
              </p>
            </section>

            {/* How it works — horizontal step rail, four phases, count-and-baseline first */}
            <section id="how-it-works" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Four phases</h2>
              </div>

              <div className="lg:flex lg:items-start lg:gap-4">
                {PROCESS.map((item, idx) => (
                  <div key={item.step} className="lg:flex-1 relative">
                    <div className="flex lg:flex-col gap-4 lg:gap-0 pb-10 lg:pb-0">
                      <div className="flex lg:flex-col items-center lg:items-start gap-2 shrink-0">
                        <div className="flex items-center w-full">
                          <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white font-bold flex items-center justify-center text-sm shrink-0 shadow-md shadow-[#7C3AED]/25">
                            {item.step}
                          </span>
                          {idx < PROCESS.length - 1 && (
                            <span className="hidden lg:block flex-1 h-px bg-gradient-to-r from-[#C4B5FD] to-[#E2E8F0] ml-2" />
                          )}
                        </div>
                      </div>
                      <div className="lg:mt-4 lg:pr-4">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="font-bold text-slate-900">{item.title}</h3>
                          <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wide">
                            {item.duration}
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    {idx < PROCESS.length - 1 && (
                      <span className="lg:hidden absolute left-5 top-10 bottom-0 w-px bg-[#E2E8F0]" />
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Build or buy — two equal-weight cards + comparison table */}
            <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
              <div className="max-w-2xl mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">You may not need us for this</h2>
                <p className="text-lg text-slate-600">The inventory software market is genuinely good, and buying beats building more often than any agency page admits.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="p-6 md:p-8 rounded-3xl border border-[#E2E8F0] bg-white">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Buy an off-the-shelf system when</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    You sell reasonably standard products through channels the tool supports natively, your fulfilment process fits how the tool expects it to work, and your SKU count and order volume are inside what it handles comfortably. Cin7, Katana, Zoho Inventory, inFlow, Linnworks, or Shopify&apos;s native tooling will be live in weeks for a fraction of a custom build, and one of your own team can run it.{" "}
                    <span className="font-bold text-slate-900">We&apos;ll tell you this on the call and we won&apos;t quote you for something you don&apos;t need.</span>
                  </p>
                </div>
                <div className="p-6 md:p-8 rounded-3xl border border-[#E2E8F0] bg-white">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">A custom build makes sense when</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Your product structure fights the tool, bundles inside bundles, configurable products, batch and expiry rules, or components that behave differently by customer. Or your fulfilment doesn&apos;t match any tool&apos;s assumptions. Or you need a channel or 3PL that no product connects to. Or you&apos;ve hit performance limits at your SKU or order volume. Or per-order pricing has stopped making sense at your scale. Or, most commonly, <strong className="text-slate-900">you already run an inventory tool and the problem is that it doesn&apos;t talk to the other three systems</strong>, which is an integration project, not a replacement.
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] mb-8">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-slate-100 border-b border-[#E2E8F0]">
                      <th scope="col" className="sticky left-0 bg-slate-100 px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap"></th>
                      <th scope="col" className="px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">Off-the-shelf system</th>
                      <th scope="col" className="px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">Custom build</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BUY_TABLE.map((row) => (
                      <tr key={row.label} className="border-b border-[#E2E8F0] last:border-0">
                        <th scope="row" className="sticky left-0 bg-white px-5 py-4 text-sm font-bold text-slate-900 align-top whitespace-nowrap">{row.label}</th>
                        <td className="px-5 py-4 text-sm text-slate-600 align-top">{row.tool}</td>
                        <td className="px-5 py-4 text-sm text-slate-600 align-top">{row.custom}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-slate-600 leading-relaxed max-w-[720px]">
                <span className="font-bold text-slate-900">Honest answer:</span> the most common right answer isn&apos;t build or buy, it&apos;s keep what you have and fix the connections between it and everything else. That&apos;s a substantially smaller project than either column above, and it&apos;s what a good share of the enquiries on this page turn out to need.
              </p>
            </section>

            {/* Systems we connect — grouped by category, real text names */}
            <section id="systems" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">What we connect to</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {SYSTEM_GROUPS.map((group, idx) => (
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
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((name) => (
                        <span key={name} className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-600">
                          {name}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="mt-10 text-slate-600 max-w-[680px]">
                Also connectable via API: Fishbowl, and most other inventory or warehouse software with a documented API. Not listed? If it has an API, we can almost certainly connect it. Some 3PLs and older warehouse systems still run on flat-file or EDI exchange, we&apos;ll tell you that before you commit and build to it properly rather than promising a real-time sync that isn&apos;t possible.
              </p>
            </section>

            {/* Inventory, or something else — routing block */}
            <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10 text-slate-900">Is inventory work actually what you need?</h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {ROUTING.map((item) => {
                  const inner = (
                    <>
                      <span className={cn("w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mb-3", item.current ? "bg-[#7C3AED]" : "bg-slate-50")}>
                        <item.icon className={cn("w-4.5 h-4.5", item.current ? "text-white" : "text-[#7C3AED]")} />
                      </span>
                      <h3 className="font-bold text-slate-900 text-sm mb-1.5">{item.title}{item.current && <span className="text-slate-400 font-normal"> (this page)</span>}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </>
                  );
                  return item.href ? (
                    <Link key={item.title} href={item.href} className="flex flex-col p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#C4B5FD] transition-all">
                      {inner}
                    </Link>
                  ) : (
                    <div key={item.title} className="flex flex-col p-5 rounded-2xl bg-[#7C3AED]/10 border-2 border-[#7C3AED]/30">
                      {inner}
                    </div>
                  );
                })}
              </div>

              <p className="text-slate-600 max-w-[680px]">
                <span className="font-bold text-slate-900">Honest answer:</span> a large share of &quot;we need a new inventory system&quot; enquiries are one integration and a corrected available-to-promise calculation. That&apos;s weeks rather than months, and we&apos;d rather scope it that way in week one.
              </p>
            </section>

            {/* Pricing — Template B's open price table. Structure kept per the source spec's
                explicit instruction not to omit it; no fabricated figures, honest framing in
                place of numbers, consistent with every other page. */}
            <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">What it costs</h2>
                <p className="text-lg text-slate-600">Fixed price, quoted in writing before we start. No hourly billing, no surprise change orders.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {PRICING_TIERS.map((tier, idx) => (
                  <div key={tier.label} className={cn("flex flex-col rounded-3xl p-6 md:p-7", idx === 1 ? "bg-[#0F172A] text-white shadow-2xl md:-translate-y-3" : "bg-slate-50 border border-slate-100")}>
                    <h3 className={cn("font-bold text-lg mb-3", idx === 1 ? "text-white" : "text-slate-900")}>{tier.label}</h3>
                    <p className={cn("text-sm leading-relaxed mb-4", idx === 1 ? "text-white/70" : "text-slate-600")}>{tier.desc}</p>
                    <p className={cn("text-sm font-bold mb-5", idx === 1 ? "text-[#C4B5FD]" : "text-[#7C3AED]")}>{tier.from}</p>
                    <p className={cn("mt-auto pt-4 border-t text-xs font-semibold", idx === 1 ? "border-white/10 text-white/50" : "border-slate-200 text-slate-500")}>Good for: {tier.bestFor}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-slate-600 max-w-[680px]">
                Every build includes monitoring for the first month. After that it&apos;s a monthly fee and you can stop any time, you keep the source code, the data, and the documentation either way.
              </p>
            </section>

            {/* Case studies — PartsFlow leads, the best-matched proof asset on the site */}
            <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-slate-900">What we&apos;ve built</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {CASE_STUDIES.map((cs, idx) => (
                  <motion.div
                    key={cs.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <Link
                      href={cs.href}
                      className="group flex flex-col h-full bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-[#C4B5FD] transition-all"
                    >
                      <span className="text-5xl md:text-6xl font-extrabold text-[#7C3AED] tracking-tight mb-2">{cs.num}</span>
                      <span className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-6">{cs.metric}</span>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{cs.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-6">{cs.desc}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 font-bold text-[#7C3AED]">
                        Read the case study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* FAQ — two-column plain list, no accordion */}
            <section id="questions" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-slate-900">Common questions</h2>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                {FAQS.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Closing CTA — light bordered panel, Template B's signature, not a dark band */}
      <section className="px-5 lg:px-10 max-w-4xl mx-auto py-16 md:py-24">
        <div className="relative rounded-[2rem] border-2 border-[#E2E8F0] bg-gradient-to-b from-slate-50 to-white p-8 sm:p-12 md:p-16 text-center shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#7C3AED]/25">
            <Barcode className="w-7 h-7 text-white" />
          </div>
          <h2 className="relative text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 text-slate-900">
            Tell us the last time you oversold.
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            Book a 30-minute call. We&apos;ll trace where your stock number actually breaks, tell you honestly whether an off-the-shelf tool would fix it, and give you a fixed price if building is the right answer.
          </p>
          <div className="flex justify-center">
            <AnimatedCtaButton href="/contact" label="Book a discovery call" hoverLabel="Let's Talk" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
