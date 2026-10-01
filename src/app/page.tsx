import { AiAssistTag } from "@/components/ai-assist-tag"
import { CustomLink } from "@/components/custom-link"
import { Marker, Section, SectionHeading } from "@/components/markdown"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects"
import { RESUME_URL, roles } from "@/lib/work"
import { Download } from "lucide-react"
import { Fragment } from "react"

const links = [
  { label: "github", url: "https://github.com/jbethuel" },
  { label: "linkedin", url: "https://linkedin.com/in/bethueldelacruz" },
  { label: "strava", url: "https://www.strava.com/athletes/143729414" },
  { label: "goodreads", url: "https://www.goodreads.com/user/show/174496084-joseph-bethuel" },
  { label: "letterboxd", url: "https://boxd.it/9J28N" },
]

// The protocol and `www.` are noise identical on every row, and they are what push
// the longest URL past the mobile budget. Display only - the href keeps them.
const displayUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "")

const CELL = "border-b py-2.5"

export default function AboutPage() {
  return (
    <Fragment>
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold leading-[1.3]">
          <Marker level={1} />
          Joseph Bethuel Dela Cruz
        </h1>
        <div className="flex flex-col gap-1">
          <p className="text-lg font-bold">Full-Stack Software Developer</p>
          <p className="flex flex-wrap gap-x-3.5 gap-y-1 text-muted-foreground">
            <span>~9 years experience</span>
            <span>React · TypeScript · Node · .NET</span>
            <span>Led remote teams across 3 countries</span>
          </p>
        </div>
        <div className="mt-1 flex flex-wrap gap-3">
          <Button asChild>
            <CustomLink href={RESUME_URL}>
              <Download />
              Download Resume
            </CustomLink>
          </Button>
          <Button asChild variant="outline">
            <CustomLink href="https://linkedin.com/in/bethueldelacruz">LinkedIn</CustomLink>
          </Button>
          <Button asChild variant="outline">
            <CustomLink href="https://github.com/jbethuel">GitHub</CustomLink>
          </Button>
        </div>
      </section>

      <Section id="work">
        <SectionHeading>work</SectionHeading>
        {/* Scrolls inside its own box rather than widening the page. */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse">
            <thead>
              <tr className="text-left text-muted-foreground">
                <th className="border-b py-2 pr-3 font-normal">company</th>
                <th className="border-b px-3 py-2 font-normal">role</th>
                <th className="border-b py-2 text-right font-normal">dates</th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child_td]:border-b-0">
              {roles.map((role) => (
                <tr key={role.id}>
                  <td className={`${CELL} pr-3 font-bold`}>{role.company}</td>
                  <td className={`${CELL} px-3`}>{role.title}</td>
                  <td className={`${CELL} whitespace-nowrap text-right`}>{role.dates}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="projects">
        <SectionHeading
          aside={
            <CustomLink
              href="/projects"
              className="text-sm font-normal text-brand-700 hover:text-brand"
            >
              all projects →
            </CustomLink>
          }
        >
          projects
        </SectionHeading>
        <div className="flex flex-col">
          {projects.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-0.5 border-b py-2.5"
            >
              <CustomLink
                href={`/projects#${project.id}`}
                className="font-bold underline-offset-4 hover:underline"
              >
                {project.name}
              </CustomLink>
              <AiAssistTag value={project.aiAssist} />
              <span className="col-span-full text-pretty text-muted-foreground">
                {project.blurb}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="links">
        <SectionHeading>links</SectionHeading>
        <div className="grid grid-cols-[110px_minmax(0,1fr)] gap-x-4 gap-y-1.5">
          {links.map((link) => (
            <Fragment key={link.url}>
              <span className="text-muted-foreground">{link.label}</span>
              {/* `anywhere` rather than `break-word`: only the former lets the URL
                  break mid-token when computing min-content, which is what stops
                  it widening the page. */}
              <CustomLink
                href={link.url}
                className="underline underline-offset-4 [overflow-wrap:anywhere] hover:text-brand"
              >
                {displayUrl(link.url)}
              </CustomLink>
            </Fragment>
          ))}
        </div>
      </Section>
    </Fragment>
  )
}
