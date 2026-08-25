import { bric, fira, mont } from "@/styles/fonts";
import Image from "next/image";
import Skill from "../Text/Skill";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/data/projects";

export default function FeatureCard({ feature }: { feature: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[var(--primary-color)]/12 bg-white/45 p-3 shadow-[0_16px_40px_rgba(2,90,78,0.05)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 hover:shadow-[0_24px_60px_rgba(2,90,78,0.1)]">
      <div className="relative mb-4 h-[200px] w-full overflow-hidden rounded-xl sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]">
        <Image
          src={feature.image!}
          alt={feature.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-[var(--primary-color)]/10 mix-blend-multiply" />
        <span className={`${fira.className} absolute left-4 top-4 rounded-full bg-[var(--accent)]/90 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--primary-color)]`}>Featured</span>
      </div>

      <div className="px-2 pb-2">
        <div className="flex items-center justify-between gap-3">
          {feature.url ? (
            <Link
              href={feature.url}
              aria-label={`Url for ${feature.name}`}
              className={`${bric.className} text-[var(--primary-color)] font-bold text-3xl tracking-[-0.04em] transition-opacity group-hover:opacity-75 sm:text-4xl`}
            >
              {feature.name}
            </Link>
          ) : (
            <h3
              className={`${bric.className} text-[var(--primary-color)] font-bold text-3xl tracking-[-0.04em] sm:text-4xl`}
            >
              {feature.name}
            </h3>
          )}
          {feature.github && (
            <Link
              href={feature.github}
              aria-label={`Github repo of: ${feature.name}`}
              target="_blank"
            >
              <FaGithub className="text-[3.2vh]" />
            </Link>
          )}
        </div>
        <p className={`${mont.className} mt-2 max-w-2xl text-sm leading-7 text-[var(--secondary-color)] sm:text-base`}>
          {feature.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-[var(--primary-color)]/10 pt-4 font-mono">
          {feature.tools.map((tool, idx) => (
            <Skill key={idx} skill={tool} />
          ))}
        </ul>
      </div>
    </article>
  );
}
