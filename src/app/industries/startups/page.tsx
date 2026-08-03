import type { Metadata } from "next";
import StartupsClient from "./StartupsClient";

export const metadata: Metadata = {
  title: "Startup Software Development Company | MVP, SaaS & AI Product Development | Spaciva",
  description: "Spaciva helps startups build MVPs, SaaS platforms, AI products, mobile apps, and scalable software. From idea validation to product launch and growth, we partner with founders to build successful technology businesses.",
  alternates: {
    canonical: "/industries/startups",
  },
};

export default function StartupsPage() {
  return <StartupsClient />;
}
