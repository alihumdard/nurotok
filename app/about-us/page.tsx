import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import BrandLogo from "../components/BrandLogo";
import PhoneFrame from "../components/PhoneFrame";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why we built NuroTok, and the founders behind the sensory regulation app from NeuroDigital Support.",
};

const APP_STORE_URL = "https://apps.apple.com/app/nurotok/id6822251386";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.nurotok.app";

/* Copy from the client's website content and build brief, page 13. */
const founders = [
  {
    name: "Kofi Ofori-Mensah",
    heading: "Founded by Kofi Ofori-Mensah",
    role: "Researcher, advocate, and inclusive digital design lead.",
    photo: "/images/about/kofi.jpg",
    href: "https://kofioforimensah.neurodigitalsupport.com",
    bio: "Kofi Ofori-Mensah is a recognised researcher exploring neurodiversity, social media platforms, and algorithmic inclusion. His work combines lived experience, digital technology, and academic research to understand how platform design affects autistic and neurodivergent users. His dissertation on autistic adults and social media marketing in the UK directly shapes the design of our ecosystem.",
  },
  {
    name: "Shubham Nagore",
    heading: "Shubham Nagore",
    role: "Full-stack technologist, AI specialist, and market strategist.",
    photo: null,
    href: null,
    bio: "Shubham is an AI specialist, full-stack technologist, and market strategist who co-founded NeuroDigital Support. He leads our go-to-market strategy, technology partnerships, and brand positioning, drawing on deep expertise in agentic AI, product engineering, and digital transformation across the hospitality and events sectors. He empowers teams and leaders to navigate emerging AI architectures, transform complex concepts into practical strategies, and drive the adoption of scalable, AI-powered solutions.",
  },
];

const h2 = "text-[32px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[40px]";
const card = "rounded-[6px] border border-[#D5E2D8] bg-white";

