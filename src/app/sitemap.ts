import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://spaciva.tech";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...[
      "healthcare",
      "fintech",
      "manufacturing",
      "retail-ecommerce",
      "real-estate",
      "education",
      "logistics",
      "hospitality",
      "energy-utilities",
      "construction",
      "government",
      "startups",
    ].map((industry) => ({
      url: `${baseUrl}/industries/${industry}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
    ...[
      "unified-accounting",
      "partsflow",
    ].map((cs) => ({
      url: `${baseUrl}/case-studies/${cs}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
