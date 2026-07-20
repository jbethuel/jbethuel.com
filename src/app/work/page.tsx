import type { Metadata } from "next"
import { CustomLink } from "@/components/custom-link"
import { Intro } from "@/components/intro"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { Fragment } from "react"

export const metadata: Metadata = {
  title: "JBethuel - Work",
  description:
    "Professional experience of Joseph Bethuel Dela Cruz, full-stack software developer.",
}

type Role = {
  company: string
  companyUrl: string
  title: string
  dates: string
  description: string
}

const roles: Role[] = [
  {
    company: "Rise-X",
    companyUrl: "https://rise-x.io",
    title: "Full-Stack Software Developer",
    dates: "Feb 2021 - Present",
    description:
      "Full-stack on an offline-first Electron app - React front end, C#/.NET back end - that keeps working with no connection and syncs the moment it's back. Re-architected a large React codebase to TypeScript and led a 5-person team spread across Australia, Ukraine, and the Philippines. TDD, Playwright, and Claude Code keep releases boring.",
  },
  {
    company: "Restoplus",
    companyUrl: "https://restoplus.com",
    title: "Full-Stack Software Developer",
    dates: "Jul 2020 - Feb 2021",
    description:
      "Took the table-booking feature from concept to release and kept the React frontend, Node backend, and React Native app running. TDD with Sinon plus end-to-end tests with Cypress and Puppeteer, shipped to the Play Store.",
  },
  {
    company: "StreetBy",
    companyUrl: "https://streetby.com",
    title: "Full-Stack Software Developer",
    dates: "Apr 2017 - Jul 2020",
    description:
      "Owned the merchant management module on a Node backend and integrated Paynamics payments. Built reports for marketing and sales, shipped to both the Play Store and App Store.",
  },
]

const stack = [
  { label: "Languages", value: "TypeScript, C#" },
  { label: "Frontend", value: "React, React Native, Electron, Next.js" },
  { label: "Backend", value: "Node, .NET, Firebase, MongoDB" },
  { label: "Cloud", value: "AWS, GCP, Azure" },
  { label: "Testing", value: "Jest, Playwright, Cypress, Puppeteer" },
  { label: "DevOps", value: "Docker, GitHub Actions, monorepos" },
  { label: "AI Tooling", value: "Claude Code, MCP" },
]

export default function WorkPage() {
  return (
    <Fragment>
      <Intro title="work" subTitle="full-stack developer, ~9 years of experience" />
      <CustomLink href="https://drive.google.com/file/d/1M6GfiYlY8FgeENOvhf1nAqmEpnoJCsnn/view?usp=sharing">
        <Button variant="outline" className="mb-6">
          <Download />
          Download Resume
        </Button>
      </CustomLink>
      <section>
        {roles.map((role, i) => (
          <article key={i} className="mb-6">
            <h2 className="font-semibold">
              <CustomLink
                href={role.companyUrl}
                className="underline underline-offset-8 decoration-gray-700 transition-colors hover:text-brand hover:decoration-brand"
              >
                {role.company}
                <span className="font-light"> - {role.title}</span>
              </CustomLink>
            </h2>
            <p className="font-light text-sm mt-2 mb-2">{role.dates}</p>
            <p className="font-medium">{role.description}</p>
          </article>
        ))}
      </section>
      <section className="mt-10">
        <h2 className="font-semibold underline underline-offset-8 decoration-gray-700">Stack</h2>
        <div className="mt-2 space-y-1">
          {stack.map((item, i) => (
            <p key={i} className="font-light text-sm">
              <span className="font-medium">{item.label}:</span> {item.value}
            </p>
          ))}
        </div>
      </section>
    </Fragment>
  )
}
