type HeadingProps = {
  children?: React.ReactNode
}

export function H1(props: HeadingProps) {
  return <h1 className="font-bold text-2xl">{props.children}</h1>
}

export function H2(props: HeadingProps) {
  return <h2 className="font-bold text-xl">{props.children}</h2>
}

export function H3(props: HeadingProps) {
  return <h3 className="font-bold text-lg">{props.children}</h3>
}

export function H4(props: HeadingProps) {
  return <h4 className="font-bold text-base">{props.children}</h4>
}

export function Blockquote(props: HeadingProps) {
  return <blockquote className="mt-6 border-l-2 pl-6 italic">{props.children}</blockquote>
}
