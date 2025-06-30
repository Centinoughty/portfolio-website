import { bric, mont } from "@/styles/fonts";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <>
      <div className="mx-auto p-4 max-w-md flex flex-col gap-3 rounded-lg shadow-md">
        <div className="mb-3 flex justify-between items-center gap-1">
          <h3
            className={`${bric.className} text-[var(--primary-color)] font-bold text-[6vw] md:text-[4vw] lg:text-[2.25vw] xl:text-[1.5vw]`}
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
        <p className={`${mont.className} tracking-wide`}>
          {project.description}
        </p>
        <ul className="font-mono flex flex-wrap gap-2 text-gray-800">
          {project.tools.map((tool, idx) => (
            <li key={idx}>{tool}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
