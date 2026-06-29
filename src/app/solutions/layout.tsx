import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions & Enterprise Software | SPACIVA",
  description: "Explore SPACIVA's software development services: custom AI automation agents, bespoke sales CRMs, interactive training LMS boards, and high-performance Web systems.",
  alternates: {
    canonical: "/solutions",
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
