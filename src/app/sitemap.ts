import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const baseUrl = "https://spaciva.tech";
const appDir = path.join(process.cwd(), "src", "app");

// Every entry here was previously a hand-maintained array that silently went
// stale as pages shipped — 23 of the site's ~26 /services/ pages were missing
// from the sitemap despite being live. Discovering slugs from the filesystem
// means a page is in the sitemap the moment it's committed, with nothing to
// remember to update by hand. (An earlier version of this file also tried to
// read each page's true last-commit date from git history — dropped because
// it worked standalone but degraded silently to "now" for some paths once
// run inside Next's build process, and a lastmod that's quietly wrong some of
// the time is worse for search-engine trust in the sitemap than one honest,
// uniform build timestamp.)
function getSlugs(section: string): string[] {
  const dir = path.join(appDir, section);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(dir, entry.name, "page.tsx")))
    .map((entry) => entry.name)
    .sort();
}

function route(
  section: string,
  slug: string,
  buildTime: Date,
  opts: { changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }
): MetadataRoute.Sitemap[number] {
  return {
    url: `${baseUrl}/${section}/${slug}`,
    lastModified: buildTime,
    changeFrequency: opts.changeFrequency,
    priority: opts.priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const buildTime = new Date();

  const services = getSlugs("services").map((slug) =>
    route("services", slug, buildTime, { changeFrequency: "monthly", priority: 0.85 })
  );

  const industries = getSlugs("industries").map((slug) =>
    route("industries", slug, buildTime, { changeFrequency: "monthly", priority: 0.8 })
  );

  // Excludes any guide directory still missing a page.tsx — this is how a
  // deliberately-held page (built locally, not yet committed) stays out of
  // the sitemap without needing a manual exclusion list here.
  const guides = getSlugs("guides").map((slug) =>
    route("guides", slug, buildTime, { changeFrequency: "monthly", priority: 0.7 })
  );

  const caseStudies = getSlugs("case-studies").map((slug) =>
    route("case-studies", slug, buildTime, { changeFrequency: "monthly", priority: 0.75 })
  );

  return [
    { url: baseUrl, lastModified: buildTime, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: buildTime, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: buildTime, changeFrequency: "monthly", priority: 0.9 },
    ...services,
    ...industries,
    ...guides,
    ...caseStudies,
  ];
}
