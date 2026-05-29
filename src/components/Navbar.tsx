"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Solutions", href: "/solutions" },
  { name: "Work", href: "/#portfolio" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
