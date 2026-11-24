"use client";

import { useEffect, useRef, useState } from "react";
import { ND_TRAINING_URL, ND_STORE_URL } from "./links";
import AccessibilityControls from "./AccessibilityControls";
import { createPortal } from "react-dom";

const LINKS: [string, string][] = [
  ["Home", "/"],
  ["About", "/about-us/"],
  ["Features", "/features/"],
  ["Research", "/research/"],
  ["Training", ND_TRAINING_URL],
  ["Blogs", "/blogs/"],
  ["Store", ND_STORE_URL],
  ["Support", "/contact-us/#help"],
];

const UTILITY: [string, string][] = [
  ["News", "/news/"],
  ["Help & Support", "/contact-us/#help"],
  ["Contact", "/contact-us/"],
];

/** Hamburger + right-side drawer (below lg). Includes the accessibility options
    that live in the top bar on desktop. Rendered in a portal so the sticky,
    blurred header doesn't clip the fixed drawer. */
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

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

  const drawer = (
    <div className={`fixed inset-0 z-[90] ${open ? "visible" : "invisible"}`} aria-hidden={!open}>
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
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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

          <div className="mt-5 rounded-2xl border border-[#E3ECE6] bg-[#F6F3EC] p-3">
            <p className="px-1 pb-2 text-[12px] font-bold uppercase tracking-[0.06em] text-[#53675C]">Accessibility</p>
            <AccessibilityControls />
          </div>

          <ul className="mt-4 grid grid-cols-2 gap-2">
            {UTILITY.map(([label, href]) => (
              <li key={label}>
                <a href={href} onClick={() => setOpen(false)} className="block rounded-xl bg-[#F1F6F2] px-3 py-2.5 text-[14px] font-medium text-[#0B361F]">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/contact-us/"
            className="mt-4 flex items-center justify-center gap-2.5 rounded-full bg-[#0B361F] px-6 py-3.5 text-[15px] font-semibold text-white"
          >
            Contact us
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
          </a>

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
