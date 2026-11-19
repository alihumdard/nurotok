
import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Lexend } from "next/font/google";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible({
  variable: "--font-atkinson",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NuroTok | Sensory Regulation & Digital Wellbeing",
    template: "%s | NuroTok",
  },
  description:
    "Explore NuroTok, a sensory regulation app designed to support neurodivergent people with calmer, more comfortable digital experiences.",
  applicationName: "NuroTok",
  metadataBase: new URL("https://nurotok.co.uk"),
  openGraph: {
    title: "NuroTok | Sensory Regulation & Digital Wellbeing",
    description:
      "A more comfortable digital experience, designed around sensory needs.",
    siteName: "NuroTok",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      suppressHydrationWarning
      className={`${atkinson.variable} ${lexend.variable} h-full antialiased`}
    >
      <head>
        {/* Apply saved accessibility prefs before first paint (see components/AccessibilityBar) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var p=JSON.parse(localStorage.getItem("nt-a11y")||"{}"),e=document.documentElement;if(p.zoom)e.style.setProperty("--nt-zoom",p.zoom);if(p.dark)e.classList.add("nt-dark");if(p.motion)e.classList.add("nt-reduce-motion");if(p.links)e.classList.add("nt-links")}catch(_){}`,
          }}
        />
      </head>
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla) inject attributes on <body> */}
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
