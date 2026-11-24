import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import BrandLogo from "../../components/BrandLogo";
import { news, getNews } from "../items";

export function generateStaticParams() {
  return news.map(n => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) return { title: "Story not found" };
  return { title: item.title, description: item.excerpt };
}

function Arrow() {
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export default async function NewsStoryPage({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) notFound();

  const index = news.findIndex(n => n.slug === slug);
  const more = [...news.slice(index + 1), ...news.slice(0, index)].slice(0, 2);

  return (
    <main className="overflow-x-clip bg-[#F6F3EC] text-[#0B361F]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#0B361F] focus:px-5 focus:py-3 focus:text-[15px] focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <SiteHeader logo={<BrandLogo />} />

      <article id="main-content" className="bg-[#F6F3EC] pb-12 pt-5 lg:pb-16 lg:pt-10">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8 lg:px-12">
          <a href="/news/" className="inline-flex items-center gap-2 text-[17px] font-bold text-[#367050] hover:text-[#0B361F]">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
            All news
          </a>

          <header className="mt-6">
            <p className="flex items-center gap-2 text-[16px] text-[#3E5146]">
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>
              <time dateTime={item.iso}>{item.date}</time>
            </p>
            <h1 className="mt-3 text-[34px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0B361F] sm:text-[44px] lg:text-[50px]">
              {item.title}
            </h1>
          </header>

          <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-[6px] border border-[#D5E2D8]">
            <Image
              src={item.image}
              alt=""
              fill
              priority
              sizes="(min-width: 1120px) 1024px, 100vw"
              quality={84}
              className="object-cover object-center"
            />
          </div>

          <div className="mt-8 rounded-[6px] border border-[#D5E2D8] bg-white p-7 sm:p-10 lg:p-12">
            {item.body.map(t => (
              <p key={t.slice(0, 40)} className="text-[19px] leading-[1.6] text-[#2F4538] [&:not(:first-child)]:mt-4 lg:text-[20px]">
                {t}
              </p>
            ))}
          </div>

          <div className="mt-8 rounded-[6px] border border-[#D5E2D8] bg-white p-7 text-center sm:p-10">
            <h2 className="text-[26px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[30px]">Ready to try NuroTok?</h2>
            <p className="mx-auto mt-2 max-w-[520px] text-[19px] leading-[1.55] text-[#2F4538]">
              Sensory preferences, wellbeing tools and insights in one app.
            </p>
            <a
              href="/#download"
              className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-[#0B361F] px-6 py-3 text-[17px] font-semibold text-white transition-colors hover:bg-[#367050]"
            >
              Get the app <Arrow />
            </a>
          </div>

          {more.length > 0 && (
            <div className="mt-14">
              <h2 className="text-[28px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[34px]">More news</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {more.map(n => (
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
                        sizes="(min-width: 640px) 50vw, 100vw"
                        quality={80}
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <h3 className="text-[20px] font-bold leading-[1.3] text-[#0B361F] lg:text-[22px]">{n.title}</h3>
                      <p className="mt-2 flex-1 text-[17px] leading-[1.5] text-[#2F4538]">{n.excerpt}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-[17px] font-bold text-[#367050] group-hover:text-[#0B361F]">
                        Read the story <Arrow />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
