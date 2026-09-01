"use client"

import { useCallback, useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

// Both icons sit stacked and turn over together, on the same 200ms as the
// palette. The transition names `rotate`, not `transform`: Tailwind's rotate-*
// sets the individual rotate property, so a transition on transform would leave
// the turn to snap while only the fade animated. Movement goes under reduced
// motion; the swap itself stays.
const ICON =
  "absolute inset-0 h-full w-full transition-[opacity,rotate] duration-200 ease-out motion-reduce:rotate-0 motion-reduce:transition-none"

export function ThemeSwitch(props: { className?: string }) {
  const { className } = props
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme: theme } = useTheme()

  const isDarkTheme = theme === "dark"

  const onChangeTheme = useCallback(
    () => setTheme(theme === "dark" ? "light" : "dark"),
    [setTheme, theme],
  )

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mounted guard prevents SSR hydration mismatch
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={onChangeTheme}
      className={cn("relative h-[25px] w-[25px] shrink-0 cursor-pointer", className)}
    >
      {/* The icon shows the theme you would be switching *to*, so the sun means
          "go light" and is the one on show while dark. */}
      <Sun
        aria-hidden
        className={cn(ICON, isDarkTheme ? "rotate-0 opacity-100" : "-rotate-90 opacity-0")}
      />
      <Moon
        aria-hidden
        className={cn(ICON, isDarkTheme ? "rotate-90 opacity-0" : "rotate-0 opacity-100")}
      />
    </button>
  )
}
