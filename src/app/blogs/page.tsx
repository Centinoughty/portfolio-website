"use client";

import { useState, useMemo } from "react";
import { bric, fira, mont } from "@/styles/fonts";
import { blogs } from "@/data/blogs";
import BlogCard from "@/components/Card/BlogCard";

const ALL_TAG = "All";

export default function BlogsPage() {
  const [activeTag, setActiveTag] = useState(ALL_TAG);

  const tags = useMemo(() => {
    const set = new Set<string>();
    blogs.forEach((b) => b.tags.forEach((t) => set.add(t)));
    return [ALL_TAG, ...Array.from(set).sort()];
  }, []);

  const featured = blogs.filter((b) => b.featured);
  const filtered =
    activeTag === ALL_TAG
      ? blogs
      : blogs.filter((b) => b.tags.includes(activeTag));

  const nonFeaturedFiltered =
    activeTag === ALL_TAG
      ? blogs.filter((b) => !b.featured)
      : filtered.filter((b) => !b.featured);

  return (
    <main className="pt-24 pb-28 px-[5%] md:px-[8%] lg:px-[10%] xl:px-[12%]">
      <section className="relative overflow-hidden rounded-[2rem] border border-[var(--primary-color)]/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.64),rgba(241,237,230,0.88))] px-6 py-10 shadow-[0_24px_80px_rgba(2,90,78,0.08)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,90,78,0.10),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(2,90,78,0.06),transparent_35%)]" />

        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.6fr)] lg:items-end">
          <div className="max-w-3xl">
            <p
              className={`${fira.className} mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--primary-color)]/12 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[var(--primary-color)]/60`}
            >
              Notes from the lab
            </p>

            <h1
              className={`${bric.className} max-w-2xl text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-[var(--primary-color)] sm:text-5xl lg:text-6xl`}
            >
              Writing that reads like a calm, useful conversation.
            </h1>

            <p
              className={`${mont.className} mt-5 max-w-2xl text-base leading-8 text-[var(--secondary-color)] sm:text-lg`}
            >
              {blogs.length} posts on engineering, systems, and the little
              lessons that make a build feel thoughtful instead of rushed.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 text-sm text-[var(--primary-color)]/70">
              <span className="rounded-full border border-[var(--primary-color)]/12 bg-white/70 px-3 py-1.5">
                Readable layouts
              </span>
              <span className="rounded-full border border-[var(--primary-color)]/12 bg-white/70 px-3 py-1.5">
                Clear spacing
              </span>
              <span className="rounded-full border border-[var(--primary-color)]/12 bg-white/70 px-3 py-1.5">
                DEV-inspired rhythm
              </span>
            </div>
          </div>

          <div className="relative rounded-2xl border border-[var(--primary-color)]/12 bg-[rgba(255,255,255,0.72)] p-5 backdrop-blur-sm">
            <p
              className={`${fira.className} text-xs uppercase tracking-[0.22em] text-[var(--primary-color)]/45`}
            >
              Reading cues
            </p>
            <dl className="mt-5 grid gap-4 text-sm">
              <div className="flex items-center justify-between gap-4 border-b border-[var(--primary-color)]/8 pb-3">
                <dt
                  className={`${mont.className} text-[var(--secondary-color)]`}
                >
                  Featured stories
                </dt>
                <dd
                  className={`${bric.className} text-xl text-[var(--primary-color)]`}
                >
                  {featured.length}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-[var(--primary-color)]/8 pb-3">
                <dt
                  className={`${mont.className} text-[var(--secondary-color)]`}
                >
                  Filters
                </dt>
                <dd
                  className={`${bric.className} text-xl text-[var(--primary-color)]`}
                >
                  {tags.length - 1}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt
                  className={`${mont.className} text-[var(--secondary-color)]`}
                >
                  Current view
                </dt>
                <dd
                  className={`${bric.className} text-lg text-[var(--primary-color)]`}
                >
                  {activeTag === ALL_TAG ? "All posts" : activeTag}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <div className="mt-8 mb-10 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`${fira.className} cursor-pointer rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-all duration-200 ${
              activeTag === tag
                ? "border-[var(--primary-color)] bg-[var(--primary-color)] text-[var(--accent)] shadow-[0_10px_24px_rgba(2,90,78,0.18)]"
                : "border-[var(--primary-color)]/15 bg-white/60 text-[var(--secondary-color)] hover:border-[var(--primary-color)]/40 hover:text-[var(--primary-color)]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {activeTag === ALL_TAG && featured.length > 0 && (
        <section className="mb-14 md:mb-16">
          <div className="mb-6 flex items-center gap-4">
            <h2
              className={`${fira.className} shrink-0 text-xs uppercase tracking-[0.25em] text-[var(--primary-color)]/45`}
            >
              Featured
            </h2>
            <div className="h-px flex-1 bg-[var(--primary-color)]/12" />
            <span
              className={`${mont.className} shrink-0 text-sm text-[var(--primary-color)]/35`}
            >
              {featured.length} selected
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {featured.map((blog, idx) => (
              <BlogCard key={idx} blog={blog} />
            ))}
          </div>
        </section>
      )}

      {(activeTag !== ALL_TAG ? filtered : nonFeaturedFiltered).length > 0 && (
        <section>
          <div className="mb-6 flex items-center gap-4">
            <h2
              className={`${fira.className} shrink-0 text-xs uppercase tracking-[0.25em] text-[var(--primary-color)]/45`}
            >
              {activeTag === ALL_TAG ? "All posts" : activeTag}
            </h2>
            <div className="h-px flex-1 bg-[var(--primary-color)]/12" />
            <span
              className={`${mont.className} shrink-0 text-sm text-[var(--primary-color)]/35`}
            >
              {activeTag === ALL_TAG
                ? nonFeaturedFiltered.length
                : filtered.length}{" "}
              posts
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {(activeTag !== ALL_TAG ? filtered : nonFeaturedFiltered).map(
              (blog, idx) => (
                <BlogCard key={idx} blog={blog} />
              ),
            )}
          </div>
        </section>
      )}

      {activeTag !== ALL_TAG && filtered.length === 0 && (
        <div className="py-20 text-center">
          <p
            className={`${mont.className} text-lg text-[var(--secondary-color)]/55`}
          >
            No posts tagged “{activeTag}” yet.
          </p>
        </div>
      )}
    </main>
  );
}
