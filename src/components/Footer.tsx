import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FOOTER_LINKS = {
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/#portfolio" },
    { name: "Contact", href: "/contact" },
  ],
  Services: [
    { name: "AI Solutions", href: "/#services" },
    { name: "Web Apps", href: "/#services" },
    { name: "Mobile Apps", href: "/#services" },
    { name: "Custom Software", href: "/#services" },
  ],
  Industries: [
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Finance & FinTech", href: "/industries/finance" },
    { name: "Real Estate", href: "/industries/real-estate" },
    { name: "Startups", href: "/industries/startups" }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E2E8F0] pt-20 pb-10 px-6 md:px-12 w-full">
      <div className="max-w-[1800px] 2xl:px-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6 -ml-2">
            <img src="/logos/darklogo.svg" alt="Spaciva" className="h-20 w-auto object-contain scale-125 md:scale-[1.4] origin-left" />
          </div>
          <p className="text-[#334155] mb-6 max-w-sm">
            Engineered for growth. We build custom software, AI agents, and web applications for ambitious brands worldwide.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/spaciva.tech/" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform origin-left">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <defs>
                  <radialGradient id="ig-grad" cx="30%" cy="100%" r="120%" fx="30%" fy="100%">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="5%" stopColor="#fdf497" />
                    <stop offset="45%" stopColor="#fd5949" />
                    <stop offset="60%" stopColor="#d6249f" />
                    <stop offset="90%" stopColor="#285AEB" />
                  </radialGradient>
                </defs>
                <path fill="url(#ig-grad)" d="M7.1,2C4.3,2,2,4.3,2,7.1v9.8C2,19.7,4.3,22,7.1,22h9.8c2.8,0,5.1-2.3,5.1-5.1V7.1C22,4.3,19.7,2,16.9,2H7.1z" />
                <path fill="#ffffff" d="M12,6.8c-2.9,0-5.2,2.3-5.2,5.2s2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2S14.9,6.8,12,6.8z M12,15.2c-1.8,0-3.2-1.4-3.2-3.2s1.4-3.2,3.2-3.2s3.2,1.4,3.2,3.2S13.8,15.2,12,15.2z" />
                <circle fill="#ffffff" cx="16.5" cy="7.5" r="1.2" />
                <path fill="#ffffff" d="M16.9,4H7.1C5.4,4,4,5.4,4,7.1v9.8C4,18.6,5.4,20,7.1,20h9.8c1.7,0,3.1-1.4,3.1-3.1V7.1C20,5.4,18.6,4,16.9,4z M18,16.9c0,0.6-0.5,1.1-1.1,1.1H7.1C6.5,18,6,17.5,6,16.9V7.1C6,6.5,6.5,6,7.1,6h9.8C17.5,6,18,6.5,18,7.1V16.9z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/spaciva-ai-solution-6b3626412/" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform origin-left text-[#0077b5]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([category, links]) => (
          <div key={category}>
            <h4 className="font-bold text-[#0F172A] mb-4">{category}</h4>
            <ul className="flex flex-col gap-3">
              {links.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#334155] hover:text-[#7C3AED] transition-colors font-medium text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-[1800px] 2xl:px-16 mx-auto border-t border-[#E2E8F0] pt-8 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
        <p className="text-sm text-[#334155] font-medium">
          © {new Date().getFullYear()} Spaciva. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
