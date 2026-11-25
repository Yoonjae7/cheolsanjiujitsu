"use client"

import { COPY } from "@/lib/content"
import { useLanguage } from "@/components/language-toggle"
import { Intro } from "@/components/motion"
import { Navigation } from "@/components/navigation"
import { Gallery } from "@/components/site/gallery"
import { Hero } from "@/components/site/hero"
import { About, Lineage, Promos } from "@/components/site/story"
import { Classes, Schedule } from "@/components/site/training"
import { Contact, Footer } from "@/components/site/visit"

export default function Home() {
  const { language } = useLanguage()

  return (
    <>
      <Intro />
      <a className="skip" href="#main">
        {COPY[language].skip}
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Promos />
        <Lineage />
        <About />
        <Classes />
        <Schedule />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
