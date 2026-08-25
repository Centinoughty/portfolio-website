"use client";

import { useEffect, useRef, useState } from "react";
import { bric, fira, mont } from "@/styles/fonts";
import TextDate from "../Text/TextDate";
import { experiences } from "@/data/experience";

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function ExperienceSection() {
  const sortedExperiences = [...experiences].reverse();

  return (
    <div className="md:mx-[3%] border-y border-[var(--primary-color)]/12">
      {sortedExperiences.map((experience, index) => (
        <article
          key={`${experience.company}-${experience.role}`}
          className="group grid gap-4 border-b border-[var(--primary-color)]/10 py-6 last:border-b-0 sm:grid-cols-[72px_170px_minmax(0,1fr)] sm:gap-6 sm:py-7 lg:grid-cols-[84px_210px_minmax(0,1fr)] lg:gap-8"
        >
          <div
            className={`${fira.className} flex items-start justify-between text-xs text-[var(--primary-color)]/35 sm:block`}
          >
            <span className="text-lg text-[var(--primary-color)]/55">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="sm:hidden">
              {formatDate(experience.startDate)}
            </span>
          </div>
          <div>
            <p
              className={`${fira.className} hidden text-[10px] uppercase tracking-[0.16em] text-[var(--primary-color)]/45 sm:block`}
            >
              {formatDate(experience.startDate)} —{" "}
              {experience.endDate ? formatDate(experience.endDate) : "Present"}
            </p>
            <h3
              className={`${bric.className} mt-1 text-2xl font-semibold tracking-[-0.03em] text-[var(--primary-color)] sm:text-3xl`}
            >
              {experience.company}
            </h3>
            <p
              className={`${fira.className} mt-1 text-xs uppercase tracking-[0.12em] text-[var(--secondary-color)]/60`}
            >
              {experience.role}
            </p>
          </div>
          <div className="flex items-start justify-between gap-6">
            <p
              className={`${mont.className} max-w-2xl text-sm leading-7 text-[var(--secondary-color)] sm:text-base`}
            >
              {experience.description}
            </p>
            <span className="mt-1 hidden h-2.5 w-2.5 shrink-0 rounded-full border-2 border-[var(--primary-color)]/35 transition-colors group-hover:border-[var(--primary-color)] sm:block" />
          </div>
        </article>
      ))}
    </div>
  );
}
