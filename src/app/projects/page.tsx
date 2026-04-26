// Projects page: showcase of work and side projects. Created 2026-04-26.
import Nav from "../components/Nav";

const projects = [
  {
    name: "Project Alpha",
    description: "An LLM-powered tool that automates code review and surfaces actionable feedback.",
    tags: ["Python", "LLMs", "FastAPI"],
  },
  {
    name: "Project Beta",
    description: "A real-time ML inference pipeline with sub-100ms latency at scale.",
    tags: ["PyTorch", "Kubernetes", "gRPC"],
  },
  {
    name: "Project Gamma",
    description: "A Next.js dashboard for monitoring model drift and data quality metrics.",
    tags: ["Next.js", "TypeScript", "MLOps"],
  },
];

export default function Projects() {
  return (
    <>
      <Nav />
      <div className="flex flex-1 items-center justify-center px-6 py-24 bg-gradient-to-br from-zinc-50 via-white to-indigo-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950">
      <main className="hero-card relative w-full max-w-xl flex flex-col gap-6 rounded-2xl border border-indigo-200/60 dark:border-indigo-500/20 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md px-10 py-10">
        <h1
          className="animate-entrance text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
          style={{ animationDelay: "0ms" }}
        >
          Projects
        </h1>

        <div className="flex flex-col gap-5">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="animate-entrance flex flex-col gap-2 rounded-xl border border-indigo-100 dark:border-indigo-900/50 bg-white/40 dark:bg-zinc-800/40 px-5 py-4"
              style={{ animationDelay: `${150 + i * 100}ms` }}
            >
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {project.name}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      </div>
    </>
  );
}
