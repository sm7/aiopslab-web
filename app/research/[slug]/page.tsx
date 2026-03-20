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

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <Link href="/research" className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-dim)] text-sm mb-12 transition-colors">
        ← Research
      </Link>

      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-2 mb-5">
          {post.series && (
            <span className="px-2.5 py-0.5 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded text-xs text-[var(--accent)] font-mono">
              {post.series}
            </span>
          )}
          <span className="text-xs text-[var(--text-muted)] font-mono">{post.date}</span>
        </div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] leading-tight mb-4">{post.title}</h1>
        {post.excerpt && <p className="text-xl text-[var(--text-muted)] leading-relaxed">{post.excerpt}</p>}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-6">
            {post.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 bg-[var(--bg)] border border-[var(--border-color)] rounded text-xs text-[var(--text-muted)] font-mono">
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

      <hr className="border-[var(--border-color)] mt-16 mb-10" />
      <div className="flex justify-between items-center">
        <Link href="/research" className="text-sm text-[var(--text-muted)] hover:text-[var(--text-dim)] transition-colors">
          ← All articles
        </Link>
        <Link href="/collaborate" className="text-sm text-[var(--accent)] hover:underline">
          Collaborate →
        </Link>
      </div>
    </div>
  );
}
