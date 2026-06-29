import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SPACIVA | Build Custom AI, CRM, LMS & Web Systems",
  description: "Get in touch with SPACIVA's software engineering team. Book a 30-minute discovery call to scope your custom AI, CRM, LMS, or high-performance Web project.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
