import type { Metadata } from "next"
import { ProjectList } from "@/components/project-list"

export const metadata: Metadata = {
  title: "JBethuel - Projects",
  description: "Side projects and open source work by Joseph Bethuel Dela Cruz.",
}

export default function ProjectsPage() {
  return <ProjectList />
}
