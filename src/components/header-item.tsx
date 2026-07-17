export function HeaderItem(props: { isActive: boolean; label: string }) {
  const { label, isActive } = props

  return (
    <span
      className={
        isActive ? "text-brand underline underline-offset-8 decoration-brand decoration-2" : ""
      }
    >
      {label}
    </span>
  )
}
