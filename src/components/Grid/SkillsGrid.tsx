import Image from "next/image";
import { skills } from "@/data/skills";

export default function SkillsGrid() {
  return (
    <>
      <div className="px-2 flex flex-wrap gap-x-[13px] gap-y-5 md:gap-5">
        {skills.map((skill) => (
          <Image
            key={skill._id}
            src={`/skills/${skill.name.toLowerCase().split(".")[0]}.svg`}
            alt={skill.name}
            width={40}
            height={40}
          />
        ))}
      </div>
    </>
  );
}
