"use client";

import { useEffect, useRef, useState } from "react";
import { FONT_SIZES, TOGGLES, usePrefs } from "./a11yPrefs";

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
const EyeOpen = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" /><circle cx="12" cy="12" r="2.7" /></svg>
);
const EyeQuiet = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8.5c2.3 2.3 5 3.5 8 3.5s5.7-1.2 8-3.5" /><path d="M4.5 15l2-3M19.5 15l-2-3M9.5 17.5l.8-3.4M14.5 17.5l-.8-3.4" /></svg>
);

/** One icon per toggle, keyed to match TOGGLES. Dyslexia uses a "Df" mark. */
const ICONS: Record<string, React.ReactNode> = {
  motion: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="4.5" y="4.5" width="5" height="15" rx="1.4" /><rect x="14.5" y="4.5" width="5" height="15" rx="1.4" /></svg>,
  contrast: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><circle cx="12" cy="12" r="9" /><path d="M12 3v18a9 9 0 0 0 0-18z" fill="currentColor" stroke="none" /></svg>,
  hideImages: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4.5" width="18" height="15" rx="2.5" /><path d="M3.5 16l4.5-4.5 3.5 3.5M4 4l16 16" /><circle cx="15.5" cy="9" r="1.4" /></svg>,
  links: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13.5a4 4 0 0 0 5.7 0l2.8-2.8a4 4 0 0 0-5.7-5.7L11.5 6" /><path d="M14 10.5a4 4 0 0 0-5.7 0l-2.8 2.8a4 4 0 0 0 5.7 5.7l1.3-1.3" /></svg>,
  bigCursor: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3l13 9.2-5.6 1.1 2.9 5.9-2.4 1.2-2.9-5.9L5 18z" /></svg>,
  textSpacing: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5v14M21 5v14M8 15l4-9 4 9M9.4 12.2h5.2" /></svg>,
  lineHeight: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>,
};

/**
 * Accessibility controls: dark mode and reduce motion as pill switches, with
 * the full panel behind a button. The panel mirrors the NeuroDigital Support
 * site's options, in NuroTok's colours.
 */
export default function AccessibilityControls({ compact = false }: { compact?: boolean }) {
  const { prefs, update, toggle, reset } = usePrefs();
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

  return (
    <div data-dark="a11y" className="flex items-center gap-1">
      {/* Quick switches on wide desktop navbar; compact option icon on narrower layouts */}
      {!compact && (
        <div className="flex items-center gap-1 rounded-full border border-[#E3ECE6] bg-white px-2 py-1">
          <IconSwitch label="Dark mode" on={prefs.dark} onChange={v => update({ dark: v })} off={Sun} onIcon={Moon} />
          <span aria-hidden="true" className="h-4 w-px bg-[#DCE6DF]" />
          <IconSwitch label="Focus mode" on={prefs.focus} onChange={v => update({ focus: v })} off={EyeOpen} onIcon={EyeQuiet} />
        </div>
      )}

      {/* Full panel */}
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
          <>
            {/* Overlay */}
            <div
              aria-hidden="true"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/80 motion-safe:animate-[nt-fade_200ms_ease-out]"
            />

            {/* Sheet, sliding in from the right */}
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Accessibility"
              data-light
              className="fixed inset-y-0 right-0 z-[70] flex w-3/4 flex-col border-l border-[#E3ECE6] bg-white shadow-[0_0_60px_rgba(11,54,31,0.25)] sm:max-w-sm motion-safe:animate-[nt-slide-in_300ms_cubic-bezier(0.32,0.72,0,1)]"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-[#0B361F] transition-colors hover:bg-[#F1F6F2]"
              >
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                <span className="sr-only">Close</span>
              </button>

              <div className="px-6 pb-5 pt-6">
                <h2 className="text-[26px] font-bold tracking-[-0.01em] text-[#0B361F]">Accessibility</h2>
                <p className="mt-1.5 max-w-[280px] text-[15px] leading-[1.45] text-[#53675C]">
                  Apply comfortable viewing settings across the whole website.
                </p>
              </div>

              <div className="flex-1 overflow-y-auto overscroll-contain border-t border-[#EDF2EE] px-6 py-5">
                {/* Bigger text */}
                <p className="flex items-center gap-2 text-[15px] font-semibold text-[#0B361F]">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" /><circle cx="12" cy="12" r="2.7" /></svg>
                  Bigger Text
                </p>
                <div className="mt-2.5 grid grid-cols-3 gap-1 rounded-xl border border-[#E3ECE6] p-1" role="group" aria-label="Text size">
                  {FONT_SIZES.map(f => {
                    const on = prefs.fontSize === f.value;
                    return (
                      <button
                        key={f.value}
                        type="button"
                        aria-pressed={on}
                        onClick={() => update({ fontSize: f.value })}
                        className={`rounded-lg py-2.5 text-[15px] font-semibold transition-colors ${
                          on ? "bg-[#367050] text-white" : "text-[#0B361F] hover:bg-[#F1F6F2]"
                        }`}
                      >
                        {f.label}
                      </button>
                    );
                  })}
                </div>

                {/* Toggle grid */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {TOGGLES.map(t => {
                    const on = prefs[t.key] as boolean;
                    return (
                      <button
                        key={t.key}
                        type="button"
                        role="switch"
                        aria-checked={on}
                        onClick={() => toggle(t.key)}
                        className={`flex flex-col items-start gap-3 rounded-xl border p-3.5 text-left transition-colors ${
                          on ? "border-[#367050] bg-[#EDF7F1]" : "border-[#E3ECE6] bg-white hover:border-[#9CC5AE]"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`flex h-10 w-10 items-center justify-center rounded-lg text-[15px] font-bold text-[#367050] ${
                            on ? "bg-white" : "bg-[#F1F6F2]"
                          }`}
                        >
                          {t.key === "dyslexia" ? "Df" : ICONS[t.key]}
                        </span>
                        <span className="text-[15px] font-semibold leading-tight text-[#0B361F]">{t.label}</span>
                        {on && <span aria-hidden="true" className="h-[3px] w-10 rounded-full bg-[#367050]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-[#EDF2EE] px-6 py-5">
                <button
                  type="button"
                  onClick={reset}
                  className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#367050] px-5 py-3.5 text-[16px] font-semibold text-white transition-colors hover:bg-[#0B361F]"
                >
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 2.6-6.4M3 4.5V10h5.5" /></svg>
                  Reset Settings
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
