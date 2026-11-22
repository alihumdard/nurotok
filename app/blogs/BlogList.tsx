"use client";

import Image from "next/image";
import { useState } from "react";
import { posts, categories } from "./posts";

const PAGE = 6;

function Arrow() {
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

function CalendarIcon() {
  return <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>;
}

/** Filter pills, featured post and the grid of the rest. */
export default function BlogList() {
  const [active, setActive] = useState<string>("All posts");
  const [shown, setShown] = useState(PAGE);

  const filtered = active === "All posts" ? posts : posts.filter(p => p.category === active);
  const [featured, ...rest] = filtered;
  const visible = rest.slice(0, shown);

  const pick = (c: string) => {
    setActive(c);
    setShown(PAGE);
  };

  return (
    <>
      {/* Category filters: a two-column grid on phones, a row from sm */}
      <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
        {categories.map((c, i) => {
          const on = c === active;
          // "All posts" takes the full width so the rest pair up evenly
          const wide = i === 0 ? "col-span-2 sm:col-auto" : "";
          return (
            <button
              key={c}
              type="button"
              aria-pressed={on}
              onClick={() => pick(c)}
              className={`rounded-full border px-4 py-2.5 text-[15px] font-semibold transition-colors sm:px-5 sm:text-[16px] ${wide} ${
                on
                  ? "border-[#0B361F] bg-[#0B361F] text-white"
                  : "border-[#D5E2D8] bg-white text-[#0B361F] hover:border-[#367050] hover:text-[#367050]"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-[20px] text-[#2F4538]">No posts in this category yet.</p>
      ) : (
        <>
          {/* Featured */}
          <a
            href={`/blogs/${featured.slug}/`}
            className="group mt-8 grid overflow-hidden rounded-[6px] border border-[#D5E2D8] bg-white transition hover:border-[#367050] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[320px]">
              <Image
                src={featured.image}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={82}
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <span className="inline-flex w-fit rounded-full bg-[#BDEED7] px-3.5 py-1.5 text-[13px] font-bold uppercase tracking-[0.06em] text-[#0B361F]">
                Featured
              </span>
              <h2 className="mt-4 text-[28px] font-bold leading-[1.18] tracking-[-0.02em] text-[#0B361F] sm:text-[34px]">
                {featured.title}
              </h2>
              <p className="mt-3 text-[19px] leading-[1.55] text-[#2F4538] lg:text-[20px]">{featured.excerpt}</p>
              <p className="mt-5 flex items-center gap-2 text-[16px] text-[#3E5146]">
                <CalendarIcon />
                <time dateTime={featured.iso}>{featured.date}</time>
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-[18px] font-bold text-[#367050] group-hover:text-[#0B361F]">
                Read the article <Arrow />
              </span>
            </div>
          </a>

          {/* The rest */}
          {visible.length > 0 && (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map(p => (
                <a
                  key={p.slug}
                  href={`/blogs/${p.slug}/`}
                  className="group flex flex-col overflow-hidden rounded-[6px] border border-[#D5E2D8] bg-white transition hover:border-[#367050]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      quality={80}
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="inline-flex w-fit rounded-full bg-[#EDF7F1] px-3 py-1 text-[13px] font-bold text-[#367050]">
                      {p.category}
                    </span>
                    <h3 className="mt-3 text-[21px] font-bold leading-[1.3] text-[#0B361F] lg:text-[23px]">{p.title}</h3>
                    <p className="mt-2 text-[17px] leading-[1.5] text-[#2F4538]">{p.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between gap-3 pt-1">
                      <p className="flex items-center gap-2 text-[15px] text-[#3E5146]">
                        <CalendarIcon />
                        <time dateTime={p.iso}>{p.date}</time>
                      </p>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F6F3EC] text-[#0B361F] transition group-hover:bg-[#0B361F] group-hover:text-white">
                        <Arrow />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

          {rest.length > shown && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShown(n => n + PAGE)}
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#0B361F] px-6 py-3 text-[17px] font-semibold text-[#0B361F] transition-colors hover:bg-[#0B361F] hover:text-white"
              >
                Load more posts
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
}
