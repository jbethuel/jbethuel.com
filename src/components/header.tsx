"use client"

import { usePathname } from "next/navigation"
import { CustomLink } from "./custom-link"
import { HeaderItem } from "./header-item"
import { ThemeSwitch } from "./theme-switch"

const NAV_ITEMS = [
  { label: "home", href: "/" },
  { label: "blog", href: "/blog" },
  { label: "gallery", href: "/gallery" },
]

export function Header() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="flex flex-row justify-between">
      <h1 className="font-bold text-2xl">
        <CustomLink href="/">jbethuel</CustomLink>
      </h1>
      <nav className="flex flex-row justify-between space-x-4 place-items-center">
        {NAV_ITEMS.map(({ label, href }) => (
          <CustomLink key={href} className="font-bold" href={href}>
            <HeaderItem label={label} isActive={isActive(href)} />
          </CustomLink>
        ))}
        <ThemeSwitch />
      </nav>
    </header>
  )
}
