"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type Slide = {
  /** "image" slides show a photo; "video" slides play the file when opened. */
  kind: "image" | "video";
  src: string;
  /** Still frame shown before a video is played. */
  poster?: string;
  alt: string;
  /** "screen" shows an app screenshot whole, on a soft mint panel. */
  fit?: "cover" | "screen";
  eyebrow: string;
  title: string;
  text: string;
  cta: { label: string; href: string };
};

const AUTO_MS = 7000;

/**
 * Top-of-page slider of images and videos (client request).
 * Auto-advances, pauses on hover/focus and whenever a video is playing,
 * and stops entirely for visitors who prefer reduced motion.
 */
export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  const go = useCallback(
    (i: number) => {
      setPlaying(false);
      setActive((i + slides.length) % slides.length);
    },
    [slides.length],
  );

  // Auto-advance
  useEffect(() => {
    if (paused || playing || slides.length < 2) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => go(active + 1), AUTO_MS);
    return () => clearTimeout(t);
  }, [active, paused, playing, go, slides.length]);

  useEffect(() => {
    if (playing) video.current?.play().catch(() => {});
  }, [playing]);

  const slide = slides[active];

  const arrow =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9DACB] bg-white text-[#0B361F] shadow-sm transition hover:bg-[#0B361F] hover:text-white";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="NuroTok highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="relative grid overflow-hidden rounded-[6px] border border-[#D5E2D8] bg-white lg:grid-cols-2"
    >
      {/* Copy */}
      <div className="relative z-10 order-2 p-7 sm:p-10 lg:order-1 lg:py-12 lg:pl-12">
        <p className="text-[20px] font-bold text-[#0B361F]">{slide.eyebrow}</p>
        <span aria-hidden="true" className="mt-2 block h-1 w-12 rounded-full bg-[#367050]" />
        <h1 className="mt-5 text-[40px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0B361F] sm:text-[52px] lg:text-[60px]">
          {slide.title}
        </h1>
        <p className="mt-4 max-w-[520px] text-[20px] leading-[1.5] text-[#1F3A2B]">{slide.text}</p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[19px] font-bold">
          <a href={slide.cta.href} className="inline-flex items-center gap-2 text-[#367050] hover:text-[#0B361F]">
            {slide.cta.label}
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center gap-4">
          <button type="button" aria-label="Previous slide" onClick={() => go(active - 1)} className={arrow}>
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
          </button>
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                aria-label={`Show slide ${i + 1}: ${s.title}`}
                aria-current={active === i}
                onClick={() => go(i)}
                className={`h-2.5 rounded-full transition-all ${active === i ? "w-7 bg-[#0B361F]" : "w-2.5 bg-[#B9CFBF]"}`}
              />
            ))}
          </div>
          <button type="button" aria-label="Next slide" onClick={() => go(active + 1)} className={arrow}>
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>

      {/* Media */}
      <div className="relative order-1 min-h-[280px] overflow-hidden lg:order-2 lg:min-h-[420px]">
        {slide.kind === "video" && playing ? (
          <video
            ref={video}
            src={slide.src}
            controls
            playsInline
            preload="metadata"
            aria-label={slide.alt}
            onEnded={() => setPlaying(false)}
            className="absolute inset-0 h-full w-full bg-[#06150D] object-contain"
          />
        ) : (
          <>
            <Image
              key={slide.src}
              src={slide.kind === "video" ? (slide.poster as string) : slide.src}
              alt={slide.alt}
              fill
              priority={active === 0}
              sizes="(min-width: 1024px) 50vw, 100vw"
              quality={82}
              className={
                slide.fit === "screen"
                  ? "bg-[#EDF7F1] object-contain object-center p-6 lg:p-10"
                  : "object-cover object-center lg:[clip-path:ellipse(95%_150%_at_100%_50%)]"
              }
            />
            {slide.kind === "video" && (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={`Play: ${slide.alt}`}
                className="group absolute inset-0 flex items-center justify-center"
              >
                <span
                  data-light
                  className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white text-[#0B361F] shadow-[0_10px_28px_rgba(0,0,0,0.28)] transition-transform duration-300 group-hover:scale-110"
                >
                  <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="ml-[3px]"><path d="M7 4.8v14.4c0 .8.9 1.3 1.6.9l11.2-7.2c.6-.4.6-1.4 0-1.8L8.6 3.9C7.9 3.5 7 4 7 4.8z" /></svg>
                </span>
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
