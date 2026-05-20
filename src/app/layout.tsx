import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
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

export const metadata: Metadata = {
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
  openGraph: {
    title: "SPACIVA — AI Solutions & Enterprise Digital Ecosystems",
    description:
      "We engineer custom AI automation agents, custom CRM & LMS platforms, high-performance Web systems, and data-driven SEO growth engines.",
    url: "https://spaciva.tech",
    siteName: "SPACIVA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
