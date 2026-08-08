"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Brain, Cloud, Database, Zap, CheckCircle2, ChevronRight, BarChart, Hotel, Utensils, Calendar, Users, Map, Star, Smartphone, CreditCard, Building, Building2, Coffee, MessageSquare, ChevronDown } from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const CHALLENGES = [
  {
    title: "Reservation Management",
    desc: "Managing bookings across websites, OTAs, and direct channels becomes increasingly complex.",
    icon: Calendar
  },
  {
    title: "Guest Experience",
    desc: "Modern guests expect seamless digital experiences before, during, and after their stay.",
    icon: Star
  },
  {
    title: "Staff Coordination",
    desc: "Manual scheduling and communication reduce operational efficiency.",
    icon: Users
  },
  {
    title: "Revenue Management",
    desc: "Without centralized data, pricing and occupancy optimization become difficult.",
    icon: BarChart
  },
  {
    title: "Restaurant Operations",
    desc: "Managing tables, orders, inventory, and kitchen workflows manually creates inefficiencies.",
    icon: Utensils
  },
  {
    title: "Multi-Property Management",
    desc: "Hotels and resorts require centralized visibility across multiple locations.",
    icon: Building2
  },
  {
    title: "Customer Retention",
    desc: "Loyalty programs and personalized guest communication are difficult without integrated platforms.",
    icon: MessageSquare
  },
  {
    title: "Business Insights",
    desc: "Managers need real-time visibility into occupancy, revenue, customer satisfaction, and operations.",
    icon: Cloud
  }
];

const SOLUTIONS = [
  {
    title: "Hotel Management System (HMS)",
    desc: "Reservations, housekeeping, billing, front desk, guest profiles, and reporting.",
    icon: Hotel
  },
  {
    title: "Property Management System (PMS)",
    desc: "Manage rooms, rates, bookings, maintenance, and multi-property operations.",
    icon: Building
  },
  {
    title: "Online Booking Engine",
    desc: "Direct reservations with secure payments, availability calendars, and dynamic pricing.",
    icon: Calendar
  },
  {
    title: "Restaurant Management System",
    desc: "Table reservations, kitchen management, POS, online ordering, inventory, and billing.",
    icon: Utensils
  },
  {
    title: "Resort Management Platform",
    desc: "Guest services, activities, bookings, spa management, memberships, and billing.",
    icon: Coffee
  },
  {
    title: "Travel Booking Platform",
    desc: "Flights, hotels, tour packages, itineraries, payments, and customer portals.",
    icon: Map
  },
  {
    title: "Hospitality CRM",
    desc: "Guest profiles, loyalty programs, personalized marketing, and communication.",
    icon: Users
  },
  {
    title: "Event & Banquet Management",
    desc: "Venue booking, event planning, catering management, invoices, and schedules.",
    icon: Calendar
  },
  {
    title: "Hospitality Analytics Dashboard",
    desc: "Occupancy, RevPAR, ADR, guest satisfaction, revenue, and operational insights.",
    icon: BarChart
  },
  {
    title: "Guest Mobile App",
    desc: "Check-in, digital keys, room service, concierge, notifications, and loyalty rewards.",
    icon: Smartphone
  }
];

const AI_SOLUTIONS = [
  {
    title: "AI Concierge",
    desc: "Answer guest questions, recommend local attractions, and provide 24/7 assistance."
  },
  {
    title: "AI Booking Assistant",
    desc: "Help guests find rooms, make reservations, and answer pricing questions."
  },
  {
    title: "AI Revenue Optimization",
    desc: "Forecast occupancy and recommend dynamic pricing strategies."
  },
  {
    title: "AI Guest Personalization",
    desc: "Recommend offers, upgrades, and experiences based on guest preferences."
  },
  {
    title: "AI Restaurant Ordering Assistant",
    desc: "Automate reservations, menu recommendations, and food ordering."
  },
  {
    title: "AI Review Analysis",
    desc: "Analyze customer feedback from Google, TripAdvisor, and OTA platforms."
  },
  {
    title: "AI Customer Support",
    desc: "Handle booking changes, cancellations, FAQs, and guest inquiries."
  },
  {
    title: "Hospitality Analytics",
    desc: "Generate insights into occupancy, revenue, customer satisfaction, and operational performance."
  }
];

