"use client"

import { useCallback, useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme: theme } = useTheme()

  const isDarkTheme = theme === "dark"

  const onChangeTheme = useCallback(
    () => setTheme((s) => (s === "dark" ? "light" : "dark")),
    [setTheme],
  )

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <button aria-label="Toggle Dark Mode" onClick={onChangeTheme} style={{ height: 25, width: 25 }}>
      <Image
        alt={isDarkTheme ? "moon" : "sun"}
        src={
          isDarkTheme
            ? "https://assets.jbethuel.com/sun.svg"
            : "https://assets.jbethuel.com/moon.svg"
        }
        style={{ cursor: "pointer", width: "100%", height: "100%" }}
        height={40}
        width={40}
      />
    </button>
  )
}
