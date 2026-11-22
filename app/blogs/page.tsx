import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import BrandLogo from "../components/BrandLogo";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Practical tips, research updates and simple ideas to help you build more comfortable digital days with NuroTok.",
};

export default function BlogsPage() {
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
          <div className="grid overflow-hidden rounded-[6px] border border-[#D5E2D8] bg-white lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="order-2 p-7 sm:p-10 lg:order-1 lg:py-14 lg:pl-12">
              <h1 className="text-[38px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0B361F] sm:text-[48px] lg:text-[54px]">
                Insights for a <span className="text-[#367050]">healthier digital life</span>
              </h1>
              <p className="mt-4 max-w-[520px] text-[20px] leading-[1.5] text-[#1F3A2B] lg:text-[22px]">
                Practical tips, research updates and simple ideas to help you build more comfortable habits with
                technology.
              </p>
            </div>

            <div className="relative order-1 min-h-[260px] overflow-hidden lg:order-2 lg:min-h-[360px]">
              <Image
                src="/images/home/research-insights.jpg"
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

      {/* POSTS */}
      <section className="bg-[#F6F3EC] pb-12 lg:pb-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <BlogList />
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#F6F3EC] pb-12 lg:pb-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <div className="flex flex-col gap-6 rounded-[6px] border border-[#D5E2D8] bg-white p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <div className="flex items-start gap-4">
              <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#BDEED7] text-[#0B361F]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 6.5L12 13l8.5-6.5" /></svg>
              </span>
              <div>
                <h2 className="text-[26px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[30px]">Get the latest insights</h2>
                <p className="mt-1.5 text-[19px] leading-[1.5] text-[#2F4538]">
                  New articles and updates from NuroTok, straight to your inbox.
                </p>
              </div>
            </div>

            <form action="/contact-us/" className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:shrink-0">
              <label htmlFor="blog-email" className="sr-only">Your email address</label>
              <input
                id="blog-email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-full border border-[#D5E2D8] bg-[#F6F3EC] px-5 py-3.5 text-[17px] text-[#0B361F] outline-none placeholder:text-[#7D8F84] focus:border-[#367050] lg:w-[300px]"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0B361F] px-7 py-3.5 text-[17px] font-semibold text-white transition-colors hover:bg-[#367050]"
              >
                Subscribe
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
