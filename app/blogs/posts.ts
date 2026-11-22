/**
 * The eight blog posts supplied by the client
 * (NuroTok_Complete_Blog_Posts.pdf, 21 November 2026).
 */

export type Section = { heading: string; paras: string[]; list?: string[] };

export type Post = {
  slug: string;
  title: string;
  category: "Sensory comfort" | "Digital habits" | "Focus" | "Wellbeing";
  date: string;
  /** Machine-readable date for <time dateTime> */
  iso: string;
  excerpt: string;
  image: string;
  /** Opening paragraphs, before the first sub-heading */
  intro: string[];
  sections: Section[];
  /** The closing "Next step" line */
  next: string;
  /** Optional "Further reading" line */
  further?: string;
  /** Optional closing note (medical disclaimer, context) */
  note?: string;
};

export const posts: Post[] = [
  {
    slug: "phone-sensory-overload",
    title: "Phone Sensory Overload: Make Your Digital Space More Comfortable",
    category: "Sensory comfort",
    date: "21 November 2026",
    iso: "2026-11-21",
    excerpt:
      "Your phone can feel like too much when sounds, moving images and interruptions arrive together. Start by changing one source of input.",
    image: "/images/home/quiet-rain.jpg",
    intro: [
      "Your phone can feel like too much when sounds, moving images and interruptions arrive together. A useful starting point is to change one source of input, rather than trying to change your whole relationship with technology overnight.",
      "You might open a message and find yourself dealing with a video, a notification banner and a conversation at the same time. That does not mean you have failed at using your phone. It may mean that this particular digital environment needs adjusting.",
    ],
    sections: [
      {
        heading: "Separate sensory input from competing tasks",
        paras: [
          "Ask yourself two questions: “What am I seeing or hearing?” and “What am I being asked to do?” A loud video is an input. Five messages needing replies are demands. You may need a different response to each.",
          "The National Autistic Society explains that sensory experiences can vary between people and across situations. There is no single setting that makes every screen comfortable for everyone. Your preferences are useful information, even when they change.",
        ],
      },
      {
        heading: "Try a one-change experiment",
        paras: [
          "Choose one recurring situation: reading a group chat, watching short videos or checking your phone during a break. Before you begin, notice what usually feels difficult.",
          "Then try just one adjustment:",
        ],
        list: [
          "Turn down media volume before opening a video-heavy app.",
          "Pause an autoplaying video while you read nearby text.",
          "Move away from a second screen that is competing for your attention.",
          "Put the phone down while you decide which message needs a reply.",
        ],
      },
      {
        heading: "Keep useful connections available",
        paras: [
          "These are experiments in comfort, not a test you must pass. Keep the change if it helps. Undo it if it makes the task harder.",
          "A quieter phone does not have to mean an unreachable phone. Decide which people or services you want to reach you, and which interruptions can wait. A support contact, calendar reminder or travel alert may be more useful than a promotional notification.",
          "For example, you could keep direct messages available while checking a busy group conversation at a time you choose. The aim is to preserve access to what matters.",
        ],
      },
      {
        heading: "Make a small plan before you need it",
        paras: [
          "Write a simple instruction for yourself: “If the feed feels too busy, I will close it and return to the message I intended to send.” Keep the plan short enough to remember.",
          "NuroTok brings together sensory preferences and wellbeing tools. Explore one option at a time rather than treating every feature as another task.",
        ],
      },
    ],
    next: "Read how to create a personal sensory profile for phone use.",
    note: "If sensory difficulties regularly affect daily life, consider discussing support with a qualified professional. An app is not a diagnosis or a replacement for individual care.",
  },

  {
    slug: "personal-sensory-profile",
    title: "How to Create a Personal Sensory Profile for Phone Use",
    category: "Sensory comfort",
    date: "18 November 2026",
    iso: "2026-11-18",
    excerpt:
      "A record of what feels comfortable, what feels difficult and what you would like to change. You can begin with a notebook.",
    image: "/images/home/app-break.jpg",
    intro: [
      "A personal sensory profile for phone use is a record of what feels comfortable, what feels difficult and what you would like to change. You can begin with a notebook. You do not need to turn everyday observations into a score.",
      "Here, “profile” means a practical self-reflection tool. It is not a clinical sensory assessment and cannot tell you whether you have a particular condition.",
    ],
    sections: [
      {
        heading: "Start with situations, not labels",
        paras: [
          "A statement such as “I dislike screens” is difficult to act on. A more specific observation gives you something to test: “Moving video beside written instructions makes it harder for me to read.”",
          "Choose two or three activities you actually do. These might include messaging family, booking appointments or watching videos. Record the circumstances rather than judging your reaction.",
        ],
      },
      {
        heading: "Use four short questions",
        paras: ["For each activity, write:"],
        list: [
          "What was I trying to do?",
          "What did I notice on the screen or around me?",
          "What felt comfortable or uncomfortable?",
          "What would I like to try next time?",
        ],
      },
      {
        heading: "Include things you enjoy",
        paras: [
          "A completed entry might read: “I was checking a bus time. A video played with sound. I lost my place. Next time I will check the journey before opening social media.” This is an illustrative example, not a user testimonial.",
          "A profile should not become a list of problems. You might enjoy a steady sound while working, prefer clear visual cues or find a particular font easier to read. Record helpful experiences too.",
          "You can organise observations under sound, light, movement, touch and interruptions. These are prompts, not compulsory categories. Leave out anything that does not help you understand your own experience.",
        ],
      },
      {
        heading: "Notice context without tracking everything",
        paras: [
          "Record one relevant detail, such as being on a noisy train or using the phone late in the day. You do not need a continuous diary. The National Autistic Society notes that sensory experiences can be mixed and can vary over time or between environments.",
          "Review a few entries together. Are you seeing a repeated situation, or was one day unusual? Treat the pattern as a question to explore, not proof that one thing caused another.",
        ],
      },
      {
        heading: "Turn one observation into a choice",
        paras: [
          "Pick the easiest adjustment to try. For example: reduce visual movement, choose a quieter place for an important call or keep a frequently used tool easier to find. Write down whether you want to keep the change.",
          "NuroTok includes a sensory-profile entry point. Use it to express your preferences, and update those preferences when your needs change.",
        ],
      },
    ],
    next: "Try a calming breathing break, or explore NuroTok.",
  },

  {
    slug: "adhd-phone-notifications",
    title: "ADHD and Phone Notifications: Build a More Intentional Setup",
    category: "Focus",
    date: "14 November 2026",
    iso: "2026-11-14",
    excerpt:
      "Decide which alerts serve you. Keep important reminders visible while giving less useful notifications fewer opportunities to interrupt.",
    image: "/images/home/focus-mode.jpg",
    intro: [
      "If you have ADHD and find phone notifications disruptive, start by deciding which alerts serve you. A useful setup can keep important reminders visible while giving less useful notifications fewer opportunities to interrupt.",
      "There is no universal ADHD phone configuration. This guide offers a practical experiment, not a treatment plan. The NHS describes adult ADHD as involving difficulties that can include attention and impulsivity; individual experiences and support needs differ.",
    ],
    sections: [
      {
        heading: "Sort notifications by purpose",
        paras: ["Choose one app and look at what it sends. Put its notifications into three practical groups:"],
        list: [
          "Act now: something you genuinely need to know promptly.",
          "Check later: useful information that can wait until you open the app.",
          "Not useful: alerts you rarely want or act on.",
        ],
      },
      {
        heading: "Protect reminders before removing interruptions",
        paras: [
          "A message from someone supporting you may belong in the first group. A shopping promotion might belong in the third. You decide the categories; they are not rules imposed by the app.",
          "Before switching alerts off, note which ones help you remember appointments, medication instructions supplied by your clinician, travel or important calls. Do not remove useful supports simply to make a screen look tidy.",
          "Try changing one non-essential category first. Keep the rest of your setup familiar while you see whether the change is practical.",
        ],
      },
      {
        heading: "Give the next task a visible place",
        paras: [
          "If a message interrupts something you want to return to, leave a brief cue: “Finish the first paragraph” or “Pay the electricity bill.” A specific next action may be easier to return to than an entire unfinished project.",
          "Choose a place you already use, such as a paper notebook or existing task list. Adding several new productivity systems can create more things to maintain.",
        ],
      },
      {
        heading: "Try a predictable checking window",
        paras: [
          "For messages that do not need immediate replies, choose an opportunity to check them: after breakfast, during a break or after a meeting. Tell colleagues or friends what to expect where that would help.",
          "The window is adjustable. If waiting creates more difficulty than it solves, change it. This is about making communication workable, not proving that you can ignore your phone.",
        ],
      },
      {
        heading: "Review the setup after a few days",
        paras: [
          "Ask: Did I miss something important? Was returning to tasks easier? Did I simply start checking manually more often? Those answers tell you more than whether you achieved a perfect screen-time total.",
          "NuroTok offers sensory tools and a place to explore personal preferences. It does not diagnose or treat ADHD.",
        ],
      },
    ],
    next: "Build a digital wellbeing routine, or explore NuroTok. If ADHD symptoms are affecting work, study or relationships, speak to a GP about support.",
    further: "NHS: ADHD in adults.",
  },

  {
    slug: "stop-doomscrolling",
    title: "How to Stop Doomscrolling Without Giving Up Your Phone",
    category: "Digital habits",
    date: "11 November 2026",
    iso: "2026-11-11",
    excerpt:
      "Decide what you came to do, choose a stopping point and make your next action easy to begin — one feed or one time of day at a time.",
    image: "/images/home/screen-comfort.jpg",
    intro: [
      "To interrupt doomscrolling, decide what you came to do, choose a stopping point and make your next action easy to begin. You can experiment with one feed or one time of day without giving up the parts of your phone that you value.",
      "“Doomscrolling” usually describes continuing to scroll through upsetting or negative material even when you would prefer to stop. Not every long session is doomscrolling. Reading something important, enjoying a conversation or using an accessibility tool should not automatically become a problem because it takes time.",
    ],
    sections: [
      {
        heading: "Identify the session you want to change",
        paras: [
          "Be specific. “I want to stop checking the news while getting ready for bed” is more useful than “I need to use my phone less.” It identifies a place where you can make a different choice.",
          "For a day or two, simply notice when that session begins. Is it a notification, an app shortcut or an unfilled moment? Observation is enough; you do not need to record every unlock.",
        ],
      },
      {
        heading: "Choose a purpose before opening the app",
        paras: [
          "Finish this sentence: “I am opening this app to…” Your answer could be checking one update or replying to a particular person.",
          "When the purpose is complete, pause and decide whether you want to continue. You are allowed to choose more time. The useful change is making that choice visible.",
        ],
      },
      {
        heading: "Add one stopping point",
        paras: [
          "Try a timer, an app limit or a natural boundary such as finishing one article. On supported Android devices, Digital Wellbeing includes app timers; Google’s instructions explain that the app closes and its icon dims when the allowance is reached. Availability and menus can vary.",
          "A limit is a tool, not a verdict on your self-control. If it repeatedly interrupts something useful, adjust the limit or choose a different boundary.",
        ],
      },
      {
        heading: "Prepare an appealing next action",
        paras: [
          "Before the session, put something else within reach: a book you want to read, a drink or a note of the next task. The replacement should answer what you actually need. If you wanted connection, contacting a friend may make more sense than starting a chore.",
        ],
      },
      {
        heading: "Review the experience rather than chasing a streak",
        paras: [
          "Ask whether the change helped you stop when you wanted to. A shorter session that leaves you frustrated may be less useful than a deliberate session you enjoyed.",
          "NuroTok’s app-related tools vary by device. Check the current device guidance before assuming a particular pause or filtering option is available.",
        ],
      },
    ],
    next: "Read ADHD and phone notifications for another way to manage interruptions, or explore NuroTok.",
    further: "Google: manage phone use with Digital Wellbeing.",
  },

  {
    slug: "calming-breathing-break",
    title: "A Calming Breathing Break: Start Gently and Choose What Fits",
    category: "Wellbeing",
    date: "7 November 2026",
    iso: "2026-11-07",
    excerpt:
      "A short opportunity to pause and notice your breath without forcing it. Choose a comfortable position and a pace that suits you.",
    image: "/images/home/hero-workspace.jpg",
    intro: [
      "A calming breathing break can be a short opportunity to pause and notice your breath without forcing it. Choose a comfortable position and a pace that suits you. There is no need to complete a demanding count or hold your breath to make the pause worthwhile.",
      "The NHS offers a gentle breathing exercise for stress. Its guidance emphasises breathing comfortably, without forcing depth, and using a count only if helpful. That approach is a useful starting point when choosing a guide.",
    ],
    sections: [
      {
        heading: "Make the setting easier first",
        paras: [
          "Pause any competing audio and sit somewhere you feel comfortable. You can keep your eyes open. If following an animation feels like another demand, look away from the screen or choose a different kind of break.",
          "You do not need a special cushion, a silent house or an ideal routine. An ordinary supported chair is enough to begin exploring whether this activity suits you.",
        ],
      },
      {
        heading: "Keep the first experience simple",
        paras: [
          "Let your breathing remain gentle. Avoid trying to take the biggest possible breath or match a pace that feels uncomfortable. If focusing on breathing makes you feel dizzy, distressed or short of breath, stop the exercise and return to your usual breathing.",
          "An app should offer a choice, not pressure you to continue. If symptoms are persistent or concerning, seek appropriate medical advice rather than relying on an exercise.",
        ],
      },
      {
        heading: "Different guides ask different things of you",
        paras: [
          "A guide with timed breath holds is different from one that simply invites gentle breathing. Read the description before starting. Longer counts are not automatically better, and finishing an exercise is not an achievement you owe the app.",
          "NuroTok’s supplied screens show both a 4–7–8 breathing offer and a separate Box breathing card. They are different practices. Check the current instructions and choose only what feels comfortable for you.",
        ],
      },
      {
        heading: "A pause can take another form",
        paras: [
          "You may prefer to sit quietly, reduce a distracting sound or put the phone down. You do not have to focus on bodily sensations if you dislike doing so. A useful wellbeing toolkit leaves room for these preferences.",
          "After a break, decide what you want next. Return to your task, take more time or change the setting. Avoid treating a momentary feeling as proof that a technique will work in every situation.",
        ],
      },
      {
        heading: "Make access easier next time",
        paras: [
          "If you find a guide you like, make a note of its name and where to find it. That can be more practical than repeatedly browsing a large catalogue when you want a pause.",
        ],
      },
    ],
    next: "Create a personal sensory profile to record your preferences, or explore NuroTok.",
    further: "NHS: breathing exercises for stress.",
    note: "This article provides general wellbeing information, not individual medical advice.",
  },

  {
    slug: "phone-screen-comfort",
    title: "Phone Screen Comfort: Adjust Movement, Light and Clutter",
    category: "Sensory comfort",
    date: "4 November 2026",
    iso: "2026-11-04",
    excerpt:
      "Start with the part you notice most. Change one setting, try an ordinary task and keep the adjustment only if it makes that task easier.",
    image: "/images/home/store.jpg",
    intro: [
      "A more comfortable phone screen starts with the part you notice most: movement, brightness, text or clutter. Change one setting, try an ordinary task and keep the adjustment only if it makes that task easier.",
      "No colour scheme or brightness level suits every person. A fashionable dark interface may feel comfortable to one reader and difficult to another. The aim is a workable screen, not a particular aesthetic.",
    ],
    sections: [
      {
        heading: "Begin with a task you repeat",
        paras: [
          "Choose something concrete, such as reading messages, checking directions or filling in a form. Use that task to compare settings. Otherwise, a change may look attractive in a menu but make everyday use less convenient.",
          "Write down the original setting or take a screenshot so you can return to it. This turns the process into a reversible experiment.",
        ],
      },
      {
        heading: "Explore movement controls",
        paras: [
          "Apple provides Reduce Motion under Settings, Accessibility, Motion on supported devices. Its documentation explains that the setting changes or disables certain visual effects. It does not promise to remove every animation in every app.",
          "After enabling it, revisit your chosen task. Notice whether transitions are easier to follow. If a particular app still moves more than you prefer, look for its own playback or animation options.",
        ],
      },
      {
        heading: "Balance the screen with the room",
        paras: [
          "Try a brightness level that makes the text comfortable to read in your current surroundings. Moving away from glare or changing a lamp position may be more useful than repeatedly adjusting the phone.",
          "Avoid assuming that the dimmest possible screen is the best choice. You still need to see controls, read important information and use the device safely.",
        ],
      },
      {
        heading: "Simplify what competes for attention",
        paras: [
          "Consider keeping frequently used apps together and moving less useful shortcuts away from the first screen. A simpler arrangement is useful only if you can still find things.",
          "For reading, try the text-size controls your device or app provides. Check whether larger text remains visible inside buttons and forms. If an adjustment hides essential information, choose another setting or report the accessibility problem.",
        ],
      },
      {
        heading: "Keep a tiny change log",
        paras: [
          "Record three things: the adjustment, the task you tested and whether you want to keep it. For example: “Reduced motion; checked travel directions; preferred the transitions.” This is a personal observation, not a medical result.",
          "NuroTok includes sensory preferences and comfort-related options in its supplied interface. Available controls depend on the device and version; built-in accessibility settings can also be useful.",
        ],
      },
    ],
    next: "Read phone sensory overload, or explore NuroTok.",
    further: "Apple: reduce screen motion. Menus may change as software is updated.",
  },

  {
    slug: "digital-wellbeing-routine",
    title: "A Digital Wellbeing Routine You Can Actually Keep",
    category: "Digital habits",
    date: "31 October 2026",
    iso: "2026-10-31",
    excerpt:
      "Start with one moment in your day, one small action and a way to change the plan when it no longer helps.",
    image: "/images/home/research.jpg",
    intro: [
      "A sustainable digital wellbeing routine makes useful choices easier to repeat. Start with one moment in your day, one small action and a way to change the plan when it no longer helps.",
      "You do not need a perfect morning, a long meditation session or a strict daily screen-time target. Your phone may support work, relationships, navigation and accessibility. A routine should respect those roles.",
    ],
    sections: [
      {
        heading: "Choose one anchor",
        paras: [
          "An anchor is an event that already happens: making breakfast, starting work or putting a cup in the sink. Connect one phone-related action to it.",
          "For example: “After breakfast, I will check today’s appointments before opening a feed.” This is more specific than “Be mindful online,” and it does not require a new alarm.",
          "Keep the action small enough for an ordinary day. You can expand it later if you want to.",
        ],
      },
      {
        heading: "Write a minimum version",
        paras: [
          "A plan that only works on your best day is difficult to maintain. Decide what counts when you have less time or energy. Your full plan might be reviewing a list and setting up a focus period; the minimum version could be choosing one next task.",
          "Missing the routine does not erase its value. Resume at the next useful opportunity instead of trying to make up for it.",
        ],
      },
      {
        heading: "Build in a daytime choice",
        paras: [
          "Pick one point in the day where a deliberate decision helps: before a meeting, during a break or when you first pick the phone up after lunch. Decide in advance what you want that moment to look like.",
          "Keep it to a single decision. A routine with several new steps is harder to repeat than one you barely notice.",
        ],
      },
      {
        heading: "Review it as a plan, not a test",
        paras: [
          "After a week, ask whether the routine made anything easier. If it did not, change the anchor, the action or the time rather than concluding that routines do not work for you.",
          "NuroTok offers sensory tools, preferences and insights in one place. Use the parts that support your routine and leave the rest.",
        ],
      },
    ],
    next: "Read how to choose a sensory regulation app, or explore NuroTok.",
  },

  {
    slug: "choose-a-sensory-regulation-app",
    title: "How to Choose a Sensory Regulation App: A Practical Checklist",
    category: "Wellbeing",
    date: "28 October 2026",
    iso: "2026-10-28",
    excerpt:
      "Start with the situation you want help with, then check comfort, device compatibility, privacy and cost.",
    image: "/images/home/news-app-features.jpg",
    intro: [
      "Choose a sensory regulation app by starting with the situation you want help with, then checking comfort, device compatibility, privacy and cost. A long feature list is less useful than one tool you can find and use when you need it.",
      "This guide is published by NuroTok’s team, so it is not an independent ranking of competing products. Use the same questions for NuroTok, another app or the accessibility options already on your device.",
    ],
    sections: [
      {
        heading: "1. What do you want to do?",
        paras: [
          "Write a practical goal: follow a breathing guide, choose a steady sound, understand your preferences or create a pause before opening an app. Avoid beginning with an expectation that a wellbeing app will diagnose or treat a condition.",
          "Try to describe the task in a sentence. That makes it easier to decide whether a feature is relevant.",
        ],
      },
      {
        heading: "2. Does the interface feel manageable?",
        paras: [
          "Look at the size of the text, the number of choices and the behaviour of animations and audio. Can you find the main tool without several menus? Can you stop or leave it easily?",
          "A visually simple app is not automatically accessible. Your own ability to read, navigate and control it matters more than a promotional label.",
        ],
      },
      {
        heading: "3. Does the feature work on your device?",
        paras: [
          "Check your operating system and the current app description. A feature shown in an Android demonstration may work differently on an iPhone, or may not be available there.",
          "For NuroTok, consult the current device guidance before relying on a specific protection or filtering function. Screenshots describe a particular interface, not a guarantee that all versions behave identically.",
        ],
      },
      {
        heading: "4. What permissions and information are involved?",
        paras: [
          "Read the explanation for any requested permission. Look for clear information about what is processed, what is stored, whether anything is shared and how to change your choices.",
          "Do not infer a privacy guarantee from calming colours or a padlock illustration. If the explanation does not answer your question, ask the provider before enabling the feature.",
        ],
      },
      {
        heading: "5. What will it cost to keep using?",
        paras: [
          "Check the current store listing for subscriptions, free features and cancellation terms. An app that fits your budget is more useful than one you feel pressured to maintain.",
          "Avoid relying on old screenshots for prices or plan limits. These can change.",
        ],
      },
      {
        heading: "6. Can you test one useful action?",
        paras: [
          "Choose a simple task and assess whether the tool makes it easier. You do not need to build a streak or use every feature to judge whether it suits you.",
          "NuroTok brings sensory preferences, wellbeing tools and activity insights into one app. Explore its current options and make your own decision about fit.",
        ],
      },
    ],
    next: "Explore NuroTok and use the personal sensory profile guide to clarify your preferences first.",
    note: "This checklist is a practical selection aid, not a clinical assessment or independent product review.",
  },
];

export const categories = ["All posts", "Sensory comfort", "Digital habits", "Focus", "Wellbeing"] as const;

export function getPost(slug: string) {
  return posts.find(p => p.slug === slug);
}
