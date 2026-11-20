"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ZOOM_STEPS, usePrefs } from "./a11yPrefs";

/** Small popover that closes on outside click or Escape. */
function usePopover() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return { open, setOpen, ref };
}

export function Toggle({ label, hint, on, onChange }: { label: string; hint: string; on: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => onChange(!on)}
      className="flex w-full items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-[#F1F6F2]"
    >
      <span>
        <span className="block text-[14px] font-semibold text-[#0B361F]">{label}</span>
        <span className="block text-[12.5px] text-[#53675C]">{hint}</span>
      </span>
      <span className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${on ? "bg-[#2E7D50]" : "bg-[#C9D6CD]"}`}>
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${on ? "translate-x-[22px]" : "translate-x-0.5"}`} />
      </span>
      <span className="sr-only">{on ? "On" : "Off"}</span>
    </button>
  );
}

function Panel({ children, align = "left", label }: { children: ReactNode; align?: "left" | "right"; label: string }) {
  return (
    <div
      role="dialog"
      aria-label={label}
      className={`absolute top-[calc(100%+8px)] z-50 w-[300px] rounded-2xl border border-[#DCE5DC] bg-white p-2 shadow-[0_18px_40px_rgba(11,54,31,0.16)] ${align === "right" ? "right-0" : "left-0"}`}
    >
      {children}
    </div>
  );
}

export function UkFlag() {
  return (
    <svg aria-hidden="true" width="20" height="14" viewBox="0 0 60 42" className="rounded-[2px] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
      <clipPath id="uk-t"><path d="M30 21h30v21zv21H0zH0V0zV0h30z" /></clipPath>
      <rect width="60" height="42" fill="#012169" />
      <path d="M0 0l60 42M60 0L0 42" stroke="#fff" strokeWidth="8.4" />
      <path d="M0 0l60 42M60 0L0 42" clipPath="url(#uk-t)" stroke="#C8102E" strokeWidth="5.6" />
      <path d="M30 0v42M0 21h60" stroke="#fff" strokeWidth="14" />
      <path d="M30 0v42M0 21h60" stroke="#C8102E" strokeWidth="8.4" />
    </svg>
  );
}

export default function AccessibilityBar() {
  const { prefs, update, reset, step } = usePrefs();
  const a11y = usePopover();
  const region = usePopover();

  const sizeBtn = (active: boolean) =>
    `flex h-7 min-w-7 items-center justify-center rounded-md px-1 font-semibold transition-colors hover:bg-white hover:text-[#367050] disabled:cursor-not-allowed disabled:opacity-40 ${active ? "bg-white text-[#0B361F] shadow-[0_0_0_1px_#C9D6CD]" : ""}`;

  return (
    <div className="hidden border-b border-[#E3EAE3] bg-[#EEF3EE] md:block">
      <div className="mx-auto flex h-[38px] max-w-[1440px] items-center justify-between px-6 text-[13px] text-[#0B361F] lg:px-12">
        <div className="flex items-center">
          {/* Accessibility options */}
          <div ref={a11y.ref} className="relative">
            <button
              type="button"
              aria-expanded={a11y.open}
              aria-haspopup="dialog"
              onClick={() => a11y.setOpen(o => !o)}
              className="flex items-center gap-2 rounded-md px-1 py-1 font-medium hover:text-[#367050]"
            >
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="7.2" r="1.3" fill="currentColor" stroke="none" /><path d="M7.5 10l4.5 1 4.5-1M12 11v3.5M12 14.5l-2.5 4M12 14.5l2.5 4" /></svg>
              Accessibility
            </button>
            {a11y.open && (
              <Panel label="Accessibility options">
                <p className="px-3 pb-1 pt-2 text-[12px] font-bold uppercase tracking-[0.06em] text-[#53675C]">Accessibility options</p>
                <Toggle label="Reduce motion" hint="Stop animations and smooth scrolling" on={prefs.motion} onChange={v => update({ motion: v })} />
                <Toggle label="Highlight links" hint="Underline every link on the page" on={prefs.links} onChange={v => update({ links: v })} />
                <Toggle label="Dark mode" hint="Darker colours, easier on the eyes" on={prefs.dark} onChange={v => update({ dark: v })} />
                <div className="mt-1 flex items-center justify-between border-t border-[#EDF2EE] px-3 pb-1 pt-2.5">
                  <button type="button" onClick={reset} className="text-[13px] font-semibold text-[#367050] hover:text-[#0B361F]">
                    Reset all
                  </button>
                  <a href="/accessibility/" className="text-[13px] font-semibold text-[#367050] underline underline-offset-2 hover:text-[#0B361F]">
                    Accessibility Statement
                  </a>
                </div>
              </Panel>
            )}
          </div>

          <span aria-hidden="true" className="mx-5 h-4 w-px bg-[#A9B8AD]" />

          {/* Text size */}
          <div className="flex items-center gap-2" role="group" aria-label="Text size">
            <span className="mr-1 font-medium">Text size:</span>
            <button type="button" aria-label="Decrease text size" disabled={prefs.zoom <= ZOOM_STEPS[0]} onClick={() => step(-1)} className={sizeBtn(prefs.zoom < 1)}>A−</button>
            <button type="button" aria-label="Default text size" aria-pressed={prefs.zoom === 1} onClick={() => update({ zoom: 1 })} className={sizeBtn(prefs.zoom === 1)}>A</button>
            <button type="button" aria-label="Increase text size" disabled={prefs.zoom >= ZOOM_STEPS[ZOOM_STEPS.length - 1]} onClick={() => step(1)} className={sizeBtn(prefs.zoom > 1)}>A+</button>
            {prefs.zoom !== 1 && <span className="ml-1 text-[12px] text-[#53675C]" aria-live="polite">{Math.round(prefs.zoom * 100)}%</span>}
          </div>

          <span aria-hidden="true" className="mx-5 h-4 w-px bg-[#A9B8AD]" />

          {/* Dark mode */}
          <button
            type="button"
            role="switch"
            aria-checked={prefs.dark}
            onClick={() => update({ dark: !prefs.dark })}
            className="flex items-center gap-2 rounded-md px-1 py-1 font-medium hover:text-[#367050]"
          >
            {prefs.dark ? (
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4.5" /><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" /></svg>
            ) : (
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1z" /></svg>
            )}
            {prefs.dark ? "Light mode" : "Dark mode"}
          </button>
        </div>

        <div className="flex items-center">
        {/* Region */}
        <div ref={region.ref} className="relative">
          <button
            type="button"
            aria-expanded={region.open}
            aria-haspopup="dialog"
            onClick={() => region.setOpen(o => !o)}
            className="flex items-center gap-2 rounded-md px-1 py-1 font-semibold hover:text-[#367050]"
          >
            <UkFlag />
            UK
            <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${region.open ? "rotate-180" : ""}`}><path d="M6 9l6 6 6-6" /></svg>
          </button>
          {region.open && (
            <Panel label="Region" align="right">
              <p className="px-3 pb-1 pt-2 text-[12px] font-bold uppercase tracking-[0.06em] text-[#53675C]">Region</p>
              <div className="flex items-center gap-3 rounded-xl bg-[#F1F6F2] px-3 py-2.5">
                <UkFlag />
                <span className="flex-1">
                  <span className="block text-[14px] font-semibold text-[#0B361F]">United Kingdom</span>
                  <span className="block text-[12.5px] text-[#53675C]">English (UK) · Prices in GBP</span>
                </span>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E7D50" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
              </div>
            </Panel>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}
