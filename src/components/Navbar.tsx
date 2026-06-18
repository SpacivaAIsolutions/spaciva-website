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
  { name: "AI/ML Development", href: "/ai-ml-development", icon: Brain },
  { name: "AI Agent Development", href: "/ai-agent-development", icon: Bot },
  { name: "Web Design", href: "/web-design", icon: Paintbrush },
  { name: "Web Application Development", href: "/web-development-company-india", icon: Code },
  { name: "Custom CRM Software", href: "/custom-crm-development", icon: Database },
  { name: "SEO Services", href: "/seo-services-india", icon: Search },
  { name: "E-Commerce Website", href: "/ecommerce-website-development", icon: ShoppingCart }
];

const industriesList = [
  { name: "Healthcare", href: "/industries/healthcare", icon: Activity },
  { name: "Retail & E-commerce", href: "/industries/retail-ecommerce", icon: ShoppingCart },
  { name: "ISVs & Software", href: "/industries/isv-software-product", icon: Box },
  { name: "Education & E-learning", href: "/industries/education-elearning", icon: GraduationCap },
  { name: "Logistics", href: "/industries/logistics-transportation", icon: Truck },
  { name: "Agencies", href: "/industries/digital-marketing-agencies", icon: Megaphone },
  { name: "Travel", href: "/industries/travel-hospitality", icon: Compass },
  { name: "Automotive", href: "/industries/automotive", icon: Car },
  { name: "Real Estate", href: "/industries/real-estate", icon: Home },
  { name: "Food & Restaurant", href: "/industries/food-restaurant", icon: Utensils },
  { name: "Sports", href: "/industries/sports", icon: Trophy },
  { name: "Manufacturing", href: "/industries/manufacturing-it-services", icon: Factory }
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
    items: ["Node.js", "Python / FastAPI", "Go Lang", "Rust", "GraphQL", "REST APIs"]
  },
  {
    title: "AI & Databases",
    icon: Cpu,
    items: ["OpenAI & Claude", "LangChain / RAG", "PostgreSQL", "MongoDB", "Pinecone", "TimescaleDB"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["Docker", "Kubernetes", "AWS Cloud", "Vercel", "CI/CD", "Terraform"]
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
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center transition-all duration-300">
      <div className="w-full relative">
        <nav
          className={`w-full h-[72px] px-6 sm:px-12 flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-xl border-b border-slate-200" : "bg-transparent border-b border-transparent"}`}
        >
          {/* Logo */}
          <a href="/" className="shrink-0 flex items-center gap-2 sm:gap-3 group transition-opacity duration-200 hover:opacity-85">
            <img 
              src="/spaciva-logo.png" 
              alt="Spaciva Icon" 
              className="h-7 sm:h-9 w-auto object-contain mix-blend-multiply" 
            />
            <span className="text-[20px] sm:text-[24px] font-bold tracking-[0.25em] text-[#2563eb] pt-1">
              SPΛCIVΛ
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-2">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsSolutionsHovered(true)}
              onMouseLeave={() => setIsSolutionsHovered(false)}
            >
              <button className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer">
                Solutions
                <ChevronDown size={14} className={`transition-transform duration-200 ${isSolutionsHovered ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isSolutionsHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="fixed top-[72px] left-0 w-full bg-white border-b border-slate-200 shadow-xl"
                  >
                    <div className="max-w-[1400px] mx-auto px-6 py-8">
                      <div className="grid grid-cols-4 gap-6">
                        {servicesList.map((service) => {
                          const Icon = service.icon;
                          return (
                            <a
                              key={service.name}
                              href={service.href}
                              className="flex items-center gap-4 p-4 transition-all hover:bg-slate-50 group rounded-sm border border-transparent hover:border-slate-100"
                            >
                              <span className="text-slate-400 group-hover:text-[#0f172a] transition-colors"><Icon size={24} /></span>
                              <span className="text-[14px] font-bold text-slate-900 group-hover:text-[#0f172a] transition-colors">
                                {service.name}
                              </span>
                            </a>
                          );
                        })}
                      </div>
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
              <button className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer">
                Industry
                <ChevronDown size={14} className={`transition-transform duration-200 ${isIndustryHovered ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isIndustryHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="fixed top-[72px] left-0 w-full bg-white border-b border-slate-200 shadow-xl"
                  >
                    <div className="max-w-[1400px] mx-auto px-6 py-8">
                      <div className="grid grid-cols-4 gap-6">
                        {industriesList.map((industry) => {
                          const Icon = industry.icon;
                          return (
                            <div
                              key={industry.name}
                              className="flex items-center gap-4 p-4 transition-all hover:bg-slate-50 group cursor-default rounded-sm border border-transparent hover:border-slate-100"
                            >
                              <span className="text-slate-400 group-hover:text-[#0f172a] transition-colors"><Icon size={24} /></span>
                              <span className="text-[14px] font-bold text-slate-900 group-hover:text-[#0f172a] transition-colors">
                                {industry.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
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
              <button className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer">
                Technologies
                <ChevronDown size={14} className={`transition-transform duration-200 ${isTechHovered ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isTechHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="fixed top-[72px] left-0 w-full bg-white border-b border-slate-200 shadow-xl"
                  >
                    <div className="max-w-[1400px] mx-auto px-6 py-10">
                      <div className="grid grid-cols-4 gap-12">
                        {technologiesCategories.map((category) => {
                          const Icon = category.icon;
                          return (
                            <div key={category.title} className="flex flex-col text-left">
                              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-200">
                                <span className="text-[#0f172a]"><Icon size={20} /></span>
                                <h4 className="text-[13px] font-bold text-[#0f172a] tracking-widest uppercase">
                                  {category.title}
                                </h4>
                              </div>
                              <ul className="flex flex-col gap-3">
                                {category.items.map((tech) => (
                                  <li
                                    key={tech}
                                    className="text-[15px] font-medium text-slate-500 hover:text-[#0f172a] transition-colors py-1 cursor-default"
                                  >
                                    {tech}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="/contact"
              className="text-sm font-bold px-6 py-2.5 rounded-sm text-white bg-[#0f172a] hover:bg-slate-800 transition-colors"
            >
              Let's Connect
            </a>
          </div>

          {/* Mobile trigger */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 text-slate-900 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[72px] left-0 right-0 md:hidden bg-white border-b border-slate-200 shadow-xl overflow-y-auto max-h-[calc(100vh-72px)]"
            >
              <div className="px-6 py-6 flex flex-col gap-2">
                {/* Mobile Solutions */}
                <div className="border-b border-slate-100 pb-2">
                  <button
                    onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                    className="w-full text-left text-lg font-bold py-3 flex items-center justify-between text-slate-900"
                  >
                    <span>Solutions</span>
                    <ChevronDown size={18} className={`transition-transform duration-200 ${isMobileSolutionsOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileSolutionsOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden flex flex-col gap-1 pb-4"
                      >
                        {servicesList.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            onClick={() => setIsOpen(false)}
                            className="py-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors"
                          >
                            {service.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Industry */}
                <div className="border-b border-slate-100 pb-2">
                  <button
                    onClick={() => setIsMobileIndustryOpen(!isMobileIndustryOpen)}
                    className="w-full text-left text-lg font-bold py-3 flex items-center justify-between text-slate-900"
                  >
                    <span>Industry</span>
                    <ChevronDown size={18} className={`transition-transform duration-200 ${isMobileIndustryOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileIndustryOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden flex flex-col gap-1 pb-4"
                      >
                        {industriesList.map((industry) => (
                          <div
                            key={industry.name}
                            className="py-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors cursor-default"
                          >
                            {industry.name}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Nav Links */}
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold text-slate-900 py-3 border-b border-slate-100"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-center py-4 text-white mt-6 bg-[#0f172a] rounded-sm"
                >
                  Let's Connect
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
