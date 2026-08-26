"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Brain, Cloud, Database, Zap, CheckCircle2, ChevronRight, BarChart, Landmark, Users, FileText, MonitorSmartphone, ShieldAlert, Building2, Map, ShieldCheck, ChevronDown, MessageSquare, Briefcase, FileSearch, Scale } from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const CHALLENGES = [
  {
    title: "Manual Processes",
    desc: "Paper-based approvals and manual workflows slow public service delivery.",
    icon: FileText
  },
  {
    title: "Citizen Accessibility",
    desc: "Citizens expect fast, digital access to government services from any device.",
    icon: MonitorSmartphone
  },
  {
    title: "Department Collaboration",
    desc: "Disconnected systems reduce operational efficiency across departments.",
    icon: Users
  },
  {
    title: "Document Management",
    desc: "Managing permits, licenses, certificates, and records manually increases delays.",
    icon: FileSearch
  },
  {
    title: "Data Visibility",
    desc: "Decision-makers require centralized dashboards for public programs and infrastructure.",
    icon: BarChart
  },
  {
    title: "Legacy Systems",
    desc: "Older applications are difficult to scale, maintain, and integrate.",
    icon: Database
  },
  {
    title: "Security",
    desc: "Government platforms require secure access, role-based permissions, and reliable infrastructure.",
    icon: ShieldAlert
  },
  {
    title: "Transparency",
    desc: "Digital systems improve accountability, reporting, and citizen trust.",
    icon: Scale
  }
];

const SOLUTIONS = [
  {
    title: "eGovernance Platform",
    desc: "Online public services, applications, approvals, citizen communication, and administration.",
    icon: Landmark
  },
  {
    title: "Citizen Service Portal",
    desc: "Applications, payments, certificates, complaints, appointments, and service requests.",
    icon: Users
  },
  {
    title: "Document Management System",
    desc: "Digital storage, approvals, workflow automation, version control, and secure access.",
    icon: FileText
  },
  {
    title: "Permit & License Management",
    desc: "Building permits, business licenses, environmental approvals, inspections, and renewals.",
    icon: ShieldCheck
  },
  {
    title: "Smart City Dashboard",
    desc: "Real-time monitoring of infrastructure, utilities, transportation, and public services.",
    icon: Map
  },
  {
    title: "Public Grievance Management",
    desc: "Complaint registration, tracking, escalation, notifications, and resolution.",
    icon: MessageSquare
  },
  {
    title: "Government Workflow Automation",
    desc: "Automate approvals, internal processes, document routing, and departmental collaboration.",
    icon: Zap
  },
  {
    title: "Asset Management Platform",
    desc: "Manage government assets, vehicles, public infrastructure, maintenance, and lifecycle tracking.",
    icon: Building2
  },
  {
    title: "Public Procurement System",
    desc: "Vendor registration, tender publishing, bid evaluation, contract management, and reporting.",
    icon: Briefcase
  },
  {
    title: "Executive Governance Dashboard",
    desc: "KPIs, department performance, project monitoring, financial reporting, and public analytics.",
    icon: BarChart
  }
];

const AI_SOLUTIONS = [
  {
    title: "AI Citizen Assistant",
    desc: "Answer citizen questions, guide service applications, and provide 24/7 support."
  },
  {
    title: "AI Document Intelligence",
    desc: "Extract information from applications, forms, permits, and government records."
  },
  {
    title: "AI Knowledge Assistant",
    desc: "Help employees access policies, regulations, SOPs, and internal documentation."
  },
  {
    title: "AI Workflow Automation",
    desc: "Reduce manual approvals and repetitive administrative tasks."
  },
  {
    title: "AI Analytics",
    desc: "Identify service trends, resource utilization, and operational bottlenecks."
  },
  {
    title: "AI Report Generation",
    desc: "Generate summaries, reports, and dashboards for public administration."
  },
  {
    title: "AI Translation Assistant",
    desc: "Support multilingual communication for citizen services."
  },
  {
    title: "AI Fraud Detection",
    desc: "Identify anomalies in applications, transactions, or public records."
  }
];

