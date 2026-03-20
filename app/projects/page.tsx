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
    badge: null,
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
      github: null,
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
      <div className="mb-16">
        <p className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest mb-4">Projects</p>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Shipped, not demoed.</h1>
        <p className="text-[var(--text-muted)] text-lg max-w-xl">
          Every project here is deployed, running on real data, and documented end-to-end.
        </p>
      </div>

      <div className="space-y-6 mb-20">
        {projects.map((project) => (
          <div key={project.id} id={project.id} className="bg-[var(--surface)] border border-[var(--border-color)] rounded-xl overflow-hidden">
            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
                <span className="text-xs font-mono text-[var(--success)]">{project.status}</span>
              </div>

              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{project.name}</h2>
              <p className="text-[var(--text-dim)] text-base mb-1">{project.tagline}</p>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 max-w-2xl">{project.description}</p>

              <ul className="space-y-1.5 mb-8">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                    <span className="text-[var(--accent)] mt-0.5">→</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tag) => (
                  <span key={tag} className="px-2.5 py-0.5 bg-[var(--bg)] border border-[var(--border-color)] rounded-md text-xs text-[var(--text-muted)] font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg text-sm font-medium transition-colors">
                    View live →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <p className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest mb-6">In the pipeline</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {upcoming.map((p) => (
            <div key={p.name} className="bg-[var(--surface)] border border-[var(--border-color)] rounded-xl p-6 opacity-60">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]" />
                <span className="text-xs font-mono text-[var(--text-muted)]">{p.eta}</span>
              </div>
              <h3 className="text-[var(--text)] font-semibold mb-1">{p.name}</h3>
              <p className="text-[var(--text-muted)] text-sm">{p.tagline}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/collaborate" className="text-sm text-[var(--accent)] hover:underline">
            Interested in building one of these? →
          </Link>
        </div>
      </div>
    </div>
  );
}
