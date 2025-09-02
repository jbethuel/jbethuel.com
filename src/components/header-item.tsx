export function HeaderItem(props: { isActive: boolean; label: string }) {
  const { label, isActive } = props

  return <span className={isActive ? "underline underline-offset-8" : ""}>{label}</span>
}
