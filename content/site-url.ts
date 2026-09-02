/**
 * Resolves the URL this build is actually served from.
 *
 * Netlify sets URL to the site's primary address at build time: the custom domain
 * once one is attached, otherwise the <site>.netlify.app subdomain. DEPLOY_PRIME_URL
 * covers branch and preview deploys.
 *
 * kafwego.com is the intended canonical domain but is not yet attached to the build,
 * so hardcoding it would make canonical URLs, the sitemap and OG image URLs point at
 * a host that does not serve this site. Deriving it instead keeps metadata correct in
 * both states and needs no code change when the domain is connected.
 */
export const CANONICAL_URL = "https://kafwego.com";

export const SITE_URL =
  process.env.URL ?? process.env.DEPLOY_PRIME_URL ?? CANONICAL_URL;

/**
 * True only when this build is served from the canonical domain.
 *
 * Search engines should index the real domain and nothing else — an indexed
 * .netlify.app copy would compete with kafwego.com and would expose a site whose
 * disclosure blockers are still open.
 */
export const isCanonicalHost = (() => {
  try {
    return new URL(SITE_URL).host === new URL(CANONICAL_URL).host;
  } catch {
    return false;
  }
})();
