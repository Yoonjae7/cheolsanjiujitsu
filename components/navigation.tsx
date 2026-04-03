"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LanguageToggle, useLanguage } from "./language-toggle"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language } = useLanguage()

  const menuItems = [
    { ko: "홈", en: "Home", href: "#home" },
    { ko: "소개", en: "About", href: "#about" },
    { ko: "수업 안내", en: "Classes", href: "#classes" },
    { ko: "시간표", en: "Schedule", href: "#schedule" },
    { ko: "갤러리", en: "Gallery", href: "#gallery" },
    { ko: "연락처", en: "Contact", href: "#contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0f2413]/92 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[3.75rem]">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Cheolsan Jiu Jitsu Logo" width={40} height={40} className="rounded-full" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold tracking-tight text-[#f5f2ea]">철산 주짓수</h1>
              <p className="text-xs text-white/55">Cheolsan Jiu Jitsu</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-[#FFD93B]"
              >
                {language === "ko" ? item.ko : item.en}
              </a>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-3 sm:gap-4">
            <LanguageToggle onDark />

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:bg-white/10 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0f2413]">
            <div className="px-2 pt-2 pb-3 space-y-0.5">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-sm px-3 py-2.5 text-white/85 transition-colors duration-200 hover:bg-white/5 hover:text-[#FFD93B]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === "ko" ? item.ko : item.en}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
