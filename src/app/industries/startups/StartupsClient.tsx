"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Brain, Cloud, Database, Zap, CheckCircle2, ChevronRight, BarChart, Rocket, Target, Users, Search, Code, Smartphone, Briefcase, ChevronDown, Lightbulb, TrendingUp, MonitorSmartphone, Layers, Settings, FileText } from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const CHALLENGES = [
  {
    title: "Limited Budget",
    desc: "Every development decision impacts runway.",
    icon: TrendingUp
  },
  {
    title: "Unclear Product Direction",
    desc: "Many founders know the problem but not the best solution.",
    icon: Lightbulb
  },
  {
    title: "Speed to Market",
    desc: "Launching quickly without sacrificing quality is critical.",
    icon: Rocket
  },
  {
    title: "Finding the Right Tech Stack",
    desc: "Choosing technologies that won't become bottlenecks later.",
    icon: Layers
  },
  {
    title: "Product-Market Fit",
    desc: "Validating assumptions before investing heavily.",
    icon: Target
  },
  {
    title: "Scaling",
    desc: "Growing from MVP to thousands of users.",
    icon: BarChart
  },
  {
    title: "Building an Engineering Team",
    desc: "Hiring developers too early can be expensive.",
    icon: Users
  },
  {
    title: "Technical Leadership",
    desc: "Many startups need a technology partner before hiring a CTO.",
    icon: Briefcase
  }
];

const SOLUTIONS = [
  {
    title: "MVP Development",
    desc: "Launch a functional MVP quickly to validate your idea.",
    icon: Rocket
  },
  {
    title: "SaaS Platforms",
    desc: "Subscription platforms with authentication, billing, dashboards, and multi-tenancy.",
    icon: Cloud
  },
  {
    title: "AI Products",
    desc: "AI agents, copilots, chatbots, recommendation engines, and workflow automation.",
    icon: Brain
  },
  {
    title: "Mobile Apps",
    desc: "Native and cross-platform apps for iOS and Android.",
    icon: Smartphone
  },
  {
    title: "Founder Dashboard",
    desc: "Track users, revenue, subscriptions, retention, and business KPIs.",
    icon: BarChart
  },
  {
    title: "Admin Panel",
    desc: "Manage users, permissions, content, analytics, and operations.",
    icon: Settings
  },
  {
    title: "API Development",
    desc: "Secure APIs and third-party integrations.",
    icon: Code
  },
  {
    title: "Customer Portal",
    desc: "Self-service dashboards, onboarding, and account management.",
    icon: Users
  },
  {
    title: "Internal Tools",
    desc: "Admin workflows, automation, CRM, and operations.",
    icon: Database
  },
  {
    title: "Growth Analytics",
    desc: "Measure product performance and user behavior.",
    icon: TrendingUp
  }
];

const AI_SOLUTIONS = [
  {
    title: "AI Chatbots",
    desc: "Automate conversational engagement with potential customers."
  },
  {
    title: "AI Customer Support",
    desc: "Resolve common support queries instantly."
  },
  {
    title: "AI Knowledge Assistant",
    desc: "Provide quick answers drawn from your internal or external documentation."
  },
  {
    title: "AI Sales Assistant",
    desc: "Qualify leads and personalize outreach strategies."
  },
  {
    title: "AI Workflow Automation",
    desc: "Streamline repetitive operational and administrative tasks."
  },
  {
    title: "AI Content Generation",
    desc: "Generate dynamic content for marketing or in-app experiences."
  },
  {
    title: "AI Document Intelligence",
    desc: "Extract structured data from unstructured formats."
  },
  {
    title: "AI Analytics",
    desc: "Uncover hidden patterns in your user data to drive growth."
  }
];

const INDUSTRIES = [
  "First-Time Founders",
  "Serial Entrepreneurs",
  "SaaS Startups",
  "AI Startups",
  "FinTech Startups",
  "HealthTech Startups",
  "EdTech Startups",
  "PropTech Startups",
  "D2C Brands",
  "Marketplace Startups",
  "B2B SaaS Companies",
  "Funded Startups"
];

const SERVICES = [
  "Product Strategy",
  "MVP Development",
  "AI Development",
  "Web Engineering",
  "Mobile Development",
  "Cloud & DevOps",
  "UI/UX Design",
  "Product Analytics"
];

