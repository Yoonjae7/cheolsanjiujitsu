"use client"

import { useEffect, useRef, useState } from "react"
import { COPY, GALLERY } from "@/lib/content"
import { useLanguage } from "@/components/language-toggle"
import { Reveal } from "@/components/motion"

export function Gallery() {
  const { language } = useLanguage()
  const t = COPY[language]
  const [open, setOpen] = useState<number | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const el = dialog.current
    if (!el) return
    if (open !== null && !el.open) el.showModal()
    if (open === null && el.open) el.close()
  }, [open])

  const step = (by: number) => setOpen((i) => (i === null ? i : (i + by + GALLERY.length) % GALLERY.length))
  const photo = open === null ? null : GALLERY[open]

  return (
    <section id="gallery" className="section gallery">
      <header className="head">
        <Reveal move="slap">
          <h2>{t.galleryTitle}</h2>
        </Reveal>
        <p>{t.galleryLead}</p>
      </header>

      <div className="gallery__grid">
        {GALLERY.map((item, i) => (
          <Reveal move="sweep" className={`shot shot--${item.shape}`} delay={(i % 3) * 90} key={item.src}>
            <button type="button" onClick={() => setOpen(i)} aria-label={`${item.caption[language]} · ${t.enlarge}`}>
              <img src={item.src} alt={item.caption[language]} loading="lazy" />
            </button>
          </Reveal>
        ))}
      </div>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label={t.galleryTitle}
        onClose={() => setOpen(null)}
        onClick={(event) => event.target === event.currentTarget && setOpen(null)}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") step(-1)
          if (event.key === "ArrowRight") step(1)
        }}
      >
        {photo && (
          <figure>
            <img key={photo.src} src={photo.src} alt={photo.caption[language]} />
            <figcaption>{photo.caption[language]}</figcaption>
            <div className="lightbox__controls">
              <button type="button" onClick={() => step(-1)} aria-label={t.prev}>
                ←
              </button>
              <button type="button" onClick={() => step(1)} aria-label={t.nextPhoto}>
                →
              </button>
              <button type="button" onClick={() => setOpen(null)}>
                {t.close}
              </button>
            </div>
          </figure>
        )}
      </dialog>
    </section>
  )
}
