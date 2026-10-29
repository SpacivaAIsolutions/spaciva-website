import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { GUIDES } from "@/lib/navigation";

const TITLE = "Guides for Automation & Internal Software | Spaciva AI";
const DESCRIPTION =
  "Plain-language guides from the Spaciva engineering team: RAG vs fine-tuning, automation vs AI agents, building vs licensing a CRM, UX for internal tools, and PWAs.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/guides",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/guides",
    siteName: "Spaciva AI",
    images: ["/opengraph-image"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden">
      <section className="relative pt-28 pb-12 md:pt-40 md:pb-16 bg-slate-50 border-b border-[#E2E8F0]">
        <div className="max-w-[820px] mx-auto px-5 lg:px-10">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
            Guides
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
            Straight answers to the questions we get on every call
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Written by the engineers who build the systems, for the people deciding whether to. No gated downloads.
          </p>
        </div>
      </section>

      <section className="max-w-[820px] mx-auto px-5 lg:px-10 py-12 md:py-16">
        <ul className="flex flex-col gap-5">
          {GUIDES.map((g) => (
            <li key={g.href}>
              <Link
                href={g.href}
                className="group flex flex-col bg-white p-6 md:p-8 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-[#C4B5FD] transition-all"
              >
                <time dateTime={g.published} className="text-sm text-slate-500 mb-2">{formatDate(g.published)}</time>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#7C3AED] transition-colors">{g.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-4">{g.desc}</p>
                <span className="inline-flex items-center gap-1.5 font-bold text-[#7C3AED]">
                  Read the guide
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </div>
  );
}
