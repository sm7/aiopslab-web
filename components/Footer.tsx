import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <Logo href="/" />
          <p className="text-[var(--text-muted)] text-xs mt-2 ml-1">Applied AI research studio.</p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[var(--text-muted)]">
          <Link href="/research" className="hover:text-[var(--text-dim)] transition-colors">Research</Link>
          <Link href="/projects" className="hover:text-[var(--text-dim)] transition-colors">Projects</Link>
          <Link href="/collaborate" className="hover:text-[var(--text-dim)] transition-colors">Collaborate</Link>
          <Link href="/about" className="hover:text-[var(--text-dim)] transition-colors">About</Link>
          <a href="https://github.com/sm7" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-dim)] transition-colors">
            GitHub
          </a>
        </div>

        <p className="text-[var(--border-color)] text-xs">© {new Date().getFullYear()} AIOpsLab</p>
      </div>
    </footer>
  );
}
