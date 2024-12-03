import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/functions"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: [
          "bg-gradient-to-b from-white/[0.08] to-transparent",
          "text-white shadow-input backdrop-blur-sm",
          "border border-white/[0.08]",
          "hover:border-white/[0.12] hover:from-white/[0.12]",
        ],
        primary: [
          "bg-gradient-to-r from-primary to-primary-foreground",
          "text-white shadow-xl shadow-primary/25",
          "hover:shadow-primary/30 hover:brightness-110",
          "border border-white/[0.08]",
        ],
        secondary: [
          "bg-gradient-to-b from-neutral-800 to-neutral-900",
          "text-neutral-50 shadow-lg shadow-black/20",
          "border border-white/[0.08]",
          "hover:border-white/[0.12] hover:from-neutral-700",
        ],
        outline: [
          "border border-neutral-700 bg-black/40",
          "text-neutral-300 backdrop-blur-sm",
          "hover:border-neutral-600 hover:bg-black/50",
        ],
        ghost: [
          "text-neutral-300 backdrop-blur-sm",
          "hover:bg-white/[0.08] hover:text-white",
        ],
        link: [
          "text-neutral-300 underline-offset-4",
          "hover:text-white hover:underline",
        ],
        glow: [
          "relative bg-gradient-to-r from-primary to-primary-foreground",
          "text-white shadow-xl",
          "before:absolute before:inset-0 before:-z-10",
          "before:bg-inherit before:blur-xl before:opacity-60",
          "hover:before:opacity-70",
        ],
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
