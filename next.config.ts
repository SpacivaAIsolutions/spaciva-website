import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root so parent-folder lockfiles can't confuse Turbopack.
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/services/infrastructure-monitoring",
        destination: "/services/ai-monitoring-maintenance",
        permanent: true,
      },
      // Retired industry pages that have a genuinely relevant successor. The other retired
      // industries return 410 Gone from src/proxy.ts instead of a soft-404 redirect.
      {
        source: "/industries/logistics",
        destination: "/services/inventory-management",
        permanent: true,
      },
      {
        source: "/industries/healthcare",
        destination: "/services/workflow-automation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
