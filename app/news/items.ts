export type PressItem = {
  outlet: string;
  logo: string;
  /** The logo is white, so it needs a dark panel behind it. */
  dark?: boolean;
  tag: string;
  title: string;
  href: string;
};

/**
 * Media coverage, as listed in the client's build brief (page 14).
 * Each headline links out to the outlet's own article.
 */
export const press: PressItem[] = [
  {
    outlet: "News Ghana",
    logo: "/images/press/news-ghana.webp",
    tag: "Press",
    title: "Ghanaian researcher takes neurodivergent users’ case to app design",
    href: "https://newsghana.com.gh/ghanaian-researcher-takes-neurodivergent-users-case-to-app-design/",
  },
  {
    outlet: "News Ghana",
    logo: "/images/press/news-ghana.webp",
    tag: "Press",
    title: "Ghanaian founder pitches ADHD-aware design for digital platforms",
    href: "https://newsghana.com.gh/ghanaian-founder-pitches-adhd-aware-design-for-digital-platforms/",
  },
  {
    outlet: "MyJoyOnline",
    logo: "/images/press/myjoyonline.webp",
    tag: "Press",
    title: "The Ghanaian researcher challenging how social media platforms treat neurodivergent users",
    href: "https://www.myjoyonline.com/kofi-ofori-mensah-the-ghanaian-researcher-challenging-how-social-media-platforms-treat-neurodivergent-users/",
  },
  {
    outlet: "Adom Online",
    logo: "/images/press/adom-online.webp",
    tag: "Press",
    title: "Kofi Ofori-Mensah: the Ghanaian researcher challenging how social media platforms treat neurodivergent users",
    href: "https://www.adomonline.com/kofi-ofori-mensah-the-ghanaian-researcher-challenging-how-social-media-platforms-treat-neurodivergent-users/",
  },
  {
    outlet: "GhanaWebbers",
    logo: "/images/press/ghanawebbers.webp",
    dark: true,
    tag: "Press",
    title: "Ghanaian researcher advocates for neurodivergent users on social media",
    href: "https://www.ghanawebbers.com/GhanaHomePage/entertainment/Ghanaian-Researcher-Advocates-for-Neurodivergent-Users-on-Social-Media-2164525",
  },
  {
    outlet: "The Ghana Report",
    logo: "/images/press/the-ghana-report.webp",
    tag: "Opinion",
    title: "The Ghanaian researcher challenging how social media platforms treat neurodivergent users",
    href: "https://theghanareport.com/opinion/the-ghanaian-researcher-challenging-how-social-media-platforms-treat-neurodivergent-users/",
  },
  {
    outlet: "The Hub Web",
    logo: "/images/press/the-hub-web.webp",
    tag: "Social impact",
    title: "Rethinking diaspora parenting and youth crime in the UK: a case of the Ghanaian community",
    href: "https://www.thehubweb.com/rethinking-diaspora-parenting-youth-crime-uk-ghanaian-community",
  },
];
