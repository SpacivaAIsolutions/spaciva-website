"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Image from "next/image";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-6">
      <nav
        className="mx-auto max-w-5xl rounded-full border backdrop-blur-md shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)] transition-all duration-350"
        style={{
          background: theme === "dark" ? "rgba(11, 15, 26, 0.7)" : "rgba(255, 255, 255, 0.85)",
          borderColor: theme === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(11, 15, 26, 0.06)",
        }}
      >
        <div className="px-6 py-2.5 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="shrink-0 flex items-center gap-2 group">
            <div className="relative h-9 w-28 sm:h-10 sm:w-32 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src={theme === "dark" ? "/spaciva-nav-dark.png" : "/spaciva-nav-light.png"}
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
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-4 py-2 text-[13px] font-medium transition-colors duration-300 rounded-full"
                style={{
                  color: hoveredLink === link.name ? "var(--text-primary)" : "var(--text-secondary)",
                }}
              >
                <span className="relative z-10">{link.name}</span>
                {hoveredLink === link.name && (
                  <motion.span
                    layoutId="nav-hover-bg"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: theme === "dark" ? "rgba(255, 255, 255, 0.06)" : "rgba(11, 15, 26, 0.04)",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop Call to Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center border hover:scale-105"
              style={{
                color: "var(--text-secondary)",
                background: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={14} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={14} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              className="relative overflow-hidden text-[12px] font-semibold px-5 py-2.5 rounded-full text-white bg-linear-to-r from-electric-blue to-violet shadow-sm hover:shadow-lg hover:shadow-violet/20 transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center gap-1"
            >
              <span>Get Started</span>
              <Sparkles size={11} className="animate-pulse" />
            </a>
          </div>

          {/* Mobile Navigation Trigger controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors cursor-pointer flex items-center justify-center"
              style={{ color: "var(--text-secondary)" }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-colors cursor-pointer flex items-center justify-center"
              style={{ color: "var(--text-secondary)" }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 mx-auto max-w-5xl rounded-3xl border backdrop-blur-2xl shadow-xl overflow-hidden"
            style={{
              background: theme === "dark" ? "rgba(11, 15, 26, 0.92)" : "rgba(255, 255, 255, 0.95)",
              borderColor: theme === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(11, 15, 26, 0.06)",
            }}
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-semibold py-1 transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-t opacity-10" style={{ borderColor: "var(--text-secondary)" }} />
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold text-center py-3 rounded-full text-white bg-linear-to-r from-electric-blue to-violet shadow-md"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
