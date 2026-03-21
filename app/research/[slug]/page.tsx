import { getPost, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const readingTime = Math.ceil(post.content.split(/\s+/).length / 200);

  return (
    <div className="min-h-screen">
      {/* Article container */}
      <div className="max-w-2xl mx-auto px-6 pt-16 pb-32">

        <Link href="/research" className="inline-flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--accent)] text-sm mb-14 transition-colors">
          ← Research
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {post.series && (
              <span className="px-2.5 py-0.5 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded text-xs text-[var(--accent)] font-mono uppercase tracking-wider">
                {post.series}
              </span>
            )}
            <span className="text-sm text-[var(--text-muted)]">{post.date}</span>
            <span className="text-[var(--border-color)]">·</span>
            <span className="text-sm text-[var(--text-muted)]">{readingTime} min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] leading-tight tracking-tight mb-5">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-lg text-[var(--text-dim)] leading-relaxed">
              {post.excerpt}
            </p>
          )}

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-6">
              {post.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 bg-[var(--surface)] border border-[var(--border-color)] rounded text-xs text-[var(--text-muted)] font-mono">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <hr className="border-[var(--border-color)] mb-12" />

        <article className="prose">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, rehypeHighlight],
              },
            }}
          />
        </article>

        <hr className="border-[var(--border-color)] mt-20 mb-10" />
        <div className="flex justify-between items-center">
          <Link href="/research" className="text-sm text-[var(--text-muted)] hover:text-[var(--text-dim)] transition-colors">
            ← All articles
          </Link>
          <Link href="/collaborate" className="text-sm text-[var(--accent)] hover:underline">
            Work with us →
          </Link>
        </div>
      </div>
    </div>
  );
}
