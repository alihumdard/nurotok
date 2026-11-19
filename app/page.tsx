
const photo = {
  hero: "/images/image.png",
  demo: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=900&q=85",
  research: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=85",
  training: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=85",
  store: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85",
};

const screens = [
  { name: "Home", subtitle: "Distraction-free daily navigation.", icon: "⌂", title: "A calmer mind,\na brighter you." },
  { name: "Profile", subtitle: "Personal sensory preferences.", icon: "♙", title: "My Sensory\nProfile" },
  { name: "Toolkit", subtitle: "Calming tools within easy reach.", icon: "◈", title: "Sensory Toolkit" },
  { name: "Insights", subtitle: "Weekly wellbeing patterns.", icon: "▥", title: "My Insights" },
];

const faqs = [
  ["What is NuroTok?", "NuroTok is a sensory regulation app from NeuroDigital Support. It offers tools to help you adjust your digital environment and take a moment when you need one."],
  ["Which devices are supported?", "NuroTok offers experiences for Android, iPhone, iPad and supported desktop browsers. Available features can differ by device."],
  ["Who is NuroTok for?", "NuroTok is designed with neurodivergent adults in mind, while remaining useful for anyone who wants a more comfortable digital experience."],
  ["How is my data used?", "NuroTok provides tools designed around privacy and sensory preferences. Refer to the Privacy Policy for the complete details of data collection and use."],
  ["Is NuroTok free?", "Some NuroTok tools are available without charge. Check the relevant app store for current plans and optional features."],
  ["Can organisations use NuroTok?", "Yes. NuroTok provides training, workshops and guidance for organisations."],
];

function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <a href="/" aria-label="NuroTok home" className="flex items-center gap-2.5">
      <span className={light ? "rounded-full bg-[#F6F3EC] p-1" : ""}>
        <img src="/images/nurotok-logo.png" alt="" width={56} height={56} className="h-[52px] w-[52px] sm:h-[56px] sm:w-[56px]" />
      </span>
      <span
        className={`font-heading text-[30px] font-bold leading-none tracking-[-0.03em] sm:text-[34px] ${light ? "text-white" : "text-[#0E4A2E]"}`}
      >
        NuroTok
      </span>
    </a>
  );
}

function UkFlag() {
  return (
    <svg aria-hidden="true" width="20" height="14" viewBox="0 0 60 42" className="rounded-[2px] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
      <clipPath id="uk-t"><path d="M30 21h30v21zv21H0zH0V0zV0h30z" /></clipPath>
      <rect width="60" height="42" fill="#012169" />
      <path d="M0 0l60 42M60 0L0 42" stroke="#fff" strokeWidth="8.4" />
      <path d="M0 0l60 42M60 0L0 42" clipPath="url(#uk-t)" stroke="#C8102E" strokeWidth="5.6" />
      <path d="M30 0v42M0 21h60" stroke="#fff" strokeWidth="14" />
      <path d="M30 0v42M0 21h60" stroke="#C8102E" strokeWidth="8.4" />
    </svg>
  );
}