const INDUSTRIES = [
  "Hotels",
  "Resorts",
  "Restaurants",
  "Cafés",
  "Vacation Rentals",
  "Travel Agencies",
  "Tour Operators",
  "Event Venues",
  "Banquet Halls",
  "Co-living Spaces",
  "Hostels",
  "Hospitality Startups"
];

const SERVICES = [
  "AI & Machine Learning",
  "Custom Software Development",
  "Web Engineering",
  "Mobile App Development",
  "Cloud & DevOps",
  "UI/UX Design",
  "API Integration",
  "Payment Gateway Integration"
];

const WHY_SPACIVA = [
  "AI-Driven Guest Experiences",
  "Seamless Booking Platforms",
  "Scalable Multi-Property Systems",
  "Cloud-Based Infrastructure",
  "Modern Mobile Experiences",
  "Secure Payment Integrations",
  "100% Code Ownership",
  "Long-Term Product Partnership"
];

const KPIS = [
  "Occupancy Rate",
  "Revenue Per Available Room (RevPAR)",
  "Average Daily Rate (ADR)",
  "Guest Satisfaction Score",
  "Booking Conversion Rate",
  "Restaurant Table Turnover",
  "Customer Retention",
  "Online Review Ratings"
];

const FAQS = [
  {
    q: "Can you build a custom hotel management system?",
    a: "Yes, we develop scalable hotel management systems (HMS) tailored to your workflows, including front desk operations, housekeeping, and billing."
  },
  {
    q: "Do you develop online booking platforms?",
    a: "Absolutely. We build responsive and secure online booking engines with dynamic pricing, availability calendars, and direct payment integrations."
  },
  {
    q: "Can AI improve guest experiences?",
    a: "Yes, AI can power virtual concierges, personalize room upgrades and offers, and automate routine inquiries 24/7 to elevate guest satisfaction."
  },
  {
    q: "Do you integrate payment gateways and booking engines?",
    a: "Yes, we integrate seamlessly with global payment providers like Stripe and Razorpay, as well as OTA and channel manager APIs."
  },
  {
    q: "Can you build restaurant management software?",
    a: "Yes, we create comprehensive restaurant platforms encompassing table reservations, POS, kitchen management, inventory, and online ordering."
  },
  {
    q: "Do you develop hospitality mobile applications?",
    a: "Yes, we build guest-facing mobile apps for seamless digital check-in, room service requests, loyalty tracking, and direct communication."
  },
  {
    q: "Can existing hotel software be modernized?",
    a: "Yes, we assist hospitality businesses in migrating from legacy on-premise solutions to modern, cloud-based architectures with enhanced UX."
  },
  {
    q: "Do you provide long-term maintenance and support?",
    a: "Yes, we provide ongoing technical support, proactive monitoring, and feature updates to ensure your hospitality systems run flawlessly 24/7."
  }
];

