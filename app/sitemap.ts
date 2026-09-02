import type { MetadataRoute } from "next";
import { teamPageContent } from "@/content/pages/team";
import { SITE_URL } from "@/content/site-url";

export const dynamic = "force-static";

const BASE = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/project",
    "/targets",
    "/exploration-program",
    "/investment-case",
    "/responsible-development",
    "/lufilianarc",
    "/contact",
    "/legal",
    // /team is included only once real biographies are published.
    ...(teamPageContent.leaders.length > 0 ? ["/team"] : []),
  ];

  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
