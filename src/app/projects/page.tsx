import type { Metadata } from "next"
import { Intro } from "@/components/intro"
import { ProjectList } from "@/components/project-list"
import { Fragment } from "react"

export const metadata: Metadata = {
  title: "JBethuel - Projects",
  description: "Side projects and open source work by Joseph Bethuel Dela Cruz.",
}

export default function ProjectsPage() {
  return (
    <Fragment>
      <Intro title="projects" subTitle="things I build outside of work" />
      <ProjectList />
    </Fragment>
  )
}
