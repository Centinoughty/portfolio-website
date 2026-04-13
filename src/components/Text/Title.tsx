import { bric, fira } from "@/styles/fonts";

export default function Title({ text, sub }: { text: string; sub?: string }) {
  return (
    <>
      <h2
        className={`${bric.className} my-6 text-[var(--primary-color)] font-semibold text-[9vw] sm:text-[7vw] md:text-[4.2vw] lg:text-[2.5vw] leading-none`}
      >
        {text}
      </h2>
    </>
  );
}
