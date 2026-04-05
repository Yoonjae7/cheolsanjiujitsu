"use client"

import { useEffect } from "react"

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void }

function getGtag() {
  return (window as GtagWindow).gtag
}

function waitForGtag(onReady: () => void) {
  let tries = 0
  const id = window.setInterval(() => {
    tries += 1
    const gtag = getGtag()
    if (typeof gtag === "function") {
      window.clearInterval(id)
      onReady()
    } else if (tries > 120) {
      window.clearInterval(id)
    }
  }, 50)
  return () => window.clearInterval(id)
}

function sendPageView() {
  const gtag = getGtag()
  if (typeof gtag !== "function") return
  const pagePath =
    window.location.pathname + window.location.search + window.location.hash
  gtag("event", "page_view", {
    page_location: window.location.href,
    page_path: pagePath,
    page_title: document.title,
  })
}

export function GoogleAnalyticsClient() {
  useEffect(() => {
    const cancelWait = waitForGtag(sendPageView)
    const onHashChange = () => sendPageView()
    window.addEventListener("hashchange", onHashChange)
    return () => {
      cancelWait()
      window.removeEventListener("hashchange", onHashChange)
    }
  }, [])

  return null
}
