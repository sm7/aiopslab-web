"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/collaborate", label: "Collaborate" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[#1e2d45] bg-[#080d1a]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-md bg-[#3b82f6]/10 border border-[#3b82f6]/30 flex items-center justify-center">
            <span className="font-mono text-[#3b82f6] text-xs font-bold">A</span>
          </span>
          <span className="font-semibold text-[#f1f5f9] tracking-tight group-hover:text-white transition-colors">
            aiopslab
            <span className="text-[#3b82f6]">.co</span>
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-1">
          {links.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  active
                    ? "text-white bg-[#3b82f6]/10 border border-[#3b82f6]/20"
                    : "text-[#64748b] hover:text-[#94a3b8] hover:bg-[#0d1526]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
