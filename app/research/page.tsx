import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description: "Deep technical writing on AI security, intelligence systems, and operational ML.",
};

export default function ResearchPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-16">
        <p className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest mb-4">Research</p>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Intelligence, not noise.</h1>
        <p className="text-[var(--text-muted)] text-lg max-w-xl">
          Practitioner-first writing on AI security, operational ML, and the
          infrastructure behind real-time intelligence systems.
        </p>
      </div>

      <div className="bg-[var(--accent)]/5 border border-[var(--accent)]/20 rounded-xl p-6 mb-14">
        <p className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest mb-2">Upcoming series</p>
        <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Training AI Models for WAF</h2>
        <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-xl">
          A practitioner&apos;s guide to building Web Application Firewall intelligence
          that survives adversarial traffic, label noise, and production latency
          budgets. Covering data collection, feature engineering, model selection,
          deployment, and adversarial hardening.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-[var(--border-color)] text-4xl mb-4">◈</p>
          <p className="text-[var(--text-muted)]">First articles publishing soon.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/research/${post.slug}`}
              className="block group bg-[var(--surface)] border border-[var(--border-color)] hover:border-[var(--accent)]/40 rounded-xl p-6 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {post.series && (
                  <span className="px-2 py-0.5 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded text-xs text-[var(--accent)] font-mono">
                    {post.series}
                  </span>
                )}
                <span className="text-xs text-[var(--text-muted)] font-mono">{post.date}</span>
              </div>
              <h2 className="text-lg font-semibold text-[var(--text)] group-hover:text-[var(--text-primary)] transition-colors mb-2">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{post.excerpt}</p>
              )}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-[var(--bg)] border border-[var(--border-color)] rounded text-xs text-[var(--text-muted)] font-mono">
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
