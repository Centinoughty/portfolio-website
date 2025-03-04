import { bric, fira, mont } from "@/styles/fonts";
import { Project } from "../../../util/types";

export default function FeatureCard({ feature }: { feature: Project }) {
  return (
    <>
      <div>
        <div className="mb-2 relative">
          <img
            src={feature.image}
            alt={feature.name}
            className="w-full object-cover"
            style={{ boxShadow: "0px 0px 6px rgba(1, 1, 1, 0.6)" }}
          />
          <div className="absolute w-full h-full inset-0 bg-black/20"></div>
        </div>
        <div>
          <h3
            className={`${bric.className} text-[var(--primary-color)] font-bold text-[7vw] md:text-[4.4vw] lg:text-[3.2vw] xl:text-[2.6vw]`}
          >
            {feature.name}
          </h3>
          <p className={`${mont.className} tracking-wide px-2`}>
            {feature.description}
          </p>
          <ul className="p-2 flex flex-wrap gap-3 font-mono">
            {feature.tools.map((tool, idx) => (
              <li
                key={idx}
                className="text-[var(--secondary-color)] px-2 py-1 rounded-full bg-[var(--primary-color)]/10 text-sm"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
