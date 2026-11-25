"use client"

import { COPY, LINKS } from "@/lib/content"
import { useLanguage } from "@/components/language-toggle"
import { Reveal } from "@/components/motion"

export function Contact() {
  const { language } = useLanguage()
  const t = COPY[language]

  return (
    <section id="contact" className="contact">
      <div className="contact__copy">
        <Reveal move="slap">
          <h2>
            {t.contactTitle[0]}
            <br />
            {t.contactTitle[1]}
          </h2>
        </Reveal>
        <p>{t.contactLead}</p>

        <a className="contact__call" href={`tel:${LINKS.phone}`}>
          <small>
            {t.call} · {t.phoneName}
          </small>
          {LINKS.phone}
        </a>

        <dl>
          <dt>{t.address}</dt>
          <dd>
            {t.addressText}
            <br />
            <a href={LINKS.naverMap} target="_blank" rel="noopener noreferrer">
              {t.naverMap}
            </a>
          </dd>
          <dt>{t.hours}</dt>
          <dd>
            {t.hoursText.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </dd>
        </dl>

        <div className="contact__social">
          <a className="btn btn--ink" href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a className="btn btn--ink-line" href={LINKS.blog} target="_blank" rel="noopener noreferrer">
            {t.blog}
          </a>
        </div>
      </div>

      <div className="contact__map">
        <iframe src={LINKS.mapEmbed} title={t.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </section>
  )
}

export function Footer() {
  const { language } = useLanguage()
  const t = COPY[language]

  return (
    <footer className="footer">
      <div className="footer__mural" aria-hidden="true" lang="zh-Hant">
        鐵山柔術
      </div>
      <div className="footer__row">
        <img src="/img/logo.webp" alt="" width={256} height={226} loading="lazy" />
        <div>
          <strong>{t.brand}</strong>
          <span>{t.team}</span>
        </div>
        <nav aria-label="Social">
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={LINKS.blog} target="_blank" rel="noopener noreferrer">
            {t.blog}
          </a>
        </nav>
      </div>
      <p suppressHydrationWarning>
        © {new Date().getFullYear()} {t.brand}. {t.rights}
      </p>
    </footer>
  )
}
