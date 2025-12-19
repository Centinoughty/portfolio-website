import Image from "next/image";

interface Skill {
  _id: string;
  name: string;
  image: string;
}

interface SkillProps {
  skills: Skill[];
}

export default function SkillsGrid({ skills }: SkillProps) {
  return (
    <>
      <div className="px-2 flex flex-wrap gap-x-[13px] gap-y-5 md:gap-5">
        {skills.map((skill: any) => (
          <Image
            key={skill._id}
            src={skill.image}
            alt={skill.name}
            width={40}
            height={40}
          />
        ))}
      </div>
    </>
  );
}
