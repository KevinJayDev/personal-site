// Sticky top navigation bar with logo and page links. Created 2026-04-26.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border-b border-indigo-200/40 dark:border-indigo-500/20">
      <div className="flex items-center justify-between px-8 py-4 max-w-5xl mx-auto">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          Kevin Jay
        </Link>
        <div className="flex gap-6">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={
                  active
                    ? "text-sm font-medium text-indigo-600 dark:text-indigo-400"
                    : "link-draw text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                }
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
