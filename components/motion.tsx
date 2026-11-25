"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

/**
 * Adds `is-in` once the element scrolls into view. The look of each move lives in
 * globals.css: slap (breakfall), sweep (position change), rise, tape.
 */
export function Reveal({
  move,
  as: Tag = "div",
  className = "",
  delay = 0,
  children,
}: {
  move: "slap" | "sweep" | "rise" | "tape"
  as?: React.ElementType
  className?: string
  delay?: number
  children: React.ReactNode
}) {
  const ref = useRef<HTMLElement>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    /* Watch the un-animated element itself; transforms and clips are applied to its children. */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
          setSeen(true)
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${move} ${seen ? "is-in" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  )
}

/** Opening move: the belt is tied, then the screen opens along it. Pure CSS, once per visit. */
export function Intro() {
  const [skipped, setSkipped] = useState(false)

  useEffect(() => {
    try {
      window.sessionStorage.setItem("cheolsan-intro", "1")
    } catch {}
  }, [])

  if (skipped) return null

  return (
    <div className="intro" aria-hidden="true" onClick={() => setSkipped(true)}>
      <div className="intro__half intro__half--top">
        <span>철산 주짓수</span>
      </div>
      <div className="intro__half intro__half--bottom" />
      <div className="intro__belt intro__belt--left">
        <i />
      </div>
      <div className="intro__belt intro__belt--right">
        <i />
      </div>
      <svg className="intro__knot" viewBox="0 0 140 190" width="140" height="190">
        <path d="M58 108 30 182l30 6 18-76z" fill="#0d100e" />
        <path d="M82 108l30 72-30 8-18-76z" fill="#171b19" />
        <path d="m96 170 14-4 6 15-14 4z" fill="#c0301f" />
        <rect x="34" y="62" width="72" height="62" rx="10" fill="#0d100e" stroke="#6a746d" strokeWidth="2" />
        <path d="m40 70 60 46M100 70l-60 46" stroke="#6a746d" strokeWidth="2" />
      </svg>
    </div>
  )
}

/** Page progress worn as a belt: white, blue, purple, brown, black. */
export function BeltProgress() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const paint = () => {
      frame = 0
      const range = document.documentElement.scrollHeight - window.innerHeight
      const progress = range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0
      ref.current?.style.setProperty("--progress", String(progress))
    }
    const queue = () => {
      if (!frame) frame = window.requestAnimationFrame(paint)
    }
    paint()
    window.addEventListener("scroll", queue, { passive: true })
    window.addEventListener("resize", queue)
    return () => {
      window.removeEventListener("scroll", queue)
      window.removeEventListener("resize", queue)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="beltbar" ref={ref} aria-hidden="true">
      <div className="beltbar__fill" />
    </div>
  )
}
