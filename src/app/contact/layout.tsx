import type { Metadata } from "next";

const TITLE = "Contact Spaciva AI | Book a 30-Minute AI Automation Call";
const DESCRIPTION =
  "Book a 30-minute call with Spaciva's engineers to scope an AI automation or custom build, or send a message and get a reply within 24 hours. NDA available before discovery.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/contact",
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
