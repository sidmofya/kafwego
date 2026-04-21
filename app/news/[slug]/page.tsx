import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { TagBadge } from "@/components/ui";
import { CTASection } from "@/components/layout";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: ["/og-news-article-placeholder.jpg"] },
  };
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      {/* Article header */}
      <section className="bg-charcoal-900 pb-12 pt-14 md:pb-16 md:pt-20">
        <div className="container-shell max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <TagBadge variant="dark">{post.category}</TagBadge>
            <span className="text-xs text-stone-500">{post.date}</span>
          </div>
          <h1 className="text-3xl font-light leading-tight text-white md:text-4xl">{post.title}</h1>
          <p className="mt-4 text-stone-400 leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      {/* Article body */}
      <article className="section-gap bg-white">
        <div className="container-shell max-w-3xl">
          <div className="prose-article whitespace-pre-line">{post.content}</div>
        </div>
      </article>

      {/* Back navigation */}
      <section className="bg-stone-25 pb-10 pt-4">
        <div className="container-shell">
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm text-charcoal-600 hover:text-charcoal-900 transition-colors"
          >
            <span aria-hidden="true">←</span> Back to News
          </Link>
        </div>
      </section>

      <CTASection
        title="Continue the conversation"
        subtitle="Request the investor brief or schedule a technical briefing to discuss the project in detail."
      />
    </>
  );
}
