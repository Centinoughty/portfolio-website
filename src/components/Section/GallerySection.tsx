"use client";

import Image from "next/image";
import { bric, fira } from "@/styles/fonts";
import Title from "../Text/Title";

// ── Replace src values with your actual photo paths ──
const photos = [
  {
    src: "https://picsum.photos/1000/1000",
    alt: "Nadeem — portrait",
    caption: "Building something",
  },
  {
    src: "https://picsum.photos/1000/1000",
    alt: "Nadeem — at work",
    caption: "At the lab",
  },
  {
    src: "https://picsum.photos/1000/1000",
    alt: "Nadeem — outdoors",
    caption: "Somewhere outside",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="mx-[5%]">
      <Title text="A Glimpse" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[260px]">
        {/* Photo 1 — tall, spans 2 rows */}
        <div className="relative col-span-1 row-span-2 group overflow-hidden rounded-2xl">
          <Image
            src={photos[0].src}
            alt={photos[0].alt}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <p
            className={`${fira.className} absolute bottom-4 left-4 text-[var(--accent)] text-[2.8vw] sm:text-[1.4vw] md:text-[1vw] lg:text-[0.75vw] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0`}
          >
            {photos[0].caption}
          </p>
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
        </div>

        {/* Photo 2 — wide, spans 2 columns */}
        <div className="relative col-span-1 md:col-span-2 row-span-1 group overflow-hidden rounded-2xl">
          <Image
            src={photos[1].src}
            alt={photos[1].alt}
            fill
            sizes="(max-width: 768px) 50vw, 66vw"
            className="object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)]/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <p
            className={`${fira.className} absolute bottom-4 left-4 text-[var(--accent)] text-[2.8vw] sm:text-[1.4vw] md:text-[1vw] lg:text-[0.75vw] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0`}
          >
            {photos[1].caption}
          </p>
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
        </div>

        {/* Photo 3 — square */}
        <div className="relative col-span-1 md:col-span-2 row-span-1 group overflow-hidden rounded-2xl">
          <Image
            src={photos[2].src}
            alt={photos[2].alt}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)]/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <p
            className={`${fira.className} absolute bottom-4 left-4 text-[var(--accent)] text-[2.8vw] sm:text-[1.4vw] md:text-[1vw] lg:text-[0.75vw] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0`}
          >
            {photos[2].caption}
          </p>
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <div className="flex-1 h-px bg-[var(--primary-color)]/10" />
        <span
          className={`${fira.className} text-[var(--primary-color)]/25 text-[2.5vw] sm:text-[1.2vw] md:text-[0.8vw] lg:text-[0.6vw] tracking-[0.3em] uppercase`}
        >
          nadeem m siyam
        </span>
        <div className="flex-1 h-px bg-[var(--primary-color)]/10" />
      </div>
    </section>
  );
}
