"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShoppingBag, Search, Store, Brain, Shield, Cloud, Smartphone, Database, Zap, CheckCircle2, ChevronRight, BarChart, Settings, Box, RefreshCw, Eye, ShieldCheck, Wrench, Package, FileText, Monitor, Cpu, ChevronDown, List, Layers, LineChart, MessageSquare, Briefcase, Calendar, Users, ShoppingCart, Tag, Heart, CreditCard, Gift, Truck } from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const CHALLENGES = [
  {
    title: "Inventory Visibility",
    desc: "Managing stock across stores and warehouses is difficult without centralized systems.",
    icon: Box
  },
  {
    title: "Omnichannel Experience",
    desc: "Customers expect a seamless shopping experience across web, mobile, marketplaces, and physical stores.",
    icon: Store
  },
  {
    title: "Customer Retention",
    desc: "Acquiring customers is expensive. Keeping them engaged requires personalized experiences.",
    icon: Heart
  },
  {
    title: "Manual Order Processing",
    desc: "Disconnected systems slow fulfillment and increase operational costs.",
    icon: Package
  },
  {
    title: "Pricing & Promotions",
    desc: "Managing discounts, coupons, and campaigns across channels becomes complex.",
    icon: Tag
  },
  {
    title: "Business Insights",
    desc: "Retailers need real-time dashboards to understand sales, inventory, and customer behavior.",
    icon: BarChart
  },
  {
    title: "Customer Support",
    desc: "Providing fast responses across WhatsApp, email, and chat is challenging.",
    icon: MessageSquare
  },
  {
    title: "Scalability",
    desc: "As product catalogs and customer traffic grow, platforms must remain reliable and fast.",
    icon: Cloud
  }
];

const SOLUTIONS = [
  {
    title: "Custom E-commerce Platforms",
    desc: "High-performance online stores with secure checkout, product catalogs, and payment integration.",
    icon: ShoppingCart
  },
  {
    title: "Multi-Vendor Marketplace",
    desc: "Platforms similar to Amazon, Etsy, or Flipkart with vendor management and commission systems.",
    icon: Store
  },
  {
    title: "Retail ERP",
    desc: "Manage inventory, procurement, suppliers, accounting, and business operations from one platform.",
    icon: Database
  },
  {
    title: "POS Software",
    desc: "Modern point-of-sale systems connected with inventory and customer data.",
    icon: CreditCard
  },
  {
    title: "Inventory Management",
    desc: "Real-time stock tracking across warehouses, retail stores, and online channels.",
    icon: Box
  },
  {
    title: "Warehouse Management System",
    desc: "Barcode scanning, fulfillment workflows, warehouse optimization, and shipping management.",
    icon: Truck
  },
  {
    title: "Order Management System",
    desc: "Centralize orders from websites, marketplaces, and physical stores.",
    icon: Package
  },
  {
    title: "Customer Loyalty Platform",
    desc: "Rewards, memberships, referral programs, and personalized customer engagement.",
    icon: Gift
  },
  {
    title: "CRM for Retail",
    desc: "Customer segmentation, purchase history, communication, and marketing automation.",
    icon: Users
  },
  {
    title: "Retail Analytics Dashboard",
    desc: "Live sales reports, inventory insights, revenue forecasting, and customer analytics.",
    icon: LineChart
  }
];

const AI_SOLUTIONS = [
  {
    title: "AI Shopping Assistant",
    desc: "Recommend products, answer customer questions, and guide purchasing decisions."
  },
  {
    title: "AI Product Recommendations",
    desc: "Increase average order value using personalized recommendations."
  },
  {
    title: "AI Customer Support",
    desc: "Automate order tracking, returns, FAQs, and customer service."
  },
  {
    title: "AI Inventory Forecasting",
    desc: "Predict demand and optimize stock levels."
  },
  {
    title: "AI Marketing Automation",
    desc: "Personalized campaigns, abandoned cart recovery, and customer segmentation."
  },
  {
    title: "AI Product Search",
    desc: "Natural language search and intelligent product discovery."
  },
  {
    title: "AI Pricing Optimization",
    desc: "Adjust prices dynamically using demand and sales data."
  },
  {
    title: "AI Sales Analytics",
    desc: "Generate insights into customer behavior and product performance."
  }
];

