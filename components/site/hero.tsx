"use client"

import { useEffect, useRef, useState } from "react"
import { COPY, LINKS } from "@/lib/content"
import { useLanguage } from "@/components/language-toggle"
import { NextClass } from "./next-class"

export function Hero() {
  const { language } = useLanguage()
  const t = COPY[language]
  const video = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const stoppedByVisitor = useRef(false)

  useEffect(() => {
    const v = video.current
    if (!v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const resume = () => {
      if (document.visibilityState !== "visible" || stoppedByVisitor.current) return
      v.muted = true
      void v.play().catch(() => {})
    }

    resume()
    /* some phones stop the loop after the tab has been in the background */
    v.addEventListener("canplay", resume)
    document.addEventListener("visibilitychange", resume)
    return () => {
      v.removeEventListener("canplay", resume)
      document.removeEventListener("visibilitychange", resume)
    }
  }, [])

  const toggle = () => {
    const v = video.current
    if (!v) return
    stoppedByVisitor.current = !v.paused
    if (v.paused) void v.play().catch(() => {})
    else v.pause()
  }

  return (
    <section id="home" className="hero">
      <div className="hero__copy">
        <h1>
          <span className="hero__kicker">
            <b>{t.brand}</b> {t.heroKicker}
          </span>
          <span className="hero__line">{t.heroLine1}</span>
          <span className="hero__line">
            <mark>{t.heroLine2}</mark>
          </span>
        </h1>
        <p>
          {t.heroLead}
          <br />
          {t.heroLead2}
        </p>
        <div className="hero__actions">
          <a className="btn btn--yellow" href="#contact">
            {t.register}
          </a>
          <a className="btn btn--line" href={`tel:${LINKS.phone}`}>
            {LINKS.phone}
          </a>
        </div>
        <div className="hero__social">
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={LINKS.blog} target="_blank" rel="noopener noreferrer">
            {t.blog}
          </a>
        </div>
      </div>

      <div className="hero__stage">
        <div className="hero__frame">
          <video
            ref={video}
            muted
            loop
            playsInline
            preload="auto"
            aria-label={t.videoLabel}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            <source src="/csbjj.mp4" type="video/mp4" />
            <source src="/csbjj.mov" type="video/quicktime" />
          </video>
          <button type="button" className="hero__pause" onClick={toggle} aria-label={playing ? t.pause : t.play}>
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              {playing ? <path d="M3 2h4v12H3zM9 2h4v12H9z" /> : <path d="M4 2l10 6-10 6z" />}
            </svg>
          </button>
        </div>
        <div className="hero__scroll" lang="zh-Hant">
          鐵山柔術
        </div>
        <NextClass />
      </div>
    </section>
  )
}
