import ParticleField from "./components/ParticleField";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-24 bg-gradient-to-br from-zinc-50 via-white to-indigo-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950">
      <ParticleField />

      {/* Grid texture */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          zIndex: 1,
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glassmorphism card */}
      <main
        className="hero-card relative w-full max-w-xl flex flex-col gap-8 rounded-2xl border border-indigo-200/60 dark:border-indigo-500/20 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md px-10 py-10"
        style={{ zIndex: 2 }}
      >
        {/* Avatar */}
        <div
          className="animate-entrance shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900 dark:to-violet-900 ring-1 ring-indigo-200 dark:ring-indigo-800 flex items-center justify-center text-indigo-400 dark:text-indigo-500 text-xs font-medium tracking-wide uppercase"
          style={{ animationDelay: "0ms" }}
        >
          Photo
        </div>

        {/* Name */}
        <div className="flex flex-col gap-1 -mt-2">
          <h1
            className="glitch animate-entrance text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
            data-text="Kevin Jay"
            style={{ animationDelay: "150ms" }}
          >
            Kevin Jay
          </h1>

          {/* Role */}
          <p
            className="animate-entrance text-base font-medium text-indigo-600 dark:text-indigo-400"
            style={{ animationDelay: "300ms" }}
          >
            AI/ML Engineer
          </p>
        </div>

        {/* Bio */}
        <p
          className="animate-entrance text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
          style={{ animationDelay: "450ms" }}
        >
          I build intelligent systems and ship products at the intersection of
          machine learning and software engineering.
        </p>

        <hr className="border-zinc-200 dark:border-zinc-800" />

        {/* Links */}
        <div
          className="animate-entrance flex gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-400"
          style={{ animationDelay: "600ms" }}
        >
          <a href="#" className="link-draw hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            GitHub
          </a>
          <a href="#" className="link-draw hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            LinkedIn
          </a>
          <a href="mailto:kevin@ksjay.com" className="link-draw hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Email
          </a>
        </div>
      </main>
    </div>
  );
}