const INDUSTRIES = [
  "Government Departments",
  "Municipal Corporations",
  "Smart City Projects",
  "Urban Development Authorities",
  "Public Utilities",
  "Transportation Authorities",
  "Educational Boards",
  "Healthcare Authorities",
  "Public Infrastructure Agencies",
  "Digital Governance Initiatives",
  "Regulatory Bodies",
  "Public Sector Enterprises (PSUs)"
];

const SERVICES = [
  "Custom Software Development",
  "AI & Machine Learning",
  "Web Engineering",
  "Mobile Development",
  "Cloud & DevOps",
  "Data Engineering",
  "UI/UX Design",
  "API Integration"
];

const WHY_SPACIVA = [
  "Citizen-Centric Digital Experiences",
  "Secure Enterprise Architecture",
  "AI-Powered Process Automation",
  "Scalable Cloud Infrastructure",
  "Workflow-Driven Development",
  "Accessible & Responsive Platforms",
  "100% Custom Development",
  "Long-Term Technology Partnership"
];

const KPIS = [
  "Citizen Satisfaction",
  "Digital Service Adoption",
  "Processing Time",
  "Case Resolution Time",
  "Department Productivity",
  "Application Turnaround",
  "Workflow Automation",
  "Service Availability"
];

const FAQS = [
  {
    q: "Can you build custom eGovernance platforms?",
    a: "Yes, we build scalable eGovernance platforms designed to digitize public services, automate departmental workflows, and improve interaction between citizens and government bodies."
  },
  {
    q: "Can you modernize legacy government software?",
    a: "Yes, we help public sector organizations securely migrate from legacy systems to modern, cloud-based architectures while ensuring data integrity and minimal downtime."
  },
  {
    q: "Do you develop citizen service portals?",
    a: "Absolutely. We build accessible, mobile-friendly citizen portals for applying for permits, paying taxes, registering complaints, and accessing digital certificates."
  },
  {
    q: "Can AI automate government workflows?",
    a: "Yes, AI can significantly reduce administrative overhead by intelligently routing documents, extracting data from applications, and automating repetitive approval steps."
  },
  {
    q: "Can your software integrate with existing government systems?",
    a: "Yes, we implement secure API integrations to connect our custom platforms with existing national databases, payment gateways, and third-party utility services."
  },
  {
    q: "Do you build secure document management systems?",
    a: "Yes, we develop secure DMS platforms with strict role-based access control, version history, and automated archival to safely manage sensitive public records."
  },
  {
    q: "Can you develop multilingual government applications?",
    a: "Definitely. We design citizen applications that support multiple languages to ensure accessibility for diverse public demographics."
  },
  {
    q: "Do you provide long-term maintenance and support?",
    a: "Yes, we offer long-term technical partnerships providing continuous monitoring, security updates, and scalability management for government platforms."
  }
];

