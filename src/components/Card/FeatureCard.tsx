import { bric, mont } from "@/styles/fonts";
import Image from "next/image";
import Skill from "../Text/Skill";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function FeatureCard({ feature }: { feature: Project }) {
  return (
    <>
      <div>
        <div className="mb-2 relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]">
          <Image
            src={feature.image || ""}
            alt={feature.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover w-full h-full"
            style={{ boxShadow: "0px 0px 6px rgba(1, 1, 1, 0.6)" }}
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div>
          <div className="flex justify-between items-center">
            {feature.url ? (
              <Link
                href={feature.url}
                aria-label={`Url for ${feature.name}`}
                className="className={`${bric.className} text-[var(--primary-color)] font-bold text-[7vw] md:text-[4.4vw] lg:text-[3.2vw] xl:text-[2.6vw]`}"
              >
                {feature.name}
              </Link>
            ) : (
              <h3
                className={`${bric.className} text-[var(--primary-color)] font-bold text-[7vw] md:text-[4.4vw] lg:text-[3.2vw] xl:text-[2.6vw]`}
              >
                {feature.name}
              </h3>
            )}
            <Link
              href={feature.github ?? ""}
              aria-label={`Github repo of: ${feature.name}`}
            >
              <FaGithub
                className={`${!feature.github && "hidden"} text-[3.2vh]`}
              />
            </Link>
          </div>
          <p className={`${mont.className} tracking-wide px-2`}>
            {feature.description}
          </p>
          <ul className="mt-2 p-2 flex flex-wrap gap-2 font-mono">
            {feature.tools.map((tool, idx) => (
              <Skill key={idx} skill={tool} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
