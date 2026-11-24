import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import BrandLogo from "../components/BrandLogo";

export const metadata: Metadata = {
  title: "Accessibility statement",
  description:
    "How nurotok.co.uk is built to be used comfortably, the settings you can change, and how to tell us about a problem.",
};

const EMAIL = "info@nurotok.co.uk";
const h2 = "text-[28px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[32px]";
const card = "rounded-[6px] border border-[#D5E2D8] bg-white";
const body = "text-[19px] leading-[1.6] text-[#2F4538] lg:text-[20px]";

function Arrow() {
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

function Tick() {
  return <span aria-hidden="true" className="mt-[9px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#367050]" />;
}

/** The settings this site actually offers, described as a visitor would meet them. */
const settings = [
  ["Dark mode", "Switches the site to darker colours, from the header or the accessibility panel."],
  ["Focus mode", "Quietens the page: a narrower column, a plainer background and muted images."],
  ["Bigger text", "Three steps — the default, 1.2x and 1.5x — applied across every page."],
  ["Contrast", "Increases the contrast of text against its background."],
  ["Hide images", "Hides photographs while keeping the page's layout and all of its text."],
  ["Highlight links", "Underlines every link, so they do not rely on colour alone."],
  ["Big cursor", "Enlarges the mouse pointer."],
  ["Dyslexia friendly", "Switches to a more open typeface with wider letter and word spacing."],
  ["Text spacing", "Adds space between letters and words."],
  ["Line height", "Opens up the space between lines of text."],
  ["Reduce motion", "Stops the slider advancing on its own and removes animation and smooth scrolling."],
];

const built = [
  "Every page can be used with a keyboard alone, and a “Skip to content” link appears when you first press Tab.",
  "Links and buttons show a visible outline when they have keyboard focus.",
  "Headings follow an order, so screen reader users can move through a page by its structure.",
  "Images that carry meaning have text alternatives; images that are decoration are hidden from screen readers.",
  "Colour is never the only way something is marked. Selected items also change shape or carry a label.",
  "The site works at phone, tablet and desktop widths, and text can be enlarged without content being lost.",
  "The demo video can be paused, and the slider stops when reduce motion is on.",
];

export default function AccessibilityPage() {
  return (
    <main className="overflow-x-clip bg-[#F6F3EC] text-[#0B361F]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#0B361F] focus:px-5 focus:py-3 focus:text-[15px] focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <SiteHeader logo={<BrandLogo />} />

      <article id="main-content" className="bg-[#F6F3EC] pb-12 pt-5 lg:pb-16 lg:pt-10">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8 lg:px-12">
          <header>
            <h1 className="text-[34px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0B361F] sm:text-[44px] lg:text-[50px]">
              Accessibility statement
            </h1>
            <p className="mt-4 max-w-[760px] text-[20px] leading-[1.5] text-[#1F3A2B] lg:text-[22px]">
              NuroTok exists to make screens more comfortable, so this website should be comfortable too. This page
              describes how it is built, what you can change, and how to tell us when something does not work.
            </p>
          </header>

          {/* WHAT YOU CAN CHANGE */}
          <section className={`mt-9 p-7 sm:p-10 lg:p-12 ${card}`}>
            <span aria-hidden="true" className="block h-1 w-12 rounded-full bg-[#367050]" />
            <h2 className={`mt-5 ${h2}`}>What you can change here</h2>
            <p className={`mt-4 ${body}`}>
              Open the accessibility options from the header, or from the menu on a phone. Your choices are saved in
              your browser and applied to every page, including before the page first appears, so nothing flashes on
              screen as it loads.
            </p>

            <dl className="mt-7 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {settings.map(([name, text]) => (
                <div key={name}>
                  <dt className="text-[18px] font-bold text-[#0B361F]">{name}</dt>
                  <dd className="mt-1 text-[17px] leading-[1.5] text-[#2F4538]">{text}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-7 text-[17px] leading-[1.55] text-[#53675C]">
              &ldquo;Reset settings&rdquo; in the same panel returns everything to its default. If your device or
              browser is already set to reduce motion, the site follows that without you changing anything here.
            </p>
          </section>

          {/* HOW IT IS BUILT */}
          <section className={`mt-6 p-7 sm:p-10 lg:p-12 ${card}`}>
            <h2 className={h2}>How this site is built</h2>
            <ul className="mt-6 space-y-3">
              {built.map(item => (
                <li key={item} className={`flex gap-3 ${body}`}>
                  <Tick />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* WHERE WE KNOW THERE IS WORK TO DO */}
          <section className={`mt-6 p-7 sm:p-10 lg:p-12 ${card}`}>
            <h2 className={h2}>Where we know there is work to do</h2>
            <p className={`mt-4 ${body}`}>
              We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA. The site has not yet been
              through a formal audit against that standard, so we describe it as working towards it rather than
              claiming conformance.
            </p>
            <p className={`mt-4 ${body}`}>
              Some content comes from elsewhere. The demo video is hosted by NeuroDigital Support, and links to the
              Training and Store pages, the app stores and press articles lead to sites we do not control. We cannot
              guarantee how accessible those are.
            </p>
            <p className={`mt-4 ${body}`}>
              If you find something that is difficult to use, we would like to know. A specific description helps more
              than a general one: which page, what you were trying to do, and what happened.
            </p>
          </section>

          {/* TELL US */}
          <section className={`mt-6 p-7 text-center sm:p-10 lg:p-12 ${card}`}>
            <h2 className={h2}>Tell us about a problem</h2>
            <p className={`mx-auto mt-4 max-w-[640px] ${body}`}>
              Email us and describe what you met. You can tell us what was difficult without sharing a diagnosis, and
              we will reply.
            </p>
            <a
              href={`mailto:${EMAIL}?subject=Accessibility%20on%20nurotok.co.uk`}
              className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#0B361F] px-6 py-3.5 text-[17px] font-semibold text-white transition-colors hover:bg-[#367050] sm:w-auto sm:py-3"
            >
              Email {EMAIL} <Arrow />
            </a>
            <p className="mt-5 text-[16px] text-[#53675C]">
              Last reviewed: 24 November 2026
            </p>
          </section>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
