"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Shield, Cloud, Smartphone, Database, HeartPulse, Brain, Zap, CheckCircle2, ChevronRight, MessageSquare, Microscope, Calendar, Clock, Lock, FileText, Pill, Users, Stethoscope, Video, LineChart, ChevronDown, Monitor, Cpu } from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const CHALLENGES = [
  {
    title: "Patient Data Fragmentation",
    desc: "Disconnected systems lead to inefficient care and missing clinical context.",
    icon: Database
  },
  {
    title: "Manual Administrative Work",
    desc: "Staff spend hours on repetitive tasks instead of patient care.",
    icon: Clock
  },
  {
    title: "Appointment Management",
    desc: "High no-show rates and scheduling conflicts reduce operational efficiency.",
    icon: Calendar
  },
  {
    title: "Legacy Systems",
    desc: "Old software slows innovation and poses security risks.",
    icon: Monitor
  },
  {
    title: "Patient Engagement",
    desc: "Modern patients expect digital experiences and instant communication.",
    icon: Smartphone
  },
  {
    title: "Regulatory Compliance",
    desc: "Strict requirements for secure health data handling and HIPAA.",
    icon: Shield
  }
];

const SOLUTIONS = [
  {
    title: "Hospital Management System",
    features: ["Patient registration", "Billing", "Departments", "Doctors", "Inventory", "Reports"],
    icon: Activity
  },
  {
    title: "Patient Portal",
    features: ["Appointments", "Medical history", "Lab reports", "Prescriptions", "Notifications"],
    icon: Users
  },
  {
    title: "Electronic Medical Records (EMR)",
    features: ["Centralized patient records", "Doctor notes", "History", "Lab reports"],
    icon: FileText
  },
  {
    title: "Telemedicine Platform",
    features: ["Video consultation", "Scheduling", "Digital prescriptions", "Payments"],
    icon: Video
  },
  {
    title: "Laboratory Management System",
    features: ["Sample tracking", "Reports", "Billing", "Automation"],
    icon: Microscope
  },
  {
    title: "AI Medical Assistant",
    features: ["Appointment booking", "Patient FAQs", "Document assistance", "Clinical knowledge retrieval"],
    icon: Brain
  },
  {
    title: "Pharmacy Management",
    features: ["Inventory", "Sales", "Medicine reminders"],
    icon: Pill
  },
  {
    title: "Healthcare CRM",
    features: ["Patient communication", "Follow-ups", "Campaigns"],
    icon: HeartPulse
  },
  {
    title: "Medical Billing Platform",
    features: ["Insurance claims", "Invoices", "Payment tracking"],
    icon: Database
  },
  {
    title: "Healthcare Analytics Dashboard",
    features: ["Revenue", "Appointments", "Patient insights", "Operational KPIs"],
    icon: LineChart
  }
];

const AI_SOLUTIONS = [
  "Medical Chatbots",
  "Clinical Knowledge Assistant",
  "AI Documentation",
  "Medical Image Analysis",
  "Appointment AI",
  "Voice AI",
  "Document Processing",
  "Predictive Analytics"
];

const WHY_SPACIVA = [
  "Healthcare-focused Product Thinking",
  "Scalable Cloud Architecture",
  "AI-first Development",
  "Secure Development Practices",
  "Transparent Development",
  "Long-term Technical Partner"
];

