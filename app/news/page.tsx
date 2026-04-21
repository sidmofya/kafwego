import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { Card, SectionIntro } from "@/components/ui";

export const metadata: Metadata = {
  title: "News",
  description: "Project updates, technical notes, and investor materials from Kafwego.",
  openGraph: { images: ["/og-news-placeholder.jpg"] },
};

export default function NewsPage() {
  const posts = getAllPosts();
  const featured = posts.find((post) => post.featured);
  const rest = posts.filter((post) => !post.featured);

  return (
    <section className="section-gap">
      <div className="container-shell">
        <SectionIntro title="News / Updates" description="Structured publishing for project updates, technical notes, corporate communication, and investor materials." />
        {featured ? (
          <Card>
            <p className="text-xs uppercase text-copper-500">Featured Post</p>
            <h2 className="mt-2 text-xl font-semibold">{featured.title}</h2>
            <p className="mt-2 text-sm text-charcoal-700">{featured.excerpt}</p>
            <p className="mt-2 text-xs text-charcoal-700">{featured.category} · {featured.date}</p>
            <Link href={`/news/${featured.slug}`} className="mt-4 inline-block text-sm font-medium text-copper-700">Read update →</Link>
          </Card>
        ) : null}

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {rest.map((post) => (
            <Card key={post.slug}>
              <p className="text-xs uppercase text-copper-500">{post.category}</p>
              <h3 className="mt-2 font-semibold">{post.title}</h3>
              <p className="mt-2 text-sm text-charcoal-700">{post.excerpt}</p>
              <p className="mt-2 text-xs text-charcoal-700">{post.date}</p>
              <Link href={`/news/${post.slug}`} className="mt-3 inline-block text-sm font-medium text-copper-700">Open article →</Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
