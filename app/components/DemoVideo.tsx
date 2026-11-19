"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  src: string;
  /** Poster markup shown until the visitor presses play */
  children: ReactNode;
  className?: string;
};

/**
 * Demo video with a still preview. Playback is always user-initiated
 * (brief build note): the file is not requested until play is pressed.
 * Any element with [data-play-demo] elsewhere on the page also starts it.
 */
export default function DemoVideo({ src, children, className }: Props) {
  const [playing, setPlaying] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as Element | null)?.closest?.("[data-play-demo]");
      if (!target) return;
      e.preventDefault();
      setPlaying(true);
      wrap.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const v = video.current;
    v?.focus();
    v?.play().catch(() => {
      /* browser blocked playback: controls stay visible so the visitor can press play */
    });
  }, [playing]);

  return (
    <div ref={wrap} id="demo-video" className={className}>
      {playing ? (
        <video
          ref={video}
          src={src}
          controls
          playsInline
          preload="metadata"
          aria-label="NuroTok 37-second demo"
          className="absolute inset-0 h-full w-full bg-[#06150D] object-contain"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Play the 37-second NuroTok demo"
          className="group absolute inset-0 block h-full w-full overflow-hidden text-left"
        >
          {children}
        </button>
      )}
    </div>
  );
}
