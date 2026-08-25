import { bric, fira, mont } from "@/styles/fonts";
import Title from "@/components/Text/Title";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import { projects } from "@/data/projects";
import { GoArrowDown, GoArrowUpRight } from "react-icons/go";

const Heading = dynamic(() => import("@/components/Text/Heading"));
const ProjectCard = dynamic(() => import("@/components/Card/ProjectCard"));
const FeatureCard = dynamic(() => import("@/components/Card/FeatureCard"));
const ContactCard = dynamic(() => import("@/components/Card/ContactCard"));
const ConnectCard = dynamic(() => import("@/components/Card/ConnectCard"));
const SkillsGrid = dynamic(() => import("@/components/Grid/SkillsGrid"));
const GallerySection = dynamic(
  () => import("@/components/Section/GallerySection"),
);
const ExperienceSection = dynamic(
  () => import("@/components/Section/ExperienceSection"),
);

export default function Home() {
  const featuredProject = projects.find((project) => project.featured);

  return (
    <>
      <main className="px-[3%] pb-16 pt-24 sm:px-[5%] sm:pt-28 md:px-[8%] lg:px-[10%] xl:px-[12%]">
        <section className="relative overflow-hidden rounded-[1.5rem] border border-[var(--primary-color)]/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(241,237,230,0.84))] px-4 py-6 shadow-[0_24px_80px_rgba(2,90,78,0.08)] sm:rounded-[2rem] sm:px-9 sm:py-10 lg:px-12 lg:py-12">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[32px] border-[var(--primary-color)]/[0.06]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-px w-1/2 bg-[var(--primary-color)]/15" />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:items-center lg:gap-16">
            <div>
              <p
                className={`${fira.className} mb-6 text-[11px] uppercase tracking-[0.24em] text-[var(--primary-color)]/55`}
              >
                Software Engineer / NIT Calicut
              </p>
              <h1
                className={`${bric.className} max-w-3xl text-[clamp(3.25rem,7vw,6.5rem)] font-bold leading-[0.88] tracking-[-0.055em] text-[var(--primary-color)]`}
              >
                I build useful things for the real world.
              </h1>
              <p
                className={`${mont.className} mt-7 max-w-xl text-base leading-8 text-[var(--secondary-color)] sm:text-lg`}
              >
                I&apos;m Nadeem, a developer who likes turning messy problems
                into calm, dependable products, from collaborative tools to the
                systems that keep them moving.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  href="#projects"
                  className={`${fira.className} inline-flex items-center gap-2 rounded-full bg-[var(--primary-color)] px-5 py-3 text-xs uppercase tracking-[0.16em] text-[var(--accent)] transition-transform hover:-translate-y-0.5`}
                >
                  See the work <GoArrowDown aria-hidden="true" size={16} />
                </Link>
                <Link
                  href="#about"
                  className={`${fira.className} inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[var(--primary-color)]/70 underline underline-offset-4 transition-colors hover:text-[var(--primary-color)]`}
                >
                  More about me <GoArrowUpRight aria-hidden="true" size={15} />
                </Link>
              </div>

              <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-[var(--primary-color)]/12 pt-5">
                <div>
                  <p
                    className={`${bric.className} text-2xl text-[var(--primary-color)] sm:text-3xl`}
                  >
                    {projects.length}
                  </p>
                  <p
                    className={`${fira.className} mt-1 text-[10px] uppercase tracking-[0.14em] text-[var(--secondary-color)]/60`}
                  >
                    Projects
                  </p>
                </div>
                <div>
                  <p
                    className={`${bric.className} text-2xl text-[var(--primary-color)] sm:text-3xl`}
                  >
                    4+
                  </p>
                  <p
                    className={`${fira.className} mt-1 text-[10px] uppercase tracking-[0.14em] text-[var(--secondary-color)]/60`}
                  >
                    Domains
                  </p>
                </div>
                <div>
                  <p
                    className={`${bric.className} text-2xl text-[var(--primary-color)] sm:text-3xl`}
                  >
                    24/7
                  </p>
                  <p
                    className={`${fira.className} mt-1 text-[10px] uppercase tracking-[0.14em] text-[var(--secondary-color)]/60`}
                  >
                    Home lab
                  </p>
                </div>
              </div>
            </div>

            {featuredProject && (
              <Link
                href="#projects"
                className="group relative -mx-1 block rounded-2xl border border-[var(--primary-color)]/12 bg-white/65 p-2 shadow-[0_18px_45px_rgba(2,90,78,0.08)] transition-transform duration-300 hover:-translate-y-1 sm:mx-0 sm:p-3"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[var(--primary-color)]/10 sm:aspect-[4/3]">
                  <Image
                    src={featuredProject.image!}
                    alt={`${featuredProject.name} project preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    priority
                  />
                  <div className="absolute inset-0 bg-[var(--primary-color)]/10 mix-blend-multiply" />
                  <span
                    className={`${fira.className} absolute left-4 top-4 rounded-full bg-[var(--accent)]/90 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--primary-color)]`}
                  >
                    Featured build
                  </span>
                </div>
                <div className="flex items-end justify-between gap-4 px-2 pb-1 pt-4">
                  <div>
                    <p
                      className={`${fira.className} text-[10px] uppercase tracking-[0.18em] text-[var(--primary-color)]/45`}
                    >
                      01 / Collaboration
                    </p>
                    <h2
                      className={`${bric.className} mt-1 text-3xl font-semibold tracking-[-0.04em] text-[var(--primary-color)] sm:text-4xl`}
                    >
                      {featuredProject.name}
                    </h2>
                  </div>
                  <GoArrowUpRight
                    className="mb-1 shrink-0 text-[var(--primary-color)]/45 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--primary-color)]"
                    size={22}
                  />
                </div>
              </Link>
            )}
          </div>
        </section>
      </main>

      <section id="about" className="mx-[5%]">
        <div className="mb-8 flex items-end justify-between gap-4">
          <Title text="About Me" />
          <span
            className={`${fira.className} mb-7 hidden text-xs uppercase tracking-[0.2em] text-[var(--primary-color)]/35 sm:block`}
          >
            A little context
          </span>
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--primary-color)]/12 bg-[var(--primary-color)] p-4 shadow-[0_20px_55px_rgba(2,90,78,0.1)]">
            <div className="relative aspect-[0.9] overflow-hidden rounded-[1.5rem] bg-[var(--accent)]">
              <Image
                src="/nadeem.jpeg"
                alt="Nadeem M Siyam"
                fill
                sizes="(min-width: 1024px) 28vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between px-2 pb-1 pt-4 text-[var(--accent)]">
              <span
                className={`${fira.className} text-[10px] uppercase tracking-[0.18em] opacity-65`}
              >
                Nadeem M Siyam
              </span>
              <span
                className={`${fira.className} text-[10px] uppercase tracking-[0.18em] opacity-65`}
              >
                01 / 01
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="border-l-2 border-[var(--primary-color)]/15 pl-5 sm:pl-7">
              <Heading text="about" />
              <p
                className={`${mont.className} max-w-2xl text-base leading-8 text-[var(--secondary-color)] sm:text-lg sm:leading-9`}
              >
                I am <b>Nadeem M Siyam</b>, a Computer Science and Engineering
                undergraduate at NIT Calicut who enjoys building software that
                moves beyond prototypes and actually gets used.
              </p>
              <p
                className={`${mont.className} mt-4 max-w-2xl text-base leading-8 text-[var(--secondary-color)] sm:text-lg sm:leading-9`}
              >
                My primary interests are <b>Backend Engineering</b>,{" "}
                <b>DevOps</b>, <b>Distributed Systems</b>, and{" "}
                <b>Data Science</b>. I enjoy working on the engineering behind
                applications — designing APIs and data flows, working with
                databases, automating deployments, and building reliable
                software systems.
              </p>
              <p
                className={`${mont.className} mt-4 max-w-2xl text-base leading-8 text-[var(--secondary-color)] sm:text-lg sm:leading-9`}
              >
                I am currently looking for opportunities in Software
                Engineering, Backend Engineering, Distributed Systems, and Data
                Engineering, where I can work on challenging problems and learn
                from strong engineering teams.
              </p>
            </div>
            <div>
              <Heading text="skills" />
              <SkillsGrid />
            </div>
          </div>
        </div>
      </section>

      <div className="my-[6vh]"></div>

      <section id="experience" className="mx-[5%]">
        <Title text="Experience" />
        <ExperienceSection />
      </section>

      <div className="my-[6vh]"></div>

      <section id="projects" className="mx-[5%]">
        <Title text="Featured Projects" />
        <div className="md:mx-[5%] grid lg:grid-cols-2 gap-[5%]">
          {projects
            .filter((project) => project.featured)
            .map((feature, idx) => (
              <FeatureCard key={idx} feature={feature} />
            ))}
        </div>
      </section>

      <div className="my-[6vh]"></div>

      <section id="all-projects" className="mx-[5%]">
        <Title text="Recent Projects" />
        <div className="md:mx-[3%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5vw]">
          {projects
            .filter((project) => !project.featured)
            .slice(0, 6)
            .map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
        </div>
        <div className="md:mx-[3%] mt-6 md:mt-8 flex justify-end">
          <Link
            href="/projects"
            aria-label="Link to all projects page"
            className={`${fira.className} font-semibold underline underline-offset-2 text-[var(--primary-color)] text-[4vw] sm:text-[3.4vw] md:text-[2.2vw] lg:text-[1.6vw] xl:text-[1vw]`}
          >
            see all projects
          </Link>
        </div>
      </section>

      <div className="my-[6vh]"></div>

      <GallerySection />

      <div className="my-[6vh]"></div>

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
