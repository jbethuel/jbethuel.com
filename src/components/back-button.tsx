"use client"

import { CustomLink } from "@/components/custom-link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
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
    <CustomLink href="/" onClick={onClick}>
      <Button className="mb-2" variant="outline">
        <ArrowLeft />
        {label}
      </Button>
    </CustomLink>
  )
}
