import Image from "next/image";
import SiteHeader from "./components/SiteHeader";

const photo = {
  hero: "/images/home/hero-workspace.jpg",
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
      <section id="main-content" className="bg-[#F6F3EC] pb-20 pt-8 lg:pb-32 lg:pt-10">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          {/* News card */}
          <div className="relative grid overflow-hidden rounded-[6px] border border-[#D5E2D8] bg-white lg:grid-cols-2">
            <div className="relative z-10 p-7 sm:p-10 lg:py-12 lg:pl-12">
              <p className="text-[20px] font-bold text-[#0B361F]">News</p>
              <span aria-hidden="true" className="mt-2 block h-1 w-12 rounded-full bg-[#367050]" />
              <h1 className="mt-5 text-[40px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0B361F] sm:text-[52px] lg:text-[60px]">Introducing NuroTok</h1>
              <p className="mt-4 max-w-[520px] text-[22px] leading-[1.5] text-[#1F3A2B]">
                A sensory regulation app to help you create a calmer, more comfortable digital experience.
              </p>
              <a href="/news/" className="mt-6 inline-flex items-center gap-2 text-[19px] font-bold text-[#367050] hover:text-[#0B361F]">
                Read more <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </div>

            <div className="relative min-h-[280px] overflow-hidden lg:min-h-[340px]">
              <Image src={photo.hero} alt="A hand holding a phone showing the NuroTok app, in a calm workspace" fill priority sizes="(min-width: 1024px) 50vw, 100vw" quality={80} className="object-cover object-center lg:[clip-path:ellipse(95%_150%_at_100%_50%)]" />
            </div>
          </div>

          {/* Three quick tools */}
          <div className="mt-20 grid gap-6 md:grid-cols-3 lg:mt-28">
            {[
              { title: "A quieter moment.", text: "Listen to rainfall, follow a short breathing guide or put your phone down for a while.", pos: "object-center", img: "/images/home/quiet-rain.jpg" },
              { title: "A break from an app.", text: "Choose where you want a pause. Take a moment before opening certain apps.", pos: "object-center", img: "/images/home/app-break.jpg" },
              { title: "A screen that suits you.", text: "Explore comfort settings for your device, such as movement or brightness.", pos: "object-center", img: "/images/home/screen-comfort.jpg" },
            ].map(card => (
              <a key={card.title} href="/features/" className="group flex flex-col overflow-hidden rounded-[6px] border border-[#D5E2D8] bg-white transition">
                <div className="relative aspect-[16/8] overflow-hidden">
                  <Image src={card.img} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" quality={80} className={`object-cover ${card.pos} transition-transform duration-500 group-hover:scale-105`} />
                </div>
                <div className="flex flex-1 items-end gap-3 p-5">
                  <div className="flex-1">
                    <h2 className="text-[24px] font-bold tracking-[-0.01em] text-[#0B361F] lg:text-[28px]">{card.title}</h2>
                    <p className="mt-1.5 text-[20px] leading-[1.55] text-[#2F4538] lg:text-[22px]">{card.text}</p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F6F3EC] text-[#0B361F] transition group-hover:bg-[#0B361F] group-hover:text-white"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                </div>
              </a>
            ))}
          </div>

          {/* Resources + research */}
          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:mt-28">
            {[
              { title: "Downloadable resources", text: "Guides, tips and practical tools to support sensory comfort.", href: "/blogs/", img: null },
              { title: "Research and guidance", text: "Explore the evidence, learn from studies and see how digital tools can help.", href: "/research/", img: photo.research },
            ].map(card => (
              <a key={card.title} href={card.href} className="group flex flex-col overflow-hidden rounded-[6px] border border-[#D5E2D8] bg-white lg:flex-row transition">
                <div className="relative h-44 w-full shrink-0 overflow-hidden bg-[#EEEAE0] lg:h-auto lg:w-[42%]">
                  {card.img ? (
                    <Image src={card.img} alt="" fill sizes="(min-width: 768px) 22vw, 42vw" quality={80} className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center text-[#0B361F]">
                      <svg width="88" height="88" viewBox="0 0 24 24" fill="currentColor"><path d="M18.5 9.5A6.5 6.5 0 0 0 6 8a5 5 0 0 0 .5 10h12a4.25 4.25 0 0 0 0-8.5z" /><path d="M12 9v6m0 0l-2.6-2.6M12 15l2.6-2.6" stroke="#BDEED7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                    </span>
                  )}
                </div>
                <div className="flex flex-1 items-end gap-3 p-5 sm:p-6">
                  <div className="flex-1">
                    <h2 className="text-[24px] font-bold leading-snug lg:text-[28px] tracking-[-0.01em] text-[#0B361F]">{card.title}</h2>
                    <p className="mt-1.5 text-[20px] leading-[1.55] text-[#2F4538] lg:text-[22px]">{card.text}</p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F6F3EC] text-[#0B361F] transition group-hover:bg-[#0B361F] group-hover:text-white"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S ON / NEWS / SUPPORT US */}
      <section className="bg-[#F6F3EC] pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1440px] space-y-28 px-5 lg:space-y-36 sm:px-8 lg:px-12 xl:px-[88px]">
          <div>
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="flex items-center gap-3 text-[32px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[40px]">
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg text-white" style={{ background: "#367050" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>
                </span>
                What&rsquo;s on
              </h2>
              <a href="/events/" className="inline-flex items-center gap-2 text-[18px] font-bold text-[#367050] hover:text-[#0B361F]">View more events <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "NuroTok Webinar: Digital Wellbeing", date: "Thu 14 January 2027", img: "/images/home/break-from-app.jpg" },
                { title: "Sensory Support Workshop", date: "Tue 9 February 2027", img: "/images/home/research-guidance.jpg" },
                { title: "Using NuroTok in Daily Life", date: "Thu 25 February 2027", img: "/images/home/screen-suits-you.jpg" },
                { title: "Calmer Screens for Focus", date: "Tue 9 March 2027", img: "/images/home/store.jpg" },
              ].map(ev => (
                <a key={ev.title} href="/events/" className="group rounded-[6px] border border-[#D5E2D8] bg-white transition flex flex-col overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={ev.img} alt="" fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" quality={80} className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-[22px] font-bold leading-snug lg:text-[24px] text-[#0B361F]">{ev.title}</h3>
                    <span className="mt-3 flex items-center justify-between gap-3 text-[16px] text-[#2F4538]">
                      <span className="flex items-center gap-2"><svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>{ev.date}</span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F6F3EC] text-[#0B361F] transition group-hover:bg-[#0B361F] group-hover:text-white"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* LATEST NEWS (green band) */}
      <section className="bg-[#F6F3EC] pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <div>
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="flex items-center gap-3 text-[32px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[40px]">
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg text-white" style={{ background: "#367050" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 8h10M7 12h10M7 16h6" /></svg>
                </span>
                Latest news
              </h2>
              <a href="/news/" className="inline-flex items-center gap-2 text-[18px] font-bold text-[#367050] hover:text-[#0B361F]">View all news <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: "NuroTok: New app features now available", date: "7 November 2026", img: "/images/home/news-app-features.jpg" },
                { title: "How sensory tools can support focus", date: "5 November 2026", img: "/images/home/focus-mode.jpg" },
                { title: "Our latest research update", date: "23 October 2026", img: "/images/home/research-insights.jpg" },
              ].map(n => (
                <a key={n.title} href="/news/" className="group rounded-[6px] border border-[#D5E2D8] bg-white transition flex flex-col overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={n.img} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" quality={80} className={`object-cover transition-transform duration-500 group-hover:scale-105 ${"pos" in n ? n.pos : ""}`} />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                    <h3 className="text-[22px] font-bold leading-snug lg:text-[24px] text-[#0B361F]">{n.title}</h3>
                    <span className="flex items-center justify-between gap-3 text-[16px] text-[#2F4538]">
                      <span className="flex items-center gap-2"><svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>{n.date}</span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F6F3EC] text-[#0B361F] transition group-hover:bg-[#0B361F] group-hover:text-white"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SUPPORT US */}
      <section className="bg-[#F6F3EC] pb-20 pt-20 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-[1440px] space-y-28 px-5 sm:px-8 lg:px-12 lg:space-y-36 xl:px-[88px]">
          <div>
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="flex items-center gap-3 text-[32px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[40px]">
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg text-white" style={{ background: "#367050" }}>
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
                  <h3 className="text-[24px] font-bold text-[#0B361F] lg:text-[28px]">Partner with NuroTok</h3>
                  <p className="mt-1.5 text-[20px] leading-[1.55] text-[#2F4538] lg:text-[22px]">Work with us to bring sensory support to more people.</p>
                  <a href="/contact-us/" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#EEEAE0] px-6 py-3 text-[17px] font-semibold text-[#0B361F] hover:bg-[#0B361F] hover:text-white">Get in touch <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
                </div>
              </div>
              <div className="group rounded-[6px] border border-[#D5E2D8] bg-white transition flex flex-col overflow-hidden lg:flex-row">
                <div aria-hidden="true" className="flex h-48 w-full shrink-0 lg:h-auto lg:w-[44%] items-center justify-center bg-[#EEEAE0]">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#367050] shadow-[0_6px_18px_rgba(11,54,31,0.10)]">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7.5-4.6-7.5-10A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7.5 3c0 5.4-7.5 10-7.5 10z" /></svg>
                  </span>
                </div>
                <div className="flex flex-1 flex-col items-start justify-center p-5 sm:p-6">
                  <h3 className="text-[24px] font-bold text-[#0B361F] lg:text-[28px]">Support our work</h3>
                  <p className="mt-1.5 text-[20px] leading-[1.55] text-[#2F4538] lg:text-[22px]">Help us continue to develop tools and resources for a more inclusive digital world.</p>
                  <a href="/about-us/" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#EEEAE0] px-6 py-3 text-[17px] font-semibold text-[#0B361F] hover:bg-[#0B361F] hover:text-white">Find out more <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact strip */}
          <div className="grid gap-6 border-t border-[#E3DED2] pt-10 text-[17px] font-semibold text-[#0B361F] sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F6F3EC] text-[#0B361F]"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg></span>
              <span className="leading-snug">NuroTok · NeuroDigital Support<span className="block text-[15px] font-normal text-[#367050]">United Kingdom</span></span>
            </div>
            <a href="tel:+447825354088" className="flex items-center gap-3 hover:text-[#367050]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F6F3EC] text-[#0B361F]"><svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" /></svg></span>
              +44 7825 354088
            </a>
            <a href="mailto:info@nurotok.co.uk" className="flex items-center gap-3 hover:text-[#367050]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F6F3EC] text-[#0B361F]"><svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 6.5L12 13l8.5-6.5" /></svg></span>
              info@nurotok.co.uk
            </a>
            <div className="flex items-center gap-3 lg:justify-end">
              {[
                { label: "LinkedIn", d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z" },
                { label: "YouTube", d: "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z" },
                { label: "Instagram", d: "M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.9-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM12 3.6c2.7 0 3 0 4.1.1 2.8.1 4.1 1.4 4.2 4.2.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 2.8-1.4 4.1-4.2 4.2-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-2.8-.1-4.1-1.4-4.2-4.2C3.6 15 3.6 14.7 3.6 12s0-3 .1-4.1c.1-2.8 1.4-4.1 4.2-4.2C9 3.6 9.3 3.6 12 3.6z" },
                { label: "X", d: "M18.2 2.5h3.3l-7.2 8.2 8.5 10.8h-6.6l-5.2-6.6-5.9 6.6H1.8l7.7-8.8L1.4 2.5h6.8l4.7 6.1zm-1.2 17h1.8L7.1 4.4H5.1z" },
              ].map(sn => (
                <a key={sn.label} href="#" aria-label={`NuroTok on ${sn.label}`} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D5E2D8] bg-white text-[#0B361F] transition-colors hover:bg-[#0B361F] hover:text-white">
                  <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d={sn.d} /></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer data-dark="footer" className="bg-[#94E7BC] text-[#0B361F]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 px-6 py-8 sm:px-8 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] lg:gap-0 lg:px-12 xl:px-[88px]">
          <div className="col-span-2 md:col-span-3 lg:col-span-1 lg:pr-8">
            <BrandLogo />
            <p className="mt-3 max-w-[280px] text-[16px] leading-[1.45] text-[#3E5146]">A sensory regulation app from NeuroDigital Support.</p>
          </div>

          <nav aria-label="Quick links" className="lg:border-l lg:border-[#0B361F]/15 lg:pl-10">
            <h3 className="text-[17px] font-bold text-[#0B361F]">Quick links</h3>
            <ul className="mt-2 space-y-0.5">
              {[["Home", "/"], ["About", "/about-us/"], ["Features", "/features/"], ["Research", "/research/"], ["Training", "/training/"]].map(([label, href]) => (
                <li key={label}><a href={href} className="text-[16px] text-[#3E5146] hover:text-[#0B361F]">{label}</a></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="More" className="lg:border-l lg:border-[#0B361F]/15 lg:pl-10">
            <h3 className="text-[17px] font-bold text-[#0B361F]">More</h3>
            <ul className="mt-2 space-y-0.5">
              {[["Blogs", "/blogs/"], ["Store", "/store/"], ["Events", "/events/"], ["News", "/news/"], ["Contact", "/contact-us/"]].map(([label, href]) => (
                <li key={label}><a href={href} className="text-[16px] text-[#3E5146] hover:text-[#0B361F]">{label}</a></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Information" className="lg:border-l lg:border-[#0B361F]/15 lg:pl-10">
            <h3 className="text-[17px] font-bold text-[#0B361F]">Information</h3>
            <ul className="mt-2 space-y-0.5">
              {[["Accessibility", "/accessibility/"], ["Privacy Policy", "/privacy-policy/"], ["Terms of Use", "/terms/"], ["Cookies", "/cookie-policy/"]].map(([label, href]) => (
                <li key={label}><a href={href} className="text-[16px] text-[#3E5146] hover:text-[#0B361F]">{label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3 md:col-span-2 lg:col-span-1 lg:gap-4 lg:border-l lg:border-[#0B361F]/15 lg:pl-10">
            <svg aria-hidden="true" width="40" height="40" viewBox="0 0 32 32" fill="none" stroke="#367050" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 shrink-0 lg:h-10 lg:w-10"><path d="M27 5C15 5 7 10.5 7 19.5c0 2.2.6 4 1.6 5.3C18.5 25 26 18 27 5z" /><path d="M5 27c4-5 9-9.5 15-13" /></svg>
            <p className="text-[16px] font-bold leading-[1.3] text-[#0B361F] lg:text-[19px]">A calmer mind,<br />a brighter you.</p>
          </div>
        </div>

        <div className="border-t border-[#0B361F]/15">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-4 text-[15px] text-[#3E5146] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12 xl:px-[88px]">
            <p className="m-0 text-[#3E5146]">© 2026 NeuroDigital Support. All rights reserved.</p>
            <ul className="flex flex-wrap items-center gap-y-2 text-[#3E5146]">
              {[["Accessibility", "/accessibility/"], ["Privacy Policy", "/privacy-policy/"], ["Terms of Use", "/terms/"], ["Cookies", "/cookie-policy/"]].map(([label, href], i) => (
                <li key={label} className="flex items-center">
                  {i > 0 && <span aria-hidden="true" className="mx-4 h-3.5 w-px bg-[#D5E2D8]" />}
                  <a href={href} className="hover:text-[#0B361F]">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

    </main>
  );
}
