import Image from "next/image";
import SiteHeader from "./components/SiteHeader";
import ScreensCarousel from "./components/ScreensCarousel";
import HeroSlider, { type Slide } from "./components/HeroSlider";
import { press } from "./news/items";
import FaqAccordion from "./components/FaqAccordion";
import BrandLogo from "./components/BrandLogo";
import SiteFooter from "./components/SiteFooter";

const APP_STORE_URL = "https://apps.apple.com/app/nurotok/id6822251386";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.nurotok.app";
const linkCls = "font-semibold text-[#367050] underline underline-offset-2 hover:text-[#0B361F]";

/* Copy from the client build brief, Home pages 3-4. */
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
        Open Your account on the website and choose the account deletion option. If you need help, email{" "}
        <a href="mailto:info@nurotok.co.uk" className={linkCls}>info@nurotok.co.uk</a>.
      </>
    ),
  },
];

const photo = {
  hero: "/images/home/hero-workspace.jpg",
  research: "/images/home/research.jpg",
};


/* Top-of-page slider: images and the demo video (client request). */
const heroSlides: Slide[] = [
  {
    kind: "video",
    src: "https://neurodigitalsupport.com/videos/nurotok-demo-1080p.mp4",
    poster: "/images/screens/demo-poster.jpg",
    alt: "A 37-second tour of the NuroTok app",
    eyebrow: "Watch",
    title: "See NuroTok in action",
    text: "A 37-second look at the sensory profile, app protection, the sensory toolkit and Insights.",
    cta: { label: "Explore the features", href: "/features/" },
  },
  {
    kind: "image",
    src: "/images/screens/toolkit.webp",
    alt: "The NuroTok sensory toolkit on a phone",
    fit: "screen",
    eyebrow: "Sensory toolkit",
    title: "Calming tools within easy reach",
    text: "Breathing guides, sounds, comfort settings and check-ins, all in one place. Choose the tool that feels right for you today.",
    cta: { label: "Explore the features", href: "/features/" },
  },
  {
    kind: "image",
    src: "/images/screens/insights.webp",
    alt: "The NuroTok Insights screen on a phone",
    fit: "screen",
    eyebrow: "Insights",
    title: "Small steps. Real change.",
    text: "See your calmer, safer days in numbers. NuroTok counts only what it stepped in on, and never keeps what it saw.",
    cta: { label: "Read the research", href: "/research/" },
  },
];


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

      {/* HERO SLIDER + QUICK TOOLS */}
      <section id="main-content" className="bg-[#F6F3EC] pb-12 pt-5 lg:pb-32 lg:pt-10">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          {/* Slider of images and videos */}
          <HeroSlider slides={heroSlides} />

          {/* Ready to manage your sensory wellbeing? */}
          <div id="download" className="mt-8 scroll-mt-28 rounded-[6px] border border-[#D5E2D8] bg-white p-7 text-center sm:p-10 lg:mt-10 lg:p-12">
            <h2 className="text-[32px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[40px]">Ready to manage your sensory wellbeing?</h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={APP_STORE_URL} className="inline-flex items-center gap-3 rounded-[8px] bg-[#0B1A12] px-5 py-3 text-white transition-transform hover:-translate-y-0.5">
                <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.75-.78-2.88-.76-1.48.02-2.85.86-3.61 2.19-1.54 2.67-.39 6.62 1.11 8.79.73 1.06 1.6 2.25 2.75 2.2 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.71.71 2.88.69 1.19-.02 1.94-1.08 2.67-2.14.84-1.23 1.19-2.42 1.21-2.48-.03-.01-2.32-.89-2.35-3.54zM14.2 6.13c.61-.74 1.02-1.76.91-2.78-.88.04-1.94.59-2.57 1.32-.56.65-1.06 1.69-.93 2.69.98.08 1.98-.5 2.59-1.23z" /></svg>
                <span className="text-left leading-tight">
                  <span className="block text-[12px] text-white/75">Download on the</span>
                  <span className="block text-[19px] font-semibold">App Store</span>
                </span>
              </a>
              <a href={GOOGLE_PLAY_URL} className="inline-flex items-center gap-3 rounded-[8px] bg-[#0B1A12] px-5 py-3 text-white transition-transform hover:-translate-y-0.5">
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M3.6 2.3L13.7 12 3.6 21.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1z" fill="#4285F4" />
                  <path d="M16.8 8.9L13.7 12 3.6 2.3c.3-.2.8-.2 1.2 0l12 6.6z" fill="#34A853" />
                  <path d="M20.4 10.9c.7.4.7 1.8 0 2.2l-3.6 2L13.7 12l3.1-3.1 3.6 2z" fill="#FBBC04" />
                  <path d="M16.8 15.1l-12 6.6c-.4.2-.9.2-1.2 0L13.7 12l3.1 3.1z" fill="#EA4335" />
                </svg>
                <span className="text-left leading-tight">
                  <span className="block text-[12px] uppercase tracking-[0.04em] text-white/75">Get it on</span>
                  <span className="block text-[19px] font-semibold">Google Play</span>
                </span>
              </a>
            </div>
          </div>


          {/* Explore the four main screens */}
          <div className="mt-12 lg:mt-28">
            <h2 className="text-[32px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[40px]">Explore the four main screens</h2>
            <ScreensCarousel />
          </div>

          {/* Three quick tools */}
          <h2 className="mt-12 text-[32px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[40px] lg:mt-28">What would help right now?</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { title: "A quieter moment.", text: "Listen to rainfall, follow a short breathing guide or put your phone down while a sound plays in the background.", pos: "object-center", img: "/images/home/quiet-rain.jpg" },
              { title: "A break from an app.", text: "Choose where you want a pause. You might want a moment to think before opening social media at bedtime, while keeping the apps you use to reach people close at hand.", pos: "object-center", img: "/images/home/app-break.jpg" },
              { title: "A screen that suits you.", text: "Explore the comfort settings for your device. Start with one thing you notice often, such as movement or brightness, and see how a change feels.", pos: "object-center", img: "/images/home/screen-comfort.jpg" },
            ].map(card => (
              <a key={card.title} href="/features/" className="group flex flex-col overflow-hidden rounded-[6px] border border-[#D5E2D8] bg-white transition">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={card.img} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" quality={80} className={`object-cover ${card.pos} transition-transform duration-500 group-hover:scale-105`} />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-[24px] font-bold tracking-[-0.01em] text-[#0B361F] lg:text-[28px]">{card.title}</h2>
                  <p className="mt-1.5 text-[20px] leading-[1.55] text-[#2F4538] lg:text-[22px]">{card.text}</p>
                  <span className="mt-4 flex h-9 w-9 shrink-0 items-center justify-center self-end rounded-full lg:mt-auto bg-[#F6F3EC] text-[#0B361F] transition group-hover:bg-[#0B361F] group-hover:text-white"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
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

      {/* DESIGNED FOR NEURODIVERGENT ADULTS + DEMO */}
      <section className="bg-[#F6F3EC] pb-12 lg:pb-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <div className="rounded-[6px] border border-[#D5E2D8] bg-white p-7 sm:p-10 lg:p-12">
            <h2 className="text-[32px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[40px]">Designed with neurodivergent adults in mind</h2>
            <p className="mt-4 max-w-[760px] text-[20px] leading-[1.55] text-[#2F4538] lg:text-[22px]">
              People experience the same screen differently. A sound one person enjoys can make it difficult for someone else to concentrate. Our starting point is simple. You decide what feels comfortable, and you can change your mind.
            </p>
            <a href="/about-us/" className="mt-6 inline-flex items-center gap-2 text-[19px] font-bold text-[#367050] hover:text-[#0B361F]">
              Why we built NuroTok <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>

          {/* NuroTok questions, answered */}
          <div className="mt-12 lg:mt-28">
            <h2 className="text-[32px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[40px]">NuroTok questions, answered</h2>
            <p className="mt-3 text-[20px] leading-[1.55] text-[#2F4538]">Quick answers to common questions about NuroTok.</p>
            <div className="mt-8">
              <FaqAccordion items={faqs} />
            </div>
          </div>

        </div>
      </section>

      {/* LATEST NEWS (green band) */}
      <section className="bg-[#F6F3EC] pb-12 lg:pb-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <div>
            <div className="mb-6 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <h2 className="flex items-center gap-3 text-[32px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[40px]">
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg text-white" style={{ background: "#367050" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 8h10M7 12h10M7 16h6" /></svg>
                </span>
                In the media
              </h2>
              <a href="/news/" className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-[18px] font-bold text-[#367050] hover:text-[#0B361F]">See all coverage <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {press.slice(0, 3).map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-[6px] border border-[#D5E2D8] bg-white p-6 transition hover:border-[#367050]"
                >
                  <span className={`flex h-[52px] items-center${item.dark ? " w-fit rounded-md bg-[#0B361F] px-3" : ""}`}>
                    <Image src={item.logo} alt={item.outlet} width={180} height={60} sizes="180px" quality={90} className="h-auto max-h-[44px] w-auto max-w-[150px] object-contain object-left" />
                  </span>
                  <span className="mt-4 inline-flex w-fit rounded-full bg-[#BDEED7] px-3 py-1 text-[13px] font-bold uppercase tracking-[0.06em] text-[#0B361F]">{item.tag}</span>
                  <h3 className="mt-3 flex-1 text-[19px] font-bold leading-[1.35] text-[#0B361F]">{item.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-[17px] font-bold text-[#367050] group-hover:text-[#0B361F]">
                    Read the article
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SUPPORT US */}
      <section className="bg-[#F6F3EC] pb-20 pt-20 lg:pb-16 lg:pt-16">
        <div className="mx-auto max-w-[1440px] space-y-14 px-5 sm:px-8 lg:px-12 lg:space-y-36 xl:px-[88px]">
          <div>
            <div className="mb-6 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
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

      <SiteFooter />

    </main>
  );
}
