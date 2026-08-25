import Image from "next/image";
import { skills } from "@/data/skills";
import { bric, fira } from "@/styles/fonts";

const groups = [
  { label: "Build", items: skills.slice(0, 8) },
  { label: "Store & ship", items: skills.slice(8, 16) },
  { label: "Work with", items: skills.slice(16) },
];

export default function SkillsGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <div
          key={group.label}
          className="rounded-2xl border border-[var(--primary-color)]/12 bg-white/45 p-4"
        >
          <div className="mb-4 flex items-center justify-between">
            <h4
              className={`${bric.className} text-xl font-semibold text-[var(--primary-color)]`}
            >
              {group.label}
            </h4>
            <span
              className={`${fira.className} text-[10px] text-[var(--primary-color)]/35`}
            >
              {String(group.items.length).padStart(2, "0")}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {group.items.map((skill) => (
              <div
                key={skill}
                className="flex min-w-0 items-center gap-2 rounded-xl border border-[var(--primary-color)]/8 bg-white/55 px-2 py-2"
              >
                <Image
                  src={`/skills/${skill.toLowerCase().split(".")[0]}.svg`}
                  alt=""
                  width={22}
                  height={22}
                  className="shrink-0"
                />
                <span
                  className={`${fira.className} truncate text-[10px] text-[var(--secondary-color)]`}
                >
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
