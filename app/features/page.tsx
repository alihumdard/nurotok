import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import BrandLogo from "../components/BrandLogo";
import PhoneFrame from "../components/PhoneFrame";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Sensory tools, scrolling and reels, protection, focus and routines, insights, family linking and your privacy choices in NuroTok.",
};

const APP_STORE_URL = "https://apps.apple.com/app/nurotok/id6822251386";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.nurotok.app";
const EMAIL = "info@nurotok.co.uk";

const h2 = "text-[32px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[40px]";
const card = "rounded-[6px] border border-[#D5E2D8] bg-white";

/* Copy from the client's website content and build brief, pages 5 to 8. */

const toolkit = [
  { title: "Personal Sensory Profile.", text: "Tailored profile based on light, sound, texture, routine, and touch sensitivities." },
  { title: "Adaptive Regulation Toolkit.", text: "Access guided breathing, white noise, screen dimming, and calm modes." },
  { title: "Daily Check-Ins.", text: "Stress-free tracking of your mood, energy, and sensory load." },
  { title: "Weekly Insights.", text: "Understand patterns in wellbeing, routines, and triggers." },
  { title: "Predictive Overload Alerts.", text: "Supportive reminders when patterns suggest rising sensory stress." },
];

const devices = [
  { name: "Android", text: "Reel counting, content filtering, app protection, focus sessions and sensory tools." },
  { name: "iPhone and iPad", text: "Calm tools, picture board, Easy Read, check-ins, insights, routines and family features. Use Apple Screen Time for additional controls." },
  { name: "Computer", text: "NuroTok for Chrome supports selected social feeds and can link to your mobile account." },
];

const groups = [
  {
    id: "calm",
    title: "Calm and sensory tools",
    image: "/images/screens/toolkit.webp",
    items: [
      "Sensory profile: tell NuroTok what overwhelms you (sights, sounds, touch, people) and it shapes its suggestions around you.",
      "Breathing guides (4-7-8 and more), 5-4-3-2-1 grounding and a two-minute reset, narrated and offline.",
      "Soundscapes: white, brown and pink noise and rain, with a suggestion for the time of day.",
      "Screen comfort: warm tint, auto-dim and batched notifications.",
      "Calm mode: turn everything down at once, by hand or by tapping an NFC calm card.",
      "How I feel: a picture board for when words are hard, with a big card to show someone.",
      "A guided meditation library, multi-day programmes, sleep stories and mood check-ins.",
      "An AI chat companion for a calm conversation (not medical advice).",
    ],
  },
  {
    id: "scrolling",
    title: "Scrolling and reels",
    image: null,
    items: [
      "Reel counter for Instagram, YouTube, TikTok, Snapchat and Facebook, with a daily goal and a gentle check-in.",
      "Rapid-scroll pause: a breather when reels go by fast, stepping in sooner on harder days.",
      "Overload heads-up from your sensory profile, recent moods, the time and today’s scrolling, with its reasons.",
      "App switches: hide Explore, Shorts or Reels tabs inside the apps you choose.",
      "Ask for more time, earn time with a short walk or a grounding exercise.",
    ],
  },
  {
    id: "protection",
    title: "Protection",
    image: null,
    items: [
      "On-device content filter: blur, warn or hide by category, with a “why was this covered?” explanation you can correct.",
      "App blocking and schedules, a sleep schedule, and website blocking in every browser.",
      "Hard Mode, so NuroTok can’t be removed in a weak moment, and parent controls behind a PIN.",
      "Protection health: a quick check that everything is switched on and working.",
    ],
  },
  {
    id: "focus",
    title: "Focus and routines",
    image: null,
    items: [
      "Focus sessions that keep chosen apps closed for a while.",
      "Focus with your calendar: as a busy event starts, a notification offers focus until it ends.",
      "Tap-to-focus NFC tags, to start or end focus with a tap.",
      "Routines: mornings, after school, winding down, one step at a time with a reminder.",
      "Intention sessions: say what you opened an app for, then how it went.",
    ],
  },
  {
    id: "insights",
    title: "Insights and progress",
    image: "/images/screens/insights.webp",
    items: [
      "Calm Score: one kind number for the day, made of parts that say what they are.",
      "“What your month says”: patterns in your own days in plain words, each with one thing to try.",
      "Screen time per app from Android’s own records, your usual day, and a weekly target that adapts.",
      "A companion that grows with calm days and streaks, and badges for practice.",
    ],
  },
  {
    id: "family",
    title: "Family and friends",
    image: null,
    items: [
      "Family linking: see a child’s NuroTok usage and set their protection from your phone. They keep their messages, journal and moods private.",
      "Breathe together: a parent and child breathe to the same pace on two phones, wherever they are.",
      "Battles: fewer reels wins, with a weekly league, groups and friendly nudges.",
      "Share with a therapist: a private, time-limited summary link you can stop at any time.",
      "Family Premium covers linked children.",
    ],
  },
  {
    id: "computer",
    title: "Your computer and account",
    image: null,
    items: [
      "NuroTok for Chrome hides YouTube Shorts and Instagram and Facebook Reels, adds a breathing pause and a daily limit.",
      "Connect it to the app to see one combined daily total; the computer stops at your goal counting both (computer counts are pages opened, an estimate).",
      "Your account online: see your trends, download your data or delete your account from the website.",
      "Sign in with Google, Apple or email; see every signed-in device and sign any of them out.",
    ],
  },
];

