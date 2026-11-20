import DemoVideo from "./components/DemoVideo";
import ScreensCarousel from "./components/ScreensCarousel";
import Image from "next/image";
import AccessibilityBar from "./components/AccessibilityBar";
import SiteHeader from "./components/SiteHeader";
import FaqAccordion from "./components/FaqAccordion";
import { HomeScreen, ProfileScreen, InsightsScreen, Icon } from "./components/AppScreens";

const photo = {
  hero: "/images/image.png",
  research: "/images/home/research.jpg",
  training: "/images/home/training.jpg",
};

// Store links: replace with the live listings when confirmed.
const APP_STORE_URL = "#";
const GOOGLE_PLAY_URL = "#";
// Account portal (brief: link the deletion answer to the confirmed portal).
const ACCOUNT_URL = "/account/";

const linkCls = "font-semibold text-[#367050] underline underline-offset-2 hover:text-[#0B361F]";

const faqs = [
  { q: "What is NuroTok?", a: "A wellbeing app that gives you control over sensory input and helps you take a pause." },
  { q: "Who is NuroTok for?", a: "It is designed with neurodivergent adults in mind and is open to anyone who finds screens overwhelming." },
  { q: "Is NuroTok free?", a: "The sensory toolkit is free. Optional Premium features are listed in your device\u2019s store." },
  { q: "Is NuroTok on iPhone and Android?", a: "Yes. Get NuroTok from the App Store or Google Play. Some tools differ by device." },
  { q: "How does NuroTok help with sensory overload?", a: "You can choose a grounding exercise, listen to a steady sound or adjust comfort settings when you need a quieter moment." },
  { q: "Can NuroTok help me scroll less on Instagram, TikTok and YouTube?", a: "On Android, reel counts, goals and pauses help you notice scrolling in supported apps. On iPhone, explore Screen Time settings." },
  { q: "Does NuroTok read my messages or upload my screen?", a: "Android content filtering analyses screen frames on your phone. Linked family members cannot see private messages. Optional sharing features have separate controls." },
  { q: "Is NuroTok a medical app?", a: "NuroTok supports everyday wellbeing. For medical advice, speak with a qualified healthcare professional." },
  { q: "Who makes NuroTok?", a: "NeuroDigital Support, co-founded by Kofi Ofori-Mensah and Shubham Nagore." },
  {
    q: "How do I delete my NuroTok account?",
    a: (
      <>
        Open <a href={ACCOUNT_URL} className={linkCls}>Your account</a> on the website and choose the account deletion option. If you need help, email{" "}
        <a href="mailto:info@nurotok.co.uk" className={linkCls}>info@nurotok.co.uk</a>.
      </>
    ),
  },
];