const INDUSTRIES = [
  "Fashion & Apparel",
  "Grocery & Supermarkets",
  "Electronics",
  "Furniture & Home Decor",
  "Beauty & Cosmetics",
  "Jewelry & Luxury Retail",
  "Food & Beverage",
  "Sports & Fitness",
  "Automotive Parts",
  "Pharmacy & Healthcare Retail",
  "Books & Stationery",
  "Pet Supplies"
];

const SERVICES = [
  "Custom Software Development",
  "AI & Machine Learning",
  "E-commerce Development",
  "Mobile App Development",
  "UI/UX Design",
  "Cloud & DevOps",
  "Data Engineering",
  "API Integration",
  "Payment Gateway Integration"
];

const WHY_SPACIVA = [
  "Omnichannel Commerce Expertise",
  "AI-Driven Shopping Experiences",
  "Scalable Cloud Infrastructure",
  "Secure Payment Integrations",
  "Custom Retail Platforms",
  "Fast Performance & SEO Optimization",
  "100% Code Ownership",
  "Long-Term Product Partnership"
];

const KPIS = [
  "Revenue Growth",
  "Average Order Value (AOV)",
  "Customer Lifetime Value (CLV)",
  "Conversion Rate",
  "Cart Abandonment Rate",
  "Inventory Turnover",
  "Order Fulfillment Time",
  "Customer Retention"
];

const FAQS = [
  {
    q: "Can you build custom e-commerce platforms?",
    a: "Yes, we develop highly scalable, custom e-commerce platforms that integrate seamlessly with your operations, offering far more flexibility than off-the-shelf templates."
  },
  {
    q: "Do you develop multi-vendor marketplaces?",
    a: "Yes. We build robust multi-vendor platforms (similar to Amazon or Etsy) featuring vendor dashboards, automated payouts, commission structures, and review systems."
  },
  {
    q: "Can you integrate Shopify or WooCommerce?",
    a: "Absolutely. Whether you need a headless commerce setup, custom app development, or third-party integrations, we work extensively with modern commerce platforms like Shopify and WooCommerce."
  },
  {
    q: "Can AI improve customer shopping experiences?",
    a: "Yes, AI can drastically improve sales by providing personalized product recommendations, intelligent search algorithms, and 24/7 AI shopping assistants."
  },
  {
    q: "Do you build inventory and warehouse management systems?",
    a: "Yes, we build centralized inventory management systems that sync stock levels in real-time across your warehouses, physical stores, and online channels."
  },
  {
    q: "Can you integrate payment gateways and shipping providers?",
    a: "Yes, we integrate local and international payment gateways (Stripe, Razorpay, Cashfree, PayPal) along with major shipping and logistics APIs for real-time tracking."
  },
  {
    q: "Do you develop retail mobile applications?",
    a: "Yes, we design and build native or cross-platform (Flutter/React Native) mobile shopping applications with high conversion rates and push notification capabilities."
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes, we provide continuous optimization, server scaling for high-traffic events (like Black Friday), and long-term maintenance to ensure your platform performs flawlessly."
  }
];

