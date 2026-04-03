"use client"

import type React from "react"

import { useState, createContext, useContext } from "react"
import { Button } from "@/components/ui/button"

const LanguageContext = createContext<{
  language: "ko" | "en"
  setLanguage: (lang: "ko" | "en") => void
}>({
  language: "ko",
  setLanguage: () => {},
})

export const useLanguage = () => useContext(LanguageContext)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<"ko" | "en">("ko")

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function LanguageToggle({ onDark }: { onDark?: boolean }) {
  const { language, setLanguage } = useLanguage()

  const active = "bg-[#3FA54D] text-white hover:bg-[#3FA54D]/90"
  const inactive = onDark
    ? "text-white/75 hover:text-white hover:bg-white/10"
    : "text-gray-600 hover:text-gray-900"

  return (
    <div
      className={
        onDark
          ? "flex items-center gap-1 rounded-sm bg-white/10 p-0.5 border border-white/15"
          : "flex items-center gap-1 rounded-full bg-gray-100 p-1"
      }
    >
      <Button
        variant={language === "ko" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("ko")}
        className={`rounded-sm px-3 py-1 text-xs ${language === "ko" ? active : inactive}`}
      >
        KR
      </Button>
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className={`rounded-sm px-3 py-1 text-xs ${language === "en" ? active : inactive}`}
      >
        EN
      </Button>
    </div>
  )
}
