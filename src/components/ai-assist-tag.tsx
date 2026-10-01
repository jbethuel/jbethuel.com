import { AI_ASSIST_TAG, type AiAssist } from "@/lib/projects"
import { cn } from "@/lib/utils"

export function AiAssistTag(props: { value: AiAssist }) {
  const { label, className } = AI_ASSIST_TAG[props.value]

  return (
    <span
      className={cn(
        "whitespace-nowrap rounded-md px-2 py-px text-xs font-normal leading-normal",
        className,
      )}
    >
      {label}
    </span>
  )
}
