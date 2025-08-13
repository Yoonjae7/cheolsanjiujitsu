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

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
      <Button
        variant={language === "ko" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("ko")}
        className={`rounded-full px-3 py-1 text-xs ${
          language === "ko" ? "bg-[#3FA54D] text-white hover:bg-[#3FA54D]/90" : "text-gray-600 hover:text-gray-900"
        }`}
      >
        KR
      </Button>
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1 text-xs ${
          language === "en" ? "bg-[#3FA54D] text-white hover:bg-[#3FA54D]/90" : "text-gray-600 hover:text-gray-900"
        }`}
      >
        EN
      </Button>
    </div>
  )
}
