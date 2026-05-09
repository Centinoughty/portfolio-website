import fs from "fs/promises";
import path from "path";

import { notFound } from "next/navigation";
import Link from "next/link";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import { blogs } from "@/data/blogs";
import { bric, fira, mont } from "@/styles/fonts";

import { GoArrowLeft } from "react-icons/go";

interface Props {
  params: Promise<{ slug: string }>;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

async function getMarkdownContent(slug: string) {
  const filePath = path.join(process.cwd(), "src/data/blogs", `${slug}.md`);

  try {
    return await fs.readFile(filePath, "utf8");
  } catch {
    return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) notFound();

  const content = await getMarkdownContent(slug);

  if (!content) notFound();

  const idx = blogs.indexOf(blog);

  const prev = idx < blogs.length - 1 ? blogs[idx + 1] : null;
  const next = idx > 0 ? blogs[idx - 1] : null;

  return (
    <main className="pt-24 pb-28 px-[5%] md:px-[8%] lg:px-[10%] xl:px-[12%]">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
        <aside className="lg:sticky lg:top-24">
          <Link
            href="/blogs"
            className={`${fira.className} inline-flex items-center gap-2 rounded-full border border-[var(--primary-color)]/12 bg-white/65 px-4 py-2 text-sm text-[var(--primary-color)]/58 transition-colors hover:text-[var(--primary-color)]`}
          >
            <GoArrowLeft size={13} />
            All posts
          </Link>

          <div className="mt-6 rounded-[2rem] border border-[var(--primary-color)]/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(241,237,230,0.95))] p-6 shadow-[0_20px_60px_rgba(2,90,78,0.08)]">
            <p
              className={`${fira.className} text-xs uppercase tracking-[0.22em] text-[var(--primary-color)]/45`}
            >
              Article
            </p>

            <h1
              className={`${bric.className} mt-4 text-4xl font-bold leading-[0.96] tracking-[-0.04em] text-[var(--primary-color)] sm:text-5xl lg:text-[3.35rem]`}
            >
              {blog.title}
            </h1>

            <p
              className={`${mont.className} mt-5 text-base leading-8 text-[var(--secondary-color)]`}
            >
              {blog.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className={`${fira.className} rounded-full border border-[var(--primary-color)]/14 bg-white/80 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-[var(--secondary-color)]`}
                >
                  {tag}
                </span>
              ))}

              {blog.featured && (
                <span
                  className={`${fira.className} rounded-full bg-[var(--primary-color)] px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-[var(--accent)]`}
                >
                  Featured
                </span>
              )}
            </div>

            <dl className="mt-8 grid gap-4 rounded-2xl border border-[var(--primary-color)]/10 bg-white/65 p-4 text-sm">
              <div className="flex items-center justify-between gap-4 border-b border-[var(--primary-color)]/8 pb-3">
                <dt className={`${mont.className} text-[var(--secondary-color)]`}>
                  Published
                </dt>
                <dd className={`${bric.className} text-[var(--primary-color)]`}>
                  {formatDate(blog.date)}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className={`${mont.className} text-[var(--secondary-color)]`}>
                  Reading time
                </dt>
                <dd className={`${bric.className} text-[var(--primary-color)]`}>
                  {blog.readTime} min
                </dd>
              </div>
            </dl>
          </div>
        </aside>

        <div className="min-w-0">
          <article className="rounded-[2rem] border border-[var(--primary-color)]/12 bg-[rgba(255,255,255,0.7)] px-6 py-8 shadow-[0_22px_70px_rgba(2,90,78,0.07)] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div className="blog-content max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
              >
                {content}
              </ReactMarkdown>
            </div>
          </article>

          <nav className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {prev && (
              <Link
                href={`/blogs/${prev.slug}`}
                className="group flex flex-col gap-1 rounded-[1.5rem] border border-[var(--primary-color)]/12 bg-white/65 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary-color)]/24 hover:bg-white"
              >
                <span
                  className={`${fira.className} text-xs uppercase tracking-[0.18em] text-[var(--primary-color)]/40`}
                >
                  Older
                </span>

                <span
                  className={`${bric.className} text-lg font-semibold leading-snug text-[var(--primary-color)] transition-opacity group-hover:opacity-80`}
                >
                  {prev.title}
                </span>
              </Link>
            )}

            {next && (
              <Link
                href={`/blogs/${next.slug}`}
                className={`group flex flex-col gap-1 rounded-[1.5rem] border border-[var(--primary-color)]/12 bg-white/65 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary-color)]/24 hover:bg-white ${!prev ? "sm:col-start-2" : ""}`}
              >
                <span
                  className={`${fira.className} text-xs uppercase tracking-[0.18em] text-[var(--primary-color)]/40`}
                >
                  Newer
                </span>

                <span
                  className={`${bric.className} text-lg font-semibold leading-snug text-[var(--primary-color)] transition-opacity group-hover:opacity-80`}
                >
                  {next.title}
                </span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return blogs.map((b) => ({
    slug: b.slug,
  }));
}
