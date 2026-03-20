import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIOpsLab — Applied AI Research Studio",
  description: "AI-native applications, engineered for production.",
};

const featuredPost = {
  slug: "why-waf-ml-fails",
  title: "Why your WAF's ML model is probably making you less secure",
  date: "Coming soon",
  series: "AI for Security",
  excerpt:
    "Rule-based WAFs fail on unknown patterns. Naive classifiers fail on adversarial drift. This series covers how to build WAF intelligence that actually holds up in production.",
};

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">

      {/* Hero */}
      <section className="mb-28">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)] text-xs font-mono mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          Applied AI Research Studio
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1] mb-4 max-w-3xl">
          AI-native applications,{" "}
          <span className="text-[var(--accent)]">engineered for production.</span>
        </h1>
        <p className="text-lg sm:text-xl font-medium text-[var(--text-muted)] tracking-wide mb-6">
          Real data.&nbsp; Real infrastructure.&nbsp; Real intelligence.
        </p>

        <p className="text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl mb-10">
          AIOpsLab is a research studio building AI-native applications at the
          intersection of security, market intelligence, and operational data.
          Everything we build is shipped to production and documented end-to-end.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="px-5 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg text-sm font-medium transition-colors"
          >
            View projects
          </Link>
          <Link
            href="/research"
            className="px-5 py-2.5 bg-[var(--surface)] hover:bg-[var(--surface-2)] border border-[var(--border-color)] text-[var(--text-dim)] hover:text-[var(--text-primary)] rounded-lg text-sm font-medium transition-colors"
          >
            Read research
          </Link>
        </div>
      </section>

      {/* What we do */}
      <section className="mb-28">
        <p className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest mb-8">What we do</p>
        <div className="grid sm:grid-cols-3 gap-px bg-[var(--border-color)] rounded-xl overflow-hidden border border-[var(--border-color)]">
          {[
            {
              icon: "⬡",
              title: "Build",
              body: "Production-grade AI applications — real infrastructure, real data, real constraints. No toy examples.",
            },
            {
              icon: "◈",
              title: "Research",
              body: "Deep technical writing on AI security, intelligence systems, and operational ML. Long-form, practitioner-first.",
            },
            {
              icon: "⊕",
              title: "Collaborate",
              body: "Open research with engineers, domain experts, and researchers who want to build something that matters.",
            },
          ].map(({ icon, title, body }) => (
            <div key={title} className="bg-[var(--bg)] p-8">
              <span className="text-2xl text-[var(--accent)] mb-4 block">{icon}</span>
              <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-2">{title}</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured project */}
      <section className="mb-28">
        <p className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest mb-8">Featured project</p>
        <div className="bg-[var(--surface)] border border-[var(--border-color)] rounded-xl overflow-hidden">
          <div className="p-8 sm:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
                  <span className="text-xs font-mono text-[var(--success)]">LIVE</span>
                </div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)]">EagleEye Intelligence Platform</h2>
              </div>
              <Link href="/projects#eagleeye" className="text-sm text-[var(--accent)] hover:underline whitespace-nowrap">
                View details →
              </Link>
            </div>

            <p className="text-[var(--text-dim)] leading-relaxed mb-6 max-w-2xl">
              Real-time geopolitical and market signal intelligence. Ingests 15+
              alternative data sources — live webcams, satellite AIS, options flow,
              news sentiment, traffic — scores events by market impact, and maps
              them to tradeable asset classes.
            </p>

            <div className="flex flex-wrap gap-2">
              {["FastAPI", "Next.js 15", "Python", "Vercel", "Render"].map((tag) => (
                <span key={tag} className="px-2.5 py-0.5 bg-[var(--bg)] border border-[var(--border-color)] rounded-md text-xs text-[var(--text-muted)] font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--border-color)] grid grid-cols-3 divide-x divide-[var(--border-color)]">
            {[
              { label: "Data sources", value: "15+" },
              { label: "Asset classes", value: "8" },
              { label: "Deploy cost", value: "~$0" },
            ].map(({ label, value }) => (
              <div key={label} className="px-6 py-4 text-center">
                <p className="text-xl font-bold text-[var(--accent)] font-mono">{value}</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured research */}
      <section className="mb-28">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest">Latest research</p>
          <Link href="/research" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-dim)] transition-colors">
            All articles →
          </Link>
        </div>

        <Link href={`/research/${featuredPost.slug}`} className="block group">
          <div className="bg-[var(--surface)] border border-[var(--border-color)] rounded-xl p-8 hover:border-[var(--accent)]/40 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-0.5 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded text-xs text-[var(--accent)] font-mono">
                {featuredPost.series}
              </span>
              <span className="text-xs text-[var(--border-color)]">·</span>
              <span className="text-xs text-[var(--text-muted)] font-mono">{featuredPost.date}</span>
            </div>
            <h3 className="text-xl font-semibold text-[var(--text)] mb-3 group-hover:text-[var(--text-primary)] transition-colors leading-snug">
              {featuredPost.title}
            </h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">{featuredPost.excerpt}</p>
          </div>
        </Link>
      </section>

      {/* Collaborate CTA */}
      <section>
        <div className="bg-[var(--surface)] border border-[var(--border-color)] rounded-xl p-10 text-center">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
            Good work needs good collaborators.
          </h2>
          <p className="text-[var(--text-muted)] mb-8 max-w-xl mx-auto">
            We share almost everything we build. If you want to build with us, reach out.
          </p>
          <Link
            href="/collaborate"
            className="inline-block px-6 py-3 bg-[var(--accent)]/10 hover:bg-[var(--accent)]/20 border border-[var(--accent)]/30 text-[var(--accent)] rounded-lg text-sm font-medium transition-colors"
          >
            Work with us →
          </Link>
        </div>
      </section>
    </div>
  );
}
