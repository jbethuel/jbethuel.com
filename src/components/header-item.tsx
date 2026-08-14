export function HeaderItem(props: { isActive: boolean; label: string }) {
  const { label, isActive } = props

  return (
    <span
      className={
        isActive
          ? // Offset-8 was tuned for a single-row header; on the wrapped mobile row
            // it detaches from the word and reads as a border on the header itself.
            "text-brand underline underline-offset-4 sm:underline-offset-8 decoration-brand decoration-2"
          : ""
      }
    >
      {label}
    </span>
  )
}
