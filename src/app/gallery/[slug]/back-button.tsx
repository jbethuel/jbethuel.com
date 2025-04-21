"use client"

import { CustomLink } from "@/components/custom-link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function BackButton() {
  return (
    <CustomLink href="/gallery">
      <Button className="mb-2" variant="outline">
        <ArrowLeft />
        Go Back
      </Button>
    </CustomLink>
  )
}