function Arrow() {
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

function Tick() {
  return <span aria-hidden="true" className="mt-[9px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#367050]" />;
}

export default function FeaturesPage() {
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
      <section id="main-content" className="bg-[#F6F3EC] pb-12 pt-5 lg:pb-16 lg:pt-10">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <div className={`grid overflow-hidden lg:grid-cols-2 ${card}`}>
            <div className="order-2 flex flex-col justify-center p-7 sm:p-10 lg:order-1 lg:py-14 lg:pl-12">
              <h1 className="text-[38px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0B361F] sm:text-[48px] lg:text-[54px]">
                Choose what you <span className="text-[#367050]">want to change</span>
              </h1>
              <p className="mt-4 max-w-[520px] text-[20px] leading-[1.5] text-[#1F3A2B] lg:text-[22px]">
                Start with a sound, a pause or a screen adjustment. The sensory toolkit is free. Some additional
                controls and programmes are available with Premium.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#download"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#0B361F] px-6 py-3.5 text-[17px] font-semibold text-white transition-colors hover:bg-[#367050] sm:w-auto sm:py-3"
                >
                  See download options <Arrow />
                </a>
                <a
                  href={`mailto:${EMAIL}?subject=Question%20about%20a%20NuroTok%20feature`}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-[#0B361F] px-6 py-3.5 text-[17px] font-semibold text-[#0B361F] transition-colors hover:bg-[#0B361F] hover:text-white sm:w-auto sm:py-3"
                >
                  Ask about a feature
                </a>
              </div>
            </div>

            <div className="relative order-1 flex min-h-[320px] items-center justify-center overflow-hidden bg-[#EDF7F1] p-8 lg:order-2 lg:min-h-[440px]">
              <PhoneFrame className="h-full max-h-[380px] w-auto [aspect-ratio:900/1844]">
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

      {/* A MOMENT TO YOURSELF */}
      <section className="bg-[#F6F3EC] pb-12 lg:pb-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[6px] border border-[#D5E2D8] lg:aspect-auto lg:min-h-[340px]">
              <Image
                src="/images/home/quiet-rain.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                quality={82}
                className="object-cover object-center"
              />
            </div>
            <div className={`p-7 sm:p-10 lg:p-12 ${card}`}>
              <span aria-hidden="true" className="block h-1 w-12 rounded-full bg-[#367050]" />
              <h2 className={`mt-5 ${h2}`}>When you want a moment to yourself</h2>
              <p className="mt-4 text-[20px] leading-[1.55] text-[#2F4538] lg:text-[22px]">
                Open <strong className="font-bold text-[#0B361F]">Breathe</strong> for a guided exercise or a short
                grounding activity. If you would prefer to listen, open{" "}
                <strong className="font-bold text-[#0B361F]">Sounds</strong> and try rainfall, ambient music or a
                steady background noise. Sounds can play offline, and you can set a timer so you can put your phone
                away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONALISE YOUR TOOLKIT */}
      <section className="bg-[#F6F3EC] pb-12 lg:pb-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <h2 className={h2}>Personalise your toolkit</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {toolkit.map(t => (
              <div key={t.title} className={`p-7 ${card}`}>
                <h3 className="text-[21px] font-bold leading-[1.3] text-[#0B361F] lg:text-[23px]">{t.title}</h3>
                <p className="mt-2 text-[18px] leading-[1.55] text-[#2F4538] lg:text-[19px]">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR DEVICE */}
      <section className="bg-[#F6F3EC] pb-12 lg:pb-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <div id="devices" className={`scroll-mt-28 p-7 sm:p-10 lg:p-12 ${card}`}>
            <h2 className={h2}>Choose your device</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {devices.map(d => (
                <div key={d.name} className="border-l-2 border-[#BDEED7] pl-5">
                  <p className="text-[20px] font-bold text-[#0B361F] lg:text-[22px]">{d.name}</p>
                  <p className="mt-2 text-[18px] leading-[1.55] text-[#2F4538] lg:text-[19px]">{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE FEATURE GROUPS */}
      {groups.map((g, i) => (
        <section key={g.id} className="bg-[#F6F3EC] pb-12 lg:pb-16">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
            <div
              id={g.id}
              className={
                g.image
                  ? `grid scroll-mt-28 items-stretch gap-6 ${i % 2 ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]" : "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]"}`
                  : "scroll-mt-28"
              }
            >
              <div className={`p-7 sm:p-10 lg:p-12 ${card} ${g.image && i % 2 ? "lg:order-2" : ""}`}>
                <h2 className={h2}>{g.title}</h2>
                <ul className="mt-6 space-y-3">
                  {g.items.map(item => (
                    <li key={item} className="flex gap-3 text-[18px] leading-[1.55] text-[#2F4538] lg:text-[19px]">
                      <Tick />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {g.image && (
                <div className={`flex items-center justify-center overflow-hidden rounded-[6px] border border-[#D5E2D8] bg-[#EDF7F1] p-8 ${i % 2 ? "lg:order-1" : ""}`}>
                  <PhoneFrame className="w-[210px] max-w-full lg:w-[230px]">
                    <Image
                      src={g.image}
                      alt=""
                      width={900}
                      height={1844}
                      sizes="230px"
                      quality={90}
                      className="h-auto w-full"
                    />
                  </PhoneFrame>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* PRIVACY */}
      <section className="bg-[#F6F3EC] pb-12 lg:pb-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <div id="privacy" className={`scroll-mt-28 p-7 sm:p-10 lg:p-12 ${card}`}>
            <h2 className={h2}>Your privacy choices</h2>
            <p className="mt-4 max-w-[900px] text-[20px] leading-[1.55] text-[#2F4538] lg:text-[22px]">
              The Android filter processes screen content on your device. You can use the core toolkit without creating
              an account. If you choose to link devices or share a summary, review the sharing settings for that
              feature.
            </p>
            {/* TODO: link the privacy policy page once the client supplies its text. */}
            <a
              href={`mailto:${EMAIL}?subject=NuroTok%20privacy`}
              className="mt-6 inline-flex items-center gap-2 text-[18px] font-bold text-[#367050] hover:text-[#0B361F]"
            >
              Ask about privacy <Arrow />
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