const FAQS = [
  {
    q: "Can you build HIPAA-ready healthcare software?",
    a: "Yes, we architect systems with HIPAA compliance in mind, utilizing secure cloud infrastructure, data encryption (at rest and in transit), and strict access controls to protect ePHI."
  },
  {
    q: "Can you modernize our existing hospital software?",
    a: "Absolutely. We specialize in digital transformation, taking legacy systems and upgrading them to modern, cloud-based architectures without disrupting your daily operations."
  },
  {
    q: "Do you integrate with third-party healthcare systems?",
    a: "Yes, we build robust API integrations for EHRs, payment gateways, laboratory systems, and insurance networks to ensure seamless data flow across your organization."
  },
  {
    q: "Can you build telemedicine applications?",
    a: "We develop secure, high-quality video consultation platforms complete with scheduling, digital prescriptions, and integrated billing capabilities."
  },
  {
    q: "Do you develop patient portals?",
    a: "Yes, we create intuitive patient portals that empower patients to manage appointments, view lab results, communicate with doctors, and handle payments."
  },
  {
    q: "Can AI automate healthcare workflows?",
    a: "Definitely. From AI chatbots handling patient FAQs to intelligent document processing and predictive analytics, AI can drastically reduce administrative burdens."
  },
  {
    q: "How long does development take?",
    a: "A typical healthcare application can take anywhere from 3 to 6 months depending on the complexity, integrations required, and regulatory compliance needs."
  },
  {
    q: "Do you provide ongoing maintenance?",
    a: "Yes, we act as your long-term technical partner, providing continuous support, security updates, and feature enhancements after launch."
  }
];

