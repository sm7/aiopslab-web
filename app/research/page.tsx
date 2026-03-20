import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Deep technical writing on AI security, intelligence systems, and operational ML.",
};

export default function ResearchPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <p className="text-xs font-mono text-[#3b82f6] uppercase tracking-widest mb-4">
          Research
        </p>
        <h1 className="text-4xl font-bold text-[#f1f5f9] mb-4">
          Intelligence, not noise.
        </h1>
        <p className="text-[#64748b] text-lg max-w-xl">
          Practitioner-first writing on AI security, operational ML, and the
          infrastructure behind real-time intelligence systems.
        </p>
      </div>

      {/* Series callout */}
      <div className="bg-[#3b82f6]/5 border border-[#3b82f6]/20 rounded-xl p-6 mb-14">
        <p className="text-xs font-mono text-[#3b82f6] uppercase tracking-widest mb-2">
          Upcoming series
        </p>
        <h2 className="text-lg font-semibold text-[#f1f5f9] mb-2">
          Training AI Models for WAF
        </h2>
        <p className="text-[#64748b] text-sm leading-relaxed max-w-xl">
          A practitioner&apos;s guide to building Web Application Firewall intelligence
          that survives adversarial traffic, label noise, and production latency
          budgets. Covering data collection, feature engineering, model selection,
          deployment, and adversarial hardening.
        </p>
      </div>

      {/* Posts list */}
      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-[#1e2d45] text-4xl mb-4">◈</p>
          <p className="text-[#64748b]">First articles publishing soon.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/research/${post.slug}`}
              className="block group bg-[#0d1526] border border-[#1e2d45] hover:border-[#3b82f6]/40 rounded-xl p-6 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {post.series && (
                  <span className="px-2 py-0.5 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded text-xs text-[#3b82f6] font-mono">
                    {post.series}
                  </span>
                )}
                <span className="text-xs text-[#64748b] font-mono">{post.date}</span>
              </div>
              <h2 className="text-lg font-semibold text-[#e2e8f0] group-hover:text-white transition-colors mb-2">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="text-[#64748b] text-sm leading-relaxed">{post.excerpt}</p>
              )}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4">
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
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
