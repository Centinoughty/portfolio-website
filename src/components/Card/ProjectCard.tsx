import { fira } from "@/styles/fonts";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosCode } from "react-icons/io";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <>
      <div className="mx-auto max-w-[420px]">
        <div className="border mb-3">
          <img
            src={project.image}
            alt={project.name}
            className="p-2 w-[420px] h-[550px] object-cover"
          />
        </div>
        <div>
          <div className="px-2 flex justify-between items-center">
            <h4
              className={`${fira.className} font-semibold text-[5vw] lg:text-[1.3vw]`}
            >
              {project.name}
            </h4>
            <div className="flex gap-2">
              {project.url && (
                <Link href={project.url}>
                  <IoIosCode size={30} />
                </Link>
              )}
              {project.github && (
                <Link href={project.github}>
                  <FiArrowUpRight size={30} />
                </Link>
              )}
            </div>
          </div>
          <span className={`${fira.className}`}>{project.role}</span>
          <p className="text-wrap">{project.description}</p>
        </div>
      </div>
    </>
  );
}
