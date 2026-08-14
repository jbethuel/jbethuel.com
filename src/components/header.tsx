"use client"

import { usePathname } from "next/navigation"
import { BrandMark } from "./brand-mark"
import { CustomLink } from "./custom-link"
import { HeaderItem } from "./header-item"
import { ThemeSwitch } from "./theme-switch"

const NAV_ITEMS = [
  { label: "home", href: "/" },
  { label: "work", href: "/work" },
  { label: "projects", href: "/projects" },
  { label: "blog", href: "/blog" },
]

export function Header() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  // Below the mobile budget the header wraps to two rows: the brand mark and the
  // theme switch share the first, the nav takes the second on its own (`w-full`)
  // and spreads edge to edge. The DOM order is brand, switch, nav so that row one
  // needs no wrapper; `sm:order-*` puts it back to brand, nav, switch on desktop.
  return (
    <header className="flex flex-wrap items-center gap-y-3">
      <h1 className="font-bold text-2xl">
        <CustomLink href="/">
          <BrandMark />
        </CustomLink>
      </h1>
      <ThemeSwitch className="ml-auto sm:order-3 sm:ml-4" />
      <nav className="order-last flex w-full justify-between sm:order-2 sm:ml-auto sm:w-auto sm:justify-end sm:gap-4">
        {NAV_ITEMS.map(({ label, href }) => (
          <CustomLink key={href} className="font-bold py-1 sm:py-0" href={href}>
            <HeaderItem label={label} isActive={isActive(href)} />
          </CustomLink>
        ))}
      </nav>
    </header>
  )
}
