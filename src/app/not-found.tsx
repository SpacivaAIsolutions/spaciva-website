import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import { SERVICE_GROUPS } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Page Not Found | Spaciva AI",
  robots: { index: false },
};

// Routes visitors who hit a dead URL back into the site instead of stranding them on the
// framework default: one pillar link per service group, plus the hub pages.
export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] flex flex-col">
      <section className="flex-1 px-5 lg:px-10 max-w-5xl mx-auto w-full pt-32 pb-16 md:pt-40 md:pb-24">
        <p className="text-sm font-bold text-[#7C3AED] uppercase tracking-wider mb-4">404</p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">This page doesn&apos;t exist.</h1>
        <p className="text-lg text-[#334155] max-w-2xl mb-10">
          It may have moved, or the link was mistyped. Here&apos;s where most people are headed.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {SERVICE_GROUPS.map((group) => (
            <Link
              key={group.title}
              href={group.items[0].href}
              className="group flex flex-col bg-slate-50 p-6 rounded-2xl border border-[#E2E8F0] hover:border-[#C4B5FD] hover:shadow-md transition-all"
            >
              <span className="text-sm font-bold text-slate-500 mb-1">{group.title}</span>
              <span className="text-lg font-bold flex items-center gap-1.5 group-hover:text-[#7C3AED] transition-colors">
                {group.items[0].label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-bold">
            <Link href="/services" className="hover:text-[#7C3AED] transition-colors">All services</Link>
            <Link href="/case-studies" className="hover:text-[#7C3AED] transition-colors">Case studies</Link>
            <Link href="/" className="hover:text-[#7C3AED] transition-colors">Homepage</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