const WHY_SPACIVA = [
  "Startup-Focused Product Thinking",
  "MVP in Weeks, Not Months",
  "AI-First Development",
  "Scalable Architecture",
  "Dedicated Product Team",
  "Transparent Development",
  "100% Code Ownership",
  "Long-Term Technology Partner"
];

const KPIS = [
  "Time to MVP",
  "User Growth",
  "Retention",
  "Monthly Recurring Revenue (MRR)",
  "Customer Acquisition Cost (CAC)",
  "Lifetime Value (LTV)",
  "Churn Rate",
  "Conversion Rate"
];

const FAQS = [
  {
    q: "Can you help validate my startup idea?",
    a: "Yes! We focus heavily on Product Discovery before writing code. We help refine user journeys, validate features, and design technical architectures that solve the core problem efficiently."
  },
  {
    q: "How long does it take to build an MVP?",
    a: "Depending on the complexity, a robust MVP typically takes between 6 to 12 weeks to design, develop, and launch. We prioritize speed-to-market so you can test assumptions with real users quickly."
  },
  {
    q: "Can you build AI into my startup?",
    a: "Absolutely. We specialize in AI integrations. Whether you need a simple OpenAI wrapper, an autonomous LangChain agent, or a custom RAG (Retrieval-Augmented Generation) solution, we build AI-first."
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. We understand the value of your intellectual property and always sign Non-Disclosure Agreements before discussing sensitive details."
  },
  {
    q: "Can you become our long-term technology partner?",
    a: "Yes. Most startups we work with retain us for post-launch scaling. We handle ongoing maintenance, server scaling, and continuous feature iterations as you hit product-market fit."
  },
  {
    q: "Can you scale the platform after launch?",
    a: "Our MVPs are built on enterprise-grade cloud architectures (AWS/Azure) with modern stacks (Next.js/Node.js). They are designed to scale gracefully from 100 to 1,000,000+ users."
  },
  {
    q: "Do you offer CTO-as-a-Service?",
    a: "Yes. For founders without a technical co-founder, we provide strategic CTO services, helping with tech stack choices, architectural decisions, and technical roadmapping for investor meetings."
  },
  {
    q: "Do you work with funded and bootstrapped startups?",
    a: "We work with both. We offer flexible engagement models tailored to your funding stage, ensuring you get maximum value for your budget while maintaining a fast development cadence."
  }
];

