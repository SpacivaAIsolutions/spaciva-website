"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Brain,
  Bot,
  Paintbrush,
  Code,
  Database,
  Search,
  ShoppingCart,
  Activity,
  Box,
  GraduationCap,
  Truck,
  Megaphone,
  Compass,
  Car,
  Home,
  Utensils,
  Trophy,
  Factory,
  Cpu,
  Cloud,
  Layout,
  Terminal
} from "lucide-react";
import Image from "next/image";

const servicesList = [
  { name: "AI/ML Development", href: "/ai-ml-development", desc: "Predictive analytics, custom neural networks, & computer vision models.", icon: Brain },
  { name: "AI Agent Development", href: "/ai-agent-development", desc: "Autonomous task execution, multi-agent orchestration, & cognitive RAG workflows.", icon: Bot },
  { name: "Web Design", href: "/web-design", desc: "High-converting, bespoke UI/UX layouts & interactive Figma prototypes.", icon: Paintbrush },
  { name: "Web Application Development", href: "/web-development-company-india", desc: "Production-grade, secure, & custom scalable web app solutions.", icon: Code },
  { name: "Custom CRM Software", href: "/custom-crm-development", desc: "Tailored databases & customer management tools to streamline sales pipelines.", icon: Database },
  { name: "SEO Services", href: "/seo-services-india", desc: "Complete organic visibility growth strategy, SEO audits, & custom reporting.", icon: Search },
  { name: "E-Commerce Website", href: "/ecommerce-website-development", desc: "Headless storefronts, single-page custom checkout solutions, & ERP integrations.", icon: ShoppingCart }
];

const industriesList = [
  { name: "Healthcare", href: "/industries/healthcare", icon: Activity },
  { name: "Retail & E-commerce", href: "/industries/retail-ecommerce", icon: ShoppingCart },
  { name: "ISVs & Software Product", href: "/industries/isv-software-product", icon: Box },
  { name: "Education & E-learning", href: "/industries/education-elearning", icon: GraduationCap },
  { name: "Logistics & Transportation", href: "/industries/logistics-transportation", icon: Truck },
  { name: "Digital & Marketing Agencies", href: "/industries/digital-marketing-agencies", icon: Megaphone },
  { name: "Travel and Hospitality", href: "/industries/travel-hospitality", icon: Compass },
  { name: "Automotive", href: "/industries/automotive", icon: Car },
  { name: "Real Estate", href: "/industries/real-estate", icon: Home },
  { name: "Food and Restaurant", href: "/industries/food-restaurant", icon: Utensils },
  { name: "Sports", href: "/industries/sports", icon: Trophy },
  { name: "Manufacturing IT Services", href: "/industries/manufacturing-it-services", icon: Factory }
];

