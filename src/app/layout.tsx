import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import LayoutWrapper from "@/components/LayoutWrapper";
import "./globals.css";

// The two families the design actually uses, both self-hosted through next/font so no
// third-party stylesheet blocks first paint. (Geist used to come from a jsDelivr URL
// that 404s, so body text was silently falling back to the system font.)
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

// Cabinet Grotesk isn't on Google Fonts; files come from Fontshare (ITF Free Font License).
const cabinetGrotesk = localFont({
  src: [
    { path: "../fonts/CabinetGrotesk-400.woff2", weight: "400" },
    { path: "../fonts/CabinetGrotesk-500.woff2", weight: "500" },
    { path: "../fonts/CabinetGrotesk-700.woff2", weight: "700" },
    { path: "../fonts/CabinetGrotesk-800.woff2", weight: "800" },
  ],
  variable: "--font-cabinet",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.spaciva.tech"),
  title: "AI Automation for Agencies & DTC Brands | Spaciva AI",
  description:
    "Spaciva builds custom AI agents and automations for agencies, professional-services firms, and e-commerce brands in the US and UK. Fixed scope, fixed price, monitored monthly.",
  // No canonical here: an inherited "/" told Google any page that forgot its own
  // canonical was a duplicate of the homepage. Each page sets its own.
  // Site-wide defaults only. Each page sets its own title/description/url; putting the
  // homepage's values here made every page without its own openGraph share them.
  openGraph: {
    siteName: "Spaciva AI",
    images: ["/opengraph-image"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  icons: {
    icon: [
      { url: "/logos/Artboard%2010.svg", media: "(prefers-color-scheme: light)" },
      { url: "/logos/Artboard%209.svg", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${cabinetGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col theme-redesign">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
