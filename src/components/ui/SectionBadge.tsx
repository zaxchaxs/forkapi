import { cn } from "@/utils/cn"

export default function SectionBadge({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <span className={cn("rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary", className)}>
            {children}
        </span>
    )
}