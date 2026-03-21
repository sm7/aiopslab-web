import Link from "next/link";

interface LogoProps {
  className?: string;
  href?: string;
}

export default function Logo({ className = "", href = "/" }: LogoProps) {
  return (
    <Link href={href} className={`inline-flex items-center gap-2.5 group ${className}`}>
      {/* Hexagon mark with signal pulse */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Hexagon background */}
        <path
          d="M18 2 L32 10 L32 26 L18 34 L4 26 L4 10 Z"
          fill="rgba(34,211,238,0.08)"
          stroke="rgba(34,211,238,0.4)"
          strokeWidth="1.2"
        />
        {/* Signal pulse */}
        <path
          d="M8 18 L12 18 L14 11 L18 23 L21 13 L23 18 L28 18"
          stroke="#22d3ee"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Wordmark */}
      <span className="text-[15px] font-semibold tracking-tight leading-none">
        <span className="text-[var(--text-primary)] group-hover:text-[var(--text-primary)] transition-colors">
          aiopslab
        </span>
        <span className="text-[var(--accent)]">.co</span>
      </span>
    </Link>
  );
}
