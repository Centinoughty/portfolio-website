"use client";

import { useState } from "react";
import Link from "next/link";
import { bric, fira } from "@/styles/fonts";
import { projects, Project } from "@/data/projects";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

function ProjectRow({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border-b border-[var(--primary-color)]/15 last:border-b-0 transition-colors duration-200 ${
        open
          ? "bg-[var(--primary-color)]/[0.04]"
          : "hover:bg-[var(--primary-color)]/[0.025]"
      }`}
    >
      {/* ── Clickable row ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center gap-3 sm:gap-4 cursor-pointer group"
        aria-expanded={open}
      >
        {/* Animated chevron pill */}
        <span
          className={`shrink-0 w-[22px] h-[22px] flex items-center justify-center rounded-full border transition-all duration-300 ${
            open
              ? "rotate-90 bg-[var(--primary-color)] border-[var(--primary-color)]"
              : "border-[var(--primary-color)]/30 bg-transparent"
          }`}
          style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <path
              d="M2.5 1.5L6.5 4.5L2.5 7.5"
              stroke={open ? "#f1ede6" : "#025a4e"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        {/* Project name + featured badge */}
        <span className="flex-1 flex flex-wrap items-center gap-2 min-w-0">
          <span
            className={`${bric.className} font-semibold text-[var(--primary-color)] text-[4.2vw] sm:text-[2.4vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1vw] leading-snug group-hover:opacity-75 transition-opacity truncate`}
          >
            {project.name}
          </span>
          {project.featured && (
            <span
              className={`${fira.className} shrink-0 text-[2.5vw] sm:text-[1.2vw] md:text-[0.9vw] lg:text-[0.65vw] xl:text-[0.55vw] font-normal tracking-[0.15em] uppercase px-2 py-0.5 rounded-full bg-[var(--primary-color)] text-[var(--accent)]`}
            >
              Featured
            </span>
          )}
        </span>

        {/* Stack pills — hidden on mobile */}

        <span
          className={`
            hidden sm:flex flex-wrap gap-1.5 justify-end max-w-[38%] shrink-0
            transition-all duration-300 ease-in-out overflow-hidden
            ${open ? "opacity-0 max-w-0 scale-95" : "opacity-100 max-w-[38%] scale-100"}
          `}
        >
          {project.tools.slice(0, 4).map((tool) => (
            <span
              key={tool}
              className={`${fira.className} text-[1.5vw] md:text-[1vw] lg:text-[0.72vw] xl:text-[0.58vw] px-2 py-0.5 rounded-full bg-[var(--primary-color)]/10 text-[var(--secondary-color)]`}
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 4 && (
            <span
              className={`${fira.className} text-[1.5vw] md:text-[1vw] lg:text-[0.72vw] xl:text-[0.58vw] px-2 py-0.5 rounded-full bg-[var(--primary-color)]/10 text-[var(--secondary-color)]`}
            >
              +{project.tools.length - 4}
            </span>
          )}
        </span>

        {/* Icon links — stop propagation so clicks don't toggle row */}
        <span
          className="shrink-0 flex items-center gap-1 ml-1"
          onClick={(e) => e.stopPropagation()}
        >
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              aria-label={`GitHub — ${project.name}`}
              className="p-1.5 text-[var(--primary-color)]/40 hover:text-[var(--primary-color)] transition-colors rounded"
            >
              <FaGithub size={15} />
            </Link>
          )}
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              aria-label={`Live — ${project.name}`}
              className="p-1.5 text-[var(--primary-color)]/40 hover:text-[var(--primary-color)] transition-colors rounded"
            >
              <GoArrowUpRight size={17} />
            </Link>
          )}
        </span>
      </button>

      {/* ── Expand panel — CSS grid-rows trick for smooth height animation ── */}
      <div
        className={`grid overflow-hidden transition-all duration-[380ms] ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)" }}
      >
        <div className="min-h-0">
          <div className="px-4 sm:px-6 pt-1 pb-6 flex flex-col sm:flex-row gap-5 sm:gap-10">
            {/* Description */}
            <p
              className={`${fira.className} flex-1 text-[var(--secondary-color)] leading-relaxed text-[3.6vw] sm:text-[1.9vw] md:text-[1.4vw] lg:text-[1.05vw] xl:text-[0.85vw]`}
            >
              {project.description}
            </p>

            {/* Side panel */}
            <div className="shrink-0 flex flex-col gap-4 sm:w-[190px] lg:w-[210px]">
              {/* All tools */}
              <div>
                <p
                  className={`${fira.className} text-[2.6vw] sm:text-[1.2vw] md:text-[0.9vw] lg:text-[0.65vw] xl:text-[0.55vw] uppercase tracking-[0.18em] text-[var(--primary-color)]/40 mb-2`}
                >
                  Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className={`${fira.className} text-[2.8vw] sm:text-[1.4vw] md:text-[1vw] lg:text-[0.72vw] xl:text-[0.62vw] px-2.5 py-1 rounded-full border border-[var(--primary-color)]/20 text-[var(--secondary-color)]`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links (useful on mobile where header icons are tiny) */}
              {(project.github || project.url) && (
                <div>
                  <p
                    className={`${fira.className} text-[2.6vw] sm:text-[1.2vw] md:text-[0.9vw] lg:text-[0.65vw] xl:text-[0.55vw] uppercase tracking-[0.18em] text-[var(--primary-color)]/40 mb-2`}
                  >
                    Links
                  </p>
                  <div className="flex gap-4">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className={`${fira.className} flex items-center gap-1.5 text-[3vw] sm:text-[1.5vw] md:text-[1.05vw] lg:text-[0.78vw] xl:text-[0.68vw] text-[var(--primary-color)] hover:underline underline-offset-2`}
                      >
                        <FaGithub size={12} />
                        GitHub
                      </Link>
                    )}
                    {project.url && (
                      <Link
                        href={project.url}
                        target="_blank"
                        className={`${fira.className} flex items-center gap-1.5 text-[3vw] sm:text-[1.5vw] md:text-[1.05vw] lg:text-[0.78vw] xl:text-[0.68vw] text-[var(--primary-color)] hover:underline underline-offset-2`}
                      >
                        <GoArrowUpRight size={13} />
                        Live
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <main className="pt-24 pb-28 mx-[5%] md:mx-[8%] lg:mx-[12%]">
      {/* Page heading */}
      <div className="mb-12 md:mb-16">
        <h1
          className={`${bric.className} font-bold text-[var(--primary-color)] leading-none text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[5vw] xl:text-[4vw]`}
        >
          Projects
        </h1>
        <p
          className={`${fira.className} mt-3 text-[var(--secondary-color)] text-[3.6vw] sm:text-[2.2vw] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[0.85vw]`}
        >
          {projects.length} projects — click any row to expand.
        </p>
      </div>

      {/* ── Featured table ── */}
      {featured.length > 0 && (
        <section className="mb-10 md:mb-14">
          <div className="flex items-center gap-3 mb-4">
            <h2
              className={`${fira.className} shrink-0 text-[3vw] sm:text-[1.6vw] md:text-[1.2vw] lg:text-[0.85vw] xl:text-[0.7vw] uppercase tracking-[0.2em] text-[var(--primary-color)]/45`}
            >
              Featured
            </h2>
            <div className="flex-1 h-px bg-[var(--primary-color)]/12" />
            <span
              className={`${fira.className} shrink-0 text-[3vw] sm:text-[1.4vw] md:text-[1vw] lg:text-[0.75vw] xl:text-[0.62vw] text-[var(--primary-color)]/30`}
            >
              {featured.length}
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[var(--primary-color)]/12">
            {/* Column labels */}
            <div className="hidden sm:flex px-6 py-3 border-b border-[var(--primary-color)]/10 bg-[var(--primary-color)]/[0.03]">
              <span
                className={`${fira.className} flex-1 text-[1.4vw] md:text-[0.95vw] lg:text-[0.7vw] xl:text-[0.58vw] uppercase tracking-[0.18em] text-[var(--primary-color)]/35`}
              >
                Project
              </span>
              <span
                className={`${fira.className} w-[38%] text-right pr-10 text-[1.4vw] md:text-[0.95vw] lg:text-[0.7vw] xl:text-[0.58vw] uppercase tracking-[0.18em] text-[var(--primary-color)]/35`}
              >
                Stack
              </span>
            </div>
            {featured.map((project) => (
              <ProjectRow key={project.name} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* ── All projects table ── */}
      {rest.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-4">
            <h2
              className={`${fira.className} shrink-0 text-[3vw] sm:text-[1.6vw] md:text-[1.2vw] lg:text-[0.85vw] xl:text-[0.7vw] uppercase tracking-[0.2em] text-[var(--primary-color)]/45`}
            >
              All projects
            </h2>
            <div className="flex-1 h-px bg-[var(--primary-color)]/12" />
            <span
              className={`${fira.className} shrink-0 text-[3vw] sm:text-[1.4vw] md:text-[1vw] lg:text-[0.75vw] xl:text-[0.62vw] text-[var(--primary-color)]/30`}
            >
              {rest.length}
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[var(--primary-color)]/12">
            <div className="hidden sm:flex px-6 py-3 border-b border-[var(--primary-color)]/10 bg-[var(--primary-color)]/[0.03]">
              <span
                className={`${fira.className} flex-1 text-[1.4vw] md:text-[0.95vw] lg:text-[0.7vw] xl:text-[0.58vw] uppercase tracking-[0.18em] text-[var(--primary-color)]/35`}
              >
                Project
              </span>
              <span
                className={`${fira.className} w-[38%] text-right pr-10 text-[1.4vw] md:text-[0.95vw] lg:text-[0.7vw] xl:text-[0.58vw] uppercase tracking-[0.18em] text-[var(--primary-color)]/35`}
              >
                Stack
              </span>
            </div>
            {rest.map((project) => (
              <ProjectRow key={project.name} project={project} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
