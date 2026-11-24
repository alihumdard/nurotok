import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import BrandLogo from "../components/BrandLogo";
import { press } from "./items";

export const metadata: Metadata = {
  title: "News",
  description: "Media coverage of the research and thinking behind NuroTok.",
};

function Arrow() {
  return <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export default function NewsPage() {
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
            <div className="order-2 flex flex-col justify-center p-7 sm:p-10 lg:order-1 lg:py-14 lg:pl-12">
              <h1 className="text-[38px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0B361F] sm:text-[48px] lg:text-[54px]">
                NuroTok <span className="text-[#367050]">in the media</span>
              </h1>
              <p className="mt-4 max-w-[520px] text-[20px] leading-[1.5] text-[#1F3A2B] lg:text-[22px]">
                Coverage of our work on neurodivergent-inclusive digital design and community impact.
              </p>
            </div>

            <div className="relative order-1 aspect-[3/2] self-center overflow-hidden lg:order-2">
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

      {/* COVERAGE */}
      <section className="bg-[#F6F3EC] pb-12 lg:pb-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {press.map(item => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-[6px] border border-[#D5E2D8] bg-white p-6 transition hover:border-[#367050]"
              >
                <span className={`flex h-[52px] items-center${item.dark ? " w-fit rounded-md bg-[#0B361F] px-3" : ""}`}>
                  <Image
                    src={item.logo}
                    alt={item.outlet}
                    width={180}
                    height={60}
                    sizes="180px"
                    quality={90}
                    className="h-auto max-h-[44px] w-auto max-w-[150px] object-contain object-left"
                  />
                </span>
                <span className="mt-4 inline-flex w-fit rounded-full bg-[#BDEED7] px-3 py-1 text-[13px] font-bold uppercase tracking-[0.06em] text-[#0B361F]">
                  {item.tag}
                </span>
                <h2 className="mt-3 flex-1 text-[19px] font-bold leading-[1.35] text-[#0B361F]">{item.title}</h2>
                <span className="mt-4 inline-flex items-center gap-2 text-[17px] font-bold text-[#367050] group-hover:text-[#0B361F]">
                  Read the article <Arrow />
                </span>
              </a>
            ))}
          </div>
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
              className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#0B361F] px-6 py-3.5 text-[17px] font-semibold text-white transition-colors hover:bg-[#367050] sm:w-auto sm:py-3"
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
