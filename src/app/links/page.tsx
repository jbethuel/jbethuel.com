import { CustomLink } from "@/components/custom-link"
import { Intro } from "@/components/intro"
import { Fragment } from "react"

const links = [
  {
    title: "Github - https://github.com/jbethuel",
    url: "https://github.com/jbethuel",
  },
  {
    title: "Goodreads - https://www.goodreads.com/user/show/174496084-joseph-bethuel",
    url: "https://www.goodreads.com/user/show/174496084-joseph-bethuel",
  },
  {
    title: "Letterboxd - https://boxd.it/9J28N",
    url: "https://boxd.it/9J28N",
  },
  {
    title: "Strava - https://www.strava.com/athletes/143729414",
    url: "https://www.strava.com/athletes/143729414",
  },
]

export default function LinksPage() {
  return (
    <Fragment>
      <Intro
        title="Links"
        subTitle="I don't use socmed that much, but feel free to checkout what things I do outside work. 😅"
      />
      <section>
        {links.map((link, i) => (
          <CustomLink key={i} href={link.url}>
            <span key={i} className="mb-4 flex items-center">
              <span className="underline underline-offset-4">{link.title}</span>
            </span>
          </CustomLink>
        ))}
      </section>
    </Fragment>
  )
}
