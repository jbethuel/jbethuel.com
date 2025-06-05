import { CustomLink } from "@/components/custom-link"
import { Intro } from "@/components/intro"
import { Fragment } from "react"

const links = [
  {
    title: "Github",
    url: "https://github.com/jbethuel",
  },
  {
    title: "Resume",
    url: "https://docs.google.com/document/d/1c5yM4XufLEsmg98Y-6h-mQx4z3lSBXwlytOvqcm44nw",
  },
  {
    title: "Strava",
    url: "https://www.strava.com/athletes/143729414",
  },
  {
    title: "Goodreads",
    url: "https://www.goodreads.com/user/show/174496084-joseph-bethuel",
  },
  {
    title: "Letterboxd",
    url: "https://boxd.it/9J28N",
  },
]

export default function LinksPage() {
  return (
    <Fragment>
      <Intro title="home" subTitle="stuff that i do" />
      <section>
        {links.map((link, i) => (
          <CustomLink key={i} href={link.url}>
            <span key={i} className="mb-4 flex items-center">
              <span>{link.title}</span>
              <span className="mx-1">-</span>
              <span className="underline underline-offset-4 decoration-gray-700">{link.url}</span>
            </span>
          </CustomLink>
        ))}
      </section>
    </Fragment>
  )
}
