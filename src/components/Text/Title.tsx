import { bric } from "@/styles/fonts";

export default function Title({ text }: { text: string }) {
  return (
    <>
      <h2
        className={`${bric.className} my-4 text-[var(--primary-color)] font-semibold text-[9vw] md:text-[4.2vw] lg:text-[2.5vw]`}
      >
        {text}
      </h2>
    </>
  );
}
