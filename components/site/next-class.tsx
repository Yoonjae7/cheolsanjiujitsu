"use client"

import { useEffect, useState } from "react"
import { CLASS_NAMES, COPY, DAYS, SLOTS, type ClassKind } from "@/lib/content"
import { useLanguage } from "@/components/language-toggle"

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

/** Current day (0 = Monday) and seconds past midnight in Korea, wherever the visitor is. */
export function koreaNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Seoul",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date())
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "0"
  return {
    day: WEEKDAYS.indexOf(get("weekday")),
    seconds: Number(get("hour")) * 3600 + Number(get("minute")) * 60 + Number(get("second")),
  }
}

export type Upcoming = { day: number; offset: number; slot: number; kind: ClassKind; live: boolean; remaining: number }

export function findUpcoming(day: number, seconds: number): Upcoming | null {
  for (let offset = 0; offset <= 7; offset++) {
    const d = (day + offset) % 7
    for (let i = 0; i < SLOTS.length; i++) {
      const slot = SLOTS[i]
      const kind = slot.days[d]
      if (!kind) continue
      const start = offset * 86400 + slot.start * 60
      const end = offset * 86400 + slot.end * 60
      if (seconds >= end) continue
      const live = seconds >= start
      return { day: d, offset, slot: i, kind, live, remaining: (live ? end : start) - seconds }
    }
  }
  return null
}

/** Re-reads Korea time every second; null until mounted so server and client markup match. */
export function useUpcoming() {
  const [state, setState] = useState<{ today: number; upcoming: Upcoming | null } | null>(null)

  useEffect(() => {
    const tick = () => {
      const { day, seconds } = koreaNow()
      setState({ today: day, upcoming: findUpcoming(day, seconds) })
    }
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])

  return state
}

const clock = (total: number) =>
  [Math.floor(total / 3600), Math.floor((total % 3600) / 60), total % 60]
    .map((n) => String(n).padStart(2, "0"))
    .join(":")

/** Round timer for the next class on the timetable. */
export function NextClass() {
  const { language } = useLanguage()
  const t = COPY[language]
  const state = useUpcoming()
  const next = state?.upcoming

  return (
    <a className={`timer ${next?.live ? "timer--live" : ""}`} href="#schedule">
      <span className="timer__label">{next?.live ? t.live : t.next}</span>
      {next ? (
        <>
          <strong>
            {next.offset > 0 && `${DAYS[next.day][language]} `}
            {CLASS_NAMES[next.kind][language]} · {SLOTS[next.slot].time[language]}
          </strong>
          <span className="timer__count">
            <small>{next.live ? t.untilEnd : t.untilStart}</small>
            {clock(next.remaining)}
          </span>
        </>
      ) : (
        <strong>{t.scheduleTitle}</strong>
      )}
    </a>
  )
}
