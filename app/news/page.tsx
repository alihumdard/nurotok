import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import BrandLogo from "../components/BrandLogo";
import { news } from "./items";

export const metadata: Metadata = {
  title: "News",
  description: "Announcements and updates from NuroTok and NeuroDigital Support.",
};

function Arrow() {
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

function CalendarIcon() {
  return <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>;
}

export default function NewsPage() {
  const [featured, ...rest] = news;

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
          <div className="grid overflow-hidden rounded-[6px] border border-[#D5E2D8] bg-white lg:grid-cols-2">
            <div className="order-2 p-7 sm:p-10 lg:order-1 lg:py-14 lg:pl-12">
              <h1 className="text-[38px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0B361F] sm:text-[48px] lg:text-[54px]">
                News from <span className="text-[#367050]">NuroTok</span>
              </h1>
              <p className="mt-4 max-w-[520px] text-[20px] leading-[1.5] text-[#1F3A2B] lg:text-[22px]">
                App updates, research notes and announcements from the team at NeuroDigital Support.
              </p>
            </div>

            <div className="relative order-1 min-h-[260px] overflow-hidden lg:order-2 lg:min-h-[360px]">
              <Image
                src="/images/home/partner.jpg"
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

      {/* STORIES */}
      <section className="bg-[#F6F3EC] pb-12 lg:pb-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          {/* Featured */}
          <a
            href={`/news/${featured.slug}/`}
            className="group grid overflow-hidden rounded-[6px] border border-[#D5E2D8] bg-white transition hover:border-[#367050] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[320px]">
              <Image
                src={featured.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={82}
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <span className="inline-flex w-fit rounded-full bg-[#BDEED7] px-3.5 py-1.5 text-[13px] font-bold uppercase tracking-[0.06em] text-[#0B361F]">
                Latest
              </span>
              <h2 className="mt-4 text-[28px] font-bold leading-[1.18] tracking-[-0.02em] text-[#0B361F] sm:text-[34px]">
                {featured.title}
              </h2>
              <p className="mt-3 text-[19px] leading-[1.55] text-[#2F4538] lg:text-[20px]">{featured.excerpt}</p>
              <p className="mt-5 flex items-center gap-2 text-[16px] text-[#3E5146]">
                <CalendarIcon />
                <time dateTime={featured.iso}>{featured.date}</time>
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-[18px] font-bold text-[#367050] group-hover:text-[#0B361F]">
                Read the story <Arrow />
              </span>
            </div>
          </a>

          {/* The rest */}
          {rest.length > 0 && (
            <div className={`mt-6 grid gap-6 sm:grid-cols-2 ${rest.length > 2 ? "lg:grid-cols-3" : ""}`}>
              {rest.map(n => (
                <a
                  key={n.slug}
                  href={`/news/${n.slug}/`}
                  className="group flex flex-col overflow-hidden rounded-[6px] border border-[#D5E2D8] bg-white transition hover:border-[#367050]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={n.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      quality={80}
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-[21px] font-bold leading-[1.3] text-[#0B361F] lg:text-[23px]">{n.title}</h3>
                    <p className="mt-2 text-[17px] leading-[1.5] text-[#2F4538]">{n.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between gap-3 pt-1">
                      <p className="flex items-center gap-2 text-[15px] text-[#3E5146]">
                        <CalendarIcon />
                        <time dateTime={n.iso}>{n.date}</time>
                      </p>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F6F3EC] text-[#0B361F] transition group-hover:bg-[#0B361F] group-hover:text-white">
                        <Arrow />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* DOWNLOAD */}
      <section className="bg-[#F6F3EC] pb-12 lg:pb-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <div className="rounded-[6px] border border-[#D5E2D8] bg-white p-7 text-center sm:p-10 lg:p-12">
            <h2 className="text-[30px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[36px]">
              Ready to manage your sensory wellbeing?
            </h2>
            <p className="mx-auto mt-3 max-w-[560px] text-[19px] leading-[1.55] text-[#2F4538]">
              Sensory preferences, wellbeing tools and insights in one app.
            </p>
            <a
              href="/#download"
              className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-[#0B361F] px-6 py-3 text-[17px] font-semibold text-white transition-colors hover:bg-[#367050]"
            >
              Get the app <Arrow />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
