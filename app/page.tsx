import ScreensCarousel from "./components/ScreensCarousel";
import Image from "next/image";
import AccessibilityBar from "./components/AccessibilityBar";
import MobileMenu from "./components/MobileMenu";
import FaqAccordion from "./components/FaqAccordion";
import NewsletterForm from "./components/NewsletterForm";
import { HomeScreen, InsightsScreen, Icon } from "./components/AppScreens";

const photo = {
  hero: "/images/image.png",
  research: "/images/home/research.jpg",
  training: "/images/home/training.jpg",
  store: "/images/home/store.jpg",
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
      <header data-dark="header" className="sticky top-0 z-40 border-b border-[#E7EAE2] bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/85">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:h-[78px] sm:px-8 lg:h-[84px] lg:px-12">
          <BrandLogo />

          <nav aria-label="Main" className="hidden h-full items-center gap-6 lg:flex xl:gap-9">
            {["Home", "Features", "Research", "Training", "Blogs", "Store", "About"].map((item, i) => (
              <a
                key={item}
                href={i === 0 ? "/" : item === "About" ? "/about-us/" : `/${item.toLowerCase()}/`}
                aria-current={i === 0 ? "page" : undefined}
                className={`relative flex h-full items-center text-[15px] font-medium transition-colors hover:text-[#367050] ${i === 0 ? "text-[#0E4A2E] after:absolute after:inset-x-0 after:bottom-[22px] after:h-[2.5px] after:rounded-full after:bg-[#2E8A57]" : "text-[#1F2E25]"}`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/contact-us/"
              className="hidden items-center gap-2.5 whitespace-nowrap rounded-full bg-[#0B361F] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#367050] sm:inline-flex lg:px-7 lg:py-3.5"
            >
              Contact us
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
            </a>
            <MobileMenu />
          </div>
        </div>

      </header>

      {/* HERO: one continuous panel; the photo fades into the mint background (no column seam) */}
      <section id="main-content" className="relative isolate overflow-hidden bg-[#EAF2EA]">

        {/* Background photo (desktop: full-bleed behind everything, anchored right) */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 hidden lg:block">
          <Image
            src={photo.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover object-[right_center]"
          />
          {/* Mint wash: solid behind the copy, dissolving into the photo */}
          <div data-dark="hero-wash" className="absolute inset-0 bg-[linear-gradient(90deg,#EAF2EA_0%,#EAF2EA_34%,rgba(234,242,234,0.92)_42%,rgba(234,242,234,0.55)_50%,rgba(234,242,234,0)_62%)]" />
          {/* Gentle top/bottom softening */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B361F]/10 via-transparent to-transparent" />
        </div>

        <div className="mx-auto flex max-w-[1440px] flex-col lg:min-h-[clamp(440px,calc(100svh-124px),720px)] lg:flex-row lg:items-center">

          {/* Copy + CTAs */}
          <div className="px-5 pb-10 pt-12 sm:px-12 sm:pt-16 lg:w-[52%] lg:py-[clamp(24px,5vh,56px)] lg:pl-12 lg:pr-0 short:py-6">
            <div className="max-w-[600px]">

              <div className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.08em] text-[#0B361F]">
                <span aria-hidden="true" className="h-[5px] w-7 rounded-full bg-[#367050]" />
                A sensory regulation app
              </div>

              <h1 className="mt-5 short:mt-3 text-[36px] font-bold min-[400px]:text-[40px] leading-[1.05] tracking-[-0.03em] text-[#0B361F] sm:text-[54px] lg:text-[clamp(40px,min(7.5vh,4.6vw),64px)] short:text-[clamp(34px,min(6.4vh,4.2vw),52px)]">
                When your phone<br className="hidden sm:block" /> feels like{" "}
                <span className="italic text-[#367050]">too much.</span>
              </h1>

              <p className="mt-5 max-w-[580px] text-[17px] leading-[1.6] text-[#1F3A2B] short:mt-3 short:text-[15.5px] short:leading-[1.5]">
                You opened your phone to reply to a friend. A video starts, the group chat lights up and suddenly it&rsquo;s hard to remember what you came to do.
              </p>
              <p className="mt-3 max-w-[580px] text-[17px] leading-[1.6] text-[#1F3A2B] short:mt-2 short:text-[15.5px] short:leading-[1.5]">
                NuroTok is a sensory regulation app from NeuroDigital Support. It gives you ways to adjust what you see or hear, pause an app, or take a moment before you carry on. Choose the tool that feels right for you today.
              </p>

              <div className="mt-8 flex flex-col items-stretch gap-3 sm:items-start lg:mt-[clamp(16px,3.5vh,32px)] short:mt-4 short:gap-2.5">
                <a
                  href="#download"
                  className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[#0B361F] px-5 py-4 short:py-3 text-[15px] font-bold sm:gap-3 sm:px-8 sm:text-[16px] text-white shadow-[0_8px_20px_rgba(11,54,31,0.22)] transition-colors duration-300 hover:bg-[#367050]"
                >
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="2.5" /><path d="M11 18h2" /></svg>
                  <span>Get NuroTok for your device</span>
                  <span aria-hidden="true" className="ml-1">→</span>
                </a>

                <div className="flex flex-col gap-3 sm:flex-row short:gap-2.5">
                  <a
                    href="/features/"
                    className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full border-2 border-[#0B361F] bg-transparent px-7 py-3 short:py-2.5 text-[15px] font-bold text-[#0B361F] transition-colors hover:bg-[#0B361F] hover:text-white"
                  >
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 4.5-9 4.5-9-4.5z" /><path d="M3 12l9 4.5 9-4.5" /><path d="M3 16.5L12 21l9-4.5" /></svg>
                    <span>Explore the features</span>
                  </a>

                  <a
                    href="/store/"
                    className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full border-2 border-[#0B361F] bg-transparent px-7 py-3 short:py-2.5 text-[15px] font-bold text-[#0B361F] transition-colors hover:bg-[#0B361F] hover:text-white"
                  >
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8h14l-1 13H6z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>
                    <span>Shop NuroTok merchandise</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/tablet photo: blends up into the mint panel */}
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:hidden">
            <Image
              src={photo.hero}
              alt="A woman relaxing on a sofa with headphones, eyes closed"
              fill
              priority
              sizes="100vw"
              quality={75}
              className="object-cover object-[92%_center] sm:object-[85%_center]"
            />
            <div aria-hidden="true" data-dark="hero-mobile-fade" className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#EAF2EA] to-transparent" />
            {/* App home screen (brief: beside the introduction) */}
            <div aria-hidden="true" className="pointer-events-none absolute bottom-4 left-4 w-[96px] -rotate-[6deg] drop-shadow-[0_14px_24px_rgba(11,54,31,0.35)] sm:bottom-6 sm:left-8 sm:w-[130px]">
              <HomeScreen />
            </div>
          </div>

          {/* App home screen beside the introduction (brief build note), large screens only */}
          <div aria-hidden="true" className="pointer-events-none absolute bottom-[clamp(16px,4vh,40px)] left-[49%] hidden w-[158px] short:w-[128px] [&>div]:max-w-full -rotate-[7deg] drop-shadow-[0_24px_40px_rgba(11,54,31,0.35)] xl:block">
            <HomeScreen />
          </div>

          {/* Floating message card, over the photo (bottom-right) */}
          <div className="pointer-events-none absolute bottom-4 right-4 sm:bottom-8 sm:right-8 lg:bottom-[clamp(20px,5vh,48px)] lg:right-12">
            <div className="flex items-center gap-3 rounded-[16px] border border-white/45 bg-[#1C4A33]/60 px-4 py-3 shadow-[0_10px_30px_rgba(11,54,31,0.25)] backdrop-blur-md sm:gap-4 sm:rounded-[18px] sm:px-6 sm:py-4 lg:px-7 lg:py-5">
              <svg aria-hidden="true" width="36" height="36" viewBox="0 0 32 32" className="h-7 w-7 sm:h-9 sm:w-9" fill="none" stroke="#A8EBC8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M27 5C15 5 7 10.5 7 19.5c0 2.2.6 4 1.6 5.3C18.5 25 26 18 27 5z" />
                <path d="M5 27c4-5 9-9.5 15-13" />
                <path d="M12.5 20.5l-.5-4.5M16.5 17l-.3-4.5M15.5 22.5l4.5-.3" />
              </svg>
              <p className="m-0 text-[15px] font-normal leading-[1.35] text-white sm:text-[18px] lg:text-[21px]">
                A calmer mind,<br />a brighter you.
              </p>
            </div>
          </div>
        </div>
        <span className="sr-only">Photo: a woman relaxing on a sofa with headphones, eyes closed.</span>
      </section>

      {/* THREE BENEFITS */}
      <section data-dark="section" className="border-b border-[#E3ECE3] bg-[linear-gradient(180deg,#F4F8F3_0%,#FFFFFF_100%)] py-10 lg:py-12">
        <div className="reveal mx-auto grid max-w-[1440px] gap-8 px-6 md:grid-cols-3 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:gap-0 lg:px-12">
          <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0B361F] md:col-span-3 lg:col-span-1 lg:pr-6 lg:text-[28px] xl:text-[36px]">
            What would help<br className="hidden lg:block" /> right now?
          </h2>

          {[
            {
              title: "A quieter moment.",
              text: "Listen to rainfall, follow a short breathing guide or put your phone down while a sound plays in the background.",
              icon: <><path d="M4 15v-3a8 8 0 0 1 16 0v3" /><rect x="3" y="14" width="4.5" height="7" rx="1.6" /><rect x="16.5" y="14" width="4.5" height="7" rx="1.6" /></>,
            },
            {
              title: "A break from an app.",
              text: "Choose where you want a pause. You might want a moment to think before opening social media at bedtime, while keeping the apps you use to reach people close at hand.",
              icon: <><path d="M12 3l9 4.5-9 4.5-9-4.5z" /><path d="M3 12l9 4.5 9-4.5" /><path d="M3 16.5L12 21l9-4.5" /></>,
            },
            {
              title: "A screen that suits you.",
              text: "Explore comfort settings for your device. Start with one thing you notice often, such as movement or brightness, and see how a change feels.",
              icon: <><rect x="6" y="2.5" width="12" height="19" rx="2.5" /><path d="M10.5 18.5h3" /></>,
            },
          ].map(item => (
            <article key={item.title} className="border-[#CFDDD0] md:border-l md:pl-6 lg:px-6 xl:px-8">
              <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2E7D50" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                {item.icon}
              </svg>
              <h3 className="mt-3 text-[19px] font-bold leading-snug tracking-[-0.01em] text-[#0B361F]">{item.title}</h3>
              <p className="mt-1.5 text-[15px] leading-[1.55] text-[#3E5146]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="scroll-mt-24 bg-[#FAFBF8] py-14 lg:py-20">
        <div className="reveal mx-auto grid max-w-[1440px] gap-6 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)] lg:items-stretch lg:gap-8 lg:px-12">
          {/* Video preview: stretches to the height of the copy card */}
          <a
            href="#demo"
            aria-label="Play the 37-second NuroTok demo"
            className="group relative block aspect-[16/10] overflow-hidden rounded-[22px] shadow-[0_14px_36px_rgba(11,54,31,0.16)] lg:aspect-auto lg:h-full lg:min-h-[400px]"
          >
              {/* Soft, blurred room backdrop tinted green */}
              <Image src={photo.hero} alt="" fill sizes="(min-width: 1024px) 45vw, 100vw" quality={50} className="scale-110 object-cover object-[48%_center] blur-[5px]" />
              <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(11,54,31,0.55)_0%,rgba(54,112,80,0.35)_45%,rgba(148,231,188,0.25)_100%)]" />

              {/* Phone mock */}
              <div data-light className="absolute left-[58%] top-[7%] w-[25%] max-w-[190px] rotate-[12deg] transition-transform duration-500 group-hover:rotate-[9deg]">
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

              {/* Play button */}
              <span data-light className="absolute left-1/2 top-1/2 z-10 flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#0B361F] shadow-[0_0_0_10px_rgba(255,255,255,0.22),0_10px_28px_rgba(0,0,0,0.28)] transition-transform duration-300 group-hover:scale-110">
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-[3px]"><path d="M7 4.8v14.4c0 .8.9 1.3 1.6.9l11.2-7.2c.6-.4.6-1.4 0-1.8L8.6 3.9C7.9 3.5 7 4 7 4.8z" /></svg>
              </span>

              <span className="absolute bottom-4 right-4 rounded-md bg-[#0B361F]/90 px-2.5 py-1 text-[13px] font-bold tracking-wide text-white">
                0:37
              </span>
          </a>

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
            <div id="transcript" className="mt-7 flex scroll-mt-28 flex-wrap gap-3">
              <a href="#demo" className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-[#0B361F] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#367050]">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.8v14.4c0 .8.9 1.3 1.6.9l11.2-7.2c.6-.4.6-1.4 0-1.8L8.6 3.9C7.9 3.5 7 4 7 4.8z" /></svg>
                Watch the demo
              </a>
              <a href="#transcript" className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border-2 border-[#0B361F] px-6 py-2.5 text-[15px] font-semibold text-[#0B361F] transition-colors hover:bg-[#0B361F] hover:text-white">
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2.5h8.5L19 7v14.5H6z" /><path d="M14 2.5V7h5M9 12h7M9 15.5h7M9 9h3" /></svg>
                Read the transcript
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE + FOUR SCREENS */}
      <section data-dark="section-alt" className="bg-[linear-gradient(180deg,#EEF5EE_0%,#F3F8F2_100%)] py-14 lg:py-16">
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

      {/* TRUST STRIP */}
      <section className="border-y border-[#E4EAE2] bg-white">
        <div className="reveal mx-auto grid max-w-[1440px] gap-x-8 gap-y-6 px-6 py-7 sm:grid-cols-2 sm:px-8 lg:px-12 xl:grid-cols-4 xl:gap-x-0">
          {[
            {
              title: "Works across devices",
              text: "Use on iOS and Android.",
              icon: <><rect x="6.5" y="2.5" width="11" height="19" rx="2.5" /><path d="M10.5 18.5h3" /></>,
            },
            {
              title: "Your privacy matters",
              text: "Your data stays private.",
              icon: <><path d="M12 2.8l7.5 3v5.7c0 4.6-3.2 8.3-7.5 9.7-4.3-1.4-7.5-5.1-7.5-9.7V5.8z" /><path d="M8.6 12.2l2.4 2.4 4.5-4.6" /></>,
            },
            {
              title: "Backed by research",
              text: "Evidence, evaluation and real-world learning.",
              icon: <><rect x="4.5" y="3" width="15" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
            },
            {
              title: "Training and support",
              text: "Workshops and guidance for organisations.",
              icon: <><circle cx="12" cy="7.5" r="2.6" /><circle cx="5.2" cy="9.3" r="2.1" /><circle cx="18.8" cy="9.3" r="2.1" /><path d="M7.2 19.5v-1.2a4.8 4.8 0 0 1 9.6 0v1.2M1.8 18.5v-.6a3.4 3.4 0 0 1 4.6-3.2M22.2 18.5v-.6a3.4 3.4 0 0 0-4.6-3.2" /></>,
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`flex items-start gap-4 xl:px-8 ${i === 0 ? "xl:pl-0" : "xl:border-l xl:border-[#D8E2D9]"}`}
            >
              <svg aria-hidden="true" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#2E7D50" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                {item.icon}
              </svg>
              <div>
                <h3 className="text-[17px] font-bold leading-snug tracking-[-0.01em] text-[#0B361F]">{item.title}</h3>
                <p className="mt-0.5 text-[14px] leading-[1.45] text-[#3E5146]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH TRAINING STORE */}
      <section className="bg-[#F6F3EC] py-14 lg:py-16">
        <div className="reveal mx-auto grid max-w-[1440px] gap-6 px-5 sm:px-8 md:grid-cols-3 lg:gap-7 lg:px-12">
          {[
            {
              title: "Research", text: "Explore the evidence and propose a study.", cta: "Read the research",
              image: photo.research, href: "/research/", pos: "object-center",
              icon: <><rect x="4.5" y="3" width="15" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
            },
            {
              title: "Training", text: "Workshops and guidance for teams and organisations.", cta: "Ask about a workshop",
              image: photo.training, href: "/training/", pos: "object-[50%_35%]",
              icon: <><circle cx="12" cy="7.5" r="2.6" /><circle cx="5.2" cy="9.3" r="2.1" /><circle cx="18.8" cy="9.3" r="2.1" /><path d="M7.2 19.5v-1.2a4.8 4.8 0 0 1 9.6 0v1.2M1.8 18.5v-.6a3.4 3.4 0 0 1 4.6-3.2M22.2 18.5v-.6a3.4 3.4 0 0 0-4.6-3.2" /></>,
            },
            {
              title: "Store", text: "Everyday items that support focus, comfort and calm.", cta: "Shop NuroTok merchandise",
              image: photo.store, href: "/store/", pos: "object-center",
              icon: <><path d="M5 8h14l-1 13H6z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>,
            },
          ].map(card => (
            <a
              key={card.title}
              href={card.href}
              className="group flex flex-col overflow-hidden rounded-[22px] border border-[#ECE5D8] bg-white shadow-[0_2px_12px_rgba(11,54,31,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,54,31,0.14)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(min-width: 1440px) 440px, (min-width: 768px) 33vw, 100vw"
                  quality={85}
                  className={`object-cover ${card.pos} transition-transform duration-700 group-hover:scale-[1.05]`}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0B361F]/25 via-transparent to-transparent" />
                <span data-light className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#1E7A4C] shadow-[0_6px_16px_rgba(11,54,31,0.18)]">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{card.icon}</svg>
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <h3 className="text-[22px] font-bold tracking-[-0.02em] text-[#0B361F]">{card.title}</h3>
                <p className="mb-5 mt-2 text-[15px] leading-[1.55] text-[#3E5146]">{card.text}</p>
                <span className="mt-auto flex items-center justify-between gap-3 border-t border-[#EDF2EE] pt-4 text-[15px] font-semibold text-[#367050]">
                  {card.cta}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B361F] text-white transition-transform duration-300 group-hover:translate-x-1">
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section data-dark="section-alt" className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FAF6_100%)] py-14 lg:py-16">
        <div className="reveal mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-8 lg:px-12 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,2fr)] xl:gap-0">
          <div className="flex flex-col xl:border-r xl:border-[#D8E2D9] xl:pr-10">
            <h2 className="text-[34px] font-bold leading-[1.12] tracking-[-0.025em] text-[#0B361F] xl:text-[36px]">
              NuroTok questions,<br className="hidden xl:block" /> answered
            </h2>
            <p className="mt-4 max-w-[300px] text-[16px] leading-[1.55] text-[#3E5146]">
              Quick answers to common questions about NuroTok.
            </p>

            <div className="mt-8 rounded-[18px] border border-[#E3ECE3] bg-white p-6 shadow-[0_2px_12px_rgba(11,54,31,0.05)] xl:mt-auto">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E3F4EA] text-[#1E7A4C]">
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 6.5L12 13l8.5-6.5" /></svg>
              </span>
              <h3 className="mt-4 text-[17px] font-bold leading-snug text-[#0B361F]">Get in touch with the NuroTok team</h3>
              <p className="mt-1.5 text-[14.5px] leading-[1.55] text-[#3E5146]">
                Email info@nurotok.co.uk. A short message is fine.
              </p>
              <a href="mailto:info@nurotok.co.uk" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0B361F] px-5 py-2.5 text-[14.5px] font-semibold text-white transition-colors hover:bg-[#367050]">
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
      <section id="download" className="scroll-mt-24 bg-[#F7FAF6] px-5 pb-6 pt-2 sm:px-8 lg:px-12">
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

      {/* NEWSLETTER */}
      <section className="bg-[#F6F3EC] px-5 py-8 lg:px-12">
        <div data-dark="newsletter" className="reveal relative mx-auto max-w-[1344px] overflow-hidden rounded-[22px] bg-[linear-gradient(110deg,#0E3F27_0%,#14513A_55%,#1C6447_100%)] px-6 py-8 text-white shadow-[0_16px_40px_rgba(11,54,31,0.22)] sm:px-10 lg:px-12 lg:py-7">
          {/* decorative soft glows */}
          <span aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#94E7BC]/15 blur-3xl" />
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-[#94E7BC]/10 blur-3xl" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between lg:gap-x-10 xl:flex-nowrap">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8F2DC" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 6.5L12 13l8.5-6.5" /></svg>
              </span>
              <h2 className="whitespace-nowrap text-[28px] font-bold tracking-[-0.02em] text-white lg:text-[30px]">Stay in touch</h2>
            </div>

            <p className="max-w-[340px] text-[15.5px] leading-[1.55] text-[#D7EBDF]">
              Get updates on the app, training, research and new resources.
            </p>

            <div className="w-full xl:max-w-[500px]">
              <NewsletterForm />
              <p className="mt-2.5 pl-1 text-[12.5px] text-[#BFDCCB] sm:pl-5">
                We&rsquo;ll only use your email to send updates. Read our{" "}
                <a href="/privacy-policy/" className="font-semibold text-white underline underline-offset-2 hover:text-[#94E7BC]">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer data-dark="footer" className="bg-[linear-gradient(180deg,#0B3D26_0%,#062C1B_100%)] text-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-6 gap-y-9 px-6 pb-10 pt-12 sm:px-8 md:grid-cols-4 lg:grid-cols-[1.35fr_1px_0.8fr_0.8fr_1px_1.15fr_0.9fr] lg:gap-x-10 lg:px-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <BrandLogo light />
            <p className="mt-4 max-w-[260px] text-[14.5px] leading-[1.55] text-[#CFE8DA]">
              Creating sensory-aware digital spaces that support neurodivergent wellbeing and reduce overwhelm.
            </p>
          </div>

          <span aria-hidden="true" className="hidden bg-white/15 lg:block" />

          <nav aria-label="Quick links">
            <h3 className="text-[15px] font-bold tracking-[0.01em] text-white">Quick links</h3>
            <ul className="mt-4 space-y-2.5">
              {[["Home", "/"], ["Features", "/features/"], ["Research", "/research/"], ["Training", "/training/"], ["Blogs", "/blogs/"]].map(([label, href]) => (
                <li key={label}><a href={href} className="text-[14.5px] text-[#CFE8DA] transition-colors hover:text-white">{label}</a></li>
              ))}
            </ul>
          </nav>

          <nav aria-label="More">
            <h3 className="text-[15px] font-bold tracking-[0.01em] text-white">More</h3>
            <ul className="mt-4 space-y-2.5">
              {[["Store", "/store/"], ["About", "/about-us/"], ["Contact", "/contact-us/"], ["Easy Read", "/easy-read/"], ["Your account", ACCOUNT_URL]].map(([label, href]) => (
                <li key={label}><a href={href} className="text-[14.5px] text-[#CFE8DA] transition-colors hover:text-white">{label}</a></li>
              ))}
            </ul>
          </nav>

          <span aria-hidden="true" className="hidden bg-white/15 lg:block" />

          <div className="col-span-2 sm:col-span-1 rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10 sm:rounded-none sm:bg-transparent sm:p-0 sm:ring-0">
            <h3 className="text-[15px] font-bold tracking-[0.01em] text-white">Get in touch</h3>
            <ul className="mt-4 space-y-3.5">
              <li>
                <a href="mailto:info@nurotok.co.uk" className="group flex items-center gap-3 text-[14.5px] text-[#CFE8DA] transition-colors hover:text-white">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#94E7BC]"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 6.5L12 13l8.5-6.5" /></svg>
                  info@nurotok.co.uk
                </a>
              </li>
              <li>
                <a href="tel:+447825354088" className="group flex items-center gap-3 text-[14.5px] text-[#CFE8DA] transition-colors hover:text-white">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#94E7BC]"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
                  +44 7825 354088
                </a>
              </li>
              <li className="flex items-center gap-3 text-[14.5px] text-[#CFE8DA]">
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#94E7BC]"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
                United Kingdom
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1 rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10 sm:rounded-none sm:bg-transparent sm:p-0 sm:ring-0">
            <h3 className="text-[15px] font-bold tracking-[0.01em] text-white">Follow us</h3>
            <div className="mt-4 flex gap-2.5">
              {[
                { label: "LinkedIn", href: "#", d: "M6.5 9.5v8M6.5 6.5v.01M10.5 17.5v-8M10.5 13a3 3 0 0 1 6 0v4.5" },
                { label: "YouTube", href: "#", d: "M3.5 8.2c.1-1.4 1.2-2.5 2.6-2.6C8 5.4 10 5.3 12 5.3s4 .1 5.9.3c1.4.1 2.5 1.2 2.6 2.6.2 2.5.2 5.1 0 7.6-.1 1.4-1.2 2.5-2.6 2.6-1.9.2-3.9.3-5.9.3s-4-.1-5.9-.3c-1.4-.1-2.5-1.2-2.6-2.6-.2-2.5-.2-5.1 0-7.6zM10.3 9.3v5.4l4.6-2.7z" },
                { label: "Instagram", href: "#", d: "M7.5 3.5h9a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4zM12 8.3a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4zM17.2 6.8v.01" },
                { label: "X", href: "#", d: "M4.5 4.5l15 15M19.5 4.5l-6.2 6.6M10.7 12.9L4.5 19.5" },
              ].map(sn => (
                <a
                  key={sn.label}
                  href={sn.href}
                  aria-label={`NuroTok on ${sn.label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white ring-1 ring-white/25 transition-colors hover:bg-[#94E7BC] hover:text-[#0B361F] hover:ring-[#94E7BC]"
                >
                  <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d={sn.d} /></svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/12">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-6 text-[13.5px] sm:gap-3 sm:px-8 sm:py-5 sm:text-[13px] lg:px-12 xl:flex-row xl:items-center xl:justify-between">
            <p className="order-2 m-0 border-t border-white/10 pt-4 text-center text-[#A9C9B6] sm:order-none sm:border-0 sm:pt-0 sm:text-left">© 2026 NeuroDigital Support. All rights reserved.</p>

            <ul className="order-1 grid grid-cols-2 gap-x-6 gap-y-3 text-[#CFE8DA] sm:order-none sm:flex sm:flex-wrap sm:items-center sm:gap-x-0 sm:gap-y-2">
              {[["Cookie settings", "/cookie-policy/#settings"], ["Accessibility Statement", "/accessibility/"], ["Privacy Policy", "/privacy-policy/"], ["Terms of Service", "/terms/"], ["All NuroTok policies", "/policies/"], ["Cookie policy", "/cookie-policy/"]].map(([label, href], i) => (
                <li key={label} className="flex items-center">
                  {i > 0 && <span aria-hidden="true" className="mx-4 hidden h-3.5 w-px bg-white/25 sm:block" />}
                  <a href={href} className="transition-colors hover:text-white">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

    </main>
  );
}
