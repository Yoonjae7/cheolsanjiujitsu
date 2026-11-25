"use client"

import { useEffect, useState } from "react"
import { COPY, NAV } from "@/lib/content"
import { LanguageToggle, useLanguage } from "./language-toggle"
import { BeltProgress } from "./motion"

export function Navigation() {
  const [open, setOpen] = useState(false)
  const { language } = useLanguage()
  const t = COPY[language]

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false)
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="nav">
      <div className="nav__bar">
        <a className="nav__brand" href="#home" onClick={() => setOpen(false)}>
          <img src="/img/logo.webp" alt="" width={256} height={226} />
          <span>{t.brand}</span>
        </a>

        <nav className="nav__links" aria-label={t.menu}>
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item[language]}
            </a>
          ))}
        </nav>

        <LanguageToggle />

        <button
          type="button"
          className="nav__burger"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.close : t.menu}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <BeltProgress />

      {open && (
        <nav id="mobile-menu" className="menu" aria-label={t.menu}>
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              style={{ animationDelay: `${i * 45}ms` }}
              onClick={() => {
                /* release the scroll lock before the anchor jump */
                document.body.style.overflow = ""
                setOpen(false)
              }}
            >
              {item[language]}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
