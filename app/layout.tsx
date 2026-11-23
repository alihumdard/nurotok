
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
      className={`${nunito.variable} h-full antialiased`}
    >
      <head>
        {/* Apply saved accessibility prefs before first paint (see components/a11yPrefs) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var p=JSON.parse(localStorage.getItem("nt-a11y")||"{}"),e=document.documentElement,m={dark:"nt-dark",motion:"nt-reduce-motion",contrast:"nt-contrast",hideImages:"nt-hide-images",links:"nt-links",bigCursor:"nt-big-cursor",dyslexia:"nt-dyslexia",textSpacing:"nt-text-spacing",lineHeight:"nt-line-height"};for(var k in m)if(p[k])e.classList.add(m[k]);if(p.fontSize)e.style.fontSize=p.fontSize==="xlarge"?"150%":p.fontSize==="large"?"120%":"100%"}catch(_){}`,
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
