import type { ReactNode } from "react";

/* ---------- tiny icon set (24px grid, stroke = currentColor) ---------- */

type IconName =
  | "home" | "toolkit" | "insights" | "profile" | "breathe" | "sounds"
  | "meditation" | "sleep" | "filters" | "focus" | "play" | "block" | "filter" | "streak";

const paths: Record<IconName, ReactNode> = {
  home: <><path d="M4 11l8-7 8 7" /><path d="M6 10v10h12V10" /><path d="M10 20v-5h4v5" /></>,
  toolkit: <><path d="M12 3l9 4.5-9 4.5-9-4.5z" /><path d="M3 12l9 4.5 9-4.5" /><path d="M3 16.5L12 21l9-4.5" /></>,
  insights: <><path d="M4 20h16" /><path d="M7 16v-4M12 16V7M17 16v-6" /></>,
  profile: <><circle cx="12" cy="8" r="4" /><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" /></>,
  breathe: <><path d="M12 3v6" /><path d="M7.5 6.5a7 7 0 1 0 9 0" /></>,
  sounds: <><path d="M4 15v-3a8 8 0 0 1 16 0v3" /><rect x="3" y="14" width="4.5" height="6.5" rx="1.5" /><rect x="16.5" y="14" width="4.5" height="6.5" rx="1.5" /></>,
  meditation: <><circle cx="12" cy="5.5" r="2.2" /><path d="M12 8.5v5M6 12l6 1.5 6-1.5M5 19c3-1.8 11-1.8 14 0" /></>,
  sleep: <><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" /></>,
  filters: <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M4 9h16M9 9v11" /></>,
  focus: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.5" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></>,
  play: <path d="M8 5.5v13l11-6.5z" fill="currentColor" />,
  block: <><circle cx="12" cy="12" r="8" /><path d="M6.5 6.5l11 11" /></>,
  filter: <path d="M4 5h16l-6 7.5V19l-4 1.5v-8z" />,
  streak: <path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2.2 1-3.6 2-4.6.3 1.6 1 2.6 2 3 0-3.4.2-5.8 1-8.4z" />,
};

export function Icon({ name, size = 16, className, strokeWidth = 1.8 }: { name: IconName; size?: number; className?: string; strokeWidth?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      {paths[name]}
    </svg>
  );
}

/* ---------- phone frame ---------- */

const NAV: { icon: IconName; label: string }[] = [
  { icon: "home", label: "Home" },
  { icon: "toolkit", label: "Toolkit" },
  { icon: "insights", label: "Insights" },
  { icon: "profile", label: "Profile" },
];

