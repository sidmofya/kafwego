import type { MetadataRoute } from "next";
import { teamPageContent } from "@/content/pages/team";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Withheld from indexing while it carries no verified biographies.
      disallow: teamPageContent.leaders.length === 0 ? ["/team"] : [],
    },
    sitemap: "https://kafwego.com/sitemap.xml",
  };
}
