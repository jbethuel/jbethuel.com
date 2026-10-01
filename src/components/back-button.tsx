"use client"

import { CustomLink } from "@/components/custom-link"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

export type BackButtonProps = {
  link: string
  label?: string
}

export function BackButton(props: BackButtonProps) {
  const { link, label = "Go Back" } = props

  const router = useRouter()

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()

      if (window.history.length <= 2) {
        router.push(link)
      } else {
        router.back()
      }
    },
    [link, router],
  )

  return (
    <CustomLink
      href={link}
      onClick={onClick}
      className="self-start text-brand-700 hover:text-brand"
    >
      ← {label}
    </CustomLink>
  )
}
