"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/collaborate", label: "Collaborate" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[var(--border-color)] bg-[var(--bg)]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-md bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center">
            <span className="font-mono text-[var(--accent)] text-xs font-bold">A</span>
          </span>
          <span className="font-semibold text-[var(--text-primary)] tracking-tight group-hover:text-[var(--text-primary)] transition-colors">
            aiopslab
            <span className="text-[var(--accent)]">.co</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {links.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  active
                    ? "text-[var(--text-primary)] bg-[var(--accent)]/10 border border-[var(--accent)]/20"
                    : "text-[var(--text-muted)] hover:text-[var(--text-dim)] hover:bg-[var(--surface)]"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
