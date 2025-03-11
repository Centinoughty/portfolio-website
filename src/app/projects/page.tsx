import { bric } from "@/styles/fonts";

export default function Home() {
  return (
    <>
      <main className="pt-16 mx-[5%]">
        <h1
          className={`${bric.className} text-[var(--primary-color)] font-bold text-[8vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw]`}
        >
          My Projects
        </h1>

        <section></section>
      </main>
    </>
  );
}
