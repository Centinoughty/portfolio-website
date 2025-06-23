import { bric } from "@/styles/fonts";

const experiences = [
  {
    company: "NITC Hostels",
    project: "Hostel Website",
    date: "Jan 2025 - Present",
    title: "Lead Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
  },
  {
    company: "CSED NITC",
    project: "Minerva",
    date: "Dec 2024 - Feb 2025",
    title: "Junior Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
  },
  {
    company: "Pediaverse",
    project: "OGS",
    date: "Dec 2024 - Mar 2025",
    title: "Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
  },
];

export default function ExperienceSection() {
  return (
    <div
      className={`${bric.className} flex flex-col items-center gap-8 w-full max-w-7xl mx-auto py-10 px-4`}
    >
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="flex justify-between gap-4 md:gap-12 w-full relative"
        >
          <div className="min-w-[120px] w-1/3">
            <h3 className="text-[6vw] sm:text-[6vw] md:text-[4vw] lg:text-[2.5vw] xl:text-[1.8vw] font-semibold text-[var(--primary-color)]">
              {exp.project}
            </h3>
            <p className="xl:text-[1.2vw] font-medium text-[var(--secondary-color)]">
              {exp.company}
            </p>
            <p className="xl:text-[1.2vw] text-[var(--secondary-color)]">
              {exp.date}
            </p>
          </div>

          <div className="relative flex flex-col items-center">
            <div className="w-9 h-9 rounded-full border-3 border-dashed border-gray-500 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-[var(--primary-color)]"></div>
            </div>
            {idx < experiences.length - 1 && (
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-[98%] border-l-3 border-dashed border-gray-400 z-0" />
            )}
          </div>

          <div className="w-1/3">
            <h3 className="text-[6vw] sm:text-[6vw] md:text-[4vw] lg:text-[2.5vw] xl:text-[1.8vw] font-semibold">
              {exp.title}
            </h3>
            {exp.description && (
              <p className="text-[var(--secondary-color)] text-lg mt-2 leading-relaxed">
                {exp.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
