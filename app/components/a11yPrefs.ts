"use client";

import { useCallback, useEffect, useState } from "react";

/* Shared accessibility preferences (topbar on desktop, drawer on mobile).
   Stored in localStorage and applied as classes / --nt-zoom on <html>.
   app/layout.tsx re-applies them before first paint. */

export const ZOOM_STEPS = [0.9, 1, 1.1, 1.2, 1.3];
const KEY = "nt-a11y";
const EVENT = "nt-a11y-change";

export type Prefs = { zoom: number; dark: boolean; motion: boolean; links: boolean };
export const DEFAULT_PREFS: Prefs = { zoom: 1, dark: false, motion: false, links: false };

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
  el.style.setProperty("--nt-zoom", String(p.zoom));
  el.classList.toggle("nt-dark", p.dark);
  el.classList.toggle("nt-reduce-motion", p.motion);
  el.classList.toggle("nt-links", p.links);
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

  const reset = useCallback(() => applyPrefs(DEFAULT_PREFS), []);

  const step = useCallback((dir: -1 | 1) => {
    const cur = readPrefs().zoom;
    const idx = ZOOM_STEPS.indexOf(cur);
    const i = Math.min(ZOOM_STEPS.length - 1, Math.max(0, (idx === -1 ? 1 : idx) + dir));
    applyPrefs({ ...readPrefs(), zoom: ZOOM_STEPS[i] });
  }, []);

  return { prefs, update, reset, step };
}