export default function StartupsClient() {
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
              <Rocket className="w-4 h-4" />
              Startup & SaaS Development
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Build, Launch & Scale Your Startup with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#7C3AED]">Confidence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed">
              Whether you're validating an idea, building an MVP, launching a SaaS platform, or integrating AI into your product, Spaciva partners with founders to transform ambitious ideas into scalable digital businesses.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <AnimatedCtaButton
                href="/contact"
                label="Book a Founder Strategy Call"
                hoverLabel="Let's Talk Business"
              />
              <a href="#solutions" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 border border-slate-200 font-bold text-center hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Validate Your Idea
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Challenges Every Startup Faces</h2>
            <p className="text-lg text-slate-600">Building a startup is a race against time and budget. We help you navigate the technical hurdles so you can focus on growth.</p>
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
                  <challenge.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">{challenge.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">What We Build for Startups</h2>
            <p className="text-lg text-slate-300">From the first line of code to scaling your enterprise features, we provide full-stack product development.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map((sol, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <sol.icon className="w-6 h-6 text-blue-400" />
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
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">AI Features Startups Can Launch Faster</h2>
              <p className="text-lg text-slate-600 mb-8">
                Skip the complex AI research phase. We integrate pre-trained models and powerful LLMs to give your product an immediate competitive edge.
              </p>
              <div className="flex items-center gap-3 text-slate-900 font-bold">
                <CheckCircle2 className="text-[#7C3AED]" /> LLM Integration (OpenAI, Claude)
              </div>
              <div className="flex items-center gap-3 text-slate-900 font-bold mt-4">
                <CheckCircle2 className="text-[#7C3AED]" /> Custom RAG Implementations
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

      {/* Industries & Services */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            
            <div>
              <h2 className="text-3xl font-extrabold mb-8 text-slate-900">Who We Work With</h2>
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

      {/* Development Process (Startup specific!) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-slate-900">Startup Stages We Support</h2>
          
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-stretch sm:items-center gap-3 sm:gap-4 relative">
            {["Idea Stage", "Product Discovery", "MVP Development", "Beta Launch", "Product-Market Fit", "Scaling", "Growth", "Enterprise Expansion"].map((step, idx, arr) => (
              <div key={idx} className="flex items-center w-full sm:w-auto">
                <div className="bg-slate-900 text-white font-bold px-5 sm:px-6 py-3 rounded-full shadow-lg text-sm w-full sm:w-auto text-center sm:whitespace-nowrap">
                  {step}
                </div>
                {idx < arr.length - 1 && (
                  <ArrowRight className="hidden sm:block w-5 h-5 mx-2 text-slate-300 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Spaciva & Tech Stack */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Why Founders Partner With Spaciva</h2>
              <div className="space-y-4">
                {WHY_SPACIVA.map((why, idx) => (
                  <div key={idx} className="flex gap-4 items-center p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="font-bold text-slate-200">{why}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Technology Stack</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Frontend</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["Next.js", "React", "Flutter"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-semibold">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Backend & Database</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-semibold">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">AI & Integration</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["OpenAI", "Claude", "Gemini", "LangChain", "LangGraph", "Stripe", "Razorpay"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-semibold">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Cloud & Analytics</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["AWS", "Azure", "Docker", "Kubernetes", "PostHog", "Google Analytics", "Mixpanel"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-semibold">{t}</span>)}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-2xl font-bold mb-10 text-white/90 uppercase tracking-wider">Startup Metrics We Optimize For</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {KPIS.map((kpi, idx) => (
              <span key={idx} className="px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm font-bold text-white shadow-lg">
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
                  <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0", openFaq === idx && "rotate-180 text-blue-600")} />
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">Your Startup Deserves More Than Just Developers.</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Bring us your idea. We'll help you validate it, build the right product, and scale it with confidence.
          </p>
          <AnimatedCtaButton
            href="/contact"
            label="Build Your Startup With Spaciva"
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
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">MVP Development</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">SaaS Platform Development</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">AI Product Development</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Customer Portal</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Admin Dashboard</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Analytics Platform</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Product Strategy</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">AI & Machine Learning</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Web Engineering</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Mobile Development</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">UI/UX Design</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Industries</h4>
              <ul className="space-y-4">
                <li><a href="/industries/healthcare" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Healthcare</a></li>
                <li><a href="/industries/education" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Education</a></li>
                <li><a href="/industries/real-estate" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Real Estate</a></li>
                <li><a href="/industries/retail-ecommerce" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Retail & E-commerce</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Long Form Content */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 prose prose-lg prose-slate text-slate-600">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Startup Software Development Company for Founders Building the Next Big Product</h2>
          <p className="mb-6 leading-relaxed">
            Building a startup is more than writing code—it's validating ideas, finding product-market fit, shipping quickly, and scaling without accumulating technical debt. Founders need a technology partner who understands product strategy, user experience, software engineering, and long-term growth.
          </p>
          <p className="mb-6 leading-relaxed">
            At Spaciva, we work with startups from the earliest stages of product development. Whether you're building a <strong>minimum viable product (MVP)</strong>, launching a <strong>SaaS platform</strong>, creating an <strong>AI-powered application</strong>, or modernizing an existing product, our team focuses on building technology that supports business outcomes.
          </p>
          <p className="mb-6 leading-relaxed">
            Our startup development services include product discovery, UX/UI design, custom software development, mobile applications, AI integration, cloud architecture, API development, analytics, and continuous product improvement. We emphasize rapid iteration, scalable architecture, and measurable milestones so founders can validate assumptions and adapt to market feedback.
          </p>
          <p className="mb-6 leading-relaxed">
            We support bootstrapped founders, funded startups, and growing SaaS businesses with flexible engagement models that match different stages of growth. Rather than acting as an outsourced vendor, we aim to become a <strong>long-term technology partner</strong> that helps startups launch faster, make informed technical decisions, and scale confidently.
          </p>
          <p className="leading-relaxed">
            Whether your vision is a B2B SaaS platform, an AI-first product, a marketplace, or a mobile application, Spaciva combines engineering expertise with product thinking to help you build software that is ready for real users and long-term success.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
