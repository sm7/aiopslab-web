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
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Back */}
      <Link
        href="/research"
        className="inline-flex items-center gap-2 text-[#64748b] hover:text-[#94a3b8] text-sm mb-12 transition-colors"
      >
        ← Research
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-2 mb-5">
          {post.series && (
            <span className="px-2.5 py-0.5 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded text-xs text-[#3b82f6] font-mono">
              {post.series}
            </span>
          )}
          <span className="text-xs text-[#64748b] font-mono">{post.date}</span>
        </div>

        <h1 className="text-4xl font-bold text-[#f1f5f9] leading-tight mb-4">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="text-xl text-[#64748b] leading-relaxed">{post.excerpt}</p>
        )}

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-[#080d1a] border border-[#1e2d45] rounded text-xs text-[#64748b] font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <hr className="border-[#1e2d45] mb-12" />

      {/* Content */}
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

      <hr className="border-[#1e2d45] mt-16 mb-10" />

      {/* Footer nav */}
      <div className="flex justify-between items-center">
        <Link
          href="/research"
          className="text-sm text-[#64748b] hover:text-[#94a3b8] transition-colors"
        >
          ← All articles
        </Link>
        <Link
          href="/collaborate"
          className="text-sm text-[#3b82f6] hover:underline"
        >
          Collaborate →
        </Link>
      </div>
    </div>
  );
}
