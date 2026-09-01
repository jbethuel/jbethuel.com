"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

// Kept in step with the .theme-crossing rules in globals.css.
const CROSSFADE_MS = 200

/**
 * Marks the document while the palette crosses, so a theme change eases rather
 * than cuts. Renders nothing: the whole effect is the class, and the class exists
 * so the transition can be scoped to the change instead of left on the site.
 */
export function ThemeCrossfade() {
  const { resolvedTheme } = useTheme()
  // Undefined until the first theme resolves. That first value is the theme the
  // page loaded with, so it is not a change and must not fade.
  const previousTheme = useRef<string | undefined>(undefined)

  useEffect(() => {
    if (!resolvedTheme) return

    const isFirstResolve = previousTheme.current === undefined
    const changed = !isFirstResolve && previousTheme.current !== resolvedTheme
    previousTheme.current = resolvedTheme
    if (!changed) return

    const root = document.documentElement
    root.classList.add("theme-crossing")
    const timer = window.setTimeout(() => root.classList.remove("theme-crossing"), CROSSFADE_MS)

    return () => {
      window.clearTimeout(timer)
      root.classList.remove("theme-crossing")
    }
  }, [resolvedTheme])

  return null
}
