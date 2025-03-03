import ProjectCard from "@/components/Card/ProjectCard";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { featured } from "../../data/projects";
import { bric, fira } from "@/styles/fonts";

export default function Home() {
  return (
    <>
      {/* <div className="p-4 fixed bottom-0 right-0 flex flex-col gap-1">
        <Link
          href="https://github.com/Centinoughty"
          target="_blank"
          className="p-1"
        >
          <FaGithub className="text-3xl" />
        </Link>
        <Link
          href="https://linkedin.com/in/nadeem-m-siyam"
          target="_blank"
          className="p-1"
        >
          <FaLinkedin className="text-3xl" />
        </Link>
      </div> */}
      <main className="flex justify-center bg-gradient-to-b from-[#e6eee3] to-[var(--accent)]">
        <div className="mt-32 flex flex-col items-center">
          <div
            className={`${bric.className} text-[14vw] md:text-[8vw] lg:text-[6vw] font-bold text-[var(--primary-color)]`}
          >
            <h1>I'm Nadeem.</h1>
            <h2 className="-mt-[7%]">A Developer.</h2>
          </div>
          <div className="mx-4 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <p className="text-center text-[var(--secondary-color)] font-medium text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.05vw]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eos
              amet corporis quas pariatur? Mollitia?
            </p>
          </div>
        </div>
      </main>

      <div className="my-[8vh]"></div>

      <section id="about" className="mx-[5%] min-h-screen">
        <h3
          className={`${bric.className} my-6 text-[var(--primary-color)] font-semibold text-[7vw] lg:text-[2.5vw]`}
        >
          About Me
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[10vw]">
          <div>
            <div className="w-[280px] md:w-[310px] aspect-square bg-[var(--primary-color)] rounded-full"></div>
          </div>
          <div className="sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="flex flex-col gap-2">
              <span
                className={`text-[var(--primary-color)] ${fira.className} font-semibold text-[5vw] md:text-[3vw] lg:text-[2vw] xl:text-[1.3vw]`}
              >
                [about]
              </span>
              <p className="px-4 text-[var(--secondary-color)] text-[4.3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.1vw]">
                I'm a second-year B.Tech CSE student at NIT Calicut, interested
                in web and app development, DevOps, and AI/ML. I enjoy building
                applications, optimizing systems, and exploring new
                technologies.
              </p>
              <p className="px-4 text-[var(--secondary-color)] text-[4.3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.1vw]">
                I have completed over 30 projects with over 4 years of
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="my-[7vh]"></div>

      <section id="projects" className="mx-[5%] min-h-screen">
        <h3
          className={`${bric.className} my-6 text-[var(--primary-color)] font-semibold text-[7vw] lg:text-[2.5vw]`}
        >
          Featured Projects
        </h3>
      </section>
    </>
  );
}
