import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import lastmod from "@/lib/lastmod.json";

const baseUrl = "https://www.spaciva.tech";
const appDir = path.join(process.cwd(), "src", "app");
const dates: Record<string, string> = lastmod;

// Slugs are discovered from the filesystem so a page is in the sitemap the moment it's
// committed. Any directory still missing a page.tsx (a deliberately-held page) stays out.
function getSlugs(section: string): string[] {
  const dir = path.join(appDir, section);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(dir, entry.name, "page.tsx")))
    .map((entry) => entry.name)
    .sort();
}

// lastmod is the route's last git commit (written by scripts/generate-lastmod.mjs at
// prebuild). A route with no known date gets no lastmod rather than a made-up one.
// changefreq and priority are omitted: Google ignores both.
function entry(route: string): MetadataRoute.Sitemap[number] {
  const date = dates[route];
  return {
    url: route === "/" ? baseUrl : `${baseUrl}${route}`,
    ...(date ? { lastModified: new Date(date) } : {}),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const hubs = ["/", "/services", "/case-studies", "/guides", "/about", "/contact"].filter(
    (route) => route === "/" || fs.existsSync(path.join(appDir, route, "page.tsx"))
  );
  const sections = ["services", "industries", "guides", "case-studies"].flatMap((section) =>
    getSlugs(section).map((slug) => `/${section}/${slug}`)
  );

  return [...hubs, ...sections].map(entry);
}
