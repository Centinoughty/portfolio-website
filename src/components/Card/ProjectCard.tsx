import { bric, mont } from "@/styles/fonts";
import { Project } from "../../../util/types";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { LuCodeXml } from "react-icons/lu";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <>
      <div className="mx-auto p-4 max-w-sm flex flex-col gap-2 rounded-lg shadow-md">
        <div className="mb-2 flex justify-between items-center gap-1">
          <h4
            className={`${bric.className} text-[var(--primary-color)] font-bold text-[6vw] md:text-[4vw] lg:text-[2.25vw] xl:text-[1.5vw]`}
          >
            {project.name}
          </h4>
          <div className="flex items-center gap-2 underline text-[3.2vh]">
            {project.github && (
              <Link href={project.github} target="_blank" className="p-1">
                <LuCodeXml />
              </Link>
            )}
            {project.url && (
              <Link href={project.url} target="_blank" className="p-1">
                <GoArrowUpRight />
              </Link>
            )}
          </div>
        </div>
        <p className={`${mont.className} tracking-wide`}>
          {project.description}
        </p>
        <ul className="font-mono flex flex-wrap gap-2 text-gray-500">
          {project.tools.map((tool, idx) => (
            <li key={idx}>{tool}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
