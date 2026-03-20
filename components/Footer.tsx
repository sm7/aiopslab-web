import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1e2d45] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-[#f1f5f9] font-semibold text-sm">
            aiopslab<span className="text-[#3b82f6]">.co</span>
          </p>
          <p className="text-[#64748b] text-xs mt-1">
            Applied AI research studio.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#64748b]">
          <Link href="/research" className="hover:text-[#94a3b8] transition-colors">Research</Link>
          <Link href="/projects" className="hover:text-[#94a3b8] transition-colors">Projects</Link>
          <Link href="/collaborate" className="hover:text-[#94a3b8] transition-colors">Collaborate</Link>
          <Link href="/about" className="hover:text-[#94a3b8] transition-colors">About</Link>
          <a
            href="https://github.com/sm7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#94a3b8] transition-colors"
          >
            GitHub
          </a>
        </div>

        <p className="text-[#1e2d45] text-xs">
          © {new Date().getFullYear()} AIOpsLab
        </p>
      </div>
    </footer>
  );
}
