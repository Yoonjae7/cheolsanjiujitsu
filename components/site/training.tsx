"use client"

import { useEffect, useState } from "react"
import { CLASS_NAMES, COPY, DAYS, SLOTS, type ClassKind } from "@/lib/content"
import { useLanguage } from "@/components/language-toggle"
import { Reveal } from "@/components/motion"
import { useUpcoming } from "./next-class"

export function Classes() {
  const { language } = useLanguage()
  const t = COPY[language]
  const cards = [
    { key: "kids", img: "/img/kids-stack.webp", info: t.kids, note: undefined },
    { key: "adult", img: "/img/rolling.webp", info: t.adult, note: t.adult.note },
  ]

  return (
    <section id="classes" className="section classes">
      <header className="head">
        <Reveal move="slap">
          <h2>{t.classesTitle}</h2>
        </Reveal>
        <p>{t.classesLead}</p>
      </header>

      <div className="classes__grid">
        {cards.map((card) => (
          <article key={card.key} className={`class class--${card.key}`}>
            <Reveal move="sweep" className="class__photo">
              <img src={card.img} alt={card.info.alt} loading="lazy" />
            </Reveal>
            <span className="class__grip" aria-hidden="true" />
            <div className="class__body">
              <h3>{card.info.title}</h3>
              <p>{card.info.text}</p>
              <dl>
                <dt>{card.info.length}</dt>
                <dd>{card.info.when}</dd>
              </dl>
              {card.note && <p className="class__note">{card.note}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

const LEGEND: ClassKind[] = ["kids", "adult", "nogi", "weekend"]

export function Schedule() {
  const { language } = useLanguage()
  const t = COPY[language]
  const state = useUpcoming()
  const today = state?.today ?? -1
  const upcoming = state?.upcoming
  const [picked, setPicked] = useState<number | null>(null)
  const day = picked ?? (today >= 0 ? today : 0)

  /* once the clock is known, open the day that has the next class */
  const nextDay = upcoming?.day
  useEffect(() => {
    if (nextDay !== undefined) setPicked((current) => current ?? nextDay)
  }, [nextDay])

  const isNext = (slot: number, d: number) => upcoming?.slot === slot && upcoming.day === d

  return (
    <section id="schedule" className="section schedule">
      <header className="head">
        <Reveal move="slap">
          <h2>{t.scheduleTitle}</h2>
        </Reveal>
        <ul className="legend">
          {LEGEND.map((kind) => (
            <li key={kind}>
              <i className={`kind kind--${kind}`} aria-hidden="true" />
              {CLASS_NAMES[kind][language]}
            </li>
          ))}
        </ul>
      </header>

      {/* wide screens: the whole week */}
      <table className="week">
        <thead>
          <tr>
            <th scope="col">{t.time}</th>
            {DAYS.map((d, i) => (
              <th scope="col" key={d.en} className={i === today ? "is-today" : ""}>
                {d[language]}
                {i === today && <small>{t.today}</small>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SLOTS.map((slot, s) => (
            <tr key={slot.start}>
              <th scope="row">{slot.time[language]}</th>
              {slot.days.map((kind, d) => (
                <td key={d}>
                  {kind ? (
                    <span className={`kind kind--${kind} ${isNext(s, d) ? "is-next" : ""}`}>
                      {kind === "nogi" ? "NO-GI" : CLASS_NAMES[kind][language]}
                    </span>
                  ) : (
                    <span className="kind kind--none">
                      <span className="sr">{t.noClass}</span>
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* phones: one day at a time */}
      <div className="day">
        <div className="day__tabs" role="group" aria-label={t.scheduleTitle}>
          {DAYS.map((d, i) => (
            <button
              type="button"
              key={d.en}
              aria-pressed={i === day}
              className={i === today ? "is-today" : ""}
              onClick={() => setPicked(i)}
            >
              {d[language]}
            </button>
          ))}
        </div>
        <ul key={day}>
          {SLOTS.map((slot, s) => {
            const kind = slot.days[day]
            if (!kind) return null
            return (
              <li key={slot.start} className={isNext(s, day) ? "is-next" : ""}>
                <span className="day__time">{slot.time[language]}</span>
                <span className={`kind kind--${kind}`}>{CLASS_NAMES[kind][language]}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
