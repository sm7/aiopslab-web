import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About AIOpsLab — applied AI research studio.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="mb-16">
        <p className="text-xs font-mono text-[#3b82f6] uppercase tracking-widest mb-4">
          About
        </p>
        <h1 className="text-4xl font-bold text-[#f1f5f9] mb-6 leading-tight">
          Built by engineers who got tired of demos.
        </h1>
      </div>

      <div className="prose">
        <p>
          AIOpsLab started with a single question: what happens when you apply
          real infrastructure rigor to AI applications — not notebook experiments,
          not prototypes, but systems that actually run?
        </p>

        <p>
          Most AI tools in production are demos with a deploy button. They
          work on clean data, fail silently on edge cases, and get retired after
          a conference talk. We build the opposite: applications that ingest
          messy real-world data, fail loudly when something is wrong, and
          document every decision made along the way.
        </p>

        <h2>What we focus on</h2>

        <p>
          Our current research sits at three intersections:
        </p>

        <ul>
          <li>
            <strong>Security intelligence</strong> — applying ML to WAF, SIEM
            correlation, and adversarial traffic detection in ways that hold up
            against real attackers, not benchmark datasets.
          </li>
          <li>
            <strong>Market intelligence</strong> — using alternative data
            (satellite imagery, webcam feeds, AIS transponders, options flow)
            to build signals that traditional financial data misses.
          </li>
          <li>
            <strong>Operational AI</strong> — the infrastructure and engineering
            decisions behind deploying intelligence systems that run continuously
            at near-zero cost.
          </li>
        </ul>

        <h2>How we publish</h2>

        <p>
          Every project is open source from day one. Research is published in
          two forms: <strong>Field Notes</strong> (short, opinionated takes on
          specific problems) and <strong>Deep Dives</strong> (full technical
          breakdowns of architecture, data pipelines, and model decisions).
          Nothing is gated.
        </p>

        <h2>Who we are</h2>

        <p>
          AIOpsLab was founded by an engineer with a background in distributed
          systems, security infrastructure, and applied ML. The work is done in
          the open, with contributors credited fully on every project and article.
        </p>

        <p>
          If you want to know more or contribute, the{" "}
          <a href="/collaborate">collaboration page</a> is the right place to
          start. If you want to follow the research,{" "}
          <a href="/research">everything is here</a>.
        </p>
      </div>

      <div className="mt-14 pt-10 border-t border-[#1e2d45] flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="px-5 py-2.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-lg text-sm font-medium transition-colors"
        >
          See the work
        </Link>
        <Link
          href="/research"
          className="px-5 py-2.5 bg-[#0d1526] border border-[#1e2d45] hover:border-[#3b82f6]/30 text-[#94a3b8] rounded-lg text-sm font-medium transition-colors"
        >
          Read research
        </Link>
        <a
          href="https://github.com/sm7"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-[#0d1526] border border-[#1e2d45] hover:border-[#3b82f6]/30 text-[#94a3b8] rounded-lg text-sm font-medium transition-colors"
        >
          GitHub →
        </a>
      </div>
    </div>
  );
}
