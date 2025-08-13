"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LanguageToggle } from "./language-toggle"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { ko: "홈", en: "Home", href: "#home" },
    { ko: "소개", en: "About", href: "#about" },
    { ko: "수업 안내", en: "Classes", href: "#classes" },
    { ko: "시간표", en: "Schedule", href: "#schedule" },
    { ko: "갤러리", en: "Gallery", href: "#gallery" },
    { ko: "문의하기", en: "Contact", href: "#contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Cheolsan Jiu Jitsu Logo" width={40} height={40} className="rounded-full" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900">철산 주짓수</h1>
              <p className="text-xs text-gray-600">Cheolsan Jiu Jitsu</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-[#3FA54D] transition-colors duration-200 text-sm font-medium"
              >
                {item.ko}
              </a>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <LanguageToggle />

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-[#3FA54D] hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.ko}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
