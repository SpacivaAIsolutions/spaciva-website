import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root so parent-folder lockfiles can't confuse Turbopack.
    root: path.join(__dirname),
  },
};

export default nextConfig;
