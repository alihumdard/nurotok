"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import PhoneFrame from "./PhoneFrame";

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

const AUTO_MS = 4500;
/** Longest a video slide may hold the slider, even if it never reports ending. */
const VIDEO_MAX_MS = 45000;

/**
 * Top-of-page slider of images and videos (client request).
 * Advances on its own with no visible controls: an image slide holds for
 * AUTO_MS, a video slide plays muted and moves on when it ends or when the
 * viewer pauses it. It runs unattended and stops only for visitors who
 * prefer reduced motion.
 */
export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  const go = useCallback(
    (i: number) => {
      setPlaying(false);
      setActive((i + slides.length) % slides.length);
    },
    [slides.length],
  );

  const slide = slides[active];
  // A video slide fills the panel on its own, with no copy beside it (client request).
  const solo = slide.kind === "video";

  // Auto-advance
  useEffect(() => {
    if (slide.kind === "video" || slides.length < 2) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => go(active + 1), AUTO_MS);
    return () => clearTimeout(t);
  }, [active, slide.kind, go, slides.length]);

  // A video slide plays as soon as it comes round (client request). Autoplay is
  // only permitted while muted, so the video starts muted and the viewer can
  // unmute from the controls.
  useEffect(() => {
    setPlaying(slides[active].kind === "video");
  }, [active, slides]);

  useEffect(() => {
    if (playing) video.current?.play().catch(() => {});
  }, [playing]);

  // A video hands over when it ends. This is the backstop: if playback never
  // starts, is paused, or stalls, the slide moves on anyway.
  useEffect(() => {
    if (slide.kind !== "video" || slides.length < 2) return;
    const started = Date.now();
    const id = setInterval(() => {
      const v = video.current;
      const stalled = !v || v.paused || !v.currentTime;
      const overran = Date.now() - started > VIDEO_MAX_MS;
      if (stalled ? Date.now() - started > 6000 : overran) go(active + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [active, slide.kind, go, slides.length]);


  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="NuroTok highlights"
      className={`relative grid overflow-hidden rounded-[6px] border border-[#D5E2D8]${solo ? " bg-[#E8E4D8]" : " bg-white lg:grid-cols-2"}`}
    >
      {/* Copy — hidden while a video slide is showing */}
      {!solo && (
      <div className="relative z-10 order-2 min-h-0 p-7 sm:p-10 lg:order-1 lg:overflow-y-auto lg:py-10 lg:pl-12">
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

      </div>
      )}

      {/* Media */}
      <div className={`relative order-1 min-h-0 overflow-hidden lg:order-2 ${solo ? "mx-auto aspect-[16/9] w-full max-w-[calc((100svh-210px)*16/9)]" : "h-[70vw] max-h-[520px] min-h-[280px] lg:h-auto lg:max-h-none lg:min-h-[520px]"}`}>
        {slide.kind === "video" && playing ? (
          <video
            ref={video}
            src={slide.src}
            controls
            autoPlay
            muted
            playsInline
            preload="auto"
            aria-label={slide.alt}
            onEnded={() => go(active + 1)}
            onPause={e => {
              // Move on when the viewer pauses, but ignore the pause the
              // browser fires as the clip ends or before playback has begun.
              const v = e.currentTarget;
              if (!v.ended && v.currentTime > 0.2) go(active + 1);
            }}
            className="absolute inset-0 h-full w-full bg-[#06150D] object-contain"
          />
        ) : (
          <>
            {slide.fit === "screen" ? (
              <div className="absolute inset-0 flex items-center justify-center bg-[#EDF7F1] p-8 sm:p-10 lg:p-14">
                <PhoneFrame className="h-full max-h-full w-auto max-w-full [aspect-ratio:900/1844]">
                  <Image
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    width={900}
                    height={1844}
                    sizes="240px"
                    quality={90}
                    className="h-auto w-full"
                  />
                </PhoneFrame>
              </div>
            ) : (
              <Image
                key={slide.src}
                src={slide.kind === "video" ? (slide.poster as string) : slide.src}
                alt={slide.alt}
                fill
                priority={active === 0}
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={82}
                className={solo ? "object-cover object-center" : "object-cover object-center lg:[clip-path:ellipse(95%_150%_at_100%_50%)]"}
              />
            )}
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