function Arrow() {
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

/** Stands in for a portrait we do not have yet. */
function Initials({ name }: { name: string }) {
  const letters = name
    .split(" ")
    .map(w => w[0])
    .join("")
    .slice(0, 2);
  return (
    <span
      aria-hidden="true"
      className="flex h-full w-full items-center justify-center bg-[#BDEED7] text-[26px] font-bold text-[#0B361F]"
    >
      {letters}
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className="overflow-x-clip bg-[#F6F3EC] text-[#0B361F]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#0B361F] focus:px-5 focus:py-3 focus:text-[15px] focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <SiteHeader logo={<BrandLogo />} />

      {/* HERO */}
      <section id="main-content" className="bg-[#F6F3EC] pb-12 pt-6 lg:pb-20 lg:pt-10">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <div className={`grid overflow-hidden lg:grid-cols-2 ${card}`}>
            <div className="order-2 p-7 sm:p-10 lg:order-1 lg:py-14 lg:pl-12">
              <h1 className="text-[40px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0B361F] sm:text-[52px] lg:text-[58px]">
                About <span className="text-[#367050]">NuroTok</span>
              </h1>
              <p className="mt-4 max-w-[520px] text-[20px] leading-[1.5] text-[#1F3A2B] lg:text-[22px]">
                NuroTok is the flagship sensory regulation app from NeuroDigital Support. We build tools that give
                people more say over how digital spaces feel.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#why" className="inline-flex items-center gap-2.5 rounded-full bg-[#0B361F] px-6 py-3 text-[17px] font-semibold text-white transition-colors hover:bg-[#367050]">
                  Why we built NuroTok <Arrow />
                </a>
                <a href="#download" className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#0B361F] px-6 py-3 text-[17px] font-semibold text-[#0B361F] transition-colors hover:bg-[#0B361F] hover:text-white">
                  Get the app
                </a>
              </div>
            </div>

            <div className="relative order-1 flex min-h-[320px] items-center justify-center overflow-hidden bg-[#EDF7F1] p-8 lg:order-2 lg:min-h-[460px]">
              <PhoneFrame className="h-full max-h-[390px] w-auto [aspect-ratio:900/1844]">
                <Image
                  src="/images/screens/home.webp"
                  alt="The NuroTok home screen on a phone"
                  width={900}
                  height={1844}
                  sizes="240px"
                  quality={90}
                  priority
                  className="h-auto w-full"
                />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE BUILT NUROTOK */}
      <section className="bg-[#F6F3EC] pb-12 lg:pb-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <div id="why" className="grid scroll-mt-28 items-stretch gap-6 lg:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[6px] border border-[#D5E2D8] lg:aspect-auto lg:min-h-[400px]">
              <Image
                src="/images/home/hero-workspace.jpg"
                alt="A person sitting with their phone in a quiet room"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={82}
                className="object-cover object-center"
              />
            </div>
            <div className={`p-7 sm:p-10 lg:p-12 ${card}`}>
              <span aria-hidden="true" className="block h-1 w-12 rounded-full bg-[#367050]" />
              <h2 className={`mt-5 ${h2}`}>Why we built NuroTok</h2>
              <p className="mt-4 text-[20px] leading-[1.55] text-[#2F4538] lg:text-[22px]">
                A group chat can be a lifeline and still feel overwhelming when six people reply at once. You might
                want to hear from a friend and wish the rest of your phone would go quiet. That choice matters to us.
              </p>
              <p className="mt-4 text-[20px] leading-[1.55] text-[#2F4538] lg:text-[22px]">
                NuroTok is the flagship sensory regulation app from NeuroDigital Support. We build tools that give
                people more say over how digital spaces feel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="bg-[#F6F3EC] pb-12 lg:pb-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <div id="founders" className="scroll-mt-28">
            <h2 className={h2}>Our founders</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {founders.map(f => (
                <div key={f.name} className={`flex flex-col p-7 sm:p-9 ${card}`}>
                  <div className="flex items-start gap-5">
                    <span className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-[#BDEED7] sm:h-24 sm:w-24">
                      {f.photo ? (
                        <Image src={f.photo} alt={f.name} width={512} height={512} sizes="96px" quality={88} className="h-full w-full object-cover" />
                      ) : (
                        <Initials name={f.name} />
                      )}
                    </span>
                    <div className="min-w-0">
                      {f.href ? (
                        <a
                          href={f.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[23px] font-bold leading-tight text-[#0B361F] hover:text-[#367050] lg:text-[25px]"
                        >
                          {f.heading}
                        </a>
                      ) : (
                        <h3 className="text-[23px] font-bold leading-tight text-[#0B361F] lg:text-[25px]">{f.heading}</h3>
                      )}
                      <p className="mt-1.5 text-[17px] font-semibold text-[#367050]">{f.role}</p>
                    </div>
                  </div>
                  <p className="mt-5 flex-1 text-[19px] leading-[1.6] text-[#2F4538] lg:text-[20px]">{f.bio}</p>
                  {f.href && (
                    <a
                      href={f.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex w-fit items-center gap-2 text-[18px] font-bold text-[#367050] hover:text-[#0B361F]"
                    >
                      Read more about {f.name.split(" ")[0]} <Arrow />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TELL US WHAT YOUR SCREEN FEELS LIKE */}
      <section className="bg-[#F6F3EC] pb-12 lg:pb-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <div className={`p-7 sm:p-10 lg:p-12 ${card}`}>
            <h2 className={h2}>Tell us what your screen feels like</h2>
            <p className="mt-4 max-w-[860px] text-[20px] leading-[1.55] text-[#2F4538] lg:text-[22px]">
              Some of the most useful feedback starts with a small detail. Perhaps you looked for a setting in three
              places, a sound stopped sooner than you wanted, or one simple change made an app easier to return to.
              We&rsquo;d like to hear about it in your own words.
            </p>
            <a
              href="/contact-us/"
              className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-[#0B361F] px-6 py-3 text-[17px] font-semibold text-white transition-colors hover:bg-[#367050]"
            >
              Share your experience <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section className="bg-[#F6F3EC] pb-12 lg:pb-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <div id="download" className={`scroll-mt-28 p-7 text-center sm:p-10 lg:p-12 ${card}`}>
            <h2 className={h2}>Ready to manage your sensory wellbeing?</h2>
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
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
