import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI-native applications built and shipped by AIOpsLab.",
};

const projects = [
  {
    id: "eagleeye",
    name: "EagleEye Intelligence Platform",
    status: "LIVE",
    statusColor: "text-[#10b981]",
    dotColor: "bg-[#10b981]",
    badge: "OPEN SOURCE",
    tagline: "Real-time geopolitical and market signal intelligence.",
    description:
      "Ingests 15+ alternative data sources — live webcams, satellite AIS transponders, options flow, news sentiment, live traffic, weather events — scores each event by market impact severity, and maps signals to tradeable asset classes in real time.",
    stack: ["FastAPI", "Next.js 15", "Python", "Tailwind CSS", "Vercel", "Render"],
    highlights: [
      "15+ live alternative data sources",
      "Multi-factor event scoring engine",
      "Real-time geospatial camera correlation",
      "Options flow + market regime detection",
      "Deployed for near-zero cost",
    ],
    links: {
      live: "https://eagleeye-intel.vercel.app",
      github: "https://github.com/sm7/EagleEye",
    },
  },
];

const upcoming = [
  {
    name: "WAF Intelligence Engine",
    tagline: "ML-native Web Application Firewall with adversarial hardening.",
    eta: "In research",
  },
  {
    name: "SecOps Correlation Platform",
    tagline: "Correlate signals across SIEM, WAF, CDN, and APM in real time.",
    eta: "Planned",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <p className="text-xs font-mono text-[#3b82f6] uppercase tracking-widest mb-4">
          Projects
        </p>
        <h1 className="text-4xl font-bold text-[#f1f5f9] mb-4">
          Shipped, not demoed.
        </h1>
        <p className="text-[#64748b] text-lg max-w-xl">
          Every project here is deployed, running on real data, and documented
          end-to-end.
        </p>
      </div>

      {/* Live projects */}
      <div className="space-y-6 mb-20">
        {projects.map((project) => (
          <div
            key={project.id}
            id={project.id}
            className="bg-[#0d1526] border border-[#1e2d45] rounded-xl overflow-hidden"
          >
            <div className="p-8 sm:p-10">
              {/* Status row */}
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-2 h-2 rounded-full ${project.dotColor} animate-pulse`} />
                <span className={`text-xs font-mono ${project.statusColor}`}>
                  {project.status}
                </span>
                <span className="text-[#1e2d45]">·</span>
                <span className="text-xs font-mono text-[#64748b]">{project.badge}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-[#f1f5f9] mb-2">{project.name}</h2>
              <p className="text-[#94a3b8] text-base mb-1">{project.tagline}</p>
              <p className="text-[#64748b] text-sm leading-relaxed mb-6 max-w-2xl">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-8">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-[#64748b]">
                    <span className="text-[#3b82f6] mt-0.5">→</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 bg-[#080d1a] border border-[#1e2d45] rounded-md text-xs text-[#64748b] font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    View live →
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#080d1a] hover:bg-[#111c30] border border-[#1e2d45] text-[#94a3b8] hover:text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming */}
      <div>
        <p className="text-xs font-mono text-[#3b82f6] uppercase tracking-widest mb-6">
          In the pipeline
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {upcoming.map((p) => (
            <div
              key={p.name}
              className="bg-[#0d1526] border border-[#1e2d45] rounded-xl p-6 opacity-60"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#64748b]" />
                <span className="text-xs font-mono text-[#64748b]">{p.eta}</span>
              </div>
              <h3 className="text-[#e2e8f0] font-semibold mb-1">{p.name}</h3>
              <p className="text-[#64748b] text-sm">{p.tagline}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/collaborate"
            className="text-sm text-[#3b82f6] hover:underline"
          >
            Interested in building one of these? →
          </Link>
        </div>
      </div>
    </div>
  );
}
