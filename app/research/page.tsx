import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import BrandLogo from "../components/BrandLogo";

export const metadata: Metadata = {
  title: "Research",
  description:
    "How autistic and other neurodivergent adults experience social media, the paper behind the question, and how to propose a research collaboration.",
};

const EMAIL = "info@nurotok.co.uk";
const h2 = "text-[30px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[36px]";
const card = "rounded-[6px] border border-[#D5E2D8] bg-white";

function Arrow() {
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export default function ResearchPage() {
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
              <h1 className="text-[36px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0B361F] sm:text-[44px] lg:text-[50px]">
                How does a digital space feel to <span className="text-[#367050]">the person using it?</span>
              </h1>
              <p className="mt-4 max-w-[540px] text-[20px] leading-[1.5] text-[#1F3A2B] lg:text-[22px]">
                Two people can open the same feed and have very different experiences. Our research interests include
                how autistic and other neurodivergent adults experience social media, which design choices make
                participation harder, and what people would change for themselves.
              </p>
            </div>

            <div className="relative order-1 aspect-[3/2] overflow-hidden lg:order-2 lg:aspect-auto lg:h-full lg:min-h-[420px]">
              <Image
                src="/images/home/research.jpg"
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

      {/* THE PAPER */}
      <section className="bg-[#F6F3EC] pb-12 lg:pb-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <div id="paper" className="grid scroll-mt-28 items-stretch gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div className={`p-7 sm:p-10 lg:p-12 ${card}`}>
              <span aria-hidden="true" className="block h-1 w-12 rounded-full bg-[#367050]" />
              <h2 className={`mt-5 ${h2}`}>Read the research behind the question</h2>
              <p className="mt-4 text-[19px] leading-[1.6] text-[#2F4538] lg:text-[20px]">
                In <i>Algorithmic Exclusion and Neurodivergent Users</i>, NuroTok founder Kofi Ofori-Mensah reviews
                research on how platform design may shape belonging and wellbeing, with particular attention to autistic
                adults and people with ADHD in the UK. It is a starting point for thinking about how a feed is designed
                and whose preferences it reflects.
              </p>
              {/* TODO: swap for the paper's SSRN URL once the client confirms it. */}
              <a
                href={`mailto:${EMAIL}?subject=Algorithmic%20Exclusion%20and%20Neurodivergent%20Users`}
                className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#0B361F] px-6 py-3.5 text-[17px] font-semibold text-white transition-colors hover:bg-[#367050] sm:w-auto sm:py-3"
              >
                Request the paper <Arrow />
              </a>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-[6px] border border-[#D5E2D8] lg:aspect-auto lg:min-h-[380px]">
              <Image
                src="/images/home/research-guidance.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                quality={82}
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHERE OUR QUESTIONS COME FROM */}
      <section className="bg-[#F6F3EC] pb-12 lg:pb-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <div id="questions" className={`scroll-mt-28 p-7 sm:p-10 lg:p-12 ${card}`}>
            <h2 className={h2}>Where our questions come from</h2>
            <p className="mt-4 max-w-[900px] text-[19px] leading-[1.6] text-[#2F4538] lg:text-[20px]">
              Kofi Ofori-Mensah&rsquo;s UK dissertation explored autistic and neurodivergent adults&rsquo; experiences
              of social media marketing. That work informs questions we ask when designing NuroTok.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                "What makes a feed hard to leave?",
                "How does a person decide what they want to see?",
                "Where would an extra moment of choice help?",
              ].map(q => (
                <div key={q} className="border-l-2 border-[#BDEED7] pl-5">
                  <p className="text-[20px] font-bold leading-[1.35] text-[#0B361F] lg:text-[22px]">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROPOSE A COLLABORATION */}
      <section className="bg-[#F6F3EC] pb-12 lg:pb-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[88px]">
          <div id="collaborate" className={`scroll-mt-28 p-7 text-center sm:p-10 lg:p-12 ${card}`}>
            <h2 className={h2}>Propose a research collaboration</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-[19px] leading-[1.6] text-[#2F4538] lg:text-[20px]">
              Bring a question about digital participation or an idea for a study. Tell us whose experience you want to
              understand and how those people could help shape the work.
            </p>
            <a
              href={`mailto:${EMAIL}?subject=Research%20collaboration`}
              className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#0B361F] px-6 py-3.5 text-[17px] font-semibold text-white transition-colors hover:bg-[#367050] sm:w-auto sm:py-3"
            >
              Discuss a research idea <Arrow />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
