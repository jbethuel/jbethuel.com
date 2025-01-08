"use client"

import { usePathname } from "next/navigation"

export function HeaderItem(props: { route: string; label: string }) {
  const { route, label } = props

  const pathname = usePathname()

  return <span className={pathname === route ? "underline underline-offset-8" : ""}>{label}</span>
}