const technologiesCategories = [
  {
    title: "Frontend & UI",
    icon: Layout,
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Flutter", "React Native"]
  },
  {
    title: "Backend & APIs",
    icon: Terminal,
    items: ["Node.js / NestJS", "Python / FastAPI", "Go Lang", "Rust", "GraphQL", "REST APIs"]
  },
  {
    title: "AI & Databases",
    icon: Cpu,
    items: ["OpenAI & Claude", "LangChain / RAG", "PostgreSQL", "MongoDB / Redis", "Pinecone", "TimescaleDB"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["Docker Containers", "Kubernetes", "AWS Cloud", "Vercel / Cloudflare", "CI/CD Pipelines", "Terraform IaC"]
  }
];

const navLinks = [
  { name: "Work", href: "/#portfolio" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSolutionsHovered, setIsSolutionsHovered] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isIndustryHovered, setIsIndustryHovered] = useState(false);
  const [isMobileIndustryOpen, setIsMobileIndustryOpen] = useState(false);
  const [isTechHovered, setIsTechHovered] = useState(false);
  const [isMobileTechOpen, setIsMobileTechOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 md:px-8 flex justify-center transition-all duration-300">
      <div className="w-full max-w-5xl relative">
        <nav
          className="w-full h-[64px] px-5 sm:px-8 flex items-center justify-between rounded-full transition-all duration-300"
          style={{
            background: scrolled ? "rgba(255, 255, 255, 0.75)" : "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: scrolled ? "1px solid rgba(226, 228, 233, 0.8)" : "1px solid rgba(255, 255, 255, 0.4)",
            boxShadow: scrolled ? "0 8px 32px -8px rgba(15, 23, 42, 0.08)" : "0 4px 24px -8px rgba(15, 23, 42, 0.04)",
          }}
        >
          {/* Logo */}
        <a href="/" className="shrink-0 flex items-center group">
          <div className="relative h-9 w-28 sm:h-10 sm:w-32 transition-opacity duration-200 group-hover:opacity-85">
            <Image
              src="/spaciva-nav-light.png"
              alt="SPACIVA"
              fill
              priority
              className="object-contain"
            />
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsSolutionsHovered(true)}
            onMouseLeave={() => setIsSolutionsHovered(false)}
          >
            <button
              className="px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 flex items-center gap-1 cursor-pointer"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.background = "var(--bg-secondary)";
              }}
              onMouseLeave={(e) => {
                if (!isSolutionsHovered) {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              Solutions
              <ChevronDown size={14} className={`transition-transform duration-200 ${isSolutionsHovered ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isSolutionsHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] p-3 rounded-2xl border"
                  style={{
                    background: "#ffffff",
                    borderColor: "rgba(226, 228, 233, 1)",
                    boxShadow: "0 12px 32px -4px rgba(15, 23, 42, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.04)"
                  }}
                >
                  <div className="grid grid-cols-2 gap-1">
                    {servicesList.map((service) => {
                      const Icon = service.icon;
                      return (
                        <a
                          key={service.name}
                          href={service.href}
                          className="flex items-center gap-2.5 p-2 rounded-xl transition-all duration-200 hover:bg-slate-50 group"
                        >
                          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100/50 group-hover:bg-white group-hover:border-slate-200/50 transition-all shrink-0 text-slate-500 group-hover:text-indigo-600">
                            <Icon size={14} />
                          </div>
                          <div className="text-left">
                            <h4 className="text-[12.5px] font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                              {service.name}
                            </h4>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industry Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsIndustryHovered(true)}
            onMouseLeave={() => setIsIndustryHovered(false)}
          >
            <button
              className="px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 flex items-center gap-1 cursor-pointer"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.background = "var(--bg-secondary)";
              }}
              onMouseLeave={(e) => {
                if (!isIndustryHovered) {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              Industry
              <ChevronDown size={14} className={`transition-transform duration-200 ${isIndustryHovered ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isIndustryHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] p-4 rounded-2xl border"
                  style={{
                    background: "#ffffff",
                    borderColor: "rgba(226, 228, 233, 1)",
                    boxShadow: "0 12px 32px -4px rgba(15, 23, 42, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.04)"
                  }}
                >
                  <div className="grid grid-cols-3 gap-1">
                    {industriesList.map((industry) => {
                      const Icon = industry.icon;
                      return (
                        <a
                          key={industry.name}
                          href={industry.href}
                          className="flex items-center gap-2.5 p-2 rounded-xl transition-all duration-200 hover:bg-slate-50 group"
                        >
                          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100/50 group-hover:bg-white group-hover:border-slate-200/50 transition-all shrink-0 text-slate-500 group-hover:text-indigo-600">
                            <Icon size={14} />
                          </div>
                          <div className="text-left">
                            <h4 className="text-[12.5px] font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                              {industry.name}
                            </h4>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Technologies Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsTechHovered(true)}
            onMouseLeave={() => setIsTechHovered(false)}
          >
            <button
              className="px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 flex items-center gap-1 cursor-pointer"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.background = "var(--bg-secondary)";
              }}
              onMouseLeave={(e) => {
                if (!isTechHovered) {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              Technologies
              <ChevronDown size={14} className={`transition-transform duration-200 ${isTechHovered ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isTechHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] p-5 rounded-2xl border"
                  style={{
                    background: "#ffffff",
                    borderColor: "rgba(226, 228, 233, 1)",
                    boxShadow: "0 12px 32px -4px rgba(15, 23, 42, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.04)"
                  }}
                >
                  <div className="grid grid-cols-4 gap-4">
                    {technologiesCategories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <div key={category.title} className="flex flex-col text-left">
                          <div className="flex items-center gap-1.5 pb-2.5 mb-2.5 border-b border-slate-100">
                            <span className="text-indigo-600 shrink-0"><Icon size={14} /></span>
                            <h4 className="text-[12px] font-bold text-slate-800 tracking-wide uppercase">
                              {category.title}
                            </h4>
                          </div>
                          <ul className="flex flex-col gap-1.5">
                            {category.items.map((tech) => (
                              <li
                                key={tech}
                                className="text-[11.5px] font-medium text-slate-500 hover:text-indigo-600 transition-colors duration-150 py-0.5 cursor-default"
                              >
                                {tech}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.background = "var(--bg-secondary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="/contact"
            className="text-[13px] font-semibold px-5 py-2.5 rounded-lg text-white transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
            style={{ background: "var(--bg-navy)", boxShadow: "var(--shadow-sm)" }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-md)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-sm)")}
          >
            Get Started
          </a>
        </div>

        {/* Mobile trigger */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-lg transition-colors cursor-pointer"
            style={{ color: "var(--text-secondary)" }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        </nav>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[76px] left-0 right-0 md:hidden rounded-2xl overflow-hidden shadow-lg border"
              style={{
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                borderColor: "rgba(226, 228, 233, 0.8)",
                boxShadow: "0 12px 40px -8px rgba(15, 23, 42, 0.08)",
              }}
            >
              <div className="px-5 py-5 flex flex-col gap-1">
                {/* Mobile Solutions Accordion */}
                <div>
                  <button
                    onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                    className="w-full text-left text-sm font-medium px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span>Solutions</span>
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isMobileSolutionsOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileSolutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4 pr-2 flex flex-col gap-1.5"
                      >
                        {servicesList.map((service) => {
                          const Icon = service.icon;
                          return (
                            <a
                              key={service.name}
                              href={service.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
                            >
                              <span className="text-slate-500 shrink-0"><Icon size={14} /></span>
                              <span className="text-[12.5px] font-medium text-slate-700">{service.name}</span>
                            </a>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Industry Accordion */}
                <div>
                  <button
                    onClick={() => setIsMobileIndustryOpen(!isMobileIndustryOpen)}
                    className="w-full text-left text-sm font-medium px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span>Industry</span>
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isMobileIndustryOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileIndustryOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4 pr-2 flex flex-col gap-1.5"
                      >
                        {industriesList.map((industry) => {
                          const Icon = industry.icon;
                          return (
                            <a
                              key={industry.name}
                              href={industry.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
                            >
                              <span className="text-slate-500 shrink-0"><Icon size={14} /></span>
                              <span className="text-[12.5px] font-medium text-slate-700">{industry.name}</span>
                            </a>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Technologies Accordion */}
                <div>
                  <button
                    onClick={() => setIsMobileTechOpen(!isMobileTechOpen)}
                    className="w-full text-left text-sm font-medium px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span>Technologies</span>
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isMobileTechOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileTechOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4 pr-2 flex flex-col gap-3 pt-1 pb-2"
                      >
                        {technologiesCategories.map((category) => {
                          const Icon = category.icon;
                          return (
                            <div key={category.title} className="flex flex-col text-left gap-1">
                              <div className="flex items-center gap-1.5 border-b border-slate-100/50 pb-1">
                                <span className="text-indigo-600 shrink-0"><Icon size={12} /></span>
                                <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">{category.title}</span>
                              </div>
                              <div className="flex flex-wrap gap-1.5 pl-4 pt-1">
                                {category.items.map((tech) => (
                                  <span key={tech} className="px-2 py-0.5 rounded bg-slate-50 border border-slate-100/50 text-[10px] font-medium text-slate-600">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium px-3 py-2.5 rounded-lg transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "var(--bg-secondary)"; e.currentTarget.style.color = "var(--text-primary)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--text-secondary)"; }}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold text-center py-3 rounded-xl text-white mt-2"
                  style={{ background: "var(--bg-navy)" }}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
