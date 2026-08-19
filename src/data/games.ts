export type Accent = "pink" | "yellow" | "cyan";

export type GameLink = {
  label: string;
  href: string;
  accent: Accent;
  external?: boolean;
};

export type Game = {
  id: string; // used to look up the matching visual component — see components/visuals
  tag: string;
  tagAccent: Accent;
  titleMain: string; // e.g. "DUAL"
  titleAccent: string; // e.g. "DRIVE"
  titleAccentColor: Accent;
  description: string;
  badges: string[];
  links: GameLink[];
  privacyHref: string;
};

export const games: Game[] = [
  {
    id: "dualdrive",
    tag: "Available on Android",
    tagAccent: "cyan",
    titleMain: "DUAL",
    titleAccent: "DRIVE",
    titleAccentColor: "pink",
    description:
      "Control two cars at once. Tap left to switch the left car, tap right to switch the right. Build your style meter with clutch dodges and climb from D rank all the way to SSS.",
    badges: ["Arcade", "Racing", "Reflex", "Retro"],
    links: [
      {
        label: "Play on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.chargedcoconut.dualdrive",
        accent: "pink",
        external: true,
      },
      {
        label: "Beta Waitlist",
        href: "/dualdrive/beta",
        accent: "yellow",
      },
    ],
    privacyHref: "/dualdrive/privacy-policy",
  },
  {
    id: "spinpals",
    tag: "In Development · Android",
    tagAccent: "yellow",
    titleMain: "SPIN",
    titleAccent: "PALS",
    titleAccentColor: "yellow",
    description:
      "Spin Pals is a fun and easy-to-play puzzle game where your goal is to spin a 3x3 region and pair all the pets. Simple to learn. Satisfying to master. Jump into a fresh daily challenge every day and see how fast you can solve it.",
    badges: ["Puzzle", "Casual", "Daily Challenges"],
    links: [
      {
        label: "Alpha Access",
        href: "/spinpals/alpha",
        accent: "cyan",
      },
      {
        label: "Beta Waitlist",
        href: "/spinpals/beta",
        accent: "yellow",
      },
      {
        label: "Download",
        href: "https://play.google.com/store/apps/details?id=com.chargedcoconut.spinpals",
        accent: "pink",
        external: true,
      },
    ],
    privacyHref: "/spinpals/privacy-policy",
  },
];
