import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIOpsLab — Applied AI Research Studio",
  description:
    "We build AI-native applications that run in production. Not demos.",
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] text-xs font-mono mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
          Applied AI Research Studio
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f1f5f9] leading-[1.1] mb-6 max-w-3xl">
          Most AI tools are demos.{" "}
          <span className="text-[#3b82f6]">We build things that run.</span>
        </h1>

        <p className="text-xl text-[#64748b] leading-relaxed max-w-2xl mb-10">
          AIOpsLab is a research studio building AI-native applications at the
          intersection of security, market intelligence, and operational data.
          Everything we build is shipped, open, and documented.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="px-5 py-2.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-lg text-sm font-medium transition-colors"
          >
            View projects
          </Link>
          <Link
            href="/research"
            className="px-5 py-2.5 bg-[#0d1526] hover:bg-[#111c30] border border-[#1e2d45] text-[#94a3b8] hover:text-white rounded-lg text-sm font-medium transition-colors"
          >
            Read research
          </Link>
        </div>
      </section>

      {/* What we do */}
      <section className="mb-28">
        <p className="text-xs font-mono text-[#3b82f6] uppercase tracking-widest mb-8">
          What we do
        </p>
        <div className="grid sm:grid-cols-3 gap-px bg-[#1e2d45] rounded-xl overflow-hidden border border-[#1e2d45]">
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
            <div key={title} className="bg-[#080d1a] p-8">
              <span className="text-2xl text-[#3b82f6] mb-4 block">{icon}</span>
              <h3 className="text-[#f1f5f9] font-semibold text-lg mb-2">{title}</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured project — EagleEye */}
      <section className="mb-28">
        <p className="text-xs font-mono text-[#3b82f6] uppercase tracking-widest mb-8">
          Featured project
        </p>
        <div className="bg-[#0d1526] border border-[#1e2d45] rounded-xl overflow-hidden">
          <div className="p-8 sm:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                  <span className="text-xs font-mono text-[#10b981]">LIVE</span>
                  <span className="text-[#1e2d45]">·</span>
                  <span className="text-xs font-mono text-[#64748b]">OPEN SOURCE</span>
                </div>
                <h2 className="text-2xl font-bold text-[#f1f5f9]">EagleEye Intelligence Platform</h2>
              </div>
              <Link
                href="/projects#eagleeye"
                className="text-sm text-[#3b82f6] hover:underline whitespace-nowrap"
              >
                View details →
              </Link>
            </div>

            <p className="text-[#94a3b8] leading-relaxed mb-6 max-w-2xl">
              Real-time geopolitical and market signal intelligence. Ingests 15+
              alternative data sources — live webcams, satellite AIS, options flow,
              news sentiment, traffic — scores events by market impact, and maps
              them to tradeable asset classes.
            </p>

            <div className="flex flex-wrap gap-2">
              {["FastAPI", "Next.js 15", "Python", "Vercel", "Render"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 bg-[#080d1a] border border-[#1e2d45] rounded-md text-xs text-[#64748b] font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <div className="border-t border-[#1e2d45] grid grid-cols-3 divide-x divide-[#1e2d45]">
            {[
              { label: "Data sources", value: "15+" },
              { label: "Asset classes", value: "8" },
              { label: "Deploy cost", value: "~$0" },
            ].map(({ label, value }) => (
              <div key={label} className="px-6 py-4 text-center">
                <p className="text-xl font-bold text-[#3b82f6] font-mono">{value}</p>
                <p className="text-xs text-[#64748b] mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured research */}
      <section className="mb-28">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-mono text-[#3b82f6] uppercase tracking-widest">
            Latest research
          </p>
          <Link href="/research" className="text-xs text-[#64748b] hover:text-[#94a3b8] transition-colors">
            All articles →
          </Link>
        </div>

        <Link href={`/research/${featuredPost.slug}`} className="block group">
          <div className="bg-[#0d1526] border border-[#1e2d45] rounded-xl p-8 hover:border-[#3b82f6]/40 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-0.5 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded text-xs text-[#3b82f6] font-mono">
                {featuredPost.series}
              </span>
              <span className="text-xs text-[#1e2d45]">·</span>
              <span className="text-xs text-[#64748b] font-mono">{featuredPost.date}</span>
            </div>
            <h3 className="text-xl font-semibold text-[#f1f5f9] mb-3 group-hover:text-white transition-colors leading-snug">
              {featuredPost.title}
            </h3>
            <p className="text-[#64748b] text-sm leading-relaxed">{featuredPost.excerpt}</p>
          </div>
        </Link>
      </section>

      {/* Collaborate CTA */}
      <section>
        <div className="bg-[#0d1526] border border-[#1e2d45] rounded-xl p-10 text-center">
          <h2 className="text-2xl font-bold text-[#f1f5f9] mb-3">
            We don&apos;t need your money.<br />
            <span className="text-[#3b82f6]">We need your thinking.</span>
          </h2>
          <p className="text-[#64748b] mb-8 max-w-xl mx-auto">
            Open to collaborators — engineers, domain experts, researchers —
            who want to build something real and share the work publicly.
          </p>
          <Link
            href="/collaborate"
            className="inline-block px-6 py-3 bg-[#3b82f6]/10 hover:bg-[#3b82f6]/20 border border-[#3b82f6]/30 text-[#3b82f6] rounded-lg text-sm font-medium transition-colors"
          >
            Work with us →
          </Link>
        </div>
      </section>
    </div>
  );
}