function Phone({ index }: { index: number }) {
  const screen = screens[index];

  return (
    <div className="mx-auto w-full max-w-[145px] rounded-[25px] border-[5px] border-[#143D2A] bg-white p-2 shadow-[0_12px_30px_rgba(11,54,31,0.15)]">
      <div className="mx-auto mb-3 h-2 w-10 rounded-full bg-[#143D2A]" />
      <div className="text-center">
        <span className="text-[10px] font-extrabold text-[#0B361F]">◉ NuroTok</span>
      </div>
      <div className="mt-4 min-h-[135px] rounded-xl bg-[#E8F4EC] p-2">
        <p className="text-[7px] font-bold text-[#367050]">{screen.title.split("\n")[0]}</p>
        <p className="mt-2 whitespace-pre-line text-[11px] font-extrabold leading-4 text-[#0B361F]">{screen.title}</p>
        <div className="mt-3 flex h-12 items-center justify-center rounded-lg bg-[#0B361F] text-2xl text-[#94E7BC]">
          {screen.icon}
        </div>
        <div className="mt-2 rounded-full bg-[#94E7BC] py-1 text-center text-[7px] font-bold text-[#0B361F]">
          Explore tools
        </div>
      </div>
      <div className="mt-3 flex justify-around text-[9px] text-[#367050]">
        <span>⌂</span><span>◈</span><span>♙</span><span>▥</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#F6F3EC] text-[#0B361F]">

      {/* ACCESSIBILITY BAR */}
      <div className="hidden border-b border-[#E3EAE3] bg-[#EEF3EE] md:block">
        <div className="mx-auto flex h-[38px] max-w-[1440px] items-center justify-between px-6 text-[13px] text-[#0B361F] lg:px-12">
          <div className="flex items-center">
            <button type="button" className="flex items-center gap-2 font-medium hover:text-[#367050]">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="7.2" r="1.3" fill="currentColor" stroke="none" /><path d="M7.5 10l4.5 1 4.5-1M12 11v3.5M12 14.5l-2.5 4M12 14.5l2.5 4" /></svg>
              Accessibility
            </button>

            <span aria-hidden="true" className="mx-6 h-4 w-px bg-[#A9B8AD]" />

            <div className="flex items-center gap-4" role="group" aria-label="Text size">
              <span className="font-medium">Text size:</span>
              <button type="button" aria-label="Decrease text size" className="font-semibold hover:text-[#367050]">A−</button>
              <button type="button" aria-label="Default text size" className="font-semibold hover:text-[#367050]">A</button>
              <button type="button" aria-label="Increase text size" className="font-semibold hover:text-[#367050]">A+</button>
            </div>

            <span aria-hidden="true" className="mx-6 h-4 w-px bg-[#A9B8AD]" />

            <button type="button" className="flex items-center gap-2 font-medium hover:text-[#367050]">
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1z" /></svg>
              Dark mode
            </button>
          </div>

          <button type="button" className="flex items-center gap-2 font-semibold hover:text-[#367050]">
            <UkFlag />
            UK
            <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
          </button>
        </div>
      </div>

      {/* NAVIGATION */}
      <header className="relative z-20 border-b border-[#E7EAE2] bg-white">
        <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between gap-5 px-5 lg:h-[84px] lg:px-12">
          <BrandLogo />

          <nav aria-label="Main" className="hidden h-full items-center gap-9 lg:flex">
            {["Home", "Features", "Research", "Training", "Blogs", "Store", "About"].map((item, i) => (
              <a
                key={item}
                href={i === 0 ? "/" : `/${item.toLowerCase()}/`}
                aria-current={i === 0 ? "page" : undefined}
                className={`relative flex h-full items-center text-[15px] font-medium transition-colors hover:text-[#367050] ${i === 0 ? "text-[#0E4A2E] after:absolute after:inset-x-0 after:bottom-[22px] after:h-[2.5px] after:rounded-full after:bg-[#2E8A57]" : "text-[#1F2E25]"}`}
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="/contact-us/"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#0B361F] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#367050]"
          >
            Contact us
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
          </a>
        </div>

        <nav aria-label="Main mobile" className="flex gap-6 overflow-x-auto border-t border-[#EDF0EA] px-5 py-2 lg:hidden">
          {["Home", "Features", "Research", "Training", "Blogs", "Store", "About"].map((item, i) => (
            <a key={item} href={i === 0 ? "/" : `/${item.toLowerCase()}/`} className="shrink-0 text-xs font-semibold">
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* HERO: one continuous panel; the photo fades into the mint background (no column seam) */}
      <section className="relative isolate overflow-hidden bg-[#EAF2EA]">

        {/* Background photo (desktop: full-bleed behind everything, anchored right) */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 hidden lg:block">
          <img
            src={photo.hero}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[right_center]"
          />
          {/* Mint wash: solid behind the copy, dissolving into the photo */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#EAF2EA_0%,#EAF2EA_34%,rgba(234,242,234,0.92)_42%,rgba(234,242,234,0.55)_50%,rgba(234,242,234,0)_62%)]" />
          {/* Gentle top/bottom softening */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B361F]/10 via-transparent to-transparent" />
        </div>

        <div className="mx-auto flex max-w-[1440px] flex-col lg:min-h-[500px] lg:flex-row lg:items-center">

          {/* Copy + CTAs */}
          <div className="px-5 pb-10 pt-12 sm:px-12 sm:pt-16 lg:w-[52%] lg:py-14 lg:pl-12 lg:pr-0">
            <div className="max-w-[600px]">

              <div className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.08em] text-[#0B361F]">
                <span aria-hidden="true" className="h-[5px] w-7 rounded-full bg-[#367050]" />
                A sensory regulation app
              </div>

              <h1 className="mt-5 text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-[#0B361F] sm:text-[54px] xl:text-[64px]">
                When your phone<br className="hidden sm:block" /> feels like{" "}
                <span className="italic text-[#367050]">too much.</span>
              </h1>

              <p className="mt-5 max-w-[530px] text-[17px] leading-[1.6] text-[#1F3A2B]">
                NuroTok gives you simple ways to adjust what you see or hear, pause an app, or take a moment before you carry on. Choose the tool that feels right for you today.
              </p>

              <div className="mt-8 flex flex-col items-stretch gap-3 sm:items-start">
                <a
                  href="#download"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0B361F] px-8 py-4 text-[16px] font-bold text-white shadow-[0_8px_20px_rgba(11,54,31,0.22)] transition-colors duration-300 hover:bg-[#367050]"
                >
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="2.5" /><path d="M11 18h2" /></svg>
                  <span>Get NuroTok for your device</span>
                  <span aria-hidden="true" className="ml-1">→</span>
                </a>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#demo"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[#0B361F] bg-transparent px-7 py-3 text-[15px] font-bold text-[#0B361F] transition-colors hover:bg-[#0B361F] hover:text-white"
                  >
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"><path d="M7 4.5v15l12-7.5z" /></svg>
                    <span>Watch 37s demo</span>
                  </a>

                  <a
                    href="/store/"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[#0B361F] bg-transparent px-7 py-3 text-[15px] font-bold text-[#0B361F] transition-colors hover:bg-[#0B361F] hover:text-white"
                  >
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8h14l-1 13H6z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>
                    <span>Shop merchandise</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/tablet photo: blends up into the mint panel */}
          <div className="relative h-[360px] sm:h-[440px] lg:hidden">
            <img
              src={photo.hero}
              alt="A woman relaxing on a sofa with headphones, eyes closed"
              className="absolute inset-0 h-full w-full object-cover object-[78%_center]"
            />
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#EAF2EA] to-transparent" />
          </div>

          {/* Floating message card, over the photo (bottom-right) */}
          <div className="pointer-events-none absolute bottom-6 right-5 sm:bottom-8 sm:right-8 lg:bottom-12 lg:right-12">
            <div className="flex items-center gap-4 rounded-[18px] border border-white/45 bg-[#1C4A33]/55 px-6 py-4 shadow-[0_10px_30px_rgba(11,54,31,0.25)] backdrop-blur-md lg:px-7 lg:py-5">
              <svg aria-hidden="true" width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="#A8EBC8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M27 5C15 5 7 10.5 7 19.5c0 2.2.6 4 1.6 5.3C18.5 25 26 18 27 5z" />
                <path d="M5 27c4-5 9-9.5 15-13" />
                <path d="M12.5 20.5l-.5-4.5M16.5 17l-.3-4.5M15.5 22.5l4.5-.3" />
              </svg>
              <p className="m-0 text-[18px] font-normal leading-[1.35] text-white lg:text-[21px]">
                A calmer mind,<br />a brighter you.
              </p>
            </div>
          </div>
        </div>
        <span className="sr-only">Photo: a woman relaxing on a sofa with headphones, eyes closed.</span>
      </section>

      {/* THREE BENEFITS */}
      <section className="bg-white py-8">
        <div className="mx-auto grid max-w-[1440px] gap-7 px-6 lg:grid-cols-[1.1fr_1fr_1fr_1fr] lg:px-12">
          <h2 className="text-3xl font-extrabold leading-tight">
            What would help<br />right now?
          </h2>

          {[
            ["♧", "A quieter moment.", "Listen to rainfall, follow a short breathing guide or put your phone down while a sound plays in the background."],
            ["▱", "A break from an app.", "Choose where you want a pause. Take a moment to think before opening certain apps."],
            ["▯", "A screen that suits you.", "Explore comfort settings for your device. Start with one thing you notice often, such as movement or brightness."],
          ].map(([icon, title, text]) => (
            <article key={title} className="border-l-2 border-[#D9E4DA] pl-6">
              <span className="text-3xl text-[#367050]">{icon}</span>
              <h3 className="mt-2 text-lg font-extrabold">{title}</h3>
              <p className="mt-1 text-sm leading-5 text-[#48594E]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="bg-[#FBFCF9] py-12">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <a href="/features/" className="group relative block h-[230px] overflow-hidden rounded-2xl">
              <img
                src={photo.demo}
                alt="NuroTok product demonstration preview"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#0B361F]/20">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-[#0B361F]/70 text-2xl text-white">
                  ▶
                </span>
              </div>
              <span className="absolute bottom-4 right-4 rounded bg-[#0B361F] px-3 py-1 text-xs font-bold text-white">
                0:37
              </span>
            </a>

            <div className="mt-4 flex gap-8 text-sm font-bold">
              <a href="/features/">▷ &nbsp; Watch the demo</a>
              <a href="/blogs/">▤ &nbsp; Read the transcript</a>
            </div>
          </div>

          <div className="border-l-4 border-[#367050] pl-7">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              See NuroTok in action.
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-[#46594C]">
              A 37-second look at the sensory profile, app protection, the sensory toolkit and Insights.
            </p>
          </div>
        </div>
      </section>

      {/* AUDIENCE + FOUR SCREENS */}
      <section className="bg-[#F0F6EF] py-16">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 lg:grid-cols-[.75fr_1.65fr] lg:px-12">
          <div className="border-r border-[#C8D9CC] pr-8">
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Designed with neurodivergent adults in mind.
            </h2>

            <p className="mt-5 leading-6 text-[#46594C]">
              People experience the same screen differently. A sound one person enjoys can make it difficult for someone else to concentrate. Our starting point is simple. You decide what feels comfortable, and you can change your mind.
            </p>

            <a href="/about-us/" className="mt-6 inline-flex rounded-full border border-[#367050] px-6 py-3 text-sm font-bold hover:bg-[#DDEDE0]">
              Why we built NuroTok →
            </a>
          </div>

          <div>
            <h2 className="mb-7 text-2xl font-extrabold sm:text-3xl">
              Explore the four main screens.
            </h2>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {screens.map((screen, i) => (
                <article key={screen.name}>
                  <div className="rounded-[22px] bg-white p-3 shadow-sm">
                    <Phone index={i} />
                  </div>

                  <div className="mt-3 flex items-center justify-center gap-2 text-base font-extrabold">
                    <span className="text-[#367050]">{screen.icon}</span>
                    {screen.name}
                  </div>

                  <p className="mt-1 text-center text-xs leading-5 text-[#53675C]">
                    {screen.subtitle}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-[#E4EAE2] bg-white py-6">
        <div className="mx-auto grid max-w-[1440px] gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
          {[
            ["▯", "Works across devices", "Use on iOS and Android."],
            ["♧", "Your privacy matters", "Your data stays private."],
            ["▤", "Backed by research", "Evidence, evaluation and real-world learning."],
            ["♧", "Training and support", "Workshops and guidance for organisations."],
          ].map(([icon, title, text]) => (
            <div key={title} className="flex gap-4 border-r border-[#D8E2D9] last:border-0">
              <span className="text-3xl text-[#367050]">{icon}</span>
              <div>
                <h3 className="font-extrabold">{title}</h3>
                <p className="mt-1 text-xs leading-5 text-[#53675C]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH TRAINING STORE */}
      <section className="bg-[#F6F3EC] py-10">
        <div className="mx-auto grid max-w-[1440px] gap-5 px-5 md:grid-cols-3 lg:px-12">
          {[
            ["Research", "Explore the evidence and propose a study.", photo.research, "/research/"],
            ["Training", "Workshops and guidance for teams and organisations.", photo.training, "/training/"],
            ["Store", "Everyday items that support focus, comfort and calm.", photo.store, "/store/"],
          ].map(([title, text, image, link]) => (
            <a key={title} href={link} className="group flex min-h-[145px] overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <img src={image} alt={title} className="w-[40%] object-cover" />
              <div className="flex flex-1 flex-col justify-center p-5">
                <h3 className="text-xl font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-5 text-[#53675C]">{text}</p>
                <span className="mt-3 flex h-8 w-8 items-center justify-center self-end rounded-full bg-[#0B361F] text-white transition group-hover:bg-[#367050]">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 lg:grid-cols-[.75fr_2fr] lg:px-12">
          <div className="border-r border-[#D8E2D9] pr-8">
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 leading-6 text-[#53675C]">
              Quick answers to common questions about NuroTok.
            </p>
          </div>

          <div className="grid gap-x-7 gap-y-3 md:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group self-start rounded-xl border border-[#DCE5DC] bg-white shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4 text-sm font-bold">
                  {question}
                  <span className="text-xl transition group-open:rotate-45">+</span>
                </summary>
                <p className="border-t border-[#E8EEE7] px-4 py-4 text-sm leading-6 text-[#53675C]">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#F6F3EC] px-5 py-6">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 rounded-2xl bg-[#12462E] p-7 text-white lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="flex items-center gap-5">
            <span className="text-4xl">✉</span>
            <h2 className="text-2xl font-extrabold text-white">Stay in touch</h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-[#D7E9DD]">
            Get updates on the app, training, research and new resources.
          </p>

          <form className="flex w-full max-w-[480px] overflow-hidden rounded-xl bg-white p-1">
            <input
              type="email"
              placeholder="Enter your email address"
              className="min-w-0 flex-1 px-3 text-sm text-[#0B361F] outline-none"
            />
            <button type="button" className="rounded-lg bg-[#0B361F] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#367050]">
              Subscribe →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#062C1B] text-white">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr_1fr] lg:px-12">
          <div>
            <BrandLogo light />
            <p className="mt-4 max-w-[240px] text-sm leading-6 text-[#BDEED7]">
              A sensory regulation app from NeuroDigital Support.
            </p>
          </div>

          <div>
            <h3 className="font-extrabold text-white">Quick links</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#BDEED7]">
              <a href="/">Home</a>
              <a href="/features/">Features</a>
              <a href="/research/">Research</a>
              <a href="/training/">Training</a>
            </div>
          </div>

          <div>
            <h3 className="font-extrabold text-white">More</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#BDEED7]">
              <a href="/blogs/">Blogs</a>
              <a href="/store/">Store</a>
              <a href="/about-us/">About</a>
              <a href="/contact-us/">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="font-extrabold text-white">Get in touch</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#BDEED7]">
              <a href="mailto:info@nurotok.co.uk">✉ &nbsp; info@nurotok.co.uk</a>
              <span>⌖ &nbsp; United Kingdom</span>
            </div>
          </div>

          <div>
            <h3 className="font-extrabold text-white">Follow us</h3>
            <div className="mt-5 flex gap-4 text-xl font-bold">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="YouTube">▶</a>
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="X">𝕏</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 px-6 py-5 text-xs text-[#BDEED7] sm:flex-row lg:px-12">
            <p>© 2026 NeuroDigital Support. All rights reserved.</p>

            <div className="flex flex-wrap gap-5">
              <a href="/privacy-policy/">Privacy Policy</a>
              <a href="/terms/">Terms of Use</a>
              <a href="/accessibility/">Accessibility</a>
              <a href="/cookies/">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
