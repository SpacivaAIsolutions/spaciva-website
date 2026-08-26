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
    ];
  },
};

export default nextConfig;
