"use client"

import { documentLanguage } from "@/lib/site-nav"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-switch"

/** The editor's status bar along the bottom edge. */
export function StatusBar() {
  const language = documentLanguage(usePathname())

  return (
    <footer className="sticky bottom-0 z-10 flex h-[26px] items-center justify-between gap-4 whitespace-nowrap bg-brand px-3 text-xs text-brand-foreground">
      <span>main</span>
      <div className="flex items-center gap-4 overflow-hidden">
        <span className="hidden min-[600px]:inline">Ln 1, Col 1</span>
        <span>{language}</span>
        <span className="hidden min-[600px]:inline">UTF-8</span>
        <ThemeToggle />
      </div>
    </footer>
  )
}
