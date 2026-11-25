import type React from "react"
import type { Metadata, Viewport } from "next"
import { Archivo, Black_Han_Sans, IBM_Plex_Sans_KR } from "next/font/google"
import { LanguageProvider } from "@/components/language-toggle"
import "./globals.css"

/* Archivo sets Latin and numerals; Black Han Sans picks up Hangul in the same headings. */
const latinDisplay = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-latin",
})

const koreanDisplay = Black_Han_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  variable: "--font-poster",
})

const body = IBM_Plex_Sans_KR({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-body",
})

/* Brush face for the four characters on the dojang wall only. */
const BRUSH_FONT = `https://fonts.googleapis.com/css2?family=Yuji+Boku&display=swap&text=${encodeURIComponent("鐵山柔術")}`

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cheolsanjiujitsu.vercel.app"

const GA_MEASUREMENT_ID = "G-5RCRE54FJG"

export const viewport: Viewport = {
  themeColor: "#0e2519",
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "철산 주짓수 - Cheolsan Jiu Jitsu",
  description: "존 프랭클 주짓수 팀 - 경기도 광명시 철산동",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "철산 주짓수",
    title: "철산 주짓수 - Cheolsan Jiu Jitsu",
    description: "존 프랭클 주짓수 팀 - 경기도 광명시 철산동",
    images: [
      {
        url: "/logo.png",
        alt: "철산 주짓수 로고",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "철산 주짓수 - Cheolsan Jiu Jitsu",
    description: "존 프랭클 주짓수 팀 - 경기도 광명시 철산동",
    images: ["/logo.png"],
  },
}

/* Runs before first paint: enables reveal states, and skips the intro on repeat views. */
const BOOT_SCRIPT = `
  var d = document.documentElement;
  d.classList.add('js');
  try { if (sessionStorage.getItem('cheolsan-intro') || location.hash) d.classList.add('no-intro'); } catch (e) {}
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      className={`${latinDisplay.variable} ${koreanDisplay.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="naver-site-verification" content="6315343a09ddc0f86e0befecd33b2e495267d3d6" />
        <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={BRUSH_FONT} />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${GA_MEASUREMENT_ID}');
`,
          }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
