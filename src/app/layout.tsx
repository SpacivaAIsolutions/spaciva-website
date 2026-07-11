import type { Metadata } from "next";
import { Inter, Poppins, Plus_Jakarta_Sans } from "next/font/google";
import LayoutWrapper from "@/components/LayoutWrapper";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spaciva.tech"),
  title: "SPACIVA — AI Solutions & Enterprise Digital Ecosystems",
  description:
    "We engineer custom AI automation agents, custom CRM & LMS platforms, high-performance Web systems, and data-driven SEO growth engines. Elevate your workflows with SPACIVA, a premier AI software agency based in India.",
  keywords: [
    "AI solution company",
    "India based AI company",
    "AI solutions agency India",
    "custom CRM development",
    "custom LMS platform development",
    "AI automation developer",
    "enterprise software development Ahmedabad",
    "Next.js web development agency",
    "technical SEO company India",
    "SPACIVA AI",
    "SPACIVA solutions",
    "custom business software",
    "AI integrations developer"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SPACIVA — AI Solutions & Enterprise Digital Ecosystems",
    description:
      "We engineer custom AI automation agents, custom CRM & LMS platforms, high-performance Web systems, and data-driven SEO growth engines.",
    url: "https://spaciva.tech",
    siteName: "SPACIVA",
    type: "website",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${plusJakartaSans.variable} h-full antialiased`}>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,500,400,300&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/geist@1.3.0/dist/font/sans.css" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col theme-redesign">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
