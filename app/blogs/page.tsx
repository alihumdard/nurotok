import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import BrandLogo from "../components/BrandLogo";
import BlogList from "./BlogList";
import SignUpStrip from "../components/SignUpStrip";

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
          <SignUpStrip
            heading="Get the latest insights"
            text="New articles and updates from NuroTok, straight to your inbox."
          />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
