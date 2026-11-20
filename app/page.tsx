import Image from "next/image";
import SiteHeader from "./components/SiteHeader";
import { HomeScreen, ProfileScreen } from "./components/AppScreens";

const photo = {
  hero: "/images/image.png",
  research: "/images/home/research.jpg",
  training: "/images/home/training.jpg",
};

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

      {/* NAVIGATION */}
      <SiteHeader logo={<BrandLogo />} />

      {/* NEWS + QUICK TOOLS */}
      <section id="main-content" className="bg-[#F3F7F2] pb-6 pt-10 lg:pt-14">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          {/* News card */}
          <div className="relative grid overflow-hidden rounded-[6px] border border-[#D5E2D8] bg-white lg:grid-cols-2">
            <div className="relative z-10 p-7 sm:p-10 lg:py-12 lg:pl-12">
              <p className="text-[18px] font-bold text-[#0B361F]">News</p>
              <span aria-hidden="true" className="mt-2 block h-1 w-12 rounded-full bg-[#3FA34D]" />
              <h1 className="mt-5 text-[34px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0B361F] sm:text-[44px] lg:text-[48px]">Introducing NuroTok</h1>
              <p className="mt-4 max-w-[460px] text-[20px] leading-[1.5] text-[#1F3A2B]">
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
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { title: "A quieter moment.", text: "Listen to rainfall, follow a short breathing guide or put your phone down for a while.", pos: "object-[86%_30%]", img: photo.hero },
              { title: "A break from an app.", text: "Choose where you want a pause. Take a moment before opening certain apps.", pos: "object-center", img: "/images/home/break-from-app.jpg" },
              { title: "A screen that suits you.", text: "Explore comfort settings for your device, such as movement or brightness.", pos: "object-center", img: "/images/home/screen-suits-you.jpg" },
            ].map(card => (
              <a key={card.title} href="/features/" className="group flex flex-col overflow-hidden rounded-[6px] border border-[#D5E2D8] bg-white transition">
                <div className="relative aspect-[16/8] overflow-hidden">
                  <Image src={card.img} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" quality={80} className={`object-cover ${card.pos} transition-transform duration-500 group-hover:scale-105`} />
                </div>
                <div className="flex flex-1 items-end gap-3 p-5">
                  <div className="flex-1">
                    <h2 className="text-[22px] font-bold tracking-[-0.01em] text-[#0B361F] lg:text-[24px]">{card.title}</h2>
                    <p className="mt-1.5 text-[19px] leading-[1.55] text-[#2F4538] lg:text-[20px]">{card.text}</p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DDF3E4] text-[#1E7A4C] transition group-hover:bg-[#0B361F] group-hover:text-white"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                </div>
              </a>
            ))}
          </div>

          {/* Resources + research */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              { title: "Downloadable resources", text: "Guides, tips and practical tools to support sensory comfort.", href: "/blogs/", img: null },
              { title: "Research and guidance", text: "Explore the evidence, learn from studies and see how digital tools can help.", href: "/research/", img: "/images/home/research-guidance.jpg" },
            ].map(card => (
              <a key={card.title} href={card.href} className="group flex flex-col overflow-hidden rounded-[6px] border border-[#D5E2D8] bg-white lg:flex-row transition">
                <div className="relative h-44 w-full shrink-0 overflow-hidden bg-[#DDF3E4] lg:h-auto lg:w-[42%]">
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
                    <h2 className="text-[22px] font-bold leading-snug lg:text-[24px] tracking-[-0.01em] text-[#0B361F]">{card.title}</h2>
                    <p className="mt-1.5 text-[19px] leading-[1.55] text-[#2F4538] lg:text-[20px]">{card.text}</p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DDF3E4] text-[#1E7A4C] transition group-hover:bg-[#0B361F] group-hover:text-white"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S ON / NEWS / SUPPORT US */}
      <section className="bg-[#F3F7F2] pb-14 lg:pb-16">
        <div className="mx-auto max-w-[1440px] space-y-14 px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <div>
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="flex items-center gap-3 text-[28px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[32px]">
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg text-white" style={{ background: "#3FA34D" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>
                </span>
                What&rsquo;s on
              </h2>
              <a href="/events/" className="inline-flex items-center gap-2 text-[16px] font-bold text-[#1E7A4C] hover:text-[#0B361F]">View more events <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "NuroTok Webinar: Digital Wellbeing", date: "Thu 14 January 2027", icon: <><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></> },
                { title: "Sensory Support Workshop", date: "Tue 9 February 2027", icon: <><circle cx="12" cy="7.5" r="2.6" /><circle cx="5.2" cy="9.3" r="2.1" /><circle cx="18.8" cy="9.3" r="2.1" /><path d="M7.2 19.5v-1.2a4.8 4.8 0 0 1 9.6 0v1.2M1.8 18.5v-.6a3.4 3.4 0 0 1 4.6-3.2M22.2 18.5v-.6a3.4 3.4 0 0 0-4.6-3.2" /></> },
                { title: "Using NuroTok in Daily Life", date: "Thu 25 February 2027", icon: <><rect x="3" y="5" width="18" height="12" rx="1.5" /><path d="M1.5 19.5h21" /></> },
                { title: "Calmer Screens for Focus", date: "Tue 9 March 2027", icon: <><path d="M20 4C11 4 5 9 5 16c0 1.5.3 2.6.8 3.5" /><path d="M20 4c0 9-5 15-12 15" /></> },
              ].map(ev => (
                <a key={ev.title} href="/events/" className="group rounded-[6px] border border-[#D5E2D8] bg-white transition flex flex-col p-5">
                  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2E7D50" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ev.icon}</svg>
                  <h3 className="mt-2 text-[20px] font-bold leading-snug text-[#0B361F]">{ev.title}</h3>
                  <span className="mt-3 flex items-center justify-between gap-3 text-[14px] text-[#2F4538]">
                    <span className="flex items-center gap-2"><svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>{ev.date}</span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DDF3E4] text-[#1E7A4C] transition group-hover:bg-[#0B361F] group-hover:text-white"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="flex items-center gap-3 text-[28px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[32px]">
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg text-white" style={{ background: "#3FA34D" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 8h10M7 12h10M7 16h6" /></svg>
                </span>
                Latest news
              </h2>
              <a href="/news/" className="inline-flex items-center gap-2 text-[16px] font-bold text-[#1E7A4C] hover:text-[#0B361F]">View all news <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: "NuroTok: New app features now available", date: "7 November 2026", img: "/images/home/news-app-features.jpg" },
                { title: "How sensory tools can support focus", date: "5 November 2026", img: photo.hero, pos: "object-[85%_30%]" },
                { title: "Our latest research update", date: "23 October 2026", img: photo.research },
              ].map(n => (
                <a key={n.title} href="/news/" className="group rounded-[6px] border border-[#D5E2D8] bg-white transition flex flex-col overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={n.img} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" quality={80} className={`object-cover transition-transform duration-500 group-hover:scale-105 ${"pos" in n ? n.pos : ""}`} />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                    <h3 className="text-[20px] font-bold leading-snug text-[#0B361F]">{n.title}</h3>
                    <span className="flex items-center justify-between gap-3 text-[14px] text-[#2F4538]">
                      <span className="flex items-center gap-2"><svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>{n.date}</span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DDF3E4] text-[#1E7A4C] transition group-hover:bg-[#0B361F] group-hover:text-white"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="flex items-center gap-3 text-[28px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[32px]">
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg text-white" style={{ background: "#7B4FC9" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7.5" r="2.6" /><circle cx="5.2" cy="9.3" r="2.1" /><circle cx="18.8" cy="9.3" r="2.1" /><path d="M7.2 19.5v-1.2a4.8 4.8 0 0 1 9.6 0v1.2" /></svg>
                </span>
                Support us
              </h2>
              
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group rounded-[6px] border border-[#D5E2D8] bg-white transition flex flex-col overflow-hidden lg:flex-row">
                <div className="relative h-48 w-full shrink-0 lg:h-auto lg:min-h-[200px] lg:w-[44%]">
                  <Image src="/images/home/partner.jpg" alt="" fill sizes="(min-width: 1024px) 22vw, 100vw" quality={80} className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col items-start justify-center p-5 sm:p-6">
                  <h3 className="text-[22px] font-bold text-[#0B361F] lg:text-[24px]">Partner with NuroTok</h3>
                  <p className="mt-1.5 text-[19px] leading-[1.55] text-[#2F4538] lg:text-[20px]">Work with us to bring sensory support to more people.</p>
                  <a href="/contact-us/" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#DDF3E4] px-5 py-2.5 text-[15px] font-semibold text-[#0B361F] hover:bg-[#0B361F] hover:text-white">Get in touch <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
                </div>
              </div>
              <div className="group rounded-[6px] border border-[#D5E2D8] bg-white transition flex flex-col overflow-hidden lg:flex-row">
                <div aria-hidden="true" className="flex h-48 w-full shrink-0 lg:h-auto lg:w-[44%] items-center justify-center bg-[linear-gradient(135deg,#E6F6E8_0%,#CDEFD3_100%)]">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#3FA34D] shadow-[0_6px_18px_rgba(11,54,31,0.10)]">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7.5-4.6-7.5-10A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7.5 3c0 5.4-7.5 10-7.5 10z" /></svg>
                  </span>
                </div>
                <div className="flex flex-1 flex-col items-start justify-center p-5 sm:p-6">
                  <h3 className="text-[22px] font-bold text-[#0B361F] lg:text-[24px]">Support our work</h3>
                  <p className="mt-1.5 text-[19px] leading-[1.55] text-[#2F4538] lg:text-[20px]">Help us continue to develop tools and resources for a more inclusive digital world.</p>
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

      {/* FOOTER */}
      <footer data-dark="footer" className="bg-[#0B3D24] text-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 px-6 py-8 sm:px-8 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] lg:gap-0 lg:px-12 xl:px-[88px]">
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

          <div className="flex items-center gap-3 md:col-span-2 lg:col-span-1 lg:gap-4 lg:border-l lg:border-white/15 lg:pl-10">
            <svg aria-hidden="true" width="40" height="40" viewBox="0 0 32 32" fill="none" stroke="#94E7BC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 shrink-0 lg:h-10 lg:w-10"><path d="M27 5C15 5 7 10.5 7 19.5c0 2.2.6 4 1.6 5.3C18.5 25 26 18 27 5z" /><path d="M5 27c4-5 9-9.5 15-13" /></svg>
            <p className="text-[16px] font-bold leading-[1.3] text-white lg:text-[19px]">A calmer mind,<br />a brighter you.</p>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-4 text-[13.5px] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12 xl:px-[88px]">
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
