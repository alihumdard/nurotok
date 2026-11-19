"use client";

import { useEffect, useState } from "react";

const LINKS: [string, string][] = [
  ["Home", "/"],
  ["Features", "/features/"],
  ["Research", "/research/"],
  ["Training", "/training/"],
  ["Blogs", "/blogs/"],
  ["Store", "/store/"],
  ["About", "/about-us/"],
];

/** Hamburger menu shown below the lg breakpoint. */
export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Close on Escape and lock page scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(o => !o)}
        className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#D5E2D8] text-[#0B361F] transition-colors hover:bg-[#EEF5EF]"
      >
        <span className={`absolute h-[2px] w-5 rounded-full bg-current transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[6px]"}`} />
        <span className={`absolute h-[2px] w-5 rounded-full bg-current transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
        <span className={`absolute h-[2px] w-5 rounded-full bg-current transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[6px]"}`} />
      </button>

      {/* Panel */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full z-30 origin-top border-b border-[#E7EAE2] bg-white shadow-[0_18px_30px_rgba(11,54,31,0.12)] transition-[opacity,transform] duration-300 ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="mx-auto max-w-[1440px] px-5 pb-6 pt-2 sm:px-8">
          <ul className="divide-y divide-[#EEF2EE]">
            {LINKS.map(([label, href], i) => (
              <li key={label}>
                <a
                  href={href}
                  aria-current={i === 0 ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-3.5 text-[16px] font-medium ${i === 0 ? "text-[#1E7A4C]" : "text-[#0B361F]"}`}
                >
                  {label}
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9AB0A2]"><path d="M9 6l6 6-6 6" /></svg>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/contact-us/"
            className="mt-4 flex items-center justify-center gap-2.5 rounded-full bg-[#0B361F] px-6 py-3.5 text-[15px] font-semibold text-white sm:hidden"
          >
            Contact us
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
          </a>
        </nav>
      </div>
    </div>
  );
}
