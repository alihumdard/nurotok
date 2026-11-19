import NewsletterForm from "./components/NewsletterForm";
import { HomeScreen, ProfileScreen, ToolkitScreen, InsightsScreen, Icon } from "./components/AppScreens";

const photo = {
  hero: "/images/image.png",
  research: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80",
  training: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80",
  store: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=80",
};

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

        <div className="mx-auto flex max-w-[1440px] flex-col lg:h-[calc(100svh-124px)] lg:min-h-[440px] lg:max-h-[720px] lg:flex-row lg:items-center">

          {/* Copy + CTAs */}
          <div className="px-5 pb-10 pt-12 sm:px-12 sm:pt-16 lg:w-[52%] lg:py-[clamp(24px,5vh,56px)] lg:pl-12 lg:pr-0">
            <div className="max-w-[600px]">

              <div className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.08em] text-[#0B361F]">
                <span aria-hidden="true" className="h-[5px] w-7 rounded-full bg-[#367050]" />
                A sensory regulation app
              </div>

              <h1 className="mt-5 text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-[#0B361F] sm:text-[54px] lg:text-[clamp(40px,7.5vh,64px)]">
                When your phone<br className="hidden sm:block" /> feels like{" "}
                <span className="italic text-[#367050]">too much.</span>
              </h1>

              <p className="mt-5 max-w-[530px] text-[17px] leading-[1.6] text-[#1F3A2B]">
                NuroTok gives you simple ways to adjust what you see or hear, pause an app, or take a moment before you carry on. Choose the tool that feels right for you today.
              </p>

              <div className="mt-8 flex flex-col items-stretch gap-3 sm:items-start lg:mt-[clamp(16px,3.5vh,32px)]">
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
          <div className="pointer-events-none absolute bottom-6 right-5 sm:bottom-8 sm:right-8 lg:bottom-[clamp(20px,5vh,48px)] lg:right-12">
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
      <section className="border-b border-[#E3ECE3] bg-[linear-gradient(180deg,#F4F8F3_0%,#FFFFFF_100%)] py-10 lg:py-12">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-6 md:grid-cols-3 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:gap-0 lg:px-12">
          <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0B361F] md:col-span-3 lg:col-span-1 lg:pr-6 lg:text-[34px] xl:text-[36px]">
            What would help<br className="hidden lg:block" /> right now?
          </h2>

          {[
            {
              title: "A quieter moment.",
              text: "Listen to rainfall, follow a short breathing guide or put your phone down while a sound plays in the background.",
              icon: <><path d="M4 15v-3a8 8 0 0 1 16 0v3" /><rect x="3" y="14" width="4.5" height="7" rx="1.6" /><rect x="16.5" y="14" width="4.5" height="7" rx="1.6" /></>,
            },
            {
              title: "A break from an app.",
              text: "Choose where you want a pause. Take a moment to think before opening certain apps.",
              icon: <><path d="M12 3l9 4.5-9 4.5-9-4.5z" /><path d="M3 12l9 4.5 9-4.5" /><path d="M3 16.5L12 21l9-4.5" /></>,
            },
            {
              title: "A screen that suits you.",
              text: "Explore comfort settings for your device. Start with one thing you notice often, such as movement or brightness, and see how a change feels.",
              icon: <><rect x="6" y="2.5" width="12" height="19" rx="2.5" /><path d="M10.5 18.5h3" /></>,
            },
          ].map(item => (
            <article key={item.title} className="border-[#CFDDD0] md:border-l md:pl-6 lg:px-8">
              <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2E7D50" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                {item.icon}
              </svg>
              <h3 className="mt-3 text-[19px] font-bold leading-snug tracking-[-0.01em] text-[#0B361F]">{item.title}</h3>
              <p className="mt-1.5 text-[15px] leading-[1.55] text-[#3E5146]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="bg-[#FAFBF8] py-12 lg:py-16">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:px-12">
          <div>
            <a
              href="/features/"
              aria-label="Play the 37-second NuroTok demo"
              className="group relative block aspect-[16/7.2] overflow-hidden rounded-[20px] shadow-[0_14px_36px_rgba(11,54,31,0.16)]"
            >
              {/* Soft, blurred room backdrop tinted green */}
              <img src={photo.hero} alt="" className="absolute inset-0 h-full w-full scale-110 object-cover object-[48%_center] blur-[5px]" />
              <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(11,54,31,0.55)_0%,rgba(54,112,80,0.35)_45%,rgba(148,231,188,0.25)_100%)]" />

              {/* Phone mock */}
              <div className="absolute left-[58%] top-[7%] w-[25%] max-w-[190px] rotate-[12deg] transition-transform duration-500 group-hover:rotate-[9deg]">
                <div className="rounded-[26px] bg-[#0F1F17] p-[5px] shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                  <div className="relative aspect-[9/15] overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,#F3FAF5_0%,#DDF3E6_55%,#BFE8D0_100%)]">
                    <div className="absolute left-1/2 top-[5px] h-[5%] w-[32%] -translate-x-1/2 rounded-full bg-[#0F1F17]" />
                    <div className="flex flex-col items-center pt-[20%]">
                      <img src="/images/nurotok-logo.png" alt="" className="w-[34%]" />
                      <span className="mt-[6%] font-heading text-[clamp(11px,1.3vw,19px)] font-bold tracking-[-0.03em] text-[#0E4A2E]">NuroTok</span>
                    </div>
                    <svg aria-hidden="true" viewBox="0 0 100 60" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-[38%] w-full">
                      <path d="M0 30 C20 14 38 22 52 30 S82 20 100 26 V60 H0Z" fill="#7FCBA6" />
                      <path d="M0 40 C18 30 34 34 50 40 S80 32 100 38 V60 H0Z" fill="#3E8E64" />
                      <path d="M0 50 C22 44 40 48 56 52 S84 46 100 50 V60 H0Z" fill="#1E5A3B" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Play button */}
              <span className="absolute left-1/2 top-1/2 z-10 flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#0B361F] shadow-[0_0_0_10px_rgba(255,255,255,0.22),0_10px_28px_rgba(0,0,0,0.28)] transition-transform duration-300 group-hover:scale-110">
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-[3px]"><path d="M7 4.8v14.4c0 .8.9 1.3 1.6.9l11.2-7.2c.6-.4.6-1.4 0-1.8L8.6 3.9C7.9 3.5 7 4 7 4.8z" /></svg>
              </span>

              <span className="absolute bottom-4 right-4 rounded-md bg-[#0B361F]/90 px-2.5 py-1 text-[13px] font-bold tracking-wide text-white">
                0:37
              </span>
            </a>

            <div className="mt-5 flex items-center gap-6 text-[15px] font-semibold text-[#0B361F]">
              <a href="/features/" className="flex items-center gap-2.5 hover:text-[#367050]">
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="M7 4.5v15l12-7.5z" /></svg>
                Watch the demo
              </a>
              <span aria-hidden="true" className="h-5 w-px bg-[#B9C8BC]" />
              <a href="/blogs/" className="flex items-center gap-2.5 hover:text-[#367050]">
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2.5h8.5L19 7v14.5H6z" /><path d="M14 2.5V7h5M9 12h7M9 15.5h7M9 9h3" /></svg>
                Read the transcript
              </a>
            </div>
          </div>

          <div className="border-l-[5px] border-[#2E8A57] py-2 pl-7 lg:pl-9">
            <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0B361F] sm:text-[40px]">
              See NuroTok in action.
            </h2>
            <p className="mt-3 max-w-[560px] text-[17px] leading-[1.6] text-[#3E5146]">
              A 37-second look at the sensory profile, app protection, the sensory toolkit and Insights.
            </p>
          </div>
        </div>
      </section>

      {/* AUDIENCE + FOUR SCREENS */}
      <section className="bg-[linear-gradient(180deg,#EEF5EE_0%,#F3F8F2_100%)] py-14 lg:py-16">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,2fr)] lg:gap-0 lg:px-12">
          <div className="lg:border-r lg:border-[#C9DACB] lg:pr-10">
            <h2 className="text-[34px] font-bold leading-[1.12] tracking-[-0.025em] text-[#0B361F] xl:text-[40px]">
              Designed with neurodivergent adults in mind.
            </h2>

            <p className="mt-5 text-[16px] leading-[1.6] text-[#2F4538]">
              People experience the same screen differently. A sound one person enjoys can make it difficult for someone else to{" "}
              <strong className="font-bold text-[#0B361F]">concentrate</strong>. Our starting point is simple. You decide what feels comfortable, and you can change your mind.
            </p>

            <a
              href="/about-us/"
              className="mt-7 inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-[#0B361F] px-6 py-3 text-[15px] font-semibold text-[#0B361F] transition-colors hover:bg-[#0B361F] hover:text-white"
            >
              Why we built NuroTok
              <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
            </a>
          </div>

          <div className="lg:pl-10">
            <h2 className="text-[28px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[32px]">
              Explore the four main screens.
            </h2>

            <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
              {[
                { name: "Home", subtitle: "Distraction-free daily navigation.", icon: "home" as const, Screen: HomeScreen },
                { name: "Profile", subtitle: "Personal sensory preferences.", icon: "profile" as const, Screen: ProfileScreen },
                { name: "Toolkit", subtitle: "Calming tools within easy reach.", icon: "toolkit" as const, Screen: ToolkitScreen },
                { name: "Insights", subtitle: "Weekly wellbeing patterns.", icon: "insights" as const, Screen: InsightsScreen },
              ].map(({ name, subtitle, icon, Screen }) => (
                <article key={name} className="text-center">
                  <Screen />
                  <h3 className="mt-5 flex items-center justify-center gap-2 text-[17px] font-bold text-[#0B361F]">
                    <Icon name={icon} size={18} strokeWidth={2} className="text-[#1E7A4C]" />
                    {name}
                  </h3>
                  <p className="mx-auto mt-1 max-w-[150px] text-[14px] leading-[1.4] text-[#3E5146]">{subtitle}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-[#E4EAE2] bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-y-6 px-6 py-7 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
          {[
            {
              title: "Works across devices",
              text: "Use on iOS and Android.",
              icon: <><rect x="6.5" y="2.5" width="11" height="19" rx="2.5" /><path d="M10.5 18.5h3" /></>,
            },
            {
              title: "Your privacy matters",
              text: "Your data stays private.",
              icon: <><path d="M12 2.8l7.5 3v5.7c0 4.6-3.2 8.3-7.5 9.7-4.3-1.4-7.5-5.1-7.5-9.7V5.8z" /><path d="M8.6 12.2l2.4 2.4 4.5-4.6" /></>,
            },
            {
              title: "Backed by research",
              text: "Evidence, evaluation and real-world learning.",
              icon: <><rect x="4.5" y="3" width="15" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
            },
            {
              title: "Training and support",
              text: "Workshops and guidance for organisations.",
              icon: <><circle cx="12" cy="7.5" r="2.6" /><circle cx="5.2" cy="9.3" r="2.1" /><circle cx="18.8" cy="9.3" r="2.1" /><path d="M7.2 19.5v-1.2a4.8 4.8 0 0 1 9.6 0v1.2M1.8 18.5v-.6a3.4 3.4 0 0 1 4.6-3.2M22.2 18.5v-.6a3.4 3.4 0 0 0-4.6-3.2" /></>,
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`flex items-start gap-4 lg:px-8 ${i === 0 ? "lg:pl-0" : "lg:border-l lg:border-[#D8E2D9]"}`}
            >
              <svg aria-hidden="true" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#2E7D50" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                {item.icon}
              </svg>
              <div>
                <h3 className="text-[17px] font-bold leading-snug tracking-[-0.01em] text-[#0B361F]">{item.title}</h3>
                <p className="mt-0.5 text-[14px] leading-[1.45] text-[#3E5146]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH TRAINING STORE */}
      <section className="bg-[#F6F3EC] py-10 lg:py-12">
        <div className="mx-auto grid max-w-[1440px] gap-5 px-5 md:grid-cols-3 lg:gap-6 lg:px-12">
          {[
            { title: "Research", text: "Explore the evidence and propose a study.", image: photo.research, href: "/research/", pos: "object-[40%_center]" },
            { title: "Training", text: "Workshops and guidance for teams and organisations.", image: photo.training, href: "/training/", pos: "object-[38%_center]" },
            { title: "Store", text: "Everyday items that support focus, comfort and calm.", image: photo.store, href: "/store/", pos: "object-[center_40%]" },
          ].map(card => (
            <a
              key={card.title}
              href={card.href}
              className="group relative flex min-h-[170px] overflow-hidden rounded-[18px] border border-[#ECE5D8] bg-[linear-gradient(120deg,#F3EEE4_0%,#FBF9F4_60%,#FFFFFF_100%)] shadow-[0_2px_10px_rgba(11,54,31,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(11,54,31,0.12)]"
            >
              <div className="relative w-[44%] shrink-0 overflow-hidden">
                <img
                  src={card.image}
                  alt=""
                  className={`absolute inset-0 h-full w-full object-cover ${card.pos} transition-transform duration-500 group-hover:scale-105 [mask-image:linear-gradient(90deg,#000_62%,transparent_100%)]`}
                />
              </div>
              <div className="relative flex flex-1 flex-col py-6 pl-2 pr-5">
                <h3 className="text-[22px] font-bold tracking-[-0.02em] text-[#0B361F]">{card.title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-[1.5] text-[#3E5146]">{card.text}</p>
                <span className="mt-auto flex h-9 w-9 items-center justify-center self-end rounded-full bg-[#0B361F] text-white transition-colors group-hover:bg-[#367050]">
                  <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FAF6_100%)] py-14 lg:py-16">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,2fr)] lg:gap-0 lg:px-12">
          <div className="lg:border-r lg:border-[#D8E2D9] lg:pr-10">
            <h2 className="text-[34px] font-bold leading-[1.12] tracking-[-0.025em] text-[#0B361F] xl:text-[36px]">
              Frequently<br className="hidden lg:block" /> asked questions
            </h2>
            <p className="mt-4 max-w-[300px] text-[16px] leading-[1.55] text-[#3E5146]">
              Quick answers to common questions about NuroTok.
            </p>
          </div>

          <div className="grid content-start gap-x-6 gap-y-3 md:grid-cols-2 lg:pl-10">
            {faqs.map(([question, answer]) => (
              <details
                key={question}
                className="group self-start rounded-[12px] border border-[#DCE5DC] bg-white transition-shadow hover:border-[#B9CFBF] hover:shadow-[0_4px_14px_rgba(11,54,31,0.06)] open:border-[#B9CFBF] open:shadow-[0_6px_18px_rgba(11,54,31,0.08)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[12px] px-5 py-3.5 text-[15px] font-semibold text-[#0B361F] marker:hidden [&::-webkit-details-marker]:hidden">
                  {question}
                  <span aria-hidden="true" className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[#0B361F] transition-colors group-hover:bg-[#EEF5EF] group-open:bg-[#0B361F] group-open:text-white">
                    <span className="absolute h-[1.8px] w-3 rounded-full bg-current" />
                    <span className="absolute h-3 w-[1.8px] rounded-full bg-current transition-transform duration-300 group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="mx-5 border-t border-[#E8EEE7] pb-4 pt-3 text-[14.5px] leading-[1.6] text-[#3E5146]">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#F6F3EC] px-5 py-8 lg:px-12">
        <div className="relative mx-auto max-w-[1344px] overflow-hidden rounded-[22px] bg-[linear-gradient(110deg,#0E3F27_0%,#14513A_55%,#1C6447_100%)] px-6 py-8 text-white shadow-[0_16px_40px_rgba(11,54,31,0.22)] sm:px-10 lg:px-12 lg:py-7">
          {/* decorative soft glows */}
          <span aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#94E7BC]/15 blur-3xl" />
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-[#94E7BC]/10 blur-3xl" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8F2DC" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 6.5L12 13l8.5-6.5" /></svg>
              </span>
              <h2 className="whitespace-nowrap text-[28px] font-bold tracking-[-0.02em] text-white lg:text-[30px]">Stay in touch</h2>
            </div>

            <p className="max-w-[340px] text-[15.5px] leading-[1.55] text-[#D7EBDF]">
              Get updates on the app, training, research and new resources.
            </p>

            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[linear-gradient(180deg,#0B3D26_0%,#062C1B_100%)] text-white">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 pb-10 pt-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_1px_0.8fr_0.8fr_1px_1.15fr_0.9fr] lg:gap-x-10 lg:px-12">
          {/* Brand */}
          <div>
            <BrandLogo light />
            <p className="mt-4 max-w-[260px] text-[14.5px] leading-[1.55] text-[#CFE8DA]">
              A sensory regulation app from NeuroDigital Support.
            </p>
          </div>

          <span aria-hidden="true" className="hidden bg-white/15 lg:block" />

          <nav aria-label="Quick links">
            <h3 className="text-[15px] font-bold tracking-[0.01em] text-white">Quick links</h3>
            <ul className="mt-4 space-y-2.5">
              {[["Home", "/"], ["Features", "/features/"], ["Research", "/research/"], ["Training", "/training/"]].map(([label, href]) => (
                <li key={label}><a href={href} className="text-[14.5px] text-[#CFE8DA] transition-colors hover:text-white">{label}</a></li>
              ))}
            </ul>
          </nav>

          <nav aria-label="More">
            <h3 className="text-[15px] font-bold tracking-[0.01em] text-white">More</h3>
            <ul className="mt-4 space-y-2.5">
              {[["Blogs", "/blogs/"], ["Store", "/store/"], ["About", "/about-us/"], ["Contact", "/contact-us/"]].map(([label, href]) => (
                <li key={label}><a href={href} className="text-[14.5px] text-[#CFE8DA] transition-colors hover:text-white">{label}</a></li>
              ))}
            </ul>
          </nav>

          <span aria-hidden="true" className="hidden bg-white/15 lg:block" />

          <div>
            <h3 className="text-[15px] font-bold tracking-[0.01em] text-white">Get in touch</h3>
            <ul className="mt-4 space-y-3.5">
              <li>
                <a href="mailto:info@nurotok.co.uk" className="group flex items-center gap-3 text-[14.5px] text-[#CFE8DA] transition-colors hover:text-white">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#94E7BC]"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 6.5L12 13l8.5-6.5" /></svg>
                  info@nurotok.co.uk
                </a>
              </li>
              <li className="flex items-center gap-3 text-[14.5px] text-[#CFE8DA]">
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#94E7BC]"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
                United Kingdom
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] font-bold tracking-[0.01em] text-white">Follow us</h3>
            <div className="mt-4 flex gap-2.5">
              {[
                { label: "LinkedIn", href: "#", d: "M6.5 9.5v8M6.5 6.5v.01M10.5 17.5v-8M10.5 13a3 3 0 0 1 6 0v4.5" },
                { label: "YouTube", href: "#", d: "M3.5 8.2c.1-1.4 1.2-2.5 2.6-2.6C8 5.4 10 5.3 12 5.3s4 .1 5.9.3c1.4.1 2.5 1.2 2.6 2.6.2 2.5.2 5.1 0 7.6-.1 1.4-1.2 2.5-2.6 2.6-1.9.2-3.9.3-5.9.3s-4-.1-5.9-.3c-1.4-.1-2.5-1.2-2.6-2.6-.2-2.5-.2-5.1 0-7.6zM10.3 9.3v5.4l4.6-2.7z" },
                { label: "Instagram", href: "#", d: "M7.5 3.5h9a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4zM12 8.3a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4zM17.2 6.8v.01" },
                { label: "X", href: "#", d: "M4.5 4.5l15 15M19.5 4.5l-6.2 6.6M10.7 12.9L4.5 19.5" },
              ].map(sn => (
                <a
                  key={sn.label}
                  href={sn.href}
                  aria-label={`NuroTok on ${sn.label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white ring-1 ring-white/25 transition-colors hover:bg-[#94E7BC] hover:text-[#0B361F] hover:ring-[#94E7BC]"
                >
                  <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d={sn.d} /></svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/12">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-5 text-[13px] sm:flex-row sm:items-center sm:justify-between lg:px-12">
            <p className="m-0 text-[#A9C9B6]">© 2026 NeuroDigital Support. All rights reserved.</p>

            <ul className="flex flex-wrap items-center text-[#CFE8DA]">
              {[["Privacy Policy", "/privacy-policy/"], ["Terms of Use", "/terms/"], ["Accessibility", "/accessibility/"], ["Cookies", "/cookies/"]].map(([label, href], i) => (
                <li key={label} className="flex items-center">
                  {i > 0 && <span aria-hidden="true" className="mx-4 h-3.5 w-px bg-white/25" />}
                  <a href={href} className="transition-colors hover:text-white">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

    </main>
  );
}
