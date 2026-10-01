"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

// The resolved theme is only known on the client, so until mount neither
// segment is pressed - rendering a guess would mismatch on hydration.
function useResolvedTheme() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    // oxlint-disable-next-line react/set-state-in-effect -- mounted guard prevents SSR hydration mismatch
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme === "dark" : undefined
  return { isDark, setTheme }
}

const SEGMENT = "cursor-pointer px-2.5 py-[3px] transition-colors"

/** The Theme switch: a two-segment light / dark control in the title bar. */
export function ThemeSwitch() {
  const { isDark, setTheme } = useResolvedTheme()

  const segment = (pressed: boolean) =>
    cn(
      SEGMENT,
      pressed ? "bg-brand text-brand-foreground" : "text-muted-foreground hover:text-foreground",
    )

  // Below 600px the words drop and only the glyphs remain; aria-label keeps the name.
  return (
    <fieldset className="flex overflow-hidden rounded-md border text-xs">
      <legend className="sr-only">Theme</legend>
      <button
        type="button"
        aria-label="Light theme"
        aria-pressed={isDark === false}
        onClick={() => setTheme("light")}
        className={segment(isDark === false)}
      >
        ☀<span className="hidden min-[600px]:inline"> light</span>
      </button>
      <button
        type="button"
        aria-label="Dark theme"
        aria-pressed={isDark === true}
        onClick={() => setTheme("dark")}
        className={cn(segment(isDark === true), "border-l")}
      >
        ☾<span className="hidden min-[600px]:inline"> dark</span>
      </button>
    </fieldset>
  )
}

/** The status bar's theme readout, which flips the theme when pressed. */
export function ThemeToggle() {
  const { isDark, setTheme } = useResolvedTheme()

  if (isDark === undefined) return null

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="cursor-pointer"
    >
      {isDark ? "☾ dark" : "☀ light"}
    </button>
  )
}
