import { bric, fira } from "@/styles/fonts";
import Title from "@/components/Text/Title";
import { featured, projects } from "../../data/projects";
import ProjectCard from "@/components/Card/ProjectCard";
import FeatureCard from "@/components/Card/FeatureCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex justify-center bg-gradient-to-b from-[#e6eee3] to-[var(--accent)]">
        <div className="mt-32 flex flex-col items-center">
          <div
            className={`${bric.className} text-[14vw] md:text-[10vw] lg:text-[8vw] xl:text-[6vw] font-bold text-[var(--primary-color)]`}
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

      <div className="my-[12vh]"></div>

      <section id="about" className="mx-[5%]">
        <Title text="About Me" />
        <div className="flex flex-col md:flex-row justify-center items-center gap-[10vw]">
          <div>
            <div className="w-[280px] md:w-[310px] aspect-square bg-[var(--primary-color)] rounded-full"></div>
          </div>
          <div className="lg:max-w-lg xl:max-w-xl">
            <div className="flex flex-col gap-2">
              <span
                className={`mb-2 text-[var(--primary-color)] ${fira.className} font-semibold text-[5vw] md:text-[3vw] lg:text-[2vw] xl:text-[1.3vw]`}
              >
                [about]
              </span>
              <p className="px-4 text-[var(--secondary-color)] text-[4.3vw] sm:text-[3.7vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.15vw]">
                I'm a second-year B.Tech CSE student at NIT Calicut, interested
                in web and app development, DevOps, and AI/ML. I enjoy building
                applications, optimizing systems, and exploring new
                technologies.
              </p>
              <p className="px-4 text-[var(--secondary-color)] text-[4.3vw] sm:text-[3.7vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.15vw]">
                I have completed over 30 projects with over 4 years of
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="my-[12vh]"></div>

      <section id="projects" className="mx-[5%]">
        <Title text="Featured Projects" />
        <div className="md:mx-[3%] grid lg:grid-cols-2 gap-[5%]">
          {featured.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>
      </section>

      <div className="my-[12vh]"></div>

      <section id="all-projects" className="mx-[5%]">
        <Title text="All Projects" />
        <div className="md:mx-[3%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5vw]">
          {projects.slice(0, 3).map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
        <div className="md:mx-[3%] mt-6 md:mt-8 flex justify-end">
          <Link
            href="/projects"
            className={`${fira.className} font-semibold underline text-[var(--primary-color)] text-[4vw] sm:text-[3.4vw] md:text-[2.2vw] lg:text-[1.6vw] xl:text-[1vw]`}
          >
            see all projects
          </Link>
        </div>
      </section>

      <div className="my-[12vh]"></div>

      <section></section>
    </>
  );
}
