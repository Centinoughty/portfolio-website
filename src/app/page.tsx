import { bric, fira } from "@/styles/fonts";
import Title from "@/components/Text/Title";
import { featured, projects } from "../../data/projects";
import ProjectCard from "@/components/Card/ProjectCard";
import FeatureCard from "@/components/Card/FeatureCard";
import Link from "next/link";
import ContactCard from "@/components/Card/ContactCard";
import ConnectCard from "@/components/Card/ConnectCard";
import Heading from "@/components/Text/Heading";

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
        <div className="flex flex-col md:flex-row justify-center gap-[10vw]">
          <div className="md:mt-8">
            <div className="w-[280px] md:w-[310px] aspect-square bg-[var(--primary-color)] rounded-full overflow-hidden">
              <img
                src="/me.jpg"
                alt="Nadeem M Siyam"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:max-w-lg xl:max-w-xl flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Heading text="about" />
              <p className="pl-2 text-[var(--secondary-color)] text-[4.5vw] sm:text-[3.7vw] md:text-[2.3vw] lg:text-[1.7vw] xl:text-[1.15vw]">
                I am Nadeem M Siyam, a second-year B.Tech CSE student at NIT
                Calicut, interested in web and app development, DevOps,
                cybersecurity, and AI/ML. I enjoy building applications,
                optimizing systems, and exploring new technologies.
              </p>
              <p className="pl-2 text-[var(--secondary-color)] text-[4.5vw] sm:text-[3.7vw] md:text-[2.3vw] lg:text-[1.7vw] xl:text-[1.15vw]">
                I have completed over 30 projects with over 4 years of
                experience.
              </p>
            </div>
            <div className="lg:max-w-lg xl:max-w-xl">
              <div className="flex flex-col gap-2">
                <Heading text="skills" />
                <div className="pl-2 flex flex-wrap gap-x-3 gap-y-5 md:gap-5">
                  <img src="/logo/react.svg" alt="React JS" className="h-10" />
                  <img src="/logo/redux.svg" alt="Redux JS" className="h-10" />
                  <img src="/logo/next.svg" alt="Next JS" className="h-10" />
                  <img
                    src="/logo/tailwindcss.svg"
                    alt="Tailwind CSS"
                    className="h-10"
                  />
                  <img
                    src="/logo/threejs.svg"
                    alt="Three JS"
                    className="h-10"
                  />
                  <img src="/logo/node.svg" alt="Node JS" className="h-10" />
                  <img
                    src="/logo/express.svg"
                    alt="Express JS"
                    className="h-10"
                  />
                  <img src="/logo/flask.svg" alt="Flask" className="h-10" />
                  <img src="/logo/fastapi.svg" alt="FastAPI" className="h-10" />
                  <img
                    src="/logo/socketio.svg"
                    alt="Socket.io"
                    className="h-10"
                  />
                  <img src="/logo/mysql.svg" alt="MySQL" className="h-10" />
                  <img src="/logo/mongodb.svg" alt="MongoDB" className="h-10" />
                  <img
                    src="/logo/postgresql.svg"
                    alt="PostgreSQL"
                    className="h-10"
                  />
                  <img src="/logo/docker.svg" alt="Docker" className="h-10" />
                  <img src="/logo/linux.svg" alt="Linux" className="h-10" />
                  <img src="/logo/git.svg" alt="Git" className="h-10" />
                  <img src="/logo/bash.svg" alt="Bash" className="h-10" />
                  <img src="/logo/nginx.svg" alt="nginx" className="h-10" />
                  <img src="/logo/azure.svg" alt="Azure" className="h-10" />
                  <img
                    src="/logo/firebase.svg"
                    alt="Firebase"
                    className="h-10"
                  />
                  <img src="/logo/pandas.svg" alt="Pandas" className="h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="my-[12vh]"></div>

      <section id="projects" className="mx-[5%]">
        <Title text="Featured Projects" />
        <div className="md:mx-[5%] grid lg:grid-cols-2 gap-[5%]">
          {featured.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>
      </section>

      <div className="my-[12vh]"></div>

      <section id="all-projects" className="mx-[5%]">
        <Title text="Recent Projects" />
        <div className="md:mx-[3%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5vw]">
          {projects.slice(0, 6).map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
        <div className="md:mx-[3%] mt-6 md:mt-8 flex justify-end">
          <Link
            href="/projects"
            className={`${fira.className} font-semibold underline underline-offset-2 text-[var(--primary-color)] text-[4vw] sm:text-[3.4vw] md:text-[2.2vw] lg:text-[1.6vw] xl:text-[1vw]`}
          >
            see all projects
          </Link>
        </div>
      </section>

      <div className="my-[12vh]"></div>

      <section id="connect" className="mx-[5%]">
        <Title text="Let's Connect" />
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-[10%]">
          <ContactCard />
          <p
            className={`max-w-xl ${bric.className} text-center text-[var(--primary-color)] font-medium text-[8vw] sm:text-[6.5vw] md:text-[5vw] xl:text-[3vw]`}
          >
            Have a project idea in your mind?
          </p>
        </div>
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-[10%]">
          <p
            className={`max-w-xl ${bric.className} text-center text-[var(--primary-color)] font-medium text-[8vw] sm:text-[6.5vw] md:text-[5vw] xl:text-[3vw]`}
          >
            For more details...
          </p>
          <ConnectCard />
        </div>
      </section>
    </>
  );
}
