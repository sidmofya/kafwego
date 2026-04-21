import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // typedRoutes generates exact-match types that conflict with query-string hrefs;
  // disable to allow standard string hrefs across CTAs and navigation.
};

export default nextConfig;
