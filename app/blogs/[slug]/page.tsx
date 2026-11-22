import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import BrandLogo from "../../components/BrandLogo";
import { posts, getPost } from "../posts";

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blogs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };
  return { title: post.title, description: post.excerpt };
}

function Arrow() {
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export default async function BlogPostPage({ params }: PageProps<"/blogs/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const index = posts.findIndex(p => p.slug === slug);
  const more = [...posts.slice(index + 1), ...posts.slice(0, index)].slice(0, 2);

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
          {/* Back */}
          <a href="/blogs/" className="inline-flex items-center gap-2 text-[17px] font-bold text-[#367050] hover:text-[#0B361F]">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
            All posts
          </a>

          {/* Header */}
          <header className="mt-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex rounded-full bg-[#BDEED7] px-3.5 py-1.5 text-[13px] font-bold uppercase tracking-[0.06em] text-[#0B361F]">
                {post.category}
              </span>
              <p className="flex items-center gap-2 text-[16px] text-[#3E5146]">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>
                <time dateTime={post.iso}>{post.date}</time>
              </p>
            </div>
            <h1 className="mt-4 text-[34px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0B361F] sm:text-[44px] lg:text-[50px]">
              {post.title}
            </h1>
          </header>

          {/* Cover */}
          <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-[6px] border border-[#D5E2D8]">
            <Image
              src={post.image}
              alt=""
              fill
              priority
              sizes="(min-width: 1440px) 1264px, 100vw"
              quality={84}
              className="object-cover object-center"
            />
          </div>
          <p className="mt-2 text-[14px] text-[#5B6D62]">AI-generated illustration.</p>

          {/* Body */}
          <div className="mt-8 rounded-[6px] border border-[#D5E2D8] bg-white p-7 sm:p-10 lg:p-12">
            {post.intro.map(t => (
              <p key={t.slice(0, 40)} className="mt-0 text-[20px] leading-[1.6] text-[#1F3A2B] [&:not(:first-child)]:mt-4 lg:text-[21px]">
                {t}
              </p>
            ))}

            {post.sections.map(s => (
              <section key={s.heading} className="mt-9">
                <h2 className="text-[25px] font-bold tracking-[-0.01em] text-[#0B361F] lg:text-[28px]">{s.heading}</h2>
                {s.paras.map(t => (
                  <p key={t.slice(0, 40)} className="mt-3 text-[19px] leading-[1.6] text-[#2F4538] lg:text-[20px]">
                    {t}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-4 space-y-2.5">
                    {s.list.map(item => (
                      <li key={item} className="flex gap-3 text-[19px] leading-[1.55] text-[#2F4538] lg:text-[20px]">
                        <span aria-hidden="true" className="mt-[11px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#367050]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Next step */}
            <div className="mt-10 rounded-[6px] bg-[#EDF7F1] p-6">
              <p className="text-[17px] font-bold text-[#367050]">Next step</p>
              <p className="mt-1.5 text-[19px] leading-[1.55] text-[#1F3A2B]">{post.next}</p>
            </div>

            {post.further && (
              <p className="mt-5 text-[17px] leading-[1.55] text-[#3E5146]">
                <span className="font-bold text-[#0B361F]">Further reading:</span> {post.further}
              </p>
            )}
            {post.note && (
              <p className="mt-3 text-[16px] leading-[1.55] text-[#5B6D62]">{post.note}</p>
            )}
          </div>

          {/* Download */}
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

          {/* More posts */}
          <div className="mt-14">
            <h2 className="text-[28px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[34px]">More from the blog</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {more.map(p => (
                <a
                  key={p.slug}
                  href={`/blogs/${p.slug}/`}
                  className="group flex flex-col overflow-hidden rounded-[6px] border border-[#D5E2D8] bg-white transition hover:border-[#367050]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      quality={80}
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="inline-flex w-fit rounded-full bg-[#EDF7F1] px-3 py-1 text-[13px] font-bold text-[#367050]">
                      {p.category}
                    </span>
                    <h3 className="mt-3 text-[20px] font-bold leading-[1.3] text-[#0B361F] lg:text-[22px]">{p.title}</h3>
                    <p className="mt-2 flex-1 text-[17px] leading-[1.5] text-[#2F4538]">{p.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[17px] font-bold text-[#367050] group-hover:text-[#0B361F]">
                      Read the article <Arrow />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
