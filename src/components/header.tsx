"use client"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { CustomLink } from "./custom-link"
import { activeTab, documentName, TABS } from "@/lib/site-nav"
import { ThemeSwitch } from "./theme-switch"

/**
 * The Header: an editor's title bar over a row of file tabs. The title is
 * centred between two equal columns on wide screens; below 600px the spacer
 * column goes and the title sits on the left with just the document name.
 * The tab row never wraps - it scrolls sideways inside its own bounds.
 */
export function Header() {
  const pathname = usePathname()
  const current = activeTab(pathname)
  const name = documentName(pathname)

  return (
    <div className="sticky top-0 z-10 bg-brand-tint">
      <div className="grid h-10 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b px-4 min-[600px]:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <span className="hidden min-[600px]:block" />
        <span className="truncate text-xs text-muted-foreground min-[600px]:text-center">
          <CustomLink href="/" className="hover:text-brand">
            {name}
            <span className="hidden min-[600px]:inline"> — jbethuel.com</span>
          </CustomLink>
        </span>
        <div className="flex justify-end">
          <ThemeSwitch />
        </div>
      </div>
      <nav aria-label="Pages" className="flex overflow-x-auto overflow-y-hidden border-b">
        {TABS.map((tab) => {
          const isActive = tab === current
          return (
            <CustomLink
              key={tab.href}
              href={tab.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "-mb-px flex items-center gap-2 whitespace-nowrap border-r px-[18px] py-2.5 text-[13px] transition-colors",
                isActive
                  ? "bg-background text-foreground shadow-[inset_0_2px_0_var(--brand)]"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span aria-hidden className="text-brand">
                {tab.folder ? "▸" : "≡"}
              </span>
              {tab.label}
            </CustomLink>
          )
        })}
      </nav>
    </div>
  )
}
