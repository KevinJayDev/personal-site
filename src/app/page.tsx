export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-24 bg-gradient-to-br from-zinc-50 via-white to-indigo-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950">
      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <main className="relative w-full max-w-2xl flex flex-col gap-10">
        {/* Avatar + name row */}
        <div className="flex items-center gap-6">
          <div className="shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900 dark:to-violet-900 ring-1 ring-indigo-200 dark:ring-indigo-800 flex items-center justify-center text-indigo-400 dark:text-indigo-500 text-xs font-medium tracking-wide uppercase">
            Photo
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Kevin Jay
            </h1>
            <p className="mt-1 text-base font-medium text-indigo-600 dark:text-indigo-400">
              AI/ML Engineer
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
          I build intelligent systems and ship products at the intersection of
          machine learning and software engineering.
        </p>

        {/* Divider */}
        <hr className="border-zinc-200 dark:border-zinc-800" />

        {/* Links row */}
        <div className="flex gap-5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            LinkedIn
          </a>
          <a href="mailto:kevin@ksjay.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Email
          </a>
        </div>
      </main>
    </div>
  );
}