function PhoneFrame({ active, dark = false, children }: { active: number; dark?: boolean; children: ReactNode }) {
  return (
    <div data-light className="mx-auto w-full max-w-[176px] rounded-[30px] bg-[#1C4A33] p-[6px] shadow-[0_18px_36px_rgba(11,54,31,0.22)]">
      <div className="relative flex aspect-[9/17] flex-col overflow-hidden rounded-[24px] bg-white text-left">
        {/* status bar */}
        <div className={`relative flex h-[22px] shrink-0 items-center justify-between px-3.5 text-[7px] font-bold ${dark ? "bg-[#1E5A3B] text-white" : "text-[#0B361F]"}`}>
          <span>9:41</span>
          <span className="absolute left-1/2 top-[5px] h-[10px] w-[44px] -translate-x-1/2 rounded-full bg-[#0F1F17]" />
          <span className="flex items-center gap-[2px]">
            <span className="h-[4px] w-[2px] rounded-[1px] bg-current" />
            <span className="h-[5px] w-[2px] rounded-[1px] bg-current" />
            <span className="h-[6px] w-[2px] rounded-[1px] bg-current" />
            <span className="ml-[2px] h-[6px] w-[11px] rounded-[2px] border border-current p-[1px]"><span className="block h-full w-[70%] rounded-[1px] bg-current" /></span>
          </span>
        </div>

        <div className="flex min-h-0 flex-1 flex-col">{children}</div>

        {/* bottom nav */}
        <div className="grid shrink-0 grid-cols-4 border-t border-[#E6EEE8] bg-white px-1 pb-2 pt-1.5">
          {NAV.map((n, i) => (
            <span key={n.label} className={`flex flex-col items-center gap-[1px] text-[5.5px] font-semibold ${i === active ? "text-[#1E7A4C]" : "text-[#8A9A90]"}`}>
              <Icon name={n.icon} size={10} strokeWidth={2} />
              {n.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScreenHeader({ title }: { title: string }) {
  return (
    <div className="shrink-0 bg-[#1E5A3B] px-3 pb-3 pt-1.5 text-center text-[10px] font-bold tracking-[-0.01em] text-white">{title}</div>
  );
}

/* ---------- the four screens ---------- */

export function HomeScreen() {
  return (
    <PhoneFrame active={0}>
      <div className="flex flex-1 flex-col bg-[linear-gradient(180deg,#FFFFFF_0%,#F1F9F4_100%)]">
        <div className="mt-2 flex items-center justify-center gap-1">
          <img src="/images/nurotok-logo.png" alt="" className="h-[18px] w-[18px]" />
          <span className="font-heading text-[11px] font-bold tracking-[-0.02em] text-[#0E4A2E]">NuroTok</span>
        </div>
        <p className="mt-5 text-center font-heading text-[11px] font-semibold leading-[1.25] text-[#0B361F]">
          A calmer mind,<br />a brighter you.
        </p>
        <svg aria-hidden="true" viewBox="0 0 100 46" preserveAspectRatio="none" className="mt-auto h-[64px] w-full">
          <path d="M0 22 C18 8 34 14 50 22 S80 10 100 18 V46 H0Z" fill="#BFE8D0" />
          <path d="M0 30 C20 20 36 24 52 30 S82 22 100 28 V46 H0Z" fill="#7FCBA6" />
          <path d="M0 38 C22 32 42 36 58 39 S86 34 100 37 V46 H0Z" fill="#3E8E64" />
        </svg>
        <div className="-mt-1 bg-[#3E8E64] px-2 pb-2.5">
          <div className="flex items-center gap-1.5 rounded-[10px] bg-white px-2 py-1.5 shadow-sm">
            <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#E3F4EA] text-[#1E7A4C]"><Icon name="breathe" size={10} strokeWidth={2.2} /></span>
            <span className="flex-1 leading-[1.15]">
              <span className="block text-[7.5px] font-bold text-[#0B361F]">Breathe</span>
              <span className="block text-[5.5px] text-[#5A6E62]">Take a calming breath</span>
            </span>
            <span className="flex h-[16px] w-[16px] items-center justify-center rounded-full bg-[#1E5A3B] text-white"><Icon name="play" size={8} strokeWidth={0} /></span>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

export function ProfileScreen() {
  const rows: [string, number][] = [["Sound", 70], ["Light", 55], ["Movement", 80], ["Touch", 62], ["Colour", 45], ["Notifications", 30]];
  return (
    <PhoneFrame active={3} dark>
      <ScreenHeader title="My Sensory Profile" />
      <div className="-mt-1.5 flex-1 rounded-t-[12px] bg-[#F3F8F4] px-2 pt-2.5">
        <div className="rounded-[10px] bg-white px-2.5 py-1 shadow-[0_1px_3px_rgba(11,54,31,0.08)]">
          {rows.map(([label, v], i) => (
            <div key={label} className={`flex items-center justify-between py-[7px] ${i ? "border-t border-[#EDF2EE]" : ""}`}>
              <span className="text-[7.5px] font-semibold text-[#0B361F]">{label}</span>
              <span className="h-[6px] w-[48px] overflow-hidden rounded-full bg-[#E1EEE6]">
                <span className="block h-full rounded-full bg-[#34B06F]" style={{ width: `${v}%` }} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

export function ToolkitScreen() {
  const tiles: { label: string; icon: IconName; bg: string; fg: string }[] = [
    { label: "Breathe", icon: "breathe", bg: "#DDF3E6", fg: "#1E7A4C" },
    { label: "Sounds", icon: "sounds", bg: "#FADDE4", fg: "#B23A5A" },
    { label: "Meditation", icon: "meditation", bg: "#FBEACD", fg: "#A9661B" },
    { label: "Sleep", icon: "sleep", bg: "#DCEAFB", fg: "#2F64B0" },
    { label: "Filters", icon: "filters", bg: "#DDF3E6", fg: "#1E7A4C" },
    { label: "Focus", icon: "focus", bg: "#DDF3E6", fg: "#1E7A4C" },
  ];
  return (
    <PhoneFrame active={1} dark>
      <ScreenHeader title="Sensory Toolkit" />
      <div className="-mt-1.5 grid flex-1 grid-cols-2 content-start gap-1.5 rounded-t-[12px] bg-[#F3F8F4] p-2">
        {tiles.map(t => (
          <span key={t.label} className="flex aspect-[1/0.8] flex-col items-center justify-center gap-1 rounded-[9px]" style={{ background: t.bg, color: t.fg }}>
            <Icon name={t.icon} size={14} strokeWidth={2} />
            <span className="text-[6.5px] font-bold text-[#0B361F]">{t.label}</span>
          </span>
        ))}
      </div>
    </PhoneFrame>
  );
}

export function InsightsScreen() {
  const bars = [28, 40, 52, 64, 78, 92];
  const stats: { label: string; value: string; icon: IconName }[] = [
    { label: "Blocked opens", value: "12", icon: "block" },
    { label: "Filtered content", value: "28", icon: "filter" },
    { label: "Calm streak", value: "5 days", icon: "streak" },
    { label: "Calm minutes", value: "46", icon: "breathe" },
  ];
  return (
    <PhoneFrame active={2} dark>
      <ScreenHeader title="My Insights" />
      <div className="-mt-1.5 flex-1 rounded-t-[12px] bg-[#F3F8F4] p-2">
        <div className="rounded-[10px] bg-white px-2 pb-1 pt-1.5 shadow-[0_1px_3px_rgba(11,54,31,0.08)]">
          <span className="text-[7px] font-bold text-[#0B361F]">This week</span>
          <div className="mt-1 flex h-[46px] items-end justify-between gap-[4px] border-b border-[#E3ECE6] px-0.5">
            {bars.map((h, i) => (
              <span key={i} className="flex-1 rounded-t-[2px]" style={{ height: `${h}%`, background: i > 3 ? "#34B06F" : "#8FD6B0" }} />
            ))}
          </div>
          <div className="mt-1">
            {stats.map(s => (
              <div key={s.label} className="flex items-center gap-1 py-[3.5px]">
                <span className="flex h-[11px] w-[11px] items-center justify-center rounded-full bg-[#E3F4EA] text-[#1E7A4C]"><Icon name={s.icon} size={7} strokeWidth={2.4} /></span>
                <span className="flex-1 text-[6.5px] font-semibold text-[#0B361F]">{s.label}</span>
                <span className="text-[6.5px] font-bold text-[#0B361F]">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
