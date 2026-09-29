"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, ChevronDown,
  Users, ShoppingCart, DollarSign, Repeat, Target, Radar,
  Gauge, GitCommit, Eye, Lock, Milestone,
  ClipboardList, LayoutDashboard, Workflow, LineChart, Boxes, Sparkles,
} from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import TrustStrip from "@/components/TrustStrip";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const READY_BANDS = [
  {
    n: "01",
    title: "You need history, and more than you'd guess",
    body: "A model learns from repetition, so the useful question isn't how many rows you have, it's how many times the thing you're predicting has already happened. Ten thousand customers with forty churn events is a thin dataset. Four hundred customers with two hundred churn events is a workable one.\n\nFor anything seasonal, you need at least two full cycles and preferably three, because with one year of history a model cannot distinguish “December is busy” from “last December was busy.”",
    ifNot: "the answer is usually instrumentation, not modelling, start recording the outcome properly now so this conversation is possible in a year.",
  },
  {
    n: "02",
    title: "The data has to be somewhere a model can reach",
    body: "Not in four systems that disagree, not in exports someone rebuilds on Mondays. Modelling on ad-hoc extracts produces a result that can't be reproduced next quarter, which means it can't be trusted and won't be maintained.",
    ifNot: "that's data warehousing and ETL, and it's the honest first project. We'd rather build you the foundation and revisit prediction in six months than model on sand and hand you a number you can't defend.",
    ifNotLink: { href: "/services/data-warehousing-etl", label: "data warehousing and ETL" },
  },
  {
    n: "03",
    title: "A decision has to be waiting for the answer",
    body: "This is the one that kills the most projects, and it has nothing to do with data. Before we build anything we ask: when the prediction says a customer is likely to churn, what specifically happens? If the answer is “we'd look at it,” the model will be accurate, admired, and ignored.",
    ifNot: "define the action first. Sometimes the action turns out to be worth building on its own and the prediction becomes optional.",
  },
];

const WHAT_WE_BUILD = [
  { title: "Churn and retention prediction", icon: Users, trigger: "Retention has slipped and nobody can tell whether it's onboarding, pricing, or a single cohort.", desc: "Which accounts or subscribers are likely to leave, and which signals are driving it. The output lands in your CRM as a scored field with the top contributing factors attached, so the person making the save call knows why, not just that a number is high." },
  { title: "Demand and inventory forecasting", icon: ShoppingCart, trigger: "You're overstocked and out of stock at the same time, in different SKUs.", desc: "Expected demand by SKU and location, with seasonality, promotions, and lead times accounted for, expressed as a range rather than a single number. Feeds purchasing decisions and safety-stock levels." },
  { title: "Revenue and cash forecasting", icon: DollarSign, trigger: "A board or lender wants a number you can defend the method behind.", desc: "Forward revenue from your actual pipeline and billing history, with confidence intervals, rather than a spreadsheet built on stage-weighted guesswork. For services businesses, capacity and utilisation forecasting alongside it." },
  { title: "Customer lifetime value", icon: Repeat, trigger: "Paid acquisition is scaling and margin isn't.", desc: "Predicted value by segment, channel, and acquisition source, which changes what you're willing to pay to acquire. Blended CAC hides the segments losing money; predicted LTV surfaces them." },
  { title: "Predictive lead scoring", icon: Target, trigger: "Sales says the leads are bad, marketing says sales doesn't work them. Both have a point and nobody has evidence.", desc: "Which inbound leads resemble the ones that closed, scored on your own history rather than a vendor's generic model. Written back into the CRM so routing and prioritisation happen automatically." },
  { title: "Anomaly and risk detection", icon: Radar, trigger: "Something went wrong and nobody noticed for a month.", desc: "Transactions, usage, or operational metrics that don't fit the pattern, flagged in real time with a tuned threshold, because a detector that cries wolf gets muted within a fortnight and then it may as well not exist." },
];

