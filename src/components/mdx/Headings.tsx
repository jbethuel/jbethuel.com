import { Marker } from "../markdown"

type HeadingProps = {
  children?: React.ReactNode
}

export function H1(props: HeadingProps) {
  return (
    <h1 className="font-bold text-2xl leading-[1.3]">
      <Marker level={1} />
      {props.children}
    </h1>
  )
}

export function H2(props: HeadingProps) {
  return (
    <h2 className="border-b pb-2 font-bold text-lg">
      <Marker level={2} />
      {props.children}
    </h2>
  )
}

export function H3(props: HeadingProps) {
  return <h3 className="mt-2 font-bold text-base">{props.children}</h3>
}

export function H4(props: HeadingProps) {
  return <h4 className="font-bold">{props.children}</h4>
}

export function Blockquote(props: HeadingProps) {
  return <blockquote className="mt-6 border-l-2 pl-6 italic">{props.children}</blockquote>
}
