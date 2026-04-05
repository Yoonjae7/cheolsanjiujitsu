"use client"

import { useEffect } from "react"
import { GA_MEASUREMENT_ID } from "@/lib/analytics"

/**
 * Hash-only in-page navigation (e.g. #about). Initial page_view comes from gtag in root layout.
 */
export function GoogleAnalyticsHashNavigation() {
  useEffect(() => {
    const onHashChange = () => {
      const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
      if (typeof gtag !== "function") return
      const path =
        window.location.pathname +
        window.location.search +
        window.location.hash
      gtag("config", GA_MEASUREMENT_ID, {
        page_path: path,
        page_title: document.title,
      })
    }
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  return null
}
