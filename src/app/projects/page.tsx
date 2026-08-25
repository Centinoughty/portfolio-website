import { bric, fira } from "@/styles/fonts";
import { projects } from "@/data/projects";
import ProjectRow from "@/components/Grid/ProjectRow";

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <main className="pt-24 pb-28 mx-[5%] md:mx-[8%] lg:mx-[12%]">
      <div className="mb-12 md:mb-16">
        <h1
          className={`${bric.className} font-bold text-[var(--primary-color)] leading-none text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[5vw] xl:text-[4vw]`}
        >
          Projects
        </h1>
        <p
          className={`${fira.className} mt-3 text-[var(--secondary-color)] text-[3.6vw] sm:text-[2.2vw] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[0.85vw]`}
        >
          {projects.length} projects — click any row to expand.
        </p>
      </div>

      {featured.length > 0 && (
        <section className="mb-10 md:mb-14">
          <div className="flex items-center gap-3 mb-4">
            <h2
              className={`${fira.className} shrink-0 text-sm uppercase tracking-[0.2em] text-[var(--primary-color)]/60`}
            >
              Featured
            </h2>
            <div className="flex-1 h-px bg-[var(--primary-color)]/18" />
            <span
              className={`${fira.className} shrink-0 text-sm text-[var(--primary-color)]/45`}
            >
              {featured.length}
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[var(--primary-color)]/16 bg-white/35 shadow-[0_18px_50px_rgba(2,90,78,0.04)]">
            <div className="hidden sm:flex px-6 py-3 border-b border-[var(--primary-color)]/12 bg-[var(--primary-color)]/[0.055]">
              <span
                className={`${fira.className} flex-1 text-sm uppercase tracking-wide text-[var(--primary-color)]/50`}
              >
                Project
              </span>
              <span
                className={`${fira.className} w-[38%] text-right pr-10 text-sm uppercase tracking-wide text-[var(--primary-color)]/50`}
              >
                Stack
              </span>
            </div>
            {featured.map((project) => (
              <ProjectRow key={project.name} project={project} />
            ))}
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-4">
            <h2
              className={`${fira.className} shrink-0 text-sm uppercase tracking-[0.2em] text-[var(--primary-color)]/60`}
            >
              All projects
            </h2>
            <div className="flex-1 h-px bg-[var(--primary-color)]/18" />
            <span
              className={`${fira.className} shrink-0 text-sm text-[var(--primary-color)]/45`}
            >
              {rest.length}
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[var(--primary-color)]/16 bg-white/35 shadow-[0_18px_50px_rgba(2,90,78,0.04)]">
            <div className="hidden sm:flex px-6 py-3 border-b border-[var(--primary-color)]/12 bg-[var(--primary-color)]/[0.055]">
              <span
                className={`${fira.className} flex-1 text-sm uppercase tracking-wide text-[var(--primary-color)]/50`}
              >
                Project
              </span>
              <span
                className={`${fira.className} w-[38%] text-right pr-10 text-sm uppercase tracking-wide text-[var(--primary-color)]/50`}
              >
                Stack
              </span>
            </div>
            {rest.map((project) => (
              <ProjectRow key={project.name} project={project} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