export default function HealthcareClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100 via-white to-white -z-10" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#7C3AED]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-sm font-semibold mb-6">
              <Stethoscope className="w-4 h-4" />
              Healthcare Technology Solutions
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Custom Healthcare Software That Improves <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-blue-600">Patient Care</span> and Operational Efficiency
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl leading-relaxed">
              From hospitals and clinics to healthcare startups and laboratories, Spaciva designs secure, scalable, and AI-powered healthcare software that simplifies operations, enhances patient experiences, and supports long-term digital transformation.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <AnimatedCtaButton
                href="/contact"
                label="Book a Strategy Call"
                hoverLabel="Let's Talk Business"
              />
              <a href="#solutions" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#0F172A] border border-gray-200 font-bold text-center hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                View Healthcare Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By / Features */}
      <section className="py-12 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 font-semibold text-sm md:text-base text-gray-700">
            <div className="flex items-center gap-2"><Shield className="w-5 h-5" /> HIPAA Ready Architecture</div>
            <div className="flex items-center gap-2"><Brain className="w-5 h-5" /> AI-Powered Workflows</div>
            <div className="flex items-center gap-2"><Cloud className="w-5 h-5" /> Scalable Cloud Infrastructure</div>
            <div className="flex items-center gap-2"><Database className="w-5 h-5" /> 100% Custom Development</div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Challenges Healthcare Organizations Face</h2>
            <p className="text-lg text-gray-600">The healthcare industry operates under immense pressure. Outdated software and fragmented data only make it harder to deliver quality care.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHALLENGES.map((challenge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-purple-100 transition-all group"
              >
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#7C3AED] transition-colors">
                  <challenge.icon className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-16 md:py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#7C3AED]/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Our Healthcare Solutions</h2>
            <p className="text-lg text-gray-300">We build comprehensive, tailored platforms to manage every aspect of your healthcare operations.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {SOLUTIONS.map((sol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#7C3AED]/20 rounded-xl flex items-center justify-center shrink-0">
                    <sol.icon className="w-6 h-6 text-[#A78BFA]" />
                  </div>
                  <h3 className="text-2xl font-bold">{sol.title}</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sol.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#A78BFA]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI for Healthcare */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
                <Brain className="w-4 h-4" />
                Next-Gen Automation
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">AI-Powered Healthcare Solutions</h2>
              <p className="text-lg text-gray-600 mb-8">
                Reduce administrative overhead, enhance diagnostic accuracy, and provide 24/7 patient support with our custom AI integrations tailored for the medical industry.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {AI_SOLUTIONS.map((ai, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100 font-semibold text-gray-900 min-w-0">
                    <Zap className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="text-sm leading-snug">{ai}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative w-full h-[280px] sm:h-[400px] lg:h-[500px] bg-gradient-to-br from-purple-100 to-blue-50 rounded-[2rem] sm:rounded-[3rem] border border-gray-100 flex items-center justify-center overflow-hidden">
              <div className="absolute w-[600px] h-[600px] bg-white/40 blur-3xl rounded-full" />
              {/* Abstract AI / Health Graphic */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="relative z-10 w-64 h-64 border-[40px] border-dashed border-blue-500/20 rounded-full flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 bg-gradient-to-tr from-[#7C3AED] to-blue-500 rounded-full blur-md flex items-center justify-center"
                >
                  <Activity className="w-12 h-12 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Used & Why Spaciva */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Services */}
            <div>
              <h2 className="text-3xl font-extrabold mb-8">Services We Provide</h2>
              <div className="flex flex-wrap gap-3">
                {["AI Development", "Web Development", "Mobile Development", "Cloud Architecture", "UI/UX Design", "DevOps", "Data Engineering", "API Integration"].map((srv, idx) => (
                  <div key={idx} className="px-5 py-3 rounded-full bg-white border border-gray-200 shadow-sm font-semibold text-gray-700">
                    {srv}
                  </div>
                ))}
              </div>
            </div>

            {/* Why Spaciva */}
            <div>
              <h2 className="text-3xl font-extrabold mb-8">Why Spaciva</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {WHY_SPACIVA.map((why, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-[#7C3AED] shrink-0" />
                    <span className="font-bold text-gray-900">{why}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Workflow Timeline */}
      <section className="py-16 md:py-24 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16">Our Healthcare Workflow</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-7 gap-6 relative">
            <div className="hidden xl:block absolute top-[24px] left-0 w-full h-1 bg-gray-100 -z-10" />

            {["Discovery", "Compliance Planning", "UX Design", "Development", "Testing", "Deployment", "Support"].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 bg-white px-2">
                <div className="w-12 h-12 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-lg shadow-xl shadow-[#7C3AED]/20 shrink-0">
                  {idx + 1}
                </div>
                <span className="font-bold text-gray-900 text-sm sm:text-base text-center leading-snug">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Tech Stack */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

            <div>
              <h2 className="text-3xl font-extrabold mb-8">Industries Within Healthcare</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Hospitals", "Clinics", "Medical Startups", "Diagnostic Labs", "Pharmacies", "Dental Clinics", "Mental Health", "Veterinary", "HealthTech", "Insurance Providers"].map((ind, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700 font-medium min-w-0">
                    <ChevronRight className="w-4 h-4 text-[#7C3AED] shrink-0" /> {ind}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold mb-8">Technology Stack</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-3 text-sm font-semibold text-gray-900">
                    <span className="px-3 py-1.5 bg-white rounded-lg border border-gray-200">Next.js</span>
                    <span className="px-3 py-1.5 bg-white rounded-lg border border-gray-200">React</span>
                    <span className="px-3 py-1.5 bg-white rounded-lg border border-gray-200">Flutter</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Backend</h4>
                  <div className="flex flex-wrap gap-3 text-sm font-semibold text-gray-900">
                    <span className="px-3 py-1.5 bg-white rounded-lg border border-gray-200">Node.js</span>
                    <span className="px-3 py-1.5 bg-white rounded-lg border border-gray-200">Python</span>
                    <span className="px-3 py-1.5 bg-white rounded-lg border border-gray-200">Go</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">AI</h4>
                  <div className="flex flex-wrap gap-3 text-sm font-semibold text-gray-900">
                    <span className="px-3 py-1.5 bg-white rounded-lg border border-gray-200">OpenAI</span>
                    <span className="px-3 py-1.5 bg-white rounded-lg border border-gray-200">Claude</span>
                    <span className="px-3 py-1.5 bg-white rounded-lg border border-gray-200">Gemini</span>
                    <span className="px-3 py-1.5 bg-white rounded-lg border border-gray-200">LangChain</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Cloud & Database</h4>
                  <div className="flex gap-3 text-sm font-semibold text-gray-900 flex-wrap">
                    <span className="px-3 py-1.5 bg-white rounded-lg border border-gray-200">AWS</span>
                    <span className="px-3 py-1.5 bg-white rounded-lg border border-gray-200">Azure</span>
                    <span className="px-3 py-1.5 bg-white rounded-lg border border-gray-200">Docker</span>
                    <span className="px-3 py-1.5 bg-white rounded-lg border border-gray-200">Postgres</span>
                    <span className="px-3 py-1.5 bg-white rounded-lg border border-gray-200">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-all duration-300",
                  openFaq === idx ? "border-[#7C3AED] bg-purple-50/30" : "border-gray-200 bg-white hover:border-purple-200"
                )}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 font-bold text-gray-900"><span className="min-w-0 text-sm sm:text-base leading-snug">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0", openFaq === idx && "rotate-180 text-[#7C3AED]")} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed">
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
      <section className="py-16 md:py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/20 to-blue-600/20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#7C3AED]/30 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Building the Future of Healthcare Technology Starts Here</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Whether you're launching a healthcare startup, modernizing hospital operations, or exploring AI-powered healthcare solutions, our team can help you design and build the right platform.
          </p>
          <AnimatedCtaButton
            href="/contact"
            label="Book a Healthcare Strategy Call"
            hoverLabel="Let's Talk Business"
            size="lg"
            className="mx-auto"
          />
        </div>
      </section>

      {/* Related Section */}
      <section className="py-16 bg-gray-900 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Related Solutions</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-[#A78BFA] transition-colors">Patient Portal</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#A78BFA] transition-colors">Hospital ERP</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#A78BFA] transition-colors">Medical AI</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#A78BFA] transition-colors">Telemedicine</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Related Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-[#A78BFA] transition-colors">AI Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#A78BFA] transition-colors">Cloud Architecture</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#A78BFA] transition-colors">Mobile App Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#A78BFA] transition-colors">UI/UX Design</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Related Blogs</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-[#A78BFA] transition-colors">Future of AI in Healthcare</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#A78BFA] transition-colors">Digital Transformation in Hospitals</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#A78BFA] transition-colors">Telemedicine Trends</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#A78BFA] transition-colors">How AI Reduces Administrative Work</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Long Form Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 prose prose-lg prose-purple text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Driving Digital Transformation in Healthcare</h2>
          <p className="mb-6">
            The healthcare industry is undergoing a massive shift towards digital transformation. As patient expectations rise and operational complexities increase, providers need robust, secure, and scalable <strong>healthcare software development services</strong> to stay competitive. At Spaciva, we understand that building software for the medical sector requires more than just technical expertise—it demands a deep understanding of patient workflows, data security, and regulatory compliance.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">Custom Healthcare Application Development</h3>
          <p className="mb-6">
            Whether you are a startup building a disruptive health-tech app or an established hospital looking to modernize legacy systems, <strong>custom healthcare application development</strong> is essential. Off-the-shelf solutions often force providers into rigid workflows that don't match their specific clinical processes. By developing tailored <strong>hospital management systems</strong> and <strong>electronic medical records (EMR/EHR)</strong>, we ensure that the software adapts to your doctors and administrative staff, not the other way around.
          </p>
          <p className="mb-6">
            Our expertise spans across critical touchpoints in the patient journey. From intuitive <strong>patient portals</strong> that empower individuals to take control of their health data, to robust <strong>telemedicine applications</strong> that break down geographical barriers to care, we build solutions that prioritize accessibility and security.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">The Role of AI in Healthcare</h3>
          <p className="mb-6">
            <strong>AI in healthcare</strong> is no longer just a futuristic concept; it is actively transforming how care is delivered and managed. <strong>Healthcare workflow automation</strong> using AI can drastically reduce the administrative burden on clinical staff, allowing them to focus more on patient outcomes. From intelligent medical chatbots that handle initial patient triaging to <strong>healthcare analytics</strong> dashboards that predict patient admission rates, AI integration is a core component of modern healthcare infrastructure.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">Secure Infrastructure and Integration</h3>
          <p className="mb-6">
            Building software in this sector means dealing with sensitive ePHI (Electronic Protected Health Information). Utilizing a <strong>secure cloud infrastructure for healthcare</strong> is paramount. We implement strict encryption protocols, audit logging, and role-based access controls to maintain compliance. Furthermore, seamless <strong>healthcare system integration</strong> is necessary to ensure that new <strong>mobile apps for healthcare</strong> or <strong>medical billing software</strong> communicate effectively with your existing EHR systems and third-party APIs.
          </p>
          <p>
            Embracing innovation doesn't have to be overwhelming. Partner with Spaciva to navigate the complexities of medical software engineering and deliver experiences that both providers and patients trust.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
