import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/functions"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: [
          "bg-gradient-to-r from-neutral-800/50 to-neutral-900/50",
          "text-neutral-50 backdrop-blur-md",
          "border border-white/[0.08]",
          "shadow-[0_2px_4px_rgb(0_0_0/0.4)]",
        ],
        primary: [
          "bg-gradient-to-r from-primary/20 to-primary-foreground/20",
          "text-primary-foreground backdrop-blur-md",
          "border border-primary/20",
          "shadow-[0_2px_4px_rgb(0_0_0/0.4)]",
        ],
        secondary: [
          "bg-gradient-to-r from-neutral-400/20 to-neutral-500/20",
          "text-neutral-200 backdrop-blur-md",
          "border border-neutral-500/20",
        ],
        outline: [
          "border border-neutral-700",
          "text-neutral-400",
          "hover:border-neutral-600",
        ],
        success: [
          "bg-gradient-to-r from-emerald-500/20 to-emerald-600/20",
          "text-emerald-400 backdrop-blur-md",
          "border border-emerald-500/20",
        ],
        destructive: [
          "bg-gradient-to-r from-red-500/20 to-red-600/20",
          "text-red-400 backdrop-blur-md",
          "border border-red-500/20",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
