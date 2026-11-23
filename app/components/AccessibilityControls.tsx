"use client";

import { useEffect, useRef, useState } from "react";
import { ZOOM_STEPS, usePrefs } from "./a11yPrefs";

/** A pill-shaped switch with an icon either side, as on the ND Support site. */
function IconSwitch({
  label,
  on,
  onChange,
  off,
  onIcon,
}: {
  label: string;
  on: boolean;
  onChange: (v: boolean) => void;
  off: React.ReactNode;
  onIcon: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      title={label}
      onClick={() => onChange(!on)}
      className="flex items-center gap-2 rounded-full px-1 py-1 text-[#0B361F] transition-colors hover:text-[#367050]"
    >
      <span aria-hidden="true" className={on ? "opacity-45" : ""}>{off}</span>
      <span
        className={`inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent transition-colors ${
          on ? "bg-[#367050]" : "bg-[#C9D6CD]"
        }`}
      >
        <span className={`block h-4 w-4 rounded-full bg-white shadow-lg transition-transform ${on ? "translate-x-4" : "translate-x-0"}`} />
      </span>
      <span aria-hidden="true" className={on ? "" : "opacity-45"}>{onIcon}</span>
    </button>
  );
}

const Sun = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4.2" /><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M5.2 18.8l1.4-1.4M17.4 6.6l1.4-1.4" /></svg>
);
const Moon = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1z" /></svg>
);
const Play = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.2v13.6c0 .8.9 1.3 1.5.8l10-6.8c.6-.4.6-1.2 0-1.6l-10-6.8c-.6-.5-1.5 0-1.5.8z" /></svg>
);
const Pause = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><rect x="7" y="5" width="3.6" height="14" rx="1.1" /><rect x="13.4" y="5" width="3.6" height="14" rx="1.1" /></svg>
);

/**
 * Compact accessibility controls for the header: dark mode, reduce motion,
 * and a small panel with text size and link highlighting.
 * Preferences live in localStorage and are re-applied before first paint
 * by the script in app/layout.tsx.
 */
export default function AccessibilityControls() {
  const { prefs, update, reset, step } = usePrefs();
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

  const sizeBtn = (active: boolean) =>
    `flex h-8 min-w-8 items-center justify-center rounded-lg border px-2 text-[14px] font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
      active ? "border-[#0B361F] bg-[#0B361F] text-white" : "border-[#D5E2D8] bg-white text-[#0B361F] hover:border-[#367050]"
    }`;

  return (
    <div data-dark="a11y" className="flex items-center gap-1">
      {/* Dark mode and reduce motion, always visible */}
      <div className="flex items-center gap-1 rounded-full border border-[#E3ECE6] bg-white px-2 py-1">
        <IconSwitch
          label="Dark mode"
          on={prefs.dark}
          onChange={v => update({ dark: v })}
          off={Sun}
          onIcon={Moon}
        />
        <span aria-hidden="true" className="h-4 w-px bg-[#DCE6DF]" />
        <IconSwitch
          label="Reduce motion"
          on={prefs.motion}
          onChange={v => update({ motion: v })}
          off={Play}
          onIcon={Pause}
        />
      </div>

      {/* More options */}
      <div ref={ref} className="relative">
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="dialog"
          aria-label="Accessibility options"
          title="Accessibility options"
          onClick={() => setOpen(o => !o)}
          className={`flex h-[38px] w-[38px] items-center justify-center rounded-full border transition-colors ${
            open ? "border-[#367050] bg-[#EDF7F1] text-[#0B361F]" : "border-[#E3ECE6] bg-white text-[#0B361F] hover:border-[#367050]"
          }`}
        >
          <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h7M15 7h5M4 17h3M11 17h9M4 12h12M20 12h0" /><circle cx="13" cy="7" r="2" fill="currentColor" stroke="none" /><circle cx="9" cy="17" r="2" fill="currentColor" stroke="none" /><circle cx="18" cy="12" r="2" fill="currentColor" stroke="none" /></svg>
        </button>

        {open && (
          <div
            role="dialog"
            aria-label="Accessibility options"
            data-light
            className="absolute right-0 top-full z-50 mt-2 w-[280px] rounded-2xl border border-[#E3ECE6] bg-white p-3 shadow-[0_18px_40px_rgba(11,54,31,0.18)]"
          >
            <p className="px-1 pb-2 text-[12px] font-bold uppercase tracking-[0.06em] text-[#53675C]">Accessibility</p>

            <div className="rounded-xl bg-[#F6F3EC] p-3">
              <p className="text-[14px] font-semibold text-[#0B361F]">Text size</p>
              <div className="mt-2 flex items-center gap-2" role="group" aria-label="Text size">
                <button type="button" aria-label="Decrease text size" disabled={prefs.zoom <= ZOOM_STEPS[0]} onClick={() => step(-1)} className={sizeBtn(false)}>A&minus;</button>
                <button type="button" aria-label="Default text size" aria-pressed={prefs.zoom === 1} onClick={() => update({ zoom: 1 })} className={sizeBtn(prefs.zoom === 1)}>A</button>
                <button type="button" aria-label="Increase text size" disabled={prefs.zoom >= ZOOM_STEPS[ZOOM_STEPS.length - 1]} onClick={() => step(1)} className={sizeBtn(false)}>A+</button>
                <span className="ml-auto text-[13px] font-semibold text-[#53675C]" aria-live="polite">
                  {Math.round(prefs.zoom * 100)}%
                </span>
              </div>
            </div>

            <button
              type="button"
              role="switch"
              aria-checked={prefs.links}
              onClick={() => update({ links: !prefs.links })}
              className="mt-2 flex w-full items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-[#F1F6F2]"
            >
              <span>
                <span className="block text-[14px] font-semibold text-[#0B361F]">Highlight links</span>
                <span className="block text-[12.5px] text-[#53675C]">Underline every link</span>
              </span>
              <span
                className={`inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent transition-colors ${
                  prefs.links ? "bg-[#367050]" : "bg-[#C9D6CD]"
                }`}
              >
                <span className={`block h-4 w-4 rounded-full bg-white shadow-lg transition-transform ${prefs.links ? "translate-x-4" : "translate-x-0"}`} />
              </span>
            </button>

            <div className="mt-1 flex items-center justify-between border-t border-[#EDF2EE] px-3 pb-1 pt-2.5">
              <button type="button" onClick={reset} className="text-[13px] font-semibold text-[#367050] hover:text-[#0B361F]">
                Reset all
              </button>
              <a href="/accessibility/" className="text-[13px] font-semibold text-[#367050] underline underline-offset-2 hover:text-[#0B361F]">
                Accessibility statement
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
