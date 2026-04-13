import { bric } from "@/styles/fonts";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/Card/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="pt-20 mx-[5%]">
      <h1
        className={`${bric.className} text-[var(--primary-color)] font-bold text-[8vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw]`}
      >
        My Projects
      </h1>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5vw]">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </section>
    </main>
  );
}
