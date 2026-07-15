import { Mail, MapPin, Sparkles } from "lucide-react";

const J = "'Cabinet Grotesk', sans-serif";
const I = "'Geist Sans', sans-serif";

const FOOT = {
  Services: [
    { name: "AI/ML Development", href: "/ai-ml-development" },
    { name: "AI Agent Development", href: "/ai-agent-development" },
    { name: "Web App Development", href: "/web-development-company-india" },
    { name: "Custom CRM", href: "/custom-crm-development" },
    { name: "SEO Services", href: "/seo-services-india" },
    { name: "E-Commerce", href: "/ecommerce-website-development" },
  ],
  Industries: [
    { name: "AI & GenAI", href: "/#industries" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Logistics & Transport", href: "/industries/logistics-transportation" },
    { name: "Manufacturing IT", href: "/industries/manufacturing-it-services" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/#portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Careers (We are hiring)", href: "/contact" },
  ],
  Legal: [
    { name: "Sitemap", href: "/sitemap.xml" },
    { name: "Privacy Policy", href: "/contact" },
    { name: "Terms of Service", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0C] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <img src="/spaciva-logo-white.png" alt="Spaciva" className="h-7 w-auto object-contain" />
            </div>
            <p
              className="text-white/40 text-sm leading-relaxed max-w-[220px] mb-6"
              style={{ fontFamily: I }}
            >
              We build technology that fits the way your business works.
            </p>
            <div className="flex items-center gap-2 text-white/30 text-xs mb-2">
              <Mail className="w-3 h-3" />
              <span style={{ fontFamily: I }}>spacivaaisolution@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-white/30 text-xs">
              <MapPin className="w-3 h-3" />
              <span style={{ fontFamily: I }}>Ahmedabad, India</span>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(FOOT).map(([group, links]) => (
              <div key={group}>
                <div
                  className="text-[11px] font-semibold text-white/30 uppercase tracking-[0.12em] mb-5"
                  style={{ fontFamily: I }}
                >
                  {group}
                </div>
                <ul className="space-y-3">
                  {links.map((l) => (
                    <li key={l.name}>
                      <a
                        href={l.href}
                        className="text-sm text-white/40 hover:text-white transition-colors duration-150"
                        style={{ fontFamily: I }}
                      >
                        {l.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/25" style={{ fontFamily: I }}>
            © {new Date().getFullYear()} Spaciva Technologies. All rights reserved.
          </span>
          <span className="text-xs text-white/25" style={{ fontFamily: I }}>
            Built in Ahmedabad · Delivered globally
          </span>
        </div>
      </div>
    </footer>
  );
}
