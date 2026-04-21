import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { SectionIntro, TagBadge } from "@/components/ui";
import { CTASection } from "@/components/layout";

export const metadata: Metadata = {
  title: "News",
  description:
    "Project updates, technical notes, and investor materials from the Kafwego Project.",
  openGraph: { images: ["/og-news-placeholder.jpg"] },
};

export default function NewsPage() {
  const posts = getAllPosts();
  const featured = posts.find((post) => post.featured);
  const rest = posts.filter((post) => !post.featured);

  return (
    <>
      {/* Page header */}
      <section className="section-gap-sm bg-stone-25">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Updates"
            title="News and Project Updates"
            description="Structured publishing for project updates, technical notes, corporate communications, and investor materials."
          />
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="bg-white pb-0 pt-0">
          <div className="container-shell pb-2">
            <Link
              href={`/news/${featured.slug}`}
              className="group block overflow-hidden rounded-xl border border-stone-100 bg-stone-25 p-8 shadow-sm transition-shadow hover:shadow-md md:p-10"
            >
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <TagBadge variant="copper">{featured.category}</TagBadge>
                <span className="text-xs text-charcoal-400">{featured.date}</span>
                <TagBadge variant="dark">Featured</TagBadge>
              </div>
              <h2 className="text-2xl font-semibold text-charcoal-900 group-hover:text-copper-600 transition-colors md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-2xl text-charcoal-600 leading-relaxed">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-copper-500 group-hover:text-copper-700">
                Read update
                <span aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </section>
      )}

      {/* Post grid */}
      {rest.length > 0 && (
        <section className="section-gap bg-white">
          <div className="container-shell">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/news/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-stone-100 bg-stone-25 p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <TagBadge variant="copper">{post.category}</TagBadge>
                  </div>
                  <h3 className="font-semibold text-charcoal-900 group-hover:text-copper-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
                    <span className="text-xs text-charcoal-400">{post.date}</span>
                    <span className="text-xs font-medium text-copper-500 group-hover:text-copper-700">
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {posts.length === 0 && (
        <section className="section-gap bg-white">
          <div className="container-shell">
            <p className="text-charcoal-500 text-sm">No updates published yet. Check back shortly.</p>
          </div>
        </section>
      )}

      <CTASection
        title="Stay informed as the project advances"
        subtitle="Request the investor brief for a structured summary of the project, partnership structure, and upcoming milestones."
      />
    </>
  );
}
