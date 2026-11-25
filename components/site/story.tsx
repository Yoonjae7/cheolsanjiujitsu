"use client"

import { COPY } from "@/lib/content"
import { useLanguage } from "@/components/language-toggle"
import { Reveal } from "@/components/motion"

export function Promos() {
  const { language } = useLanguage()
  const t = COPY[language]

  return (
    <ul className="promos" aria-label={t.promosLabel}>
      {t.promos.map((promo, i) => (
        <Reveal as="li" move="rise" delay={i * 80} key={promo.big}>
          <strong>{promo.big}</strong>
          <span>{promo.small}</span>
        </Reveal>
      ))}
    </ul>
  )
}

export function Lineage() {
  const { language } = useLanguage()
  const t = COPY[language]
  const belts = ["black", "green", "white"]

  return (
    <section id="lineage" className="lineage">
      <div className="lineage__stage">
        <Reveal move="sweep" className="lineage__name">
          <span>
            JOHN
            <br />
            FRANKL
          </span>
        </Reveal>
        <img src="/img/john-frankl.webp" alt={t.franklAlt} width={900} height={1350} loading="lazy" />
      </div>

      <div className="lineage__copy">
        <Reveal move="slap">
          <h2>
            {t.lineageTitle[0]}
            <br />
            {t.lineageTitle[1]}
          </h2>
        </Reveal>
        <p>{t.lineageText}</p>
        <ol className="lineage__list">
          {t.lineage.map((step, i) => (
            <Reveal as="li" move="rise" delay={i * 220} key={step.name}>
              <span className={`belt belt--${belts[i]}`} aria-hidden="true" />
              <strong>{step.name}</strong>
              <span className="lineage__note">{step.note}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function About() {
  const { language } = useLanguage()
  const t = COPY[language]
  const logos = ["/img/competition-logo.webp", "/img/logo.webp", "/img/kids-logo.webp"]

  return (
    <section id="about" className="section about">
      <header className="head">
        <Reveal move="slap">
          <h2>{t.aboutTitle}</h2>
        </Reveal>
        <p>{t.aboutLead}</p>
      </header>

      <div className="about__story">
        <Reveal move="sweep" className="about__photo">
          <img src="/img/academy-team.webp" alt={t.teamAlt} width={1197} height={1140} loading="lazy" />
        </Reveal>
        <div>
          {t.history.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ul className="values">
            {t.values.map((value, i) => (
              <li key={value.title}>
                {/* one, two, three degrees of tape */}
                <Reveal move="tape" className="values__rank" delay={i * 150}>
                  {Array.from({ length: i + 1 }, (_, stripe) => (
                    <i key={stripe} style={{ transitionDelay: `${i * 150 + stripe * 160}ms` }} />
                  ))}
                </Reveal>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="crests" aria-label={t.affiliations}>
        {logos.map((src, i) => (
          <Reveal as="li" move="rise" delay={i * 120} key={src}>
            <img src={src} alt="" loading="lazy" />
            <span>{t.logos[i]}</span>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
