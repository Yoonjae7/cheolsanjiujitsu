"use client"

import type React from "react"
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"
import type { Language } from "@/lib/content"

const STORAGE_KEY = "cheolsan-language"

const LanguageContext = createContext<{ language: Language; setLanguage: (lang: Language) => void }>({
  language: "ko",
  setLanguage: () => {},
})

export const useLanguage = () => useContext(LanguageContext)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setCurrent] = useState<Language>("ko")
  const [crossing, setCrossing] = useState(false)
  const timers = useRef<number[]>([])

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === "en") setCurrent("en")
    return () => timers.current.forEach(window.clearTimeout)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  /* The page text swaps while the two lapels are closed over it. */
  const setLanguage = useCallback(
    (next: Language) => {
      if (next === language || crossing) return
      window.localStorage.setItem(STORAGE_KEY, next)
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setCurrent(next)
        return
      }
      setCrossing(true)
      timers.current = [
        window.setTimeout(() => setCurrent(next), 430),
        window.setTimeout(() => setCrossing(false), 950),
      ]
    },
    [language, crossing],
  )

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
      {crossing && <Lapels />}
    </LanguageContext.Provider>
  )
}

/* A gi closes left over right: the wearer's left panel is on top, which is the viewer's right. */
function Lapels() {
  return (
    <div className="lapels" aria-hidden="true">
      <svg className="lapels__under" viewBox="0 0 800 520" preserveAspectRatio="none">
        <path d="M0 0H430L620 520H0Z" fill="#e2e5dc" />
        <path d="M430 0 620 520M414 0 604 520M398 0 588 520M382 0 572 520" stroke="#b4b9ac" strokeWidth="2" fill="none" />
      </svg>
      <svg className="lapels__over" viewBox="0 0 800 520" preserveAspectRatio="none">
        <path d="M370 0H800V520H180Z" fill="#fafbf8" />
        <path d="M370 0 180 520M386 0 196 520M402 0 212 520M418 0 228 520" stroke="#b4b9ac" strokeWidth="2" fill="none" />
      </svg>
    </div>
  )
}

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="lang" role="group" aria-label="Language / 언어">
      <button type="button" aria-pressed={language === "ko"} onClick={() => setLanguage("ko")}>
        KR
      </button>
      <button type="button" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>
        EN
      </button>
    </div>
  )
}
