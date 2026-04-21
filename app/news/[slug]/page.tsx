import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: ["/og-news-article-placeholder.jpg"] },
  };
}

export default async function NewsPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="section-gap">
      <div className="container-shell max-w-3xl">
        <p className="text-xs uppercase text-copper-500">{post.category}</p>
        <h1 className="mt-2 text-4xl font-semibold">{post.title}</h1>
        <p className="mt-2 text-sm text-charcoal-700">{post.date}</p>
        <div className="mt-8 whitespace-pre-line text-charcoal-800 leading-7">{post.content}</div>
      </div>
    </article>
  );
}
