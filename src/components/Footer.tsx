"use client";

import Image from "next/image";

const navLinks = [
  { name: "Solutions", href: "/solutions" },
  { name: "Work", href: "/#portfolio" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "AI/ML Development", href: "/ai-ml-development" },
  { name: "AI Agent Development", href: "/ai-agent-development" },
  { name: "Web Design Services", href: "/web-design" },
  { name: "Web Application Development", href: "/web-development-company-india" },
  { name: "Custom CRM Development", href: "/custom-crm-development" },
  { name: "SEO Services India", href: "/seo-services-india" },
  { name: "E-Commerce Website", href: "/ecommerce-website-development" }
];

const geoLinks = [
  { name: "AI Company in Dubai", href: "/ai-company-in-dubai" },
  { name: "AI Solutions UK", href: "/ai-solutions-company-uk" },
  { name: "AI Solutions USA", href: "/ai-solutions-company-usa" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-navy)" }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="relative h-9 w-32 mb-5">
              <Image
                src="/spaciva-nav-dark.png"
                alt="SPACIVA"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[13px] leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.42)" }}>
              We engineer custom AI automation, CRM platforms, LMS systems, and high-performance web applications for modern businesses worldwide.
            </p>
            <p className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.24)" }}>
              Ahmedabad, India · Serving{" "}
              <a href="/web-development-company-india" className="hover:text-white/80 transition-colors">India</a>,{" "}
              <a href="/ai-company-in-dubai" className="hover:text-white/80 transition-colors">UAE</a>,{" "}
              <a href="/ai-solutions-company-uk" className="hover:text-white/80 transition-colors">UK</a> &amp;{" "}
              <a href="/ai-solutions-company-usa" className="hover:text-white/80 transition-colors">USA</a>
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-wider mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[13px] transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-wider mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[13px] transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Global + Contact */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-wider mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
              Global Offices
            </h4>
            <ul className="space-y-3 mb-8">
              {geoLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[13px] transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-[10px] font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>
              Contact
            </h4>
            <a
              href="mailto:spacivaaisolution@gmail.com"
              className="text-[12px] transition-colors duration-200 break-all"
              style={{ color: "rgba(255,255,255,0.45)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
            >
              spacivaaisolution@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} SPACIVA. All rights reserved.
          </p>
          <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
