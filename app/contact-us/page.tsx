import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import BrandLogo from "../components/BrandLogo";
import SignUpStrip from "../components/SignUpStrip";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the NuroTok team about the app, feedback and accessibility, research, workshops or partnerships.",
};

const EMAIL = "info@nurotok.co.uk";
const PHONE_DISPLAY = "+44 7825 354088";
const PHONE_HREF = "+447825354088";

const h2 = "text-[30px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[36px]";
const card = "rounded-[6px] border border-[#D5E2D8] bg-white";

function Arrow() {
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

/* Copy from the client's website content and build brief, page 15. */
const sections = [
  {
    id: "help",
    title: "Help with the app",
    body: "Tell us what you were trying to do, what happened and whether you use Android, iPhone or iPad. If the problem involves a particular setting, its name helps us find the right place. Please leave passwords and private messages out of screenshots.",
    links: [
      { label: "Email app support", href: `mailto:${EMAIL}?subject=Help%20with%20the%20NuroTok%20app`, primary: true },
      { label: "Visit NuroTok support", href: "https://neurodigitalsupport.com/nurotok/support", external: true },
    ],
    d: "M12 17.5h.01M12 14c0-2 2.5-2.3 2.5-4.2A2.5 2.5 0 0 0 9.6 9M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z",
  },
  {
    id: "feedback",
    title: "Feedback and accessibility",
    body: "If something was uncomfortable, confusing or difficult to use, tell us which part and what would have worked better for you. You can describe the experience without sharing a diagnosis.",
    links: [{ label: "Send feedback", href: `mailto:${EMAIL}?subject=NuroTok%20feedback`, primary: true }],
    d: "M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.8-.9L3 20.5l1.5-4.6A8.4 8.4 0 0 1 3.6 11.5 8.4 8.4 0 0 1 12 3.1a8.4 8.4 0 0 1 9 8.4z",
  },
  {
    id: "partnerships",
    title: "Research, workshops and partnerships",
    body: "Tell us who you work with, what you’d like to explore and any dates you have in mind. For press enquiries, please include your publication and deadline.",
    links: [{ label: "Contact the team", href: `mailto:${EMAIL}?subject=Research%2C%20workshops%20or%20partnerships`, primary: true }],
    d: "M16 20v-1.6a3.4 3.4 0 0 0-3.4-3.4H7.4A3.4 3.4 0 0 0 4 18.4V20M10 11.4a3.7 3.7 0 1 0 0-7.4 3.7 3.7 0 0 0 0 7.4M20 20v-1.6a3.4 3.4 0 0 0-2.6-3.3M15.4 4.2a3.4 3.4 0 0 1 0 6.6",
  },
];

export default function ContactPage() {
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
          <div className="grid items-center overflow-hidden rounded-[6px] border border-[#D5E2D8] bg-white lg:grid-cols-2">
            <div className="order-2 flex flex-col justify-center p-7 sm:p-10 lg:order-1 lg:py-14 lg:pl-12">
              <h1 className="text-[38px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0B361F] sm:text-[46px] lg:text-[52px]">
                Get in touch with the <span className="text-[#367050]">NuroTok team</span>
              </h1>
              <p className="mt-4 max-w-[520px] text-[20px] leading-[1.5] text-[#1F3A2B] lg:text-[22px]">
                Need help with the app, want to ask about a merchandise order, suggest a change, or have a question
                about working with us? Email {EMAIL}. A short message is fine.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#0B361F] px-6 py-3.5 text-[17px] font-semibold text-white transition-colors hover:bg-[#367050] sm:w-auto sm:py-3"
                >
                  Email the team <Arrow />
                </a>
                <a
                  href={`tel:${PHONE_HREF}`}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-[#0B361F] px-6 py-3.5 text-[17px] font-semibold text-[#0B361F] transition-colors hover:bg-[#0B361F] hover:text-white sm:w-auto sm:py-3"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="relative order-1 aspect-[3/2] self-center overflow-hidden lg:order-2">
              <Image
                src="/images/home/research-guidance.jpg"
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={82}
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOUR MESSAGE IS ABOUT */}
      <section className="bg-[#F6F3EC] pb-12 lg:pb-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <div className="grid gap-6 lg:grid-cols-3">
            {sections.map(s => (
              <div key={s.id} id={s.id} className={`flex scroll-mt-28 flex-col p-7 sm:p-8 ${card}`}>
                <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#BDEED7] text-[#0B361F]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d={s.d} /></svg>
                </span>
                <h2 className="mt-5 text-[23px] font-bold tracking-[-0.01em] text-[#0B361F] lg:text-[25px]">{s.title}</h2>
                <p className="mt-2.5 flex-1 text-[18px] leading-[1.55] text-[#2F4538] lg:text-[19px]">{s.body}</p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5">
                  {s.links.map(l => (
                    <a
                      key={l.label}
                      href={l.href}
                      {...("external" in l && l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="inline-flex items-center gap-2 text-[17px] font-bold text-[#367050] hover:text-[#0B361F]"
                    >
                      {l.label} <Arrow />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO REACH US */}
      <section className="bg-[#F6F3EC] pb-12 lg:pb-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <div className={`p-7 sm:p-10 lg:p-12 ${card}`}>
            <h2 className={h2}>How to reach us</h2>
            <div className="mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-start gap-3.5">
                <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F6F3EC] text-[#0B361F]">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 6.5L12 13l8.5-6.5" /></svg>
                </span>
                <div>
                  <p className="text-[17px] font-bold text-[#0B361F]">Email</p>
                  <a href={`mailto:${EMAIL}`} className="text-[18px] text-[#2F4538] underline underline-offset-2 hover:text-[#367050]">
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F6F3EC] text-[#0B361F]">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
                </span>
                <div>
                  <p className="text-[17px] font-bold text-[#0B361F]">Phone</p>
                  <a href={`tel:${PHONE_HREF}`} className="text-[18px] text-[#2F4538] underline underline-offset-2 hover:text-[#367050]">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F6F3EC] text-[#0B361F]">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10.5c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10.3" r="2.8" /></svg>
                </span>
                <div>
                  <p className="text-[17px] font-bold text-[#0B361F]">NuroTok</p>
                  <p className="text-[18px] leading-[1.45] text-[#2F4538]">
                    NeuroDigital Support
                    <br />
                    United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STAY IN TOUCH */}
      <section className="bg-[#F6F3EC] pb-12 lg:pb-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <SignUpStrip
            heading="Stay in touch"
            text="Stay updated on neuroinclusive technology and research."
          />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
