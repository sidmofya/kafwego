import type { MetadataRoute } from "next";
import { teamPageContent } from "@/content/pages/team";
import { SITE_URL, isCanonicalHost } from "@/content/site-url";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Off the canonical domain (e.g. the interim .netlify.app address), block
  // everything: an indexed copy would compete with kafwego.com and would publish a
  // site whose readiness blockers are still open. Flips automatically once the
  // custom domain is attached and Netlify's URL becomes kafwego.com.
  if (!isCanonicalHost) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Withheld while it carries no verified biographies.
      disallow: teamPageContent.leaders.length === 0 ? ["/team"] : [],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