const WHY_FAIL = [
  { title: "It predicted something nobody could act on", body: "A model flags accounts likely to churn ninety days out. Nobody owns the save motion, there's no play to run, and the list arrives in an email. The model is right and nothing changes, which, after two quarters, is indistinguishable from being wrong.", control: "we define the action before the model. What happens, who does it, and in which system. If we can't answer that in the first call, we say so rather than taking the project." },
  { title: "It couldn't explain itself", body: "The model said 0.87 and a manager asked why. Nobody could answer. In anything touching customers, credit, or pricing, an unexplainable score doesn't get used, and in regulated contexts it can't be.", control: "contributing factors surfaced with every prediction, and a preference for interpretable methods unless the accuracy gain from a complex one is large and clearly worth it. Usually it isn't." },
  { title: "It was accurate on the past and useless on the present", body: "The model was validated by testing it on data that included information from after the moment of prediction. It scored beautifully and collapsed in production. This is leakage, it's the most common serious mistake in the field, and it is embarrassingly easy to make.", control: "time-based validation only. We test on a period the model has never seen, in the order events actually occurred, and we report performance the way you'll experience it in production rather than the way it looks best." },
  { title: "The world moved and the model didn't", body: "It was trained before a pricing change, a new channel, or a supply shock. It kept producing confident numbers based on a world that no longer exists, and nobody was watching the error rate.", control: "monitoring on the predictions themselves, not just the pipeline. We track error against reality as outcomes arrive, alert on drift, and retrain on a schedule. This is the part that isn't a project, it's why the monthly plan exists." },
  { title: "One number was presented as certainty", body: "The forecast said 4,200 units. Someone ordered 4,200 units. The honest answer was somewhere between 3,400 and 5,100, and the decision that should have been made, how much safety stock to carry, was never surfaced because the interval got flattened into a point.", control: "every forecast ships as a range with a stated confidence level, and every interface we build displays the range. A point estimate is a summary of a distribution, and the distribution is the part you make decisions with." },
];

const HOW_DIFFERENT = [
  { title: "We report the baseline next to the model", icon: Gauge, desc: "Every result is shown against the simple method it has to beat. If the gap is small, that's in the report, in writing, where you can see it." },
  { title: "We validate the way time actually works", icon: GitCommit, desc: "Trained on the past, tested on the future, never the reverse. The accuracy number we give you is the one you'll live with, not the flattering one." },
  { title: "Ranges, not points", icon: Target, desc: "Every forecast carries an interval and every interface we build shows it. The width of that band is often more useful than the estimate inside it." },
  { title: "The output goes where the decision is made", icon: Workflow, desc: "Into the CRM field, the purchasing screen, the Slack alert. Not into a slide deck and not into a notebook only an analyst can open." },
  { title: "You get the model, not access to it", icon: Lock, desc: "Training code, features, weights, and documentation transfer on final payment. No black box, no per-prediction pricing, no platform you can't leave." },
  { title: "We watch the error after launch", icon: Eye, desc: "Predictions are compared against what actually happened, continuously. Accuracy decay is normal and expected, going unnoticed is what makes it expensive." },
];

const PROCESS = [
  { step: "01", title: "Define the decision", duration: "week one", desc: "What are we predicting, who acts on it, in which system, and what does being wrong cost in each direction? Under-forecasting and over-forecasting rarely hurt equally, and that asymmetry shapes the whole model." },
  { step: "02", title: "Data and baseline", duration: "week one to two", desc: "We assemble the history, check it's sufficient, and build the simple method. You get a written baseline number. Everything afterwards is measured against it." },
  { step: "03", title: "Go / no-go", duration: "week two", desc: "We build a first model and compare it to the baseline honestly. If the improvement doesn't justify the cost of building and running it, we say so and the engagement stops here. You keep the baseline, the data work, and the write-up. This is a real exit, not a formality, and it's the reason the earlier phases are priced separately.", marker: "GO / NO-GO", decision: true },
  { step: "04", title: "Build and integrate", duration: "scoped per project", desc: "The model, the retraining pipeline, monitoring on prediction error, and the integration that puts the output in front of the person who acts on it." },
  { step: "05", title: "Run it", duration: "ongoing", desc: "Error tracked against outcomes as they arrive, drift alerting, scheduled retraining, and a named engineer. Models decay, that's the nature of the technology, not a defect, and it's scoped from day one." },
];

const ROUTING = [
  { title: "Predictive analytics", desc: "You want to know what's likely to happen next, and act on it.", icon: Sparkles, current: true },
  { title: "Business intelligence", desc: "You want to know what happened and what's true now.", icon: LineChart, href: "/services/business-intelligence" },
  { title: "Custom dashboards", desc: "You want one screen answering a known set of questions.", icon: LayoutDashboard, href: "/services/custom-dashboards" },
  { title: "Data warehousing and ETL", desc: "Your data isn't in one place yet, and it's the honest first step.", icon: Boxes, href: "/services/data-warehousing-etl" },
  { title: "Generative AI and custom LLMs", desc: "You want something written, read, or summarised.", icon: ClipboardList, href: "/services/generative-ai-custom-llms" },
  { title: "Workflow automation", desc: "You want something to happen automatically when a threshold is crossed.", icon: Workflow, href: "/services/workflow-automation" },
];

