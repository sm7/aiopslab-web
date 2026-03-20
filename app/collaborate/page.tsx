import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Collaborate",
  description:
    "Open research collaboration — engineers, domain experts, and researchers welcome.",
};

const tracks = [
  {
    icon: "⌥",
    title: "Contribute Code",
    description:
      "All projects are open source. Pick up an issue, propose a feature, or improve the infrastructure. Good first contributions are labeled.",
    cta: "Browse GitHub",
    href: "https://github.com/sm7",
    external: true,
  },
  {
    icon: "◈",
    title: "Research Together",
    description:
      "Domain experts — ex-traders, security researchers, geopolitical analysts, data scientists — who want to contribute knowledge and co-author research.",
    cta: "Get in touch",
    href: "mailto:hello@aiopslab.co",
    external: true,
  },
  {
    icon: "⬡",
    title: "Write With Us",
    description:
      "Have deep knowledge on a topic that fits the research agenda? Pitch a guest article. We publish work that's technical, honest, and practitioner-first.",
    cta: "Pitch an article",
    href: "mailto:hello@aiopslab.co?subject=Research%20pitch",
    external: true,
  },
];

export default function CollaboratePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <p className="text-xs font-mono text-[#3b82f6] uppercase tracking-widest mb-4">
          Collaborate
        </p>
        <h1 className="text-4xl font-bold text-[#f1f5f9] mb-4 leading-tight">
          We don&apos;t need your money.
          <br />
          <span className="text-[#3b82f6]">We need your thinking.</span>
        </h1>
        <p className="text-[#64748b] text-lg max-w-2xl leading-relaxed">
          AIOpsLab operates as an open research studio. We share our work
          publicly and welcome collaborators who want to build something real —
          and document it honestly.
        </p>
      </div>

      {/* Principles */}
      <div className="bg-[#0d1526] border border-[#1e2d45] rounded-xl p-8 mb-14">
        <p className="text-xs font-mono text-[#3b82f6] uppercase tracking-widest mb-5">
          How we work
        </p>
        <ul className="space-y-3">
          {[
            "Everything we build is shipped to production, not left as a proof of concept.",
            "All research is published openly — no paywalls, no access gates.",
            "Work is credited fully. Contributors are named on every project and article.",
            "No equity, no revenue share. The output is the value.",
            "We move fast and document everything — architecture decisions, failures included.",
          ].map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm text-[#64748b]">
              <span className="text-[#3b82f6] mt-0.5 shrink-0">→</span>
              {p}
            </li>
          ))}
        </ul>
      </div>

      {/* Tracks */}
      <div className="grid sm:grid-cols-3 gap-4 mb-14">
        {tracks.map((track) => (
          <div
            key={track.title}
            className="bg-[#0d1526] border border-[#1e2d45] rounded-xl p-6 flex flex-col"
          >
            <span className="text-2xl text-[#3b82f6] mb-4">{track.icon}</span>
            <h3 className="text-[#f1f5f9] font-semibold mb-2">{track.title}</h3>
            <p className="text-[#64748b] text-sm leading-relaxed mb-6 flex-1">
              {track.description}
            </p>
            <a
              href={track.href}
              target={track.external ? "_blank" : undefined}
              rel={track.external ? "noopener noreferrer" : undefined}
              className="text-sm text-[#3b82f6] hover:underline"
            >
              {track.cta} →
            </a>
          </div>
        ))}
      </div>

      {/* Research agenda */}
      <div className="mb-14">
        <p className="text-xs font-mono text-[#3b82f6] uppercase tracking-widest mb-6">
          Current research agenda
        </p>
        <div className="space-y-3">
          {[
            {
              topic: "AI Models for WAF",
              status: "Active",
              color: "text-[#10b981] bg-[#10b981]/10 border-[#10b981]/20",
            },
            {
              topic: "Alternative Data for Market Intelligence",
              status: "Active",
              color: "text-[#10b981] bg-[#10b981]/10 border-[#10b981]/20",
            },
            {
              topic: "Real-time Geospatial Event Correlation",
              status: "Active",
              color: "text-[#10b981] bg-[#10b981]/10 border-[#10b981]/20",
            },
            {
              topic: "LLM-assisted SecOps Triage",
              status: "Planned",
              color: "text-[#f59e0b] bg-[#f59e0b]/10 border-[#f59e0b]/20",
            },
            {
              topic: "Adversarial ML Hardening for Network Security",
              status: "Planned",
              color: "text-[#f59e0b] bg-[#f59e0b]/10 border-[#f59e0b]/20",
            },
          ].map((item) => (
            <div
              key={item.topic}
              className="flex items-center justify-between bg-[#0d1526] border border-[#1e2d45] rounded-lg px-5 py-3.5"
            >
              <span className="text-[#e2e8f0] text-sm">{item.topic}</span>
              <span
                className={`px-2 py-0.5 rounded text-xs font-mono border ${item.color}`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-[#0d1526] border border-[#1e2d45] rounded-xl p-10">
        <h2 className="text-xl font-bold text-[#f1f5f9] mb-3">
          See something you want to work on?
        </h2>
        <p className="text-[#64748b] mb-6 text-sm">
          Send a short note about your background and which area you&apos;re
          interested in. No formal process.
        </p>
        <a
          href="mailto:hello@aiopslab.co"
          className="inline-block px-6 py-3 bg-[#3b82f6]/10 hover:bg-[#3b82f6]/20 border border-[#3b82f6]/30 text-[#3b82f6] rounded-lg text-sm font-medium transition-colors"
        >
          hello@aiopslab.co
        </a>
      </div>
    </div>
  );
}
