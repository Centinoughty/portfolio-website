import { bric } from "@/styles/fonts";
import TextDate from "../Text/TextDate";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  const sorted = [...experiences].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  );

  return (
    <div className="md:mx-[3%] flex flex-col gap-4">
      {sorted.map((exp, idx) => (
        <div
          key={idx}
          className={`bg-[var(--primary-color)] px-8 py-3 rounded-full flex justify-between items-center ${bric.className} w-full max-w-lg`}
          style={{ marginLeft: `${(idx / (sorted.length - 1 || 1)) * 40}%` }}
        >
          <div>
            <h3 className="font-bold text-[var(--accent)] text-[4.2vw] sm:text-[3vw] md:text-[2.4vw] lg:text-[1.8vw] xl:text-[1.1vw]">
              {exp.company}
            </h3>
            <p className="text-white/70 text-[3.9vw] sm:text-[2.4vw] md:text-[2vw] lg:text-[1.6vw] xl:text-[1vw]">
              {exp.role}
            </p>
          </div>
          <div className="font-semibold text-[var(--accent)]">
            <p className="text-nowrap">
              <TextDate date={exp.startDate} />{" "}
              {exp.endDate ? (
                <>
                  {" - "}
                  <TextDate date={exp.endDate} />
                </>
              ) : (
                "~"
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