const ENGAGEMENT_MODELS = [
  { label: "Feasibility and baseline", bestFor: "anyone who hasn't built a prediction model with us before, almost everyone starts here.", includes: "Two weeks. Data assessment, the baseline method, a written verdict on whether a model is likely to beat it, and by how much. You can stop here and many should. Deducted from the build price if you continue.", from: "$249" },
  { label: "Model build", bestFor: "a feasibility phase that cleared the bar and a decision worth wiring the output into.", includes: "The model, validation, retraining pipeline, monitoring, and integration into the system where the decision happens. Fixed scope, fixed price, typically starting two to four weeks after feasibility.", from: "Priced after the feasibility phase" },
  { label: "Ongoing", bestFor: "any model in production, ours or someone else's, models decay and most clients end up here.", includes: "Error monitoring against actual outcomes, drift alerting, scheduled retraining, threshold tuning, and a named engineer. Available on models we built and on models we didn't.", from: "A monthly plan sized to your model" },
];

const FAQS = [
  { q: "How much data do we actually need?", a: "It depends on how often the outcome has occurred, not on total rows. As a working rule we want several hundred instances of the thing being predicted, and for anything seasonal at least two full cycles, three is better. We check this for free before you commit, and we'll tell you if the honest answer is “not yet.”" },
  { q: "How accurate will it be?", a: "Nobody credible can answer that before seeing your data, and anyone who quotes a number in a sales call is guessing. What we do commit to is measuring it against a simple baseline and reporting both, so you can judge whether the model is earning its cost." },
  { q: "What if the model doesn't beat the baseline?", a: "Then we say so and you don't buy it. That's what the feasibility phase is for, and it happens often enough that we price it as a real exit rather than a formality." },
  { q: "Is this the same as the AI everyone's talking about?", a: "No. Predictive models produce numbers from your historical data and can be measured against what actually happened. Generative AI produces text and images and is judged rather than measured. Different technology, different cost, different failure mode, see the section above." },
  { q: "Who owns the model?", a: "You do. Training code, feature definitions, model weights, and documentation transfer on final payment. No per-prediction pricing and no platform dependency you can't exit." },
  { q: "How often does it need retraining?", a: "Depends how fast your business changes, monthly for fast-moving demand, quarterly for longer sales cycles. What matters more than the schedule is monitoring error against outcomes so retraining is triggered by evidence rather than by the calendar. That's included in the monthly plan." },
  { q: "Can you work with our existing data team?", a: "Yes, and it's often the better arrangement. We frequently build the model and hand it to an internal team to run, or take on monitoring for models built elsewhere. Both are normal." },
  { q: "Do you use our data to train anything else?", a: "No. Your data trains your model and nothing leaves your environment without your instruction. NDA before discovery, and we'll work inside your cloud account if you prefer." },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Predictive Analytics & Forecasting Development",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "Churn, demand, and revenue forecasting built into your systems, with the baseline test first. If a simple model wins, we'll tell you and charge you less.",
};

const OFFER_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Offer",
  name: "Feasibility and Baseline Phase",
  description:
    "A two-week feasibility phase: data assessment, a simple baseline method, and a written verdict on whether a predictive model is likely to beat it, and by how much.",
  price: "249",
  priceCurrency: "USD",
  url: "https://spaciva.tech/services/predictive-analytics",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Spaciva AI", url: "https://spaciva.tech" },
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
    { "@type": "ListItem", position: 3, name: "Predictive Analytics", item: "https://spaciva.tech/services/predictive-analytics" },
  ],
};

const TECH_ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Predictive AI and generative AI are not the same thing",
  description:
    "Predictive AI produces a number learned from historical records and measurable against reality. Generative AI produces language, code, or images, judged rather than measured. A plain explanation of the difference and why it matters for scoping a project.",
  author: { "@type": "Organization", name: "Spaciva AI" },
  publisher: { "@type": "Organization", name: "Spaciva AI", url: "https://spaciva.tech" },
  mainEntityOfPage: "https://spaciva.tech/services/predictive-analytics#predictive-vs-generative",
};

