import { Bricolage_Grotesque } from "next/font/google";

const bric = Bricolage_Grotesque({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex justify-center bg-gradient-to-b from-[#e6eee3] to-[var(--accent)]">
        <div className="mt-32 flex flex-col items-center">
          <div
            className={`${bric.className} text-[14vw] md:text-[8vw] lg:text-[6vw] font-bold text-[var(--primary-color)]`}
          >
            <h1>I'm Nadeem.</h1>
            <h2 className="-mt-[7%]">A Developer.</h2>
          </div>
          <div className="mx-4 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <p className="text-center text-[#4b5f5a] font-medium text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.05vw]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eos
              amet corporis quas pariatur? Mollitia?
            </p>
          </div>
        </div>
      </main>
      <section id="" className="h-screen"></section>
      <section id="" className="h-screen"></section>
    </>
  );
}
