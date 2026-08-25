import { Project } from "@/data/projects";
import { bric, fira, mont } from "@/styles/fonts";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group mx-auto flex h-full max-w-md flex-col gap-4 rounded-2xl border border-[var(--primary-color)]/12 bg-white/45 p-5 shadow-[0_14px_35px_rgba(2,90,78,0.04)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 hover:shadow-[0_20px_45px_rgba(2,90,78,0.08)]">
      <div className="flex items-start justify-between gap-3">
        <span className={`${fira.className} text-[10px] uppercase tracking-[0.18em] text-[var(--primary-color)]/35`}>Build / {project.tools[0]}</span>
        <h3
          className={`${bric.className} text-2xl font-bold tracking-[-0.03em] text-[var(--primary-color)] transition-opacity group-hover:opacity-75 sm:text-3xl`}
        >
          {project.name}
        </h3>
        <div className="flex items-center underline text-[3.2vh]">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              aria-label={project.name}
              className="p-1"
            >
              <FaGithub />
            </Link>
          )}
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              aria-label="arrow up right"
              className="p-1"
            >
              <GoArrowUpRight />
            </Link>
          )}
        </div>
      </div>
      <p className={`${mont.className} flex-1 text-sm leading-7 text-[var(--secondary-color)]`}>{project.description}</p>
      <ul className="flex flex-wrap gap-1.5 border-t border-[var(--primary-color)]/10 pt-4">
        {project.tools.slice(0, 5).map((tool) => (
          <li key={tool} className={`${fira.className} rounded-full bg-[var(--primary-color)]/8 px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] text-[var(--secondary-color)]`}>{tool}</li>
        ))}
        {project.tools.length > 5 && <li className={`${fira.className} rounded-full bg-[var(--primary-color)]/8 px-2.5 py-1 text-[10px] text-[var(--secondary-color)]`}>+{project.tools.length - 5}</li>}
      </ul>
    </article>
  );
}
