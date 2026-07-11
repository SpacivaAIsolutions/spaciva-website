"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const J = "'Cabinet Grotesk', sans-serif";
const I = "'Geist Sans', sans-serif";

const NAV = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/#solutions" },
  { name: "Industries", href: "/#industries" },
  { name: "Case Studies", href: "/#portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#F7F6F2]/90 backdrop-blur-md border-b border-black/[0.06] shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-[#F7F6F2]/90 backdrop-blur-md border-b border-black/[0.06]"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-[64px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <img src="/spaciva-logo.png" alt="Spaciva" className="h-7 w-auto object-contain" />
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV.map((n) => (
              <a
                key={n.name}
                href={n.href}
                className="px-4 py-2 text-sm rounded-lg font-medium text-[#6B6A65] hover:text-[#0E0E0C] hover:bg-black/[0.04] transition-all duration-150"
                style={{ fontFamily: I }}
              >
                {n.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/contact"
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#0E0E0C] text-white hover:bg-[#2a2a28] transition-all duration-150 hover:scale-[1.01]"
              style={{ fontFamily: J }}
            >
              Let&apos;s Connect
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button className="md:hidden p-2 text-[#0E0E0C]" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-[#F7F6F2] border-t border-black/[0.06] py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.name}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-left px-4 py-2.5 text-sm text-[#6B6A65] hover:text-[#0E0E0C]"
                style={{ fontFamily: I }}
              >
                {n.name}
              </a>
            ))}
            <div className="px-4 pt-3 flex flex-col gap-2">
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="text-center py-3 rounded-xl text-sm font-semibold bg-[#0E0E0C] text-white"
                style={{ fontFamily: J }}
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
}
