import Link from "next/link";
import { Blog } from "@/data/blogs";
import { bric, fira, mont } from "@/styles/fonts";
import { GoArrowUpRight } from "react-icons/go";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className={`group block rounded-[1.75rem] border border-[var(--primary-color)]/12 bg-[rgba(255,255,255,0.64)] p-6 shadow-[0_16px_40px_rgba(2,90,78,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-color)]/25 hover:bg-white/80 hover:shadow-[0_24px_60px_rgba(2,90,78,0.10)] sm:p-7`}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <span
          className={`${fira.className} text-[11px] uppercase tracking-[0.18em] text-[var(--primary-color)]/42`}
        >
          {formatDate(blog.date)}
        </span>
        <span
          className={`${fira.className} text-[11px] text-[var(--primary-color)]/34`}
        >
          {blog.readTime} min read
        </span>
      </div>

      <h2
        className={`${bric.className} mb-3 text-[1.6rem] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--primary-color)] transition-opacity group-hover:opacity-80 sm:text-[1.85rem]`}
      >
        {blog.title}
      </h2>

      <p
        className={`${mont.className} mb-5 line-clamp-3 text-[0.98rem] leading-7 text-[var(--secondary-color)]`}
      >
        {blog.summary}
      </p>

      <div className="flex items-center justify-between gap-3 border-t border-[var(--primary-color)]/8 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {blog.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={`${fira.className} rounded-full bg-[var(--primary-color)]/8 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-[var(--secondary-color)]`}
            >
              {tag}
            </span>
          ))}
          {blog.tags.length > 3 && (
            <span
              className={`${fira.className} rounded-full bg-[var(--primary-color)]/8 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-[var(--secondary-color)]`}
            >
              +{blog.tags.length - 3}
            </span>
          )}
        </div>
        <GoArrowUpRight
          className="shrink-0 text-[var(--primary-color)]/30 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary-color)]"
          size={16}
        />
      </div>
    </Link>
  );
}
