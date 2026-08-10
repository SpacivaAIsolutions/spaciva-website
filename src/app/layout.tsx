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
  title: "AI Automation for Agencies & DTC Brands | Spaciva AI",
  description:
    "Spaciva builds custom AI agents and automations for agencies, professional-services firms, and e-commerce brands in the US and UK. Fixed scope, fixed price, monitored monthly.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Automation for Agencies & DTC Brands | Spaciva AI",
    description:
      "Spaciva builds custom AI agents and automations for agencies, professional-services firms, and e-commerce brands in the US and UK. Fixed scope, fixed price, monitored monthly.",
    url: "https://spaciva.tech",
    siteName: "Spaciva AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Agencies & DTC Brands | Spaciva AI",
    description:
      "Spaciva builds custom AI agents and automations for agencies, professional-services firms, and e-commerce brands in the US and UK. Fixed scope, fixed price, monitored monthly.",
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