function ForecastChart() {
  const reduceMotion = useReducedMotion();
  const historyX = [30, 70, 110, 150, 190, 225];
  const historyY = [170, 155, 162, 142, 148, 130];
  const forecastX = [225, 270, 315, 360, 405, 440];
  const forecastY = [130, 118, 108, 100, 94, 90];
  const upperY = [130, 108, 90, 72, 56, 44];
  const lowerY = [130, 132, 138, 144, 152, 158];

  const toPoints = (xs: number[], ys: number[]) => xs.map((x, i) => `${x},${ys[i]}`).join(" ");
  const bandPath = `M${toPoints(forecastX, upperY)} L${toPoints([...forecastX].reverse(), [...lowerY].reverse())} Z`;

  const drawTransition = { duration: reduceMotion ? 0 : 1.4, ease: "easeInOut" as const };

  return (
    <div>
      <svg
        viewBox="0 0 460 220"
        className="w-full h-auto"
        role="img"
        aria-label="Line chart, illustrative not a client result: a solid history line shows actual values trending upward with some noise up to today. From today, a dashed forecast line continues the trend, surrounded by a shaded prediction interval that visibly widens the further into the future it extends, labelled as the range actually confident about. The chart illustrates that a forecast is a range, not a single confident line."
      >
        <defs>
          <pattern id="pa-hatch" width="6" height="6" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#7C3AED" strokeWidth="2" opacity="0.35" />
          </pattern>
        </defs>

        <line x1="20" y1="205" x2="450" y2="205" stroke="#CBD5E1" strokeWidth="1" />
        <line x1="225" y1="20" x2="225" y2="205" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
        <text x="225" y="14" fontSize="11" fontWeight={700} fill="#64748B" textAnchor="middle">TODAY</text>

        <motion.path
          d={bandPath}
          fill="url(#pa-hatch)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.8 }}
        />
        <motion.polyline
          points={toPoints(forecastX, upperY)}
          fill="none"
          stroke="#7C3AED"
          strokeWidth="1.5"
          strokeDasharray="2 3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: reduceMotion ? 0 : 0.8 }}
        />
        <motion.polyline
          points={toPoints(forecastX, lowerY)}
          fill="none"
          stroke="#7C3AED"
          strokeWidth="1.5"
          strokeDasharray="2 3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: reduceMotion ? 0 : 0.8 }}
        />

        <motion.polyline
          points={toPoints(historyX, historyY)}
          fill="none"
          stroke="#0F172A"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: reduceMotion ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={drawTransition}
        />
        <motion.polyline
          points={toPoints(forecastX, forecastY)}
          fill="none"
          stroke="#7C3AED"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="8 6"
          initial={{ pathLength: reduceMotion ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ ...drawTransition, delay: reduceMotion ? 0 : 0.3 }}
        />

        <text x="60" y="185" fontSize="11" fontWeight={700} fill="#0F172A">History</text>
        <text x="330" y="70" fontSize="11" fontWeight={700} fill="#7C3AED">Forecast</text>
      </svg>
      <div className="mt-3 flex items-start gap-2.5 rounded-xl bg-[#F5F3FF] border border-[#7C3AED]/20 px-4 py-3">
        <Target className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" aria-hidden="true" />
        <p className="text-xs sm:text-sm text-slate-700 leading-snug">
          <strong className="font-bold text-slate-900">The shaded band is the range we&apos;re actually confident about.</strong> It widens the further out it goes, on purpose, every competitor draws one confident line instead.
        </p>
      </div>
      <p className="text-xs text-slate-400 mt-2">Illustrative shape, not a client result.</p>
    </div>
  );
}

