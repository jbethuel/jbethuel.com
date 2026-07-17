export type BrandMarkProps = {
  label?: string
  showCursor?: boolean
}

export function BrandMark(props: BrandMarkProps) {
  const { label = "jbethuel", showCursor = true } = props

  return (
    <span className="inline-flex items-baseline font-bold">
      {label}
      {showCursor ? (
        <span
          aria-hidden
          className="ml-[3px] inline-block h-[0.85em] w-[0.5em] bg-brand animate-cursor-blink"
        />
      ) : null}
    </span>
  )
}