export default function HospitalityClient() {
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
              <Hotel className="w-4 h-4" />
              Hospitality & Travel Technology
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Create Exceptional Guest Experiences with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#7C3AED]">Intelligent Hospitality</span> Software
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed">
              From hotels and restaurants to resorts and travel businesses, Spaciva develops AI-powered hospitality software that streamlines operations, enhances guest experiences, automates bookings, and supports long-term business growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <AnimatedCtaButton
                href="/contact"
                label="Book a Hospitality Consultation"
                hoverLabel="Let's Talk Business"
              />
              <a href="#solutions" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 border border-slate-200 font-bold text-center hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Explore Hospitality Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Hospitality Challenges We Help Solve</h2>
            <p className="text-lg text-slate-600">The modern hospitality industry requires connected digital platforms to overcome operational friction and exceed guest expectations.</p>
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
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Hospitality Platforms We Build</h2>
            <p className="text-lg text-slate-300">We develop end-to-end digital hospitality ecosystems to streamline operations for hotels, restaurants, and travel businesses.</p>
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
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7C3AED]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold mb-6">
                <Brain className="w-4 h-4" />
                Artificial Intelligence
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">AI-Powered Guest Experiences</h2>
              <p className="text-lg text-slate-600 mb-8">
                Harness AI to automatically assist guests, personalize offers, and optimize pricing 24/7.
              </p>
              <div className="flex items-center gap-3 text-slate-900 font-bold">
                <CheckCircle2 className="text-[#7C3AED]" /> 24/7 Virtual Concierge
              </div>
              <div className="flex items-center gap-3 text-slate-900 font-bold mt-4">
                <CheckCircle2 className="text-[#7C3AED]" /> Dynamic Revenue Optimization
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

      {/* Development Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-slate-900">Development Process</h2>
          
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-stretch sm:items-center gap-3 sm:gap-4 relative">
            {["Business Discovery", "Guest Journey Analysis", "Solution Architecture", "UX/UI Design", "Development", "Testing", "Deployment", "Training", "Continuous Support"].map((step, idx, arr) => (
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
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Why Hospitality Businesses Choose Spaciva</h2>
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
                    {["OpenAI", "Claude", "Stripe", "Razorpay", "Booking APIs", "Google Maps", "WhatsApp Business"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-semibold">{t}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Cloud</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["AWS", "Azure", "Docker", "Kubernetes"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-semibold">{t}</span>)}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-2xl font-bold mb-10 text-white/90 uppercase tracking-wider">Key Business Metrics We Optimize</h2>
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
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">Ready to Modernize Your Hospitality Business?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Whether you're launching a boutique hotel, scaling a restaurant chain, or building a next-generation travel platform, Spaciva develops technology that creates memorable guest experiences and drives operational excellence.
          </p>
          <AnimatedCtaButton
            href="/contact"
            label="Build Your Hospitality Platform"
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
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Hotel Management System</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Property Management System</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Online Booking Platform</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Restaurant Management System</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">AI Concierge</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Hospitality CRM</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">AI & Machine Learning</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Web Engineering</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Mobile Development</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Custom Software</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Cloud & DevOps</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Related Industries</h4>
              <ul className="space-y-4">
                <li><a href="/industries/retail-ecommerce" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Retail & E-commerce</a></li>
                <li><a href="/industries/real-estate" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Real Estate</a></li>
                <li><a href="/industries/logistics" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Logistics</a></li>
                <li><a href="/industries/healthcare" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Healthcare</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Long Form Content */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 prose prose-lg prose-slate text-slate-600">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Hospitality Software Development & AI-Powered Guest Experience Solutions</h2>
          <p className="mb-6 leading-relaxed">
            The hospitality industry is becoming increasingly digital as guests expect fast bookings, personalized experiences, contactless services, and seamless communication across every touchpoint. Hotels, restaurants, resorts, and travel companies need modern technology to improve operations, enhance guest satisfaction, and stay competitive in a rapidly evolving market.
          </p>
          <p className="mb-6 leading-relaxed">
            Spaciva develops custom <strong>hospitality software</strong> designed for hotels, restaurants, resorts, travel agencies, vacation rental businesses, and hospitality startups. Our expertise includes <strong>hotel management systems (HMS)</strong>, <strong>property management systems (PMS)</strong>, <strong>online booking platforms</strong>, <strong>restaurant management software</strong>, guest mobile applications, <strong>hospitality CRM solutions</strong>, and <strong>AI-powered concierge systems</strong>.
          </p>
          <p className="mb-6 leading-relaxed">
            Our platforms help hospitality businesses automate reservations, streamline front-desk operations, optimize room inventory, manage restaurant workflows, process secure payments, and deliver personalized guest experiences. Through AI, cloud infrastructure, analytics, and mobile technology, we enable hospitality businesses to improve occupancy rates, increase operational efficiency, and strengthen customer loyalty.
          </p>
          <p className="leading-relaxed">
            Whether you're modernizing an existing hotel management system, launching a travel booking platform, or building a complete hospitality ecosystem, Spaciva delivers scalable, secure, and future-ready software tailored to your business goals.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
