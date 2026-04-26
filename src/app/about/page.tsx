// About page: background, skills, and experience. Created 2026-04-26.
export default function About() {
  const skills = ["Python", "TypeScript", "PyTorch", "Next.js", "LLM fine-tuning", "MLOps"];

  return (
    <div className="flex flex-1 items-center justify-center px-6 py-24 bg-gradient-to-br from-zinc-50 via-white to-indigo-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950">
      <main className="hero-card relative w-full max-w-xl flex flex-col gap-8 rounded-2xl border border-indigo-200/60 dark:border-indigo-500/20 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md px-10 py-10">
        <div className="flex flex-col gap-1">
          <h1
            className="animate-entrance text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
            style={{ animationDelay: "0ms" }}
          >
            About
          </h1>
          <p
            className="animate-entrance text-base font-medium text-indigo-600 dark:text-indigo-400"
            style={{ animationDelay: "150ms" }}
          >
            AI/ML Engineer
          </p>
        </div>

        <p
          className="animate-entrance text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
          style={{ animationDelay: "300ms" }}
        >
          I build intelligent systems and ship products at the intersection of machine
          learning and software engineering. I care deeply about making AI useful in the
          real world — fast, reliable, and easy to understand.
        </p>

        <hr className="border-zinc-200 dark:border-zinc-800" />

        <div
          className="animate-entrance flex flex-col gap-3"
          style={{ animationDelay: "450ms" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-500/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
