import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="OPAL Home"
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-500 group-hover:rotate-45"
      >
        <path
          d="M13 1L23 9L13 25L3 9L13 1Z"
          stroke="#D4AF37"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path d="M3 9H23" stroke="#D4AF37" strokeWidth="0.8" />
        <path d="M8 9L13 1L18 9" stroke="#D4AF37" strokeWidth="0.8" />
        <path d="M8 9L13 25" stroke="#D4AF37" strokeWidth="0.6" opacity="0.7" />
        <path d="M18 9L13 25" stroke="#D4AF37" strokeWidth="0.6" opacity="0.7" />
      </svg>
      <span className="font-display text-2xl tracking-[0.3em] text-white">
        OPAL
      </span>
    </Link>
  );
}
