"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ZOOM_STEPS, usePrefs } from "./a11yPrefs";
import { Toggle, UkFlag } from "./AccessibilityBar";

const LINKS: [string, string][] = [
  ["Home", "/"],
  ["Features", "/features/"],
  ["Research", "/research/"],
  ["Training", "/training/"],
  ["Blogs", "/blogs/"],
  ["Store", "/store/"],
  ["About", "/about-us/"],
];

/** Hamburger + right-side drawer (below lg). Includes the accessibility options
    that live in the top bar on desktop. Rendered in a portal so the sticky,
    blurred header doesn't clip the fixed drawer. */
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { prefs, update, reset, step } = usePrefs();

  useEffect(() => setMounted(true), []);

  // Escape to close, lock page scroll, move focus in and back out
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const trigger = triggerRef.current;
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      trigger?.focus();
    };
  }, [open]);

  const sizeBtn = (active: boolean) =>
    `flex h-10 flex-1 items-center justify-center rounded-xl border text-[15px] font-semibold transition-colors disabled:opacity-40 ${
      active ? "border-[#0B361F] bg-[#0B361F] text-white" : "border-[#D5E2D8] bg-white text-[#0B361F] hover:bg-[#F1F6F2]"
    }`;

  const drawer = (
    <div className={`fixed inset-0 z-[90] lg:hidden ${open ? "visible" : "invisible"}`} aria-hidden={!open}>
      {/* Backdrop */}
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close menu"
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-[#06150D]/45 backdrop-blur-[2px] transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
      />

      {/* Panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`absolute inset-y-0 right-0 flex w-[88%] max-w-[380px] flex-col bg-white shadow-[-20px_0_50px_rgba(11,54,31,0.18)] transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-[#EEF2EE] px-5">
          <span className="flex items-center gap-2">
            <img src="/images/nurotok-logo.png" alt="" width={36} height={36} className="nt-logo-img h-9 w-9" />
            <span className="font-heading text-[22px] font-bold tracking-[-0.03em] text-[#0E4A2E]">NuroTok</span>
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D5E2D8] text-[#0B361F] hover:bg-[#EEF5EF]"
          >
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-5 pb-8">
          <nav aria-label="Mobile">
            <ul className="divide-y divide-[#EEF2EE]">
              {LINKS.map(([label, href], i) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-current={i === 0 ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-3.5 text-[16px] font-medium ${i === 0 ? "text-[#1E7A4C]" : "text-[#0B361F]"}`}
                  >
                    <span className="flex items-center gap-3">
                      {i === 0 && <span aria-hidden="true" className="h-5 w-1 rounded-full bg-[#2E8A57]" />}
                      {label}
                    </span>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9AB0A2]"><path d="M9 6l6 6-6 6" /></svg>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="/contact-us/"
            className="mt-4 flex items-center justify-center gap-2.5 rounded-full bg-[#0B361F] px-6 py-3.5 text-[15px] font-semibold text-white"
          >
            Contact us
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
          </a>

          {/* Accessibility options (topbar on desktop) */}
          <section aria-label="Accessibility options" className="mt-6 rounded-2xl border border-[#E3ECE6] bg-[#F7FAF6] p-3">
            <p className="px-1 pb-2 text-[12px] font-bold uppercase tracking-[0.06em] text-[#53675C]">Accessibility</p>

            <div className="px-1">
              <p className="mb-2 flex items-center justify-between text-[14px] font-semibold text-[#0B361F]">
                Text size
                <span className="text-[12.5px] font-medium text-[#53675C]">{Math.round(prefs.zoom * 100)}%</span>
              </p>
              <div className="flex gap-2" role="group" aria-label="Text size">
                <button type="button" aria-label="Decrease text size" disabled={prefs.zoom <= ZOOM_STEPS[0]} onClick={() => step(-1)} className={sizeBtn(false)}>A−</button>
                <button type="button" aria-label="Default text size" aria-pressed={prefs.zoom === 1} onClick={() => update({ zoom: 1 })} className={sizeBtn(prefs.zoom === 1)}>A</button>
                <button type="button" aria-label="Increase text size" disabled={prefs.zoom >= ZOOM_STEPS[ZOOM_STEPS.length - 1]} onClick={() => step(1)} className={sizeBtn(false)}>A+</button>
              </div>
            </div>

            <div className="mt-2">
              <Toggle label="Dark mode" hint="Darker colours, easier on the eyes" on={prefs.dark} onChange={v => update({ dark: v })} />
              <Toggle label="Reduce motion" hint="Stop animations and smooth scrolling" on={prefs.motion} onChange={v => update({ motion: v })} />
              <Toggle label="Highlight links" hint="Underline every link on the page" on={prefs.links} onChange={v => update({ links: v })} />
            </div>

            <div className="mt-1 flex items-center justify-between border-t border-[#E3ECE6] px-1 pt-3">
              <button type="button" onClick={reset} className="text-[13px] font-semibold text-[#367050]">Reset all</button>
              <a href="/accessibility/" className="text-[13px] font-semibold text-[#367050] underline underline-offset-2">Accessibility Statement</a>
            </div>
          </section>

          <p className="mt-5 flex items-center gap-2.5 px-1 text-[13.5px] font-medium text-[#53675C]">
            <UkFlag />
            United Kingdom · English (UK)
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D5E2D8] text-[#0B361F] transition-colors hover:bg-[#EEF5EF]"
      >
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h10" /></svg>
      </button>
      {mounted && createPortal(drawer, document.body)}
    </div>
  );
}
