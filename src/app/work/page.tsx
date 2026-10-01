import type { Metadata } from "next"
import { CustomLink } from "@/components/custom-link"
import { ChipList, PageHeading, Section, SectionHeading } from "@/components/markdown"
import { roles } from "@/lib/work"
import { Fragment } from "react"

export const metadata: Metadata = {
  title: "JBethuel - Work",
  description:
    "Professional experience of Joseph Bethuel Dela Cruz, full-stack software developer.",
}

export default function WorkPage() {
  return (
    <Fragment>
      <PageHeading title="work" subTitle="~9 years across three teams, newest first." />
      {roles.map((role) => (
        <Section key={role.id} id={role.id} className="gap-2.5">
          <SectionHeading
            aside={<span className="text-sm font-normal text-muted-foreground">{role.dates}</span>}
          >
            <CustomLink href={role.companyUrl} className="underline-offset-4 hover:underline">
              {role.company}
            </CustomLink>
          </SectionHeading>
          <p className="text-brand-700">{role.title}</p>
          <p className="max-w-[640px] text-pretty">{role.summary}</p>
          {role.highlights ? (
            <ul className="list-disc pl-5">
              {role.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          ) : null}
          <ChipList items={role.stack} />
        </Section>
      ))}
    </Fragment>
  )
}
