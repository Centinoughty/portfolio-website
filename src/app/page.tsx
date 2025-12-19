"use client";

import { bric, fira } from "@/styles/fonts";
import Title from "@/components/Text/Title";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
const Heading = dynamic(() => import("@//components/Text/Heading"));
const ProjectCard = dynamic(() => import("@/components/Card/ProjectCard"));
const FeatureCard = dynamic(() => import("@/components/Card/FeatureCard"));
const ContactCard = dynamic(() => import("@/components/Card/ContactCard"));
const ConnectCard = dynamic(() => import("@/components/Card/ConnectCard"));
const SkillsGrid = dynamic(() => import("@/components/Grid/SkillsGrid"));
const ExperienceSection = dynamic(
  () => import("@/components/Section/ExperienceSection")
);

export default function Home() {
  const [featured, setFeatured] = useState<Project[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProjects = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects`
      );

      const allProjects: Project[] = res.data;

      setFeatured(allProjects.filter((p) => p.featured));
      setProjects(allProjects.filter((p) => !p.featured));
    } catch (err) {
      console.error("Failed to fetch projects", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) return null;

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
              Passionate developer building real-world solutions, blending code
              with creativity to solve complex problems every day.
            </p>
          </div>
        </div>
      </main>

      <div className="my-[12vh]"></div>

      <section id="about" className="mx-[5%]">
        <Title text="About Me" />
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-[10vw]">
          <div className="md:mt-8">
            <div className="relative w-[280px] md:w-[310px] aspect-square bg-[var(--primary-color)] rounded-full overflow-hidden">
              <Image
                src="/og-nadeem.jpg"
                alt="Nadeem M Siyam"
                fill
                sizes="(min-width: 768px) 310px, 280px"
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>
          <div className="lg:max-w-lg xl:max-w-xl flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Heading text="about" />
              <p className="px-2 text-[var(--secondary-color)] text-[4.5vw] sm:text-[3.7vw] md:text-[2.3vw] lg:text-[1.7vw] xl:text-[1.1vw]">
                I am Nadeem M Siyam, a third-year B.Tech CSE student at NIT
                Calicut, interested in web and app development, DevOps,
                cybersecurity, and AI/ML. I enjoy building applications,
                optimizing systems, and exploring new technologies.
              </p>
              <p className="px-2 text-[var(--secondary-color)] text-[4.5vw] sm:text-[3.7vw] md:text-[2.3vw] lg:text-[1.7vw] xl:text-[1.1vw]">
                I am passionate about building and maintaining a home lab that
                runs all the services I love.
              </p>
            </div>
            <div className="lg:max-w-lg xl:max-w-xl">
              <div className="flex flex-col gap-2">
                <Heading text="skills" />
                <SkillsGrid />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="my-[12vh]"></div>

      <section id="experience" className="mx-[5%]">
        <Title text="Experience" />
        <ExperienceSection />
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
            aria-label="Link to profile page"
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
