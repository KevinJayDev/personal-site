// Pill-shaped floating nav for the hero section. Created 2026-04-26.
"use client";

import Link from "next/link";

const links = [
  { href: "/about", label: "Our story" },
  { href: "/projects", label: "Projects" },
  { href: "mailto:kevin@ksjay.com", label: "Inquiries" },
];

export default function PillNav() {
  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
      <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center gap-3 sm:gap-6 md:gap-12">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-[10px] sm:text-xs md:text-sm transition-colors whitespace-nowrap"
            style={{ color: "rgba(225, 224, 204, 0.8)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#E1E0CC";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "rgba(225, 224, 204, 0.8)";
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
