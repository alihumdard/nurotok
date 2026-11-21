"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./AppScreens";

const SCREENS = [
  { name: "Home", subtitle: "Distraction-free daily navigation.", icon: "home" as const, img: "/images/screens/home.webp" },
  { name: "Profile", subtitle: "Personal sensory preferences.", icon: "profile" as const, img: "/images/screens/profile.webp" },
  { name: "Toolkit", subtitle: "Calming tools within easy reach.", icon: "toolkit" as const, img: "/images/screens/toolkit.webp" },
  { name: "Insights", subtitle: "Weekly wellbeing patterns.", icon: "insights" as const, img: "/images/screens/insights.webp" },
];

/** iPhone-style body around a screenshot: bezel, side buttons and notch. */
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-[230px] max-w-full md:w-[200px] lg:w-[220px]">
      {/* side buttons */}
      <span aria-hidden="true" className="absolute -left-[3px] top-[18%] h-[4%] w-[3px] rounded-l-sm bg-[#1B2A22]" />
      <span aria-hidden="true" className="absolute -left-[3px] top-[26%] h-[7%] w-[3px] rounded-l-sm bg-[#1B2A22]" />
      <span aria-hidden="true" className="absolute -left-[3px] top-[35%] h-[7%] w-[3px] rounded-l-sm bg-[#1B2A22]" />
      <span aria-hidden="true" className="absolute -right-[3px] top-[28%] h-[11%] w-[3px] rounded-r-sm bg-[#1B2A22]" />

      <div className="relative overflow-hidden rounded-[13%/6.4%] bg-[#1B2A22] p-[3.2%] shadow-[0_14px_34px_rgba(11,54,31,0.22)]">
        <div className="relative overflow-hidden rounded-[11%/5.4%] bg-white">
          {children}
          {/* notch */}
          <span aria-hidden="true" className="absolute left-1/2 top-[0.9%] h-[2.4%] w-[26%] -translate-x-1/2 rounded-full bg-[#1B2A22]" />
        </div>
      </div>
    </div>
  );
}

/** Phones: one full slide at a time with arrows + dots. md and up: 4-column grid. */
export default function ScreensCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Keep the dots in sync with manual swiping
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => setActive(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const n = Math.max(0, Math.min(SCREENS.length - 1, i));
    el.scrollTo({ left: n * el.clientWidth, behavior: "smooth" });
    setActive(n);
  };

  const arrow = "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9DACB] bg-white text-[#0B361F] shadow-sm transition disabled:opacity-35";

  return (
    <div className="mt-7">
      <div
        ref={track}
        role="region"
        aria-roledescription="carousel"
        aria-label="NuroTok app screens"
        className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] md:grid md:grid-cols-4 md:gap-x-5 md:overflow-visible [&::-webkit-scrollbar]:hidden"
      >
        {SCREENS.map(({ name, subtitle, icon, img }, i) => (
          <article
            key={name}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${SCREENS.length}: ${name}`}
            className="w-full shrink-0 snap-center px-10 text-center md:w-auto md:px-0"
          >
            <PhoneFrame>
              <Image
                src={img}
                alt={`The NuroTok ${name} screen on a phone`}
                width={900}
                height={1844}
                sizes="(min-width: 1024px) 220px, (min-width: 768px) 200px, 230px"
                quality={90}
                className="h-auto w-full"
              />
            </PhoneFrame>
            <h3 className="mt-5 flex items-center justify-center gap-2 text-[17px] font-bold text-[#0B361F]">
              <Icon name={icon} size={18} strokeWidth={2} className="text-[#1E7A4C]" />
              {name}
            </h3>
            <p className="mx-auto mt-1 max-w-[170px] text-[14px] leading-[1.4] text-[#3E5146]">{subtitle}</p>
          </article>
        ))}
      </div>

      {/* Phone controls */}
      <div className="mt-6 flex items-center justify-center gap-5 md:hidden">
        <button type="button" aria-label="Previous screen" disabled={active === 0} onClick={() => go(active - 1)} className={arrow}>
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
        </button>
        <div className="flex items-center gap-2">
          {SCREENS.map((sc, i) => (
            <button
              key={sc.name}
              type="button"
              aria-label={`Show ${sc.name} screen`}
              aria-current={active === i}
              onClick={() => go(i)}
              className={`h-2.5 rounded-full transition-all ${active === i ? "w-7 bg-[#0B361F]" : "w-2.5 bg-[#B9CFBF]"}`}
            />
          ))}
        </div>
        <button type="button" aria-label="Next screen" disabled={active === SCREENS.length - 1} onClick={() => go(active + 1)} className={arrow}>
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>
    </div>
  );
}