function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <a href="/" aria-label="NuroTok home" className="flex items-center gap-2.5">
      <span {...(light ? { "data-light": true } : {})} className={`shrink-0 ${light ? "rounded-full bg-[#F6F3EC] p-1" : ""}`}>
        <img src="/images/nurotok-logo.png" alt="" width={56} height={56} className={`${light ? "" : "nt-logo-img "}h-[44px] w-[44px] sm:h-[52px] sm:w-[52px] lg:h-[56px] lg:w-[56px]`} />
      </span>
      <span
        className={`font-heading text-[26px] font-bold leading-none tracking-[-0.03em] sm:text-[30px] lg:text-[34px] ${light ? "text-white" : "text-[#0E4A2E]"}`}
      >
        NuroTok
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-clip bg-[#F6F3EC] text-[#0B361F]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#0B361F] focus:px-5 focus:py-3 focus:text-[15px] focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      {/* ACCESSIBILITY BAR */}
      <AccessibilityBar />

      {/* NAVIGATION */}
      <SiteHeader logo={<BrandLogo />} />

      {/* NEWS + QUICK TOOLS */}
      <section id="main-content" className="bg-[#F3F7F2] py-8 lg:py-10">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          {/* News card */}
          <div className="relative grid overflow-hidden rounded-[22px] border border-[#D5E2D8] bg-white shadow-[0_2px_12px_rgba(11,54,31,0.06)] lg:grid-cols-2">
            <div className="relative z-10 p-7 sm:p-10 lg:py-12 lg:pl-12">
              <p className="text-[18px] font-bold text-[#0B361F]">News</p>
              <span aria-hidden="true" className="mt-2 block h-1 w-12 rounded-full bg-[#3FA34D]" />
              <h1 className="mt-5 text-[34px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0B361F] sm:text-[44px] lg:text-[48px]">Introducing NuroTok</h1>
              <p className="mt-4 max-w-[440px] text-[17px] leading-[1.55] text-[#1F3A2B]">
                A sensory regulation app to help you create a calmer, more comfortable digital experience.
              </p>
              <a href="/news/" className="mt-6 inline-flex items-center gap-2 text-[17px] font-bold text-[#1E7A4C] hover:text-[#0B361F]">
                Read more <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </div>

            <div className="relative min-h-[320px]">
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(135deg,#E6F6E8_0%,#CDEFD3_100%)] lg:[clip-path:ellipse(95%_150%_at_100%_50%)]" />
              <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center gap-5">
                <div className="w-[140px] -rotate-[8deg] sm:w-[150px] [&>div]:max-w-full"><HomeScreen /></div>
                <div className="w-[140px] rotate-[8deg] sm:w-[150px] [&>div]:max-w-full"><ProfileScreen /></div>
              </div>
            </div>
          </div>

          {/* Three quick tools */}
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              { title: "A quieter moment.", text: "Listen to rainfall, follow a short breathing guide or put your phone down for a while.", pos: "object-[86%_30%]", img: photo.hero },
              { title: "A break from an app.", text: "Choose where you want a pause. Take a moment before opening certain apps.", pos: "object-center", img: "/images/home/app-break.jpg" },
              { title: "A screen that suits you.", text: "Explore comfort settings for your device, such as movement or brightness.", pos: "object-center", img: "/images/home/screen-comfort.jpg" },
            ].map(card => (
              <a key={card.title} href="/features/" className="group flex flex-col overflow-hidden rounded-[18px] border border-[#D5E2D8] bg-white shadow-[0_2px_12px_rgba(11,54,31,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(11,54,31,0.12)]">
                <div className="relative aspect-[16/8] overflow-hidden">
                  <Image src={card.img} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" quality={80} className={`object-cover ${card.pos} transition-transform duration-500 group-hover:scale-105`} />
                </div>
                <div className="flex flex-1 items-end gap-3 p-5">
                  <div className="flex-1">
                    <h2 className="text-[20px] font-bold tracking-[-0.01em] text-[#0B361F]">{card.title}</h2>
                    <p className="mt-1.5 text-[15px] leading-[1.5] text-[#2F4538]">{card.text}</p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DDF3E4] text-[#1E7A4C] transition group-hover:bg-[#0B361F] group-hover:text-white"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                </div>
              </a>
            ))}
          </div>

          {/* Resources + research */}
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              { title: "Downloadable resources", text: "Guides, tips and practical tools to support sensory comfort.", href: "/blogs/", img: null },
              { title: "Research and guidance", text: "Explore the evidence, learn from studies and see how digital tools can help.", href: "/research/", img: photo.research },
            ].map(card => (
              <a key={card.title} href={card.href} className="group flex overflow-hidden rounded-[18px] border border-[#D5E2D8] bg-white shadow-[0_2px_12px_rgba(11,54,31,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(11,54,31,0.12)]">
                <div className="relative w-[42%] shrink-0 overflow-hidden bg-[#DDF3E4]">
                  {card.img ? (
                    <Image src={card.img} alt="" fill sizes="(min-width: 768px) 22vw, 42vw" quality={80} className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center text-[#0B3D24]">
                      <svg width="88" height="88" viewBox="0 0 24 24" fill="currentColor"><path d="M18.5 9.5A6.5 6.5 0 0 0 6 8a5 5 0 0 0 .5 10h12a4.25 4.25 0 0 0 0-8.5z" /><path d="M12 9v6m0 0l-2.6-2.6M12 15l2.6-2.6" stroke="#DDF3E4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                    </span>
                  )}
                </div>
                <div className="flex flex-1 items-end gap-3 p-5 sm:p-6">
                  <div className="flex-1">
                    <h2 className="text-[21px] font-bold leading-snug tracking-[-0.01em] text-[#0B361F]">{card.title}</h2>
                    <p className="mt-1.5 text-[15px] leading-[1.5] text-[#2F4538]">{card.text}</p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DDF3E4] text-[#1E7A4C] transition group-hover:bg-[#0B361F] group-hover:text-white"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S ON / NEWS / SUPPORT US */}
      <section className="bg-[#F3F7F2] pb-10 lg:pb-12">
        <div className="mx-auto max-w-[1440px] space-y-10 px-5 sm:px-8 lg:px-12">
          <div>
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="flex items-center gap-3 text-[24px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[28px]">
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg text-white" style={{ background: "#3FA34D" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>
                </span>
                What&rsquo;s on
              </h2>
              <a href="/events/" className="inline-flex items-center gap-2 text-[15px] font-bold text-[#1E7A4C] hover:text-[#0B361F]">View more events <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "NuroTok Webinar: Digital Wellbeing", date: "Thu 14 January 2027", icon: <><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></> },
                { title: "Sensory Support Workshop", date: "Tue 9 February 2027", icon: <><circle cx="12" cy="7.5" r="2.6" /><circle cx="5.2" cy="9.3" r="2.1" /><circle cx="18.8" cy="9.3" r="2.1" /><path d="M7.2 19.5v-1.2a4.8 4.8 0 0 1 9.6 0v1.2M1.8 18.5v-.6a3.4 3.4 0 0 1 4.6-3.2M22.2 18.5v-.6a3.4 3.4 0 0 0-4.6-3.2" /></> },
                { title: "Using NuroTok in Daily Life", date: "Thu 25 February 2027", icon: <><rect x="3" y="5" width="18" height="12" rx="1.5" /><path d="M1.5 19.5h21" /></> },
                { title: "Calmer Screens for Focus", date: "Tue 9 March 2027", icon: <><path d="M20 4C11 4 5 9 5 16c0 1.5.3 2.6.8 3.5" /><path d="M20 4c0 9-5 15-12 15" /></> },
              ].map(ev => (
                <a key={ev.title} href="/events/" className="group rounded-[16px] border border-[#D5E2D8] bg-white shadow-[0_2px_10px_rgba(11,54,31,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(11,54,31,0.10)] flex flex-col p-5">
                  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2E7D50" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ev.icon}</svg>
                  <h3 className="mt-2 text-[17px] font-bold leading-snug text-[#0B361F]">{ev.title}</h3>
                  <span className="mt-3 flex items-center justify-between gap-3 text-[13.5px] text-[#2F4538]">
                    <span className="flex items-center gap-2"><svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>{ev.date}</span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DDF3E4] text-[#1E7A4C] transition group-hover:bg-[#0B361F] group-hover:text-white"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="flex items-center gap-3 text-[24px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[28px]">
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg text-white" style={{ background: "#3FA34D" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 8h10M7 12h10M7 16h6" /></svg>
                </span>
                Latest news
              </h2>
              <a href="/news/" className="inline-flex items-center gap-2 text-[15px] font-bold text-[#1E7A4C] hover:text-[#0B361F]">View all news <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { title: "NuroTok: New app features now available", date: "7 November 2026", img: "/images/home/app-break.jpg" },
                { title: "How sensory tools can support focus", date: "5 November 2026", img: photo.hero, pos: "object-[78%_30%]" },
                { title: "Our latest research update", date: "23 October 2026", img: photo.research },
              ].map(n => (
                <a key={n.title} href="/news/" className="group rounded-[16px] border border-[#D5E2D8] bg-white shadow-[0_2px_10px_rgba(11,54,31,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(11,54,31,0.10)] flex overflow-hidden">
                  <div className="relative w-[38%] shrink-0">
                    <Image src={n.img} alt="" fill sizes="(min-width: 768px) 14vw, 38vw" quality={75} className={`object-cover ${"pos" in n ? n.pos : ""}`} />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-3 p-4">
                    <h3 className="text-[16px] font-bold leading-snug text-[#0B361F]">{n.title}</h3>
                    <span className="flex items-center justify-between gap-3 text-[13.5px] text-[#2F4538]">
                      <span className="flex items-center gap-2"><svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>{n.date}</span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DDF3E4] text-[#1E7A4C] transition group-hover:bg-[#0B361F] group-hover:text-white"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="flex items-center gap-3 text-[24px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[28px]">
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg text-white" style={{ background: "#7B4FC9" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7.5" r="2.6" /><circle cx="5.2" cy="9.3" r="2.1" /><circle cx="18.8" cy="9.3" r="2.1" /><path d="M7.2 19.5v-1.2a4.8 4.8 0 0 1 9.6 0v1.2" /></svg>
                </span>
                Support us
              </h2>
              
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="group rounded-[16px] border border-[#D5E2D8] bg-white shadow-[0_2px_10px_rgba(11,54,31,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(11,54,31,0.10)] flex overflow-hidden">
                <div className="relative w-[44%] shrink-0">
                  <Image src={photo.training} alt="" fill sizes="(min-width: 768px) 20vw, 44vw" quality={75} className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col items-start p-5">
                  <h3 className="text-[19px] font-bold text-[#0B361F]">Partner with NuroTok</h3>
                  <p className="mt-1.5 text-[15px] leading-[1.5] text-[#2F4538]">Work with us to bring sensory support to more people.</p>
                  <a href="/contact-us/" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#DDF3E4] px-5 py-2.5 text-[15px] font-semibold text-[#0B361F] hover:bg-[#0B361F] hover:text-white">Get in touch <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
                </div>
              </div>
              <div className="group rounded-[16px] border border-[#D5E2D8] bg-white shadow-[0_2px_10px_rgba(11,54,31,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(11,54,31,0.10)] flex items-start gap-5 p-5 sm:p-6">
                <svg aria-hidden="true" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#3FA34D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M12 20s-7.5-4.6-7.5-10A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7.5 3c0 5.4-7.5 10-7.5 10z" /></svg>
                <div className="flex flex-col items-start">
                  <h3 className="text-[19px] font-bold text-[#0B361F]">Support our work</h3>
                  <p className="mt-1.5 text-[15px] leading-[1.5] text-[#2F4538]">Help us continue to develop tools and resources for a more inclusive digital world.</p>
                  <a href="/about-us/" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#DDF3E4] px-5 py-2.5 text-[15px] font-semibold text-[#0B361F] hover:bg-[#0B361F] hover:text-white">Find out more <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact strip */}
          <div className="grid gap-5 border-t border-[#D5E2D8] pt-6 text-[14.5px] text-[#0B361F] sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
            <p className="flex items-center gap-3"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#0B361F"><path d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>NuroTok · NeuroDigital Support<br className="hidden lg:block" /> United Kingdom</p>
            <a href="tel:+447825354088" className="flex items-center gap-3 hover:text-[#367050]"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#0B361F"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" /></svg>+44 7825 354088</a>
            <a href="mailto:info@nurotok.co.uk" className="flex items-center gap-3 hover:text-[#367050]"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#0B361F"><path d="M3 5h18v14H3z" /><path d="M3.5 6l8.5 6.5L20.5 6" stroke="#F3F7F2" strokeWidth="1.6" fill="none" /></svg>info@nurotok.co.uk</a>
            <div className="flex items-center gap-4 lg:justify-end">
              <a href="#" aria-label="LinkedIn" className="text-[#0B361F] hover:opacity-70"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z" /></svg></a>
              <a href="#" aria-label="YouTube" className="text-[#E62117] hover:opacity-70"><svg width="28" height="24" viewBox="0 0 28 20" fill="currentColor"><path d="M27.4 3.1A3.5 3.5 0 0 0 25 .6C22.8 0 14 0 14 0S5.2 0 3 .6A3.5 3.5 0 0 0 .6 3.1 37 37 0 0 0 0 10a37 37 0 0 0 .6 6.9A3.5 3.5 0 0 0 3 19.4c2.2.6 11 .6 11 .6s8.8 0 11-.6a3.5 3.5 0 0 0 2.4-2.5A37 37 0 0 0 28 10a37 37 0 0 0-.6-6.9zM11.2 14.3V5.7L18.5 10z" /></svg></a>
              <a href="#" aria-label="Instagram" className="text-[#C13584] hover:opacity-70"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg></a>
              <a href="#" aria-label="X" className="text-[#0B361F] hover:opacity-70"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2.5h3.3l-7.2 8.2 8.5 10.8h-6.6l-5.2-6.6-5.9 6.6H1.8l7.7-8.8L1.4 2.5h6.8l4.7 6.1zm-1.2 17h1.8L7.1 4.4H5.1z" /></svg></a>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="scroll-mt-24 bg-[#FAFBF8] py-10 lg:py-14">
        <div className="reveal mx-auto grid max-w-[1440px] gap-6 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)] lg:items-stretch lg:gap-8 lg:px-12">
          {/* Video preview: stretches to the height of the copy card */}
          <DemoVideo
            src="https://neurodigitalsupport.com/videos/nurotok-demo-1080p.mp4"
            className="relative block aspect-[16/10] overflow-hidden rounded-[22px] shadow-[0_14px_36px_rgba(11,54,31,0.16)] lg:aspect-auto lg:h-full lg:min-h-[400px]"
          >
            {/* Clear room photo with a light brand tint */}
            <Image src={photo.hero} alt="" fill sizes="(min-width: 1024px) 55vw, 100vw" quality={80} className="object-cover object-[30%_center] transition-transform duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(11,54,31,0.38)_0%,rgba(11,54,31,0.12)_50%,rgba(11,54,31,0.32)_100%)]" />

            {/* Phone mock */}
            <div data-light className="absolute left-[58%] top-1/2 w-[25%] max-w-[190px] -translate-y-1/2 rotate-[12deg] transition-transform duration-500 group-hover:rotate-[9deg]">
              <div className="rounded-[26px] bg-[#0F1F17] p-[5px] shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                <div className="relative aspect-[9/15] overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,#F3FAF5_0%,#DDF3E6_55%,#BFE8D0_100%)]">
                  <div className="absolute left-1/2 top-[5px] h-[5%] w-[32%] -translate-x-1/2 rounded-full bg-[#0F1F17]" />
                  <div className="flex flex-col items-center pt-[20%]">
                    <img src="/images/nurotok-logo.png" alt="" className="w-[34%]" />
                    <span className="mt-[6%] font-heading text-[clamp(11px,1.3vw,19px)] font-bold tracking-[-0.03em] text-[#0E4A2E]">NuroTok</span>
                  </div>
                  <svg aria-hidden="true" viewBox="0 0 100 60" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-[38%] w-full">
                    <path d="M0 30 C20 14 38 22 52 30 S82 20 100 26 V60 H0Z" fill="#7FCBA6" />
                    <path d="M0 40 C18 30 34 34 50 40 S80 32 100 38 V60 H0Z" fill="#3E8E64" />
                    <path d="M0 50 C22 44 40 48 56 52 S84 46 100 50 V60 H0Z" fill="#1E5A3B" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Play button (centre) */}
            <span data-light className="absolute left-1/2 top-1/2 z-10 flex h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#0B361F] shadow-[0_0_0_10px_rgba(255,255,255,0.22),0_10px_28px_rgba(0,0,0,0.28)] transition-transform duration-300 group-hover:scale-110 sm:h-[76px] sm:w-[76px]">
              <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="ml-[3px]"><path d="M7 4.8v14.4c0 .8.9 1.3 1.6.9l11.2-7.2c.6-.4.6-1.4 0-1.8L8.6 3.9C7.9 3.5 7 4 7 4.8z" /></svg>
            </span>

            <span className="absolute bottom-4 right-4 rounded-md bg-[#0B361F]/90 px-2.5 py-1 text-[13px] font-bold tracking-wide text-white">
              0:37
            </span>
          </DemoVideo>

          {/* Copy card */}
          <div className="flex flex-col justify-center rounded-[22px] border border-[#E3ECE3] bg-white p-7 shadow-[0_2px_12px_rgba(11,54,31,0.05)] sm:p-9 lg:p-10">
            <p className="flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[#1E7A4C]">
              <span aria-hidden="true" className="h-[5px] w-7 rounded-full bg-[#367050]" />
              Product demo · 0:37
            </p>
            <h2 className="mt-4 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-[#0B361F] sm:text-[40px]">
              See NuroTok in action.
            </h2>
            <p className="mt-3 text-[17px] leading-[1.6] text-[#3E5146]">
              A 37-second look at the sensory profile, app protection, the sensory toolkit and Insights.
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-3">
              {[
                { label: "Sensory profile", icon: <Icon name="profile" size={18} strokeWidth={2} /> },
                { label: "App protection", icon: <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.8l7.5 3v5.7c0 4.6-3.2 8.3-7.5 9.7-4.3-1.4-7.5-5.1-7.5-9.7V5.8z" /><path d="M8.6 12.2l2.4 2.4 4.5-4.6" /></svg> },
                { label: "Sensory toolkit", icon: <Icon name="toolkit" size={18} strokeWidth={2} /> },
                { label: "Insights", icon: <Icon name="insights" size={18} strokeWidth={2} /> },
              ].map(item => (
                <li key={item.label} className="flex items-center gap-3 rounded-xl border border-[#E3ECE6] bg-[#F7FAF6] px-3.5 py-3 text-[14.5px] font-semibold text-[#0B361F]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E3F4EA] text-[#1E7A4C]">{item.icon}</span>
                  {item.label}
                </li>
              ))}
            </ul>

            {/* TODO: render captions + transcript here when the content team supplies them */}
            <div id="transcript" className="mt-7 flex scroll-mt-28 flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#demo-video" data-play-demo className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full border-2 border-[#0B361F] bg-[#0B361F] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:border-[#367050] hover:bg-[#367050]">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.8v14.4c0 .8.9 1.3 1.6.9l11.2-7.2c.6-.4.6-1.4 0-1.8L8.6 3.9C7.9 3.5 7 4 7 4.8z" /></svg>
                Watch the demo
              </a>
              <a href="#transcript" className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full border-2 border-[#0B361F] px-6 py-3 text-[15px] font-semibold text-[#0B361F] transition-colors hover:bg-[#0B361F] hover:text-white">
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2.5h8.5L19 7v14.5H6z" /><path d="M14 2.5V7h5M9 12h7M9 15.5h7M9 9h3" /></svg>
                Read the transcript
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE + FOUR SCREENS */}
      <section data-dark="section-alt" className="bg-[linear-gradient(180deg,#EEF5EE_0%,#F3F8F2_100%)] py-10 lg:py-14">
        <div className="reveal mx-auto grid max-w-[1440px] gap-12 px-6 sm:px-8 [&>*]:min-w-0 lg:px-12 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,2fr)] xl:gap-0">
          <div className="max-w-[720px] xl:max-w-none xl:border-r xl:border-[#C9DACB] xl:pr-10">
            <h2 className="text-[34px] font-bold leading-[1.12] tracking-[-0.025em] text-[#0B361F] xl:text-[40px]">
              Designed with neurodivergent adults in mind.
            </h2>

            <p className="mt-5 text-[16px] leading-[1.6] text-[#2F4538]">
              People experience the same screen differently. A sound one person enjoys can make it difficult for someone else to{" "}
              <strong className="font-bold text-[#0B361F]">concentrate</strong>. Our starting point is simple. You decide what feels comfortable, and you can change your mind.
            </p>

            <a
              href="/about-us/"
              className="mt-7 inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-[#0B361F] px-6 py-3 text-[15px] font-semibold text-[#0B361F] transition-colors hover:bg-[#0B361F] hover:text-white"
            >
              Why we built NuroTok
              <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
            </a>
          </div>

          <div className="xl:pl-10">
            <h2 className="text-[28px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[32px]">
              Explore the four main screens.
            </h2>
            <ScreensCarousel />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section data-dark="section-alt" className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FAF6_100%)] py-10 lg:py-14">
        <div className="reveal mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-8 lg:px-12 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,2fr)] xl:gap-0">
          <div className="flex flex-col xl:border-r xl:border-[#D8E2D9] xl:pr-10">
            <h2 className="text-[34px] font-bold leading-[1.12] tracking-[-0.025em] text-[#0B361F] xl:text-[36px]">
              NuroTok questions,<br className="hidden xl:block" /> answered
            </h2>
            <p className="mt-4 max-w-[300px] text-[16px] leading-[1.55] text-[#3E5146]">
              Quick answers to common questions about NuroTok.
            </p>

            <div data-dark="card" className="group mt-8 rounded-[20px] border border-[#CFE3D6] bg-[linear-gradient(135deg,#E6F4EB_0%,#F3FAF5_100%)] p-6 shadow-[0_2px_12px_rgba(11,54,31,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#B9CFBF] hover:shadow-[0_16px_34px_rgba(11,54,31,0.10)] xl:mt-auto">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1E7A4C] shadow-[0_2px_8px_rgba(11,54,31,0.08)]">
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 6.5L12 13l8.5-6.5" /></svg>
              </span>
              <h3 className="mt-4 text-[17px] font-bold leading-snug text-[#0B361F]">Get in touch with the NuroTok team</h3>
              <p className="mt-1.5 text-[14.5px] leading-[1.55] text-[#3E5146]">
                Email info@nurotok.co.uk. A short message is fine.
              </p>
              <a href="mailto:info@nurotok.co.uk" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[15px] font-semibold text-[#1E5A3B] shadow-[0_2px_8px_rgba(11,54,31,0.08)] transition-all duration-300 hover:bg-[#0B361F] hover:text-white group-hover:gap-3">
                Email the team
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </div>
          </div>

          <div className="xl:pl-10">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* DOWNLOAD (#download) */}
      <section id="download" className="scroll-mt-24 bg-[#F7FAF6] px-5 pb-10 pt-0 sm:px-8 lg:px-12 lg:pb-12">
        <div data-dark="download" className="reveal relative mx-auto grid max-w-[1344px] items-center overflow-hidden rounded-[24px] border border-[#D6E6DA] bg-[linear-gradient(120deg,#E3F3E8_0%,#EEF7F0_45%,#F8FBF7_100%)] px-6 pt-10 sm:px-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:px-14 lg:pt-0 lg:items-center">
          <span aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#94E7BC]/30 blur-3xl" />
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-[#BDEED7]/40 blur-3xl" />

          <div className="relative lg:py-14">
            <h2 className="text-[30px] font-bold leading-[1.15] tracking-[-0.025em] text-[#0B361F] sm:text-[38px]">
              Ready to manage your sensory wellbeing?
            </h2>
            <p className="mt-4 max-w-[520px] text-[16.5px] leading-[1.6] text-[#2F4538]">
              Get NuroTok from the App Store or Google Play. Some tools differ by device. The sensory toolkit is free.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={APP_STORE_URL}
                className="inline-flex items-center gap-3 rounded-[14px] bg-[#0B1A12] px-5 py-3 text-white shadow-[0_8px_20px_rgba(11,54,31,0.2)] transition-transform hover:-translate-y-0.5"
              >
                <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.730-1.35-.14-2.64.8-3.33.8-.69 0-1.75-.78-2.88-.76-1.480.02-2.85.86-3.61 2.19-1.54 2.67-.39 6.62 1.11 8.79.73 1.06 1.6 2.25 2.75 2.2 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.71.71 2.88.69 1.19-.02 1.94-1.08 2.67-2.14.84-1.23 1.19-2.42 1.21-2.48-.03-.01-2.32-.89-2.35-3.54zM14.2 6.13c.61-.74 1.02-1.76.91-2.78-.88.04-1.94.59-2.57 1.32-.56.65-1.06 1.69-.93 2.69.98.08 1.98-.5 2.59-1.23z" /></svg>
                <span className="text-left leading-tight">
                  <span className="block text-[11px] font-medium text-white/75">Download on the</span>
                  <span className="block text-[18px] font-semibold tracking-[-0.01em]">App Store</span>
                </span>
              </a>
              <a
                href={GOOGLE_PLAY_URL}
                className="inline-flex items-center gap-3 rounded-[14px] bg-[#0B1A12] px-5 py-3 text-white shadow-[0_8px_20px_rgba(11,54,31,0.2)] transition-transform hover:-translate-y-0.5"
              >
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M3.6 2.3L13.7 12 3.6 21.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1z" fill="#4285F4" />
                  <path d="M16.8 8.9L13.7 12 3.6 2.3c.3-.2.8-.2 1.2 0l12 6.6z" fill="#34A853" />
                  <path d="M20.4 10.9c.7.4.7 1.8 0 2.2l-3.6 2L13.7 12l3.1-3.1 3.6 2z" fill="#FBBC04" />
                  <path d="M16.8 15.1l-12 6.6c-.4.2-.9.2-1.2 0L13.7 12l3.1 3.1z" fill="#EA4335" />
                </svg>
                <span className="text-left leading-tight">
                  <span className="block text-[11px] font-medium uppercase tracking-[0.04em] text-white/75">Get it on</span>
                  <span className="block text-[18px] font-semibold tracking-[-0.01em]">Google Play</span>
                </span>
              </a>
            </div>
          </div>

          {/* App preview: two phones, fully inside the card */}
          <div aria-hidden="true" className="relative mx-auto mb-8 mt-8 h-[380px] w-full max-w-[400px] lg:my-10">
            <div className="absolute left-[4%] top-8 w-[165px] -rotate-[7deg] opacity-95 sm:left-[10%]">
              <InsightsScreen />
            </div>
            <div className="absolute right-[4%] top-0 w-[176px] rotate-[5deg] sm:right-[10%]">
              <HomeScreen />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer data-dark="footer" className="bg-[#0B3D24] text-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 px-6 py-8 sm:px-8 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] lg:gap-0 lg:px-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-1 lg:pr-8">
            <BrandLogo light />
            <p className="mt-3 max-w-[260px] text-[14.5px] leading-[1.45] text-[#CFE8DA]">A sensory regulation app from NeuroDigital Support.</p>
          </div>

          <nav aria-label="Quick links" className="lg:border-l lg:border-white/15 lg:pl-10">
            <h3 className="text-[15px] font-bold text-white">Quick links</h3>
            <ul className="mt-2 space-y-0.5">
              {[["Home", "/"], ["About", "/about-us/"], ["Features", "/features/"], ["Research", "/research/"], ["Training", "/training/"]].map(([label, href]) => (
                <li key={label}><a href={href} className="text-[14.5px] text-[#CFE8DA] hover:text-white">{label}</a></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="More" className="lg:border-l lg:border-white/15 lg:pl-10">
            <h3 className="text-[15px] font-bold text-white">More</h3>
            <ul className="mt-2 space-y-0.5">
              {[["Blogs", "/blogs/"], ["Store", "/store/"], ["Events", "/events/"], ["News", "/news/"], ["Contact", "/contact-us/"]].map(([label, href]) => (
                <li key={label}><a href={href} className="text-[14.5px] text-[#CFE8DA] hover:text-white">{label}</a></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Information" className="lg:border-l lg:border-white/15 lg:pl-10">
            <h3 className="text-[15px] font-bold text-white">Information</h3>
            <ul className="mt-2 space-y-0.5">
              {[["Accessibility", "/accessibility/"], ["Privacy Policy", "/privacy-policy/"], ["Terms of Use", "/terms/"], ["Cookies", "/cookie-policy/"]].map(([label, href]) => (
                <li key={label}><a href={href} className="text-[14.5px] text-[#CFE8DA] hover:text-white">{label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 flex items-center gap-4 md:col-span-3 lg:col-span-1 lg:border-l lg:border-white/15 lg:pl-10">
            <svg aria-hidden="true" width="40" height="40" viewBox="0 0 32 32" fill="none" stroke="#94E7BC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M27 5C15 5 7 10.5 7 19.5c0 2.2.6 4 1.6 5.3C18.5 25 26 18 27 5z" /><path d="M5 27c4-5 9-9.5 15-13" /></svg>
            <p className="text-[19px] font-bold leading-[1.3] text-white">A calmer mind,<br />a brighter you.</p>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-4 text-[13.5px] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
            <p className="m-0 text-[#CFE8DA]">© 2026 NeuroDigital Support. All rights reserved.</p>
            <ul className="flex flex-wrap items-center gap-y-2 text-[#CFE8DA]">
              {[["Accessibility", "/accessibility/"], ["Privacy Policy", "/privacy-policy/"], ["Terms of Use", "/terms/"], ["Cookies", "/cookie-policy/"]].map(([label, href], i) => (
                <li key={label} className="flex items-center">
                  {i > 0 && <span aria-hidden="true" className="mx-4 h-3.5 w-px bg-white/30" />}
                  <a href={href} className="hover:text-white">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

    </main>
  );
}
