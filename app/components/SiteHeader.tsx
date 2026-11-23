"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu";
import { ND_TRAINING_URL, ND_STORE_URL } from "./links";
import AccessibilityControls from "./AccessibilityControls";

/* Utility links (white bar, right) */
const UTILITY: [string, string][] = [
  ["News", "/news/"],
  ["Events", "/events/"],
  ["Help & Support", "/contact-us/#help"],
  ["Contact", "/contact-us/"],
  ["Log in / Register", "/account/"],
];

type NavItem = { label: string; href: string; children?: [string, string][]; external?: boolean };


/* Main navigation (green bar). Sub-links follow the sections in the content brief. */
export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about-us/",
    children: [
      ["Why we built NuroTok", "/about-us/#why"],
      ["Our founders", "/about-us/#founders"],
    ],
  },
  {
    label: "Features",
    href: "/features/",
    children: [
      ["Calm and sensory tools", "/features/#calm"],
      ["Scrolling and reels", "/features/#scrolling"],
      ["Protection", "/features/#protection"],
      ["Focus and routines", "/features/#focus"],
      ["Insights and progress", "/features/#insights"],
      ["Family and friends", "/features/#family"],
      ["Choose your device", "/features/#devices"],
    ],
  },
  { label: "Research", href: "/research/" },
  { label: "Training", href: ND_TRAINING_URL, external: true },
  { label: "Blogs", href: "/blogs/" },
  { label: "Store", href: ND_STORE_URL, external: true },
  {
    label: "Support",
    href: "/contact-us/#help",
    children: [
      ["Help with the app", "/contact-us/#help"],
      ["Feedback and accessibility", "/contact-us/#feedback"],
      ["Easy Read", "/easy-read/"],
      ["Your account", "/account/"],
    ],
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function SiteHeader({ logo }: { logo: React.ReactNode }) {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  // Routes are served without a trailing slash; NAV hrefs carry one.
  const here = pathname.replace(/\/$/, "") || "/";
  const navRef = useRef<HTMLDivElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);

  // Close menus on outside click / Escape
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenKey(null);
        setSearchOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenKey(null);
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (searchOpen) searchInput.current?.focus();
  }, [searchOpen]);

  return (
    <header data-dark="header" className="sticky top-0 z-40 bg-white">
      {/* White bar: logo + utility links */}
      <div className="border-b border-[#E7EAE2]">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:h-[76px] lg:px-12 xl:px-[88px]">
          {logo}

          <nav aria-label="Utility" className="hidden items-center gap-7 lg:flex xl:gap-9">
            {UTILITY.map(([label, href]) => (
              <a key={label} href={href} className="text-[15px] font-medium text-[#0B361F] transition-colors hover:text-[#367050]">
                {label}
              </a>
            ))}
          </nav>

          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>

      {/* Green bar: main navigation (lg and up) */}
      <div ref={navRef} className="relative hidden border-b border-[#E3DED2] bg-[#F6F3EC] lg:block">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-3 px-6 xl:gap-4 xl:px-12 2xl:px-[88px]">
          <nav aria-label="Main">
            <ul className="flex items-center gap-1 xl:gap-2">
              {NAV.map(item => {
                const active = item.href === "/" ? here === "/" : here === item.href.replace(/\/$/, "");
                const open = openKey === item.label;
                const base = `flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-[15.5px] font-semibold transition-colors xl:px-4 ${
                  active ? "bg-[#367050] text-white" : "text-[#0B361F] hover:bg-[#0B361F]/5"
                }`;
                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.children && setOpenKey(item.label)}
                    onMouseLeave={() => item.children && setOpenKey(k => (k === item.label ? null : k))}
                  >
                    {item.children ? (
                      <button
                        type="button"
                        aria-expanded={open}
                        aria-haspopup="true"
                        onClick={() => setOpenKey(open ? null : item.label)}
                        className={base}
                      >
                        {item.label}
                        <Chevron open={open} />
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className={base}
                      >
                        {item.label}
                      </a>
                    )}

                    {item.children && (
                      <div className={`absolute left-0 top-full z-50 pt-2 transition-all duration-200 ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`}>
                        <ul className="min-w-[250px] rounded-2xl border border-[#E3ECE6] bg-white p-2 shadow-[0_18px_40px_rgba(11,54,31,0.18)]">
                          <li>
                            <a href={item.href} className="block rounded-xl px-3.5 py-2.5 text-[14.5px] font-semibold text-[#0B361F] hover:bg-[#F1F6F2]">
                              {item.label} overview
                            </a>
                          </li>
                          {item.children.map(([label, href]) => (
                            <li key={label}>
                              <a href={href} className="block rounded-xl px-3.5 py-2.5 text-[14.5px] font-medium text-[#2F4538] hover:bg-[#F1F6F2] hover:text-[#0B361F]">
                                {label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}

              {/* Search */}
              <li className="relative">
                <button
                  type="button"
                  aria-label="Search"
                  aria-expanded={searchOpen}
                  onClick={() => {
                    setOpenKey(null);
                    setSearchOpen(o => !o);
                  }}
                  className="ml-1 flex h-9 w-9 items-center justify-center rounded-full text-[#0B361F] transition-colors hover:bg-[#0B361F]/5"
                >
                  <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
                </button>
                {searchOpen && (
                  <form action="/search/" role="search" className="absolute left-0 top-full z-50 mt-2 flex w-[340px] items-center gap-2 rounded-full border border-[#E3ECE6] bg-white p-1.5 pl-4 shadow-[0_18px_40px_rgba(11,54,31,0.18)]">
                    <label htmlFor="site-search" className="sr-only">Search NuroTok</label>
                    <input
                      ref={searchInput}
                      id="site-search"
                      name="q"
                      type="search"
                      placeholder="Search NuroTok"
                      className="min-w-0 flex-1 bg-transparent py-2 text-[15px] text-[#0B361F] outline-none placeholder:text-[#7D8F84]"
                    />
                    <button type="submit" className="rounded-full bg-[#0B361F] px-4 py-2 text-[14px] font-semibold text-white">Search</button>
                  </form>
                )}
              </li>
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2 xl:gap-4">
          <div className="hidden xl:block">
            <AccessibilityControls />
          </div>
          <div className="xl:hidden">
            <AccessibilityControls compact />
          </div>

          <MobileMenu />

          <a
            href="/contact-us/"
            className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full bg-[#367050] px-5 py-2.5 text-[15.5px] font-semibold text-white transition-colors hover:bg-[#2B5E42] xl:px-6"
          >
            Contact us
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
          </a>
          </div>
        </div>
      </div>
    </header>
  );
}
