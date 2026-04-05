import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Noto_Sans_KR } from "next/font/google"
import { GoogleAnalyticsHashNavigation } from "@/components/google-analytics-hash"
import {
  GA_CONSENT_AND_STUB,
  GA_GTAG_SRC,
  GA_INIT,
} from "@/lib/analytics"
import { LanguageProvider } from "@/components/language-toggle"
import "./globals.css"

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-korean",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cheolsanjiujitsu.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "철산 주짓수 - Cheolsan Jiu Jitsu",
  description: "존 프랭클 주짓수 팀 - 경기도 광명시 철산동",
  generator: "v0.dev",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      className={`${GeistSans.variable} ${GeistMono.variable} ${notoSansKR.variable}`}
    >
      <body className={`${notoSansKR.className} font-korean antialiased`}>
        <Script
          id="ga-consent-stub"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: GA_CONSENT_AND_STUB }}
        />
        <Script src={GA_GTAG_SRC} strategy="beforeInteractive" />
        <Script
          id="ga-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: GA_INIT }}
        />
        <GoogleAnalyticsHashNavigation />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
