import { bric } from "@/styles/fonts";

export default function Title({ text }: { text: string }) {
  return (
    <>
      <h2
        className={`${bric.className} my-6 text-[var(--primary-color)] font-semibold text-[9vw] sm:text-[7vw] md:text-[4.2vw] lg:text-[2.5vw]`}
      >
        {text}
      </h2>
    </>
  );
}