export default function RetailEcommerceClient() {
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
              <ShoppingBag className="w-4 h-4" />
              Retail & E-commerce Technology
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Build Smarter Retail & E-commerce Experiences That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#7C3AED]">Drive Sales</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed">
              From online stores and retail chains to marketplaces and omnichannel commerce platforms, Spaciva develops scalable software, AI-powered shopping experiences, inventory systems, and digital solutions that help businesses grow faster and sell smarter.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <AnimatedCtaButton
                href="/contact"
                label="Book a Retail Consultation"
                hoverLabel="Let's Talk Business"
              />
              <a href="#solutions" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 border border-slate-200 font-bold text-center hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Explore Retail Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Digital Challenges Retail Businesses Face</h2>
            <p className="text-lg text-slate-600">The shift to digital commerce requires modern solutions to overcome disconnected systems and rising customer expectations.</p>
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
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Digital Commerce Solutions We Build</h2>
            <p className="text-lg text-slate-300">We develop end-to-end retail ecosystems that bridge the gap between online sales and physical store operations.</p>
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

      {/* AI Solutions for Retail */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[260px] h-[260px] md:w-[500px] md:h-[500px] bg-[#7C3AED]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold mb-6">
                <Brain className="w-4 h-4" />
                Artificial Intelligence
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">AI-Powered Commerce Experiences</h2>
              <p className="text-lg text-slate-600 mb-8">
                Harness AI to provide hyper-personalized shopping experiences, predict inventory needs, and automatically support your customers 24/7.
              </p>
              <div className="flex items-center gap-3 text-slate-900 font-bold">
                <CheckCircle2 className="text-[#7C3AED]" /> Personalized Recommendations
              </div>
              <div className="flex items-center gap-3 text-slate-900 font-bold mt-4">
                <CheckCircle2 className="text-[#7C3AED]" /> Dynamic Pricing Models
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
              <h2 className="text-3xl font-extrabold mb-8 text-slate-900">Industries We Serve</h2>
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
            {["Retail Discovery", "Business Workflow Analysis", "Commerce Architecture", "UI/UX Design", "Development", "Testing", "Launch", "Continuous Optimization"].map((step, idx, arr) => (
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
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Why Retail Businesses Partner With Spaciva</h2>
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
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Commerce & Payments</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["Shopify", "WooCommerce", "Medusa.js", "Commerce Layer", "Stripe", "Razorpay", "PayPal", "Cashfree"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-semibold">{t}</span>)}
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
      <section className="py-16 md:py-24 bg-blue-600 text-white">
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
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">Ready to Transform Your Retail Business?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Whether you're launching a new online store, modernizing your retail operations, or building an AI-powered commerce platform, Spaciva helps you create digital experiences that increase sales and improve customer satisfaction.
          </p>
          <AnimatedCtaButton
            href="/contact"
            label="Start Your Retail Project"
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
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">AI Shopping Assistant</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Inventory Management System</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Retail ERP</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Customer Loyalty Platform</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">CRM Solutions</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Analytics Dashboard</a></li>
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
                <li><a href="/industries/logistics" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Logistics & Supply Chain</a></li>
                <li><a href="/industries/manufacturing" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Manufacturing</a></li>
                <li><a href="/industries/finance" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Finance & FinTech</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Long Form Content */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 prose prose-lg prose-slate text-slate-600">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Retail & E-commerce Software Development Services</h2>
          <p className="mb-6 leading-relaxed">
            The retail and e-commerce industry is evolving rapidly as businesses adopt digital technologies to deliver seamless shopping experiences across online and offline channels. Customers expect fast websites, personalized recommendations, secure payments, real-time order tracking, and responsive customer support. To stay competitive, retailers need technology that connects inventory, sales, logistics, and customer engagement into one unified ecosystem.
          </p>
          <p className="mb-6 leading-relaxed">
            Spaciva develops custom <strong>retail and e-commerce software</strong> designed around your business model rather than forcing you into rigid platforms. Our expertise includes <strong>e-commerce websites</strong>, <strong>omnichannel commerce platforms</strong>, <strong>retail ERP systems</strong>, <strong>inventory management software</strong>, <strong>warehouse management systems</strong>, <strong>AI-powered shopping assistants</strong>, customer loyalty platforms, and analytics dashboards.
          </p>
          <p className="mb-6 leading-relaxed">
            We help retailers automate operations, improve inventory accuracy, personalize customer experiences, and make better decisions using real-time business intelligence. Our solutions integrate with payment gateways, logistics providers, marketplaces, POS systems, CRM platforms, and marketing tools to create a connected digital commerce ecosystem.
          </p>
          <p className="leading-relaxed">
            Whether you're launching a new D2C brand, scaling a multi-store retail chain, building a B2B commerce platform, or modernizing legacy retail software, Spaciva delivers scalable, secure, and future-ready technology that supports sustainable growth.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
