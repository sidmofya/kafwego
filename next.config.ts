import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Static export requires unoptimized images (no Next.js image server)
    unoptimized: true,
  },
};

export default nextConfig;