export default function GovernmentClient() {
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
              Government & Public Sector Technology
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Secure Digital Platforms for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#7C3AED]">Modern Public</span> Services
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed">
              Spaciva develops secure, scalable, and citizen-focused software that helps government departments, municipalities, public sector organizations, and smart city initiatives digitize services, automate operations, and improve citizen engagement.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <AnimatedCtaButton
                href="/contact"
                label="Book a Government Consultation"
                hoverLabel="Let's Talk Business"
              />
              <a href="#solutions" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 border border-slate-200 font-bold text-center hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Explore Government Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Public Sector Challenges We Help Solve</h2>
            <p className="text-lg text-slate-600">Modern governance requires secure digital infrastructure to remove bottlenecks, ensure transparency, and serve citizens efficiently.</p>
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
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Digital Government Solutions We Build</h2>
            <p className="text-lg text-slate-300">We engineer secure platforms that modernize public administration, digitize workflows, and elevate citizen experiences.</p>
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
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">AI-Powered Public Sector Solutions</h2>
              <p className="text-lg text-slate-600 mb-8">
                Utilize AI to assist citizens 24/7, automate document processing, and extract valuable insights from public data.
              </p>
              <div className="flex items-center gap-3 text-slate-900 font-bold">
                <CheckCircle2 className="text-[#7C3AED]" /> Intelligent Citizen Assistance
              </div>
              <div className="flex items-center gap-3 text-slate-900 font-bold mt-4">
                <CheckCircle2 className="text-[#7C3AED]" /> Automated Administrative Workflows
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
              <h2 className="text-3xl font-extrabold mb-8 text-slate-900">Organizations We Serve</h2>
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

      {/* Development Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-slate-900">Development Process</h2>
          
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-stretch sm:items-center gap-3 sm:gap-4 relative">
            {["Discovery & Requirements", "Process Mapping", "Solution Architecture", "UI/UX Design", "Development", "Testing & Security Review", "Deployment", "Training", "Ongoing Support"].map((step, idx, arr) => (
              <div key={idx} className="flex items-center w-full sm:w-auto">
                <div className="bg-[#0F172A] text-white font-bold px-5 sm:px-6 py-3 rounded-full shadow-lg text-sm w-full sm:w-auto text-center sm:whitespace-nowrap">
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
      <section className="py-16 md:py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Why Public Sector Organizations Choose Spaciva</h2>
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
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Technology Stack</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Frontend</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["Next.js", "React", "Flutter"].map(t => <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white/80">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Backend & Database</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["Node.js", "Python", "Go", ".NET", "PostgreSQL", "MongoDB", "Redis"].map(t => <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white/80">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">AI & Integration</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["OpenAI", "Claude", "LangChain", "Payment Gateways", "SMS Gateways", "GIS & Mapping APIs"].map(t => <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white/80">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Cloud & Security</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["AWS", "Azure", "Docker", "Kubernetes"].map(t => <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white/80">{t}</span>)}
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
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-white">Key Operational Metrics</h2>
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
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">Ready to Digitize Public Services?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Whether you're building an eGovernance platform, a citizen service portal, or a smart city application, Spaciva develops secure and scalable software that improves public service delivery and operational efficiency.
          </p>
          <AnimatedCtaButton
            href="/contact"
            label="Build Your Digital Government Platform"
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
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">eGovernance Platform</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Citizen Service Portal</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Document Management System</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Workflow Automation</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Executive Dashboard</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Public Grievance Management</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Custom Software Development</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">AI & Machine Learning</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Cloud & DevOps</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Mobile Development</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Data Engineering</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Industries</h4>
              <ul className="space-y-4">
                <li><a href="/industries/healthcare" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Healthcare</a></li>
                <li><a href="/industries/education" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Education</a></li>
                <li><a href="/industries/energy-utilities" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Energy & Utilities</a></li>
                <li><a href="/industries/construction" className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">Construction</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Long Form Content */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 prose prose-lg prose-slate text-slate-600">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Government Software Development & eGovernance Solutions</h2>
          <p className="mb-6 leading-relaxed">
            Governments and public sector organizations are increasingly investing in digital transformation to improve citizen services, streamline administrative operations, and increase transparency. Modern government software enables departments to replace paper-based processes with secure digital platforms that provide faster service delivery and better operational visibility.
          </p>
          <p className="mb-6 leading-relaxed">
            Spaciva develops custom software for government departments, municipalities, public authorities, smart city initiatives, and public sector organizations. Our solutions include <strong>eGovernance platforms</strong>, <strong>citizen service portals</strong>, document management systems, permit and license management software, workflow automation, public grievance platforms, executive dashboards, and AI-powered assistants.
          </p>
          <p className="mb-6 leading-relaxed">
            Our platforms help organizations digitize applications, automate approvals, manage documents, monitor infrastructure, improve communication with citizens, and analyze operational performance through real-time dashboards. By combining cloud infrastructure, AI, analytics, and modern user experiences, we enable public sector organizations to improve efficiency while delivering accessible digital services.
          </p>
          <p className="leading-relaxed">
            Whether you're launching a citizen portal, modernizing internal administrative systems, or implementing AI-driven automation, Spaciva delivers secure, scalable, and future-ready technology tailored to the needs of public sector organizations.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
