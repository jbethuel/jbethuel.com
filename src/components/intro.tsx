import { Fragment } from "react"
import { H1 } from "./mdx/Headings"

type IntroProps = {
  title: string
  subTitle?: string
}

export function Intro(props: IntroProps) {
  const { title, subTitle } = props

  return (
    <Fragment>
      <div className="text-center">
        <H1>{title}</H1>
        {subTitle ? <p className="font-light text-sm">{subTitle}</p> : null}
      </div>
      <hr className="mt-4 mb-4 border-2 rounded border-black dark:border-white" />
    </Fragment>
  )
}