function FAQItem({ faq, index, isOpen, onClick }: { faq: typeof FAQS[0]; index: number; isOpen: boolean; onClick: () => void }) {
  const panelId = `pa-faq-panel-${index}`;
  const buttonId = `pa-faq-button-${index}`;

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

export default function PredictiveAnalyticsClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(OFFER_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(TECH_ARTICLE_SCHEMA) }} />

      {/* Hero — light, two column. Right side is a forecast chart with a visibly widening
          prediction interval, the entire positioning of the page stated before any copy. */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-slate-50 -z-10" />
        <div className="absolute top-20 right-0 w-[260px] h-[260px] md:w-[600px] md:h-[600px] bg-[#7C3AED]/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[620px]">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
                Predictive Analytics
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
                A prediction is only worth the decision it changes.
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                We build forecasting and prediction models, churn, demand, revenue, lifetime value, on your own data, and then we wire the output into the system where someone acts on it. Every engagement starts by testing whether a simple method already does the job, because often it does, and you should know that before you pay for a model.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
                <a href="#what-we-build" className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#7C3AED] transition-colors">
                  See what we build
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm font-semibold text-slate-500">
                No per-prediction pricing · Ranges, not point estimates · You own the model and the code
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full max-w-lg mx-auto lg:max-w-none bg-white border border-slate-200 rounded-[2rem] p-5 sm:p-7 shadow-xl"
            >
              <ForecastChart />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip sectionClassName="py-10 bg-white border-y border-[#E2E8F0]" fadeFrom="white" />

      {/* Are you ready for this? — the signature block of A-5. Three requirement bands at
          identical weight, then a fourth, slightly heavier band for the baseline test. Doubles
          as the honest answer to "how much data do you need for machine learning." */}
      <section id="ready" className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
              Before Anything Else
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Three things have to be true, and we&apos;ll check them for free</h2>
            <p className="text-lg text-slate-600">Most failed prediction projects were doomed before the modelling started. Three conditions, in order.</p>
          </div>

          <div className="flex flex-col gap-6">
            {READY_BANDS.map((item) => (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-[#E2E8F0] bg-white p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="flex items-center gap-3 md:w-[280px] shrink-0">
                    <span className="text-2xl font-light text-[#7C3AED] tabular-nums">{item.n}</span>
                    <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-600 leading-relaxed mb-3 whitespace-pre-line">{item.body}</p>
                    <p className="text-slate-700 leading-relaxed">
                      <span className="font-bold text-slate-900">If you don&apos;t have it yet: </span>
                      {item.ifNotLink ? (
                        <>
                          {item.ifNot.split(item.ifNotLink.label)[0]}
                          <Link href={item.ifNotLink.href} className="font-bold text-[#7C3AED] hover:underline">{item.ifNotLink.label}</Link>
                          {item.ifNot.split(item.ifNotLink.label)[1]}
                        </>
                      ) : (
                        item.ifNot
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border-2 border-[#7C3AED]/30 bg-[#F5F3FF] p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="flex items-center gap-3 md:w-[280px] shrink-0">
                  <span className="text-2xl font-light text-[#7C3AED] tabular-nums">04</span>
                  <h3 className="font-bold text-slate-900 text-lg">And then we build the dumb version first</h3>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-700 leading-relaxed mb-3">
                    <strong className="font-bold text-slate-900">Every engagement starts with a baseline</strong>, a deliberately simple method. Last year&apos;s number plus growth. A three-month moving average. A rule your ops lead already uses in their head.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Then we measure it, and the model has to beat it by enough to justify what it costs to build and run. <strong className="font-bold text-slate-900">If it doesn&apos;t, we tell you, and you don&apos;t buy the model.</strong> This is standard practice among people who do this work seriously and it is almost never offered by people selling it.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <blockquote className="mt-10 border-l-4 border-[#7C3AED] bg-white rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-lg md:text-xl font-bold text-slate-900 leading-snug max-w-3xl shadow-sm">
            Roughly one in three companies who ask us for a forecasting model should buy a moving average and a dashboard instead. We&apos;d rather be the ones who said so.
          </blockquote>
        </div>
      </section>

      {/* What we build — six cards, three across, two rows. Every card names the decision the
          output feeds, not just the prediction. */}
      <section id="what-we-build" className="py-16 md:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
              What We Build
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Six models, and the decision each one feeds</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_WE_BUILD.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="flex flex-col bg-slate-50 p-6 md:p-7 rounded-3xl border border-slate-100 hover:shadow-lg hover:border-[#C4B5FD] transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shrink-0 shadow-sm">
                  <item.icon className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h3>
                <p className="text-xs font-bold uppercase tracking-wide text-[#7C3AED] mb-3">Typical trigger: {item.trigger}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-sm text-slate-500 max-w-[760px]">
            Forecasting demand is this page. Getting the resulting purchase order raised, approved, and synced across channels is{" "}
            <Link href="/services/inventory-management" className="font-bold text-[#7C3AED] hover:underline">inventory management</Link>. Writing a churn score into HubSpot and triggering the play is{" "}
            <Link href="/services/crm-automation" className="font-bold text-[#7C3AED] hover:underline">CRM automation</Link>. We build across the boundary, the point is that they&apos;re separately scoped, so you can see what each part costs.
          </p>
        </div>
      </section>

      {/* Why prediction projects fail — five stacked blocks, Template A's persuasive engine */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
              Failure Modes
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Five ways an accurate model still fails</h2>
            <p className="text-lg text-slate-600">Notice that none of these is &quot;the model wasn&apos;t accurate enough.&quot; Accuracy is rarely what goes wrong.</p>
          </div>

          <div className="flex flex-col">
            {WHY_FAIL.map((item, idx) => (
              <div key={item.title} className={cn("py-7 bg-white px-6 md:px-8 rounded-2xl mb-4 border border-slate-100", idx === WHY_FAIL.length - 1 && "mb-0")}>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-3 max-w-[720px]">{item.body}</p>
                <p className="text-slate-800 leading-relaxed max-w-[720px]">
                  <strong className="text-slate-900">The decision that prevents it: </strong>{item.control}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="mt-4 border-l-4 border-[#7C3AED] bg-white rounded-r-2xl px-6 py-6 text-slate-900 font-bold leading-snug max-w-3xl shadow-sm">
            Four of these five are decisions made before any modelling starts. None of them are about which algorithm you picked.
          </blockquote>
        </div>
      </section>

      {/* Mid-page CTA — first of Template A's two dark bands */}
      <section className="py-12 md:py-16 bg-[#0F172A]">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3 text-white">
            Not sure whether you have enough data?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            That&apos;s usually settled in one call. Tell us what you want to predict and how long you&apos;ve been recording it, and we&apos;ll tell you whether it&apos;s workable, what the baseline would be, and whether a model is likely to beat it, before you commit anything.
          </p>
          <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
        </div>
      </section>

      {/* How we work differently — six-item credibility grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Six things we do that most vendors don&apos;t</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_DIFFERENT.map((item, idx) => (
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
        </div>
      </section>

      {/* Predictive AI vs generative AI — plainer two-column comparison, self-contained,
          TechArticle-marked. The most quotable section on the page. */}
      <section id="predictive-vs-generative" className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0] scroll-mt-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">&quot;AI&quot; is now one word for two different technologies</h2>
            <p className="text-lg text-slate-600 leading-relaxed">Since 2023 the vocabulary has collapsed, and it costs people real money. A significant share of the projects we&apos;re asked to quote are described in the wrong category entirely.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg mb-3">Predictive AI produces a number</h3>
              <p className="text-slate-600 leading-relaxed">It learns from your historical records and estimates a quantity or a probability, units, revenue, likelihood of churn. It&apos;s trained on your data, it can be measured against reality, and you can state exactly how wrong it usually is. <strong className="text-slate-900">This page.</strong></p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg mb-3">Generative AI produces language, code, or images</h3>
              <p className="text-slate-600 leading-relaxed">
                It&apos;s a large model trained on text, prompted rather than fitted, and useful for reading, writing, summarising, and answering. Its correctness is judged, not measured. That&apos;s{" "}
                <Link href="/services/generative-ai-custom-llms" className="font-bold text-[#7C3AED] hover:underline">generative AI and custom LLMs</Link>.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong className="font-bold text-slate-900">The practical test:</strong> if the right answer is a number you could eventually check against what happened, it&apos;s predictive. If the right answer is a piece of text a person has to read and judge, it&apos;s generative.
            </p>
            <p className="text-slate-600 leading-relaxed">
              They&apos;re built differently, they cost differently, and they fail differently, a forecast drifts quietly, an LLM makes something up confidently. Plenty of systems use both: a model predicts which accounts are at risk, an LLM drafts the outreach. But scoping them as one project is how budgets get spent on the wrong half of the problem.
            </p>
          </div>
        </div>
      </section>

      {/* How the work runs — vertical timeline, five steps, a visible go/no-go decision point
          at step three, marked with a distinct colour and label so it reads at a glance. */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Five phases, with an exit at week two</h2>
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
                  <span className={cn("text-4xl md:text-5xl font-light tabular-nums", item.decision ? "text-amber-500" : "text-[#7C3AED]")}>{item.step}</span>
                  {idx < PROCESS.length - 1 && <div className="w-px flex-1 bg-[#E2E8F0] mt-4" />}
                </div>
                <div className="pt-2 md:pt-3">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">{item.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wide">
                      {item.duration}
                    </span>
                    {item.marker && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-wide">
                        <Milestone className="w-3.5 h-3.5" />
                        {item.marker}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 leading-relaxed max-w-[680px]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Is this what you need? — routing, six cards */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Prediction, or something else?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ROUTING.map((item) => {
              const inner = (
                <>
                  <span className={cn("w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mb-3", item.current ? "bg-[#7C3AED]" : "bg-white shadow-sm")}>
                    <item.icon className={cn("w-4.5 h-4.5", item.current ? "text-white" : "text-[#7C3AED]")} />
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5">{item.title}{item.current && <span className="text-slate-400 font-normal"> (this page)</span>}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </>
              );
              return item.href ? (
                <Link key={item.title} href={item.href} className="flex flex-col p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-[#C4B5FD] transition-all">
                  {inner}
                </Link>
              ) : (
                <div key={item.title} className="flex flex-col p-5 rounded-2xl bg-[#7C3AED]/10 border-2 border-[#7C3AED]/30">
                  {inner}
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-slate-600 max-w-[720px]">
            If you&apos;re not sure, the discovery call sorts it in twenty minutes and we&apos;d rather route you correctly than sell you the wrong scope.
          </p>
        </div>
      </section>

      {/* Engagement models — three cards, middle emphasised. The first tier is priced low
          enough to be a genuine yes, since it's what makes the go/no-go exit real. */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">How engagements are structured</h2>
            <p className="text-lg text-slate-600">Fixed price, quoted in writing before we start. The first step is deliberately small.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS.map((m, idx) => (
              <div key={m.label} className={cn("flex flex-col rounded-3xl p-6 md:p-7", idx === 1 ? "bg-[#0F172A] text-white shadow-2xl md:-translate-y-3" : "bg-slate-50 border border-slate-100")}>
                <h3 className={cn("font-bold text-lg mb-3", idx === 1 ? "text-white" : "text-slate-900")}>{m.label}</h3>
                <p className={cn("text-sm leading-relaxed mb-4", idx === 1 ? "text-white/70" : "text-slate-600")}>{m.includes}</p>
                <p className={cn("text-sm font-bold mb-5", idx === 1 ? "text-[#C4B5FD]" : "text-[#7C3AED]")}>{m.from}</p>
                <p className={cn("mt-auto pt-4 border-t text-xs font-semibold", idx === 1 ? "border-white/10 text-white/50" : "border-slate-200 text-slate-500")}>Good for: {m.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof — deliberately not a case-study grid. No predictive engagement exists yet, and
          the doc is explicit that stretching PartsFlow or Unified Accounting to fit is the
          fastest way to lose this exact buyer. Honest gap, framed as a reason the feasibility
          phase exists. Replace with the standard two-card treatment once a real one ships. */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="mb-10">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
              Proof
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">What we can and can&apos;t show you</h2>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-10">
            <p className="text-slate-700 leading-relaxed mb-5">
              We&apos;ve built the data foundations underneath prediction work, pipelines, warehouses, and the reporting layer, and you can see that work in{" "}
              <Link href="/case-studies/unified-accounting" className="font-bold text-[#7C3AED] hover:underline">Unified Accounting</Link> and{" "}
              <Link href="/case-studies/partsflow" className="font-bold text-[#7C3AED] hover:underline">PartsFlow</Link>.
            </p>
            <p className="text-slate-900 font-bold leading-relaxed mb-5">
              Neither is a forecasting project, and we&apos;re not going to present them as one. Predictive analytics is a newer part of our practice than our automation and data engineering work.
            </p>
            <p className="text-slate-600 leading-relaxed">
              What that means for you, practically: the feasibility phase exists partly so you can judge us on your own problem before committing to a build. Two weeks, a fixed price, a written verdict, and a real exit. It&apos;s a shorter and cheaper way to assess a vendor than reading a case study about somebody else&apos;s business.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ — light, accordion */}
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

      {/* Closing CTA — dark, full-bleed rounded card, second dark band */}
      <section className="px-5 lg:px-10 max-w-7xl mx-auto py-16 md:py-24">
        <div className="bg-[#0F172A] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C3AED]/30 via-[#0F172A]/0 to-[#0F172A]/0 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
              Tell us what decision you&apos;re making blind.
            </h2>
            <p className="text-lg text-white/70 mb-10 font-medium">
              Book a 30-minute call. We&apos;ll tell you whether your data can support a prediction, what the simple version would look like, and whether a model is worth building at all.
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
