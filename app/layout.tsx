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

export const metadata: Metadata = {
  title: "철산 주짓수 - Cheolsan Jiu Jitsu",
  description: "존 프랭클 주짓수 팀 - 경기도 광명시 철산동",
  generator: "v0.dev",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
