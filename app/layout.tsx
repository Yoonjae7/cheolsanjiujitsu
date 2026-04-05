import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Noto_Sans_KR } from "next/font/google"
import { LanguageProvider } from "@/components/language-toggle"
import "./globals.css"

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-korean",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cheolsanjiujitsu.vercel.app"

const GA_MEASUREMENT_ID = "G-5RCRE54FJG"

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
      <head>
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
      <body className={`${notoSansKR.className} font-korean antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
