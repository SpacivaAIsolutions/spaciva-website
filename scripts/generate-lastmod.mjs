// Writes src/lib/lastmod.json: route -> ISO date of the last commit that touched that
// route's source. Runs as `prebuild`, outside Next's build process (reading git from
// inside sitemap.ts degraded silently to "now" for some paths).
//
// The JSON is committed, so a build always has a baseline. A route's date is only
// replaced when git can prove it: on a shallow clone (CI), a commit at the shallow
// boundary may not really be the last change to that path, so those are skipped and
// the committed value is kept.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const appDir = path.join(root, "src", "app");
const outFile = path.join(root, "src", "lib", "lastmod.json");

// Routes whose content lives mostly outside their own folder.
const EXTRA_SOURCES = {
  "/": ["src/components/CreativeLandingPage.tsx"],
};

function git(args) {
  try {
    return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    return null;
  }
}

function findRoutes(dir, route = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const routes = [];
  if (entries.some((e) => e.isFile() && e.name === "page.tsx")) {
    const childDirs = entries.filter((e) => e.isDirectory()).map((e) => e.name);
    // A route that has child routes owns only the files directly in its folder.
    const hasChildRoutes = childDirs.some((d) => fs.existsSync(path.join(dir, d, "page.tsx")));
    const own = hasChildRoutes
      ? entries.filter((e) => e.isFile()).map((e) => path.join(dir, e.name))
      : [dir];
    routes.push({ route: route || "/", sources: own.map((p) => path.relative(root, p).replace(/\\/g, "/")) });
  }
  for (const e of entries) {
    if (e.isDirectory() && !e.name.startsWith("_") && !e.name.startsWith("(") && e.name !== "api") {
      routes.push(...findRoutes(path.join(dir, e.name), `${route}/${e.name}`));
    }
  }
  return routes;
}

const existing = fs.existsSync(outFile) ? JSON.parse(fs.readFileSync(outFile, "utf8")) : {};
const shallowFile = git(["rev-parse", "--git-path", "shallow"]);
const boundary = new Set(
  shallowFile && fs.existsSync(path.join(root, shallowFile))
    ? fs.readFileSync(path.join(root, shallowFile), "utf8").split(/\s+/).filter(Boolean)
    : []
);

const result = {};
for (const { route, sources } of findRoutes(appDir)) {
  const paths = [...sources, ...(EXTRA_SOURCES[route] ?? [])];
  const line = git(["log", "-1", "--format=%H %cI", "--", ...paths]);
  const [hash, date] = line ? line.split(" ") : [];
  if (hash && !boundary.has(hash)) result[route] = date;
  else if (existing[route]) result[route] = existing[route];
  // Otherwise: uncommitted page, or unknowable on this clone — leave lastmod out.
}

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(result, null, 2) + "\n");
console.log(`lastmod: ${Object.keys(result).length} routes dated`);
