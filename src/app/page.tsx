import { CustomLink } from "@/components/custom-link"
import { Intro } from "@/components/intro"
import { Fragment } from "react"

const links = [
  {
    title: "Github",
    url: "https://github.com/jbethuel",
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/bethueldelacruz",
  },
  {
    title: "Resume",
    url: "https://drive.google.com/file/d/1M6GfiYlY8FgeENOvhf1nAqmEpnoJCsnn",
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
      <Intro title="home" subTitle="I like tech, gaming, fitness, music, movies, books." />
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
