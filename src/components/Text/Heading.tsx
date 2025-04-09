import { fira } from "@/styles/fonts";

interface HeadingProps {
  text: string;
}

export default function Heading({ text }: HeadingProps) {
  return (
    <>
      <h3
        className={`mb-2 text-[var(--primary-color)] ${fira.className} font-semibold text-[5vw] md:text-[3vw] lg:text-[2vw] xl:text-[1.3vw]`}
      >
        [{text}]
      </h3>
    </>
  );
}
