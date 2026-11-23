"use client";

import { useCallback, useEffect, useState } from "react";

/* Shared accessibility preferences (header on desktop, drawer on mobile).
   Stored in localStorage and applied as classes / font-size on <html>.
   app/layout.tsx re-applies them before first paint.
   The feature set mirrors the NeuroDigital Support site. */

const KEY = "nt-a11y";
const EVENT = "nt-a11y-change";

export type FontSize = "medium" | "large" | "xlarge";

export const FONT_SIZES: { label: string; value: FontSize }[] = [
  { label: "Default", value: "medium" },
  { label: "1.2x", value: "large" },
  { label: "1.5x", value: "xlarge" },
];

export type Prefs = {
  fontSize: FontSize;
  dark: boolean;
  motion: boolean;
  contrast: boolean;
  hideImages: boolean;
  links: boolean;
  bigCursor: boolean;
  dyslexia: boolean;
  textSpacing: boolean;
  lineHeight: boolean;
};

export const DEFAULT_PREFS: Prefs = {
  fontSize: "medium",
  dark: false,
  motion: false,
  contrast: false,
  hideImages: false,
  links: false,
  bigCursor: false,
  dyslexia: false,
  textSpacing: false,
  lineHeight: false,
};

/** The toggles shown as a grid in the panel, in the order ND Support uses. */
export const TOGGLES: { key: keyof Prefs; label: string }[] = [
  { key: "contrast", label: "Contrast" },
  { key: "hideImages", label: "Hide Images" },
  { key: "links", label: "Highlight Links" },
  { key: "bigCursor", label: "Big Cursor" },
  { key: "dyslexia", label: "Dyslexia Friendly" },
  { key: "textSpacing", label: "Text Spacing" },
  { key: "lineHeight", label: "Line Height" },
];

function readPrefs(): Prefs {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...DEFAULT_PREFS, ...JSON.parse(raw) } : DEFAULT_PREFS;
  } catch {
    return DEFAULT_PREFS;
  }
}

function applyPrefs(p: Prefs) {
  const el = document.documentElement;
  el.classList.toggle("nt-dark", p.dark);
  el.classList.toggle("nt-reduce-motion", p.motion);
  el.classList.toggle("nt-contrast", p.contrast);
  el.classList.toggle("nt-hide-images", p.hideImages);
  el.classList.toggle("nt-links", p.links);
  el.classList.toggle("nt-big-cursor", p.bigCursor);
  el.classList.toggle("nt-dyslexia", p.dyslexia);
  el.classList.toggle("nt-text-spacing", p.textSpacing);
  el.classList.toggle("nt-line-height", p.lineHeight);
  el.style.fontSize = p.fontSize === "xlarge" ? "150%" : p.fontSize === "large" ? "120%" : "100%";
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    /* storage unavailable: settings still apply for this visit */
  }
  window.dispatchEvent(new Event(EVENT));
}

/** State + setters for the accessibility preferences, kept in sync across components. */
export function usePrefs() {
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);

  useEffect(() => {
    const sync = () => setPrefs(readPrefs());
    sync();
    window.addEventListener(EVENT, sync);
    return () => window.removeEventListener(EVENT, sync);
  }, []);

  const update = useCallback((patch: Partial<Prefs>) => {
    applyPrefs({ ...readPrefs(), ...patch });
  }, []);

  const toggle = useCallback((key: keyof Prefs) => {
    const cur = readPrefs();
    applyPrefs({ ...cur, [key]: !cur[key] });
  }, []);

  const reset = useCallback(() => applyPrefs(DEFAULT_PREFS), []);

  return { prefs, update, toggle, reset };
}
