export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  /** Machine-readable date for <time dateTime> */
  iso: string;
  excerpt: string;
  image: string;
  body: string[];
};

/**
 * NuroTok news. The three most recent also appear on the homepage.
 * Replace or extend this list as announcements are published.
 */
export const news: NewsItem[] = [
  {
    slug: "new-app-features-now-available",
    title: "NuroTok: New app features now available",
    date: "7 November 2026",
    iso: "2026-11-07",
    excerpt:
      "An update to the sensory toolkit, with more comfort settings and a clearer way to find the tool you want.",
    image: "/images/home/news-app-features.jpg",
    body: [
      "The latest release brings more of the sensory toolkit within easy reach. Breathing guides, sounds and comfort settings now sit together, so you can find the one you want without moving through several menus.",
      "Comfort settings have been grouped by what you notice: movement, brightness, text and the number of things competing for your attention. Each one can be changed on its own and put back as it was.",
      "Available controls depend on your device and the version you have installed. Check the current device guidance in the app for what is available to you.",
    ],
  },
  {
    slug: "how-sensory-tools-can-support-focus",
    title: "How sensory tools can support focus",
    date: "5 November 2026",
    iso: "2026-11-05",
    excerpt:
      "Small adjustments to sound, movement and interruptions can make a task easier to return to.",
    image: "/images/home/focus-mode.jpg",
    body: [
      "Focus is not only a matter of willpower. The environment around a task, including what a screen is doing, affects how easy it is to begin and to return to.",
      "People we work with describe the same pattern: an interruption arrives, the task is put down, and picking it up again takes longer than the interruption itself. A sensory tool can help by reducing what interrupts, not by demanding more effort.",
      "Try one adjustment at a time and judge it by an ordinary task. Keep the change if the task became easier, and undo it if it did not.",
    ],
  },
  {
    slug: "our-latest-research-update",
    title: "Our latest research update",
    date: "23 October 2026",
    iso: "2026-10-23",
    excerpt:
      "Where our questions come from, and what we are exploring about digital participation.",
    image: "/images/home/research-insights.jpg",
    body: [
      "Two people can open the same feed and have very different experiences. Our research interests include how autistic and other neurodivergent adults experience social media, which design choices make participation harder, and what people would change for themselves.",
      "In Algorithmic Exclusion and Neurodivergent Users, NuroTok founder Kofi Ofori-Mensah reviews research on how platform design may shape belonging and wellbeing, with particular attention to autistic adults and people with ADHD in the UK.",
      "If you have a question about digital participation or an idea for a study, we would like to hear it. Tell us whose experience you want to understand and how those people could help shape the work.",
    ],
  },
];

export function getNews(slug: string) {
  return news.find(n => n.slug === slug);
}
