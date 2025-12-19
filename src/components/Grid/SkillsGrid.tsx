"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Skill {
  _id: string;
  name: string;
  image: string;
}

export default function SkillsGrid() {
  const [skills, setSkills] = useState<Skill[]>([]);

  const fetchSkills = async () => {
    try {
      const res = await axios.get("https://admin.nadeemsiyam.com/api/skills");

      console.log(res.data);
      setSkills(res.data);
    } catch (error) {
      console.log("Fetching skills failed");
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

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
