import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../utils/cn"

const buttonVariants = cva(
  "ring-1 ring-inset inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gray-900/25 text-gray-800 ring-gray-400/25 dark:bg-gray-900/25 dark:text-gray-400 dark:ring-gray-400/25 hover:bg-gray-900/50 hover:text-gray-400 hover:ring-gray-400/50 dark:hover:bg-gray-900/50 dark:hover:text-gray-400 dark:hover:ring-gray-400/50",
        destructive: "bg-red-900/25 text-red-800 ring-red-400/25 dark:bg-red-900/25 dark:text-red-400 dark:ring-red-400/25 hover:bg-red-900/50 hover:text-red-400 hover:ring-red-400/50 dark:hover:bg-red-900/50 dark:hover:text-red-400 dark:hover:ring-red-400/50",
        secondary: "bg-secondary/45 text-primary ring-secondary/45 dark:bg-secondary/45 dark:text-primary dark:ring-secondary/45 hover:bg-secondary/50 hover:text-primary hover:ring-secondary/50 dark:hover:bg-secondary/50 dark:hover:text-primary dark:hover:ring-secondary/50",
        outline: "bg-transparent text-gray-800 ring-gray-800/25 dark:text-gray-400 dark:ring-gray-400/25 hover:text-gray-400 dark:hover:text-gray-400",
        ghost: "bg-transparent text-gray-800 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-400",
        link: "bg-transparent text-gray-800 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-400",
        red: "bg-red-900/25 text-red-800 ring-red-400/25 dark:bg-red-900/25 dark:text-red-400 dark:ring-red-400/25 hover:bg-red-900/50 hover:text-red-400 hover:ring-red-400/50 dark:hover:bg-red-900/50 dark:hover:text-red-400 dark:hover:ring-red-400/50",
        green: "bg-green-900/25 text-green-800 ring-green-400/25 dark:bg-green-900/25 dark:text-green-400 dark:ring-green-400/25 hover:bg-green-900/50 hover:text-green-400 hover:ring-green-400/50 dark:hover:bg-green-900/50 dark:hover:text-green-400 dark:hover:ring-green-400/50",
        blue: "bg-blue-900/25 text-blue-800 ring-blue-400/25 dark:bg-blue-900/25 dark:text-blue-400 dark:ring-blue-400/25 hover:bg-blue-900/50 hover:text-blue-400 hover:ring-blue-400/50 dark:hover:bg-blue-900/50 dark:hover:text-blue-400 dark:hover:ring-blue-400/50",
        yellow: "bg-yellow-900/25 text-yellow-800 ring-yellow-400/25 dark:bg-yellow-900/25 dark:text-yellow-400 dark:ring-yellow-400/25 hover:bg-yellow-900/50 hover:text-yellow-400 hover:ring-yellow-400/50 dark:hover:bg-yellow-900/50 dark:hover:text-yellow-400 dark:hover:ring-yellow-400/50",
        black: "bg-black/25 text-black ring-black/25 dark:bg-black/25 dark:text-black dark:ring-black/25 hover:bg-black/50 hover:text-black hover:ring-black/50 dark:hover:bg-black/50 dark:hover:text-black dark:hover:ring-black/50",
        pink: "bg-pink-900/25 text-pink-800 ring-pink-400/25 dark:bg-pink-900/25 dark:text-pink-400 dark:ring-pink-400/25 hover:bg-pink-900/50 hover:text-pink-400 hover:ring-pink-400/50 dark:hover:bg-pink-900/50 dark:hover:text-pink-400 dark:hover:ring-pink-400/50",
        purple: "bg-purple-900/25 text-purple-800 ring-purple-400/25 dark:bg-purple-900/25 dark:text-purple-400 dark:ring-purple-400/25 hover:bg-purple-900/50 hover:text-purple-400 hover:ring-purple-400/50 dark:hover:bg-purple-900/50 dark:hover:text-purple-400 dark:hover:ring-purple-400/50",
        orange: "bg-orange-900/25 text-orange-800 ring-orange-400/25 dark:bg-orange-900/25 dark:text-orange-400 dark:ring-orange-400/25 hover:bg-orange-900/50 hover:text-orange-400 hover:ring-orange-400/50 dark:hover:bg-orange-900/50 dark:hover:text-orange-400 dark:hover:ring-orange-400/50",
        gray: "bg-gray-900/25 text-gray-800 ring-gray-400/25 dark:bg-gray-900/25 dark:text-gray-400 dark:ring-gray-400/25 hover:bg-gray-900/50 hover:text-gray-400 hover:ring-gray-400/50 dark:hover:bg-gray-900/50 dark:hover:text-gray-400 dark:hover:ring-gray-400/50",
        cyan: "bg-cyan-900/25 text-cyan-800 ring-cyan-400/25 dark:bg-cyan-900/25 dark:text-cyan-400 dark:ring-cyan-400/25 hover:bg-cyan-900/50 hover:text-cyan-400 hover:ring-cyan-400/50 dark:hover:bg-cyan-900/50 dark:hover:text-cyan-400 dark:hover:ring-cyan-400/50",
        teal: "bg-teal-900/25 text-teal-800 ring-teal-400/25 dark:bg-teal-900/25 dark:text-teal-400 dark:ring-teal-400/25 hover:bg-teal-900/50 hover:text-teal-400 hover:ring-teal-400/50 dark:hover:bg-teal-900/50 dark:hover:text-teal-400 dark:hover:ring-teal-400/50",
        lime: "bg-lime-900/25 text-lime-800 ring-lime-400/25 dark:bg-lime-900/25 dark:text-lime-400 dark:ring-lime-400/25 hover:bg-lime-900/50 hover:text-lime-400 hover:ring-lime-400/50 dark:hover:bg-lime-900/50 dark:hover:text-lime-400 dark:hover:ring-lime-400/50",
        emerald: "bg-emerald-900/25 text-emerald-800 ring-emerald-400/25 dark:bg-emerald-900/25 dark:text-emerald-400 dark:ring-emerald-400/25 hover:bg-emerald-900/50 hover:text-emerald-400 hover:ring-emerald-400/50 dark:hover:bg-emerald-900/50 dark:hover:text-emerald-400 dark:hover:ring-emerald-400/50",
        amber: "bg-amber-900/25 text-amber-800 ring-amber-400/25 dark:bg-amber-900/25 dark:text-amber-400 dark:ring-amber-400/25 hover:bg-amber-900/50 hover:text-amber-400 hover:ring-amber-400/50 dark:hover:bg-amber-900/50 dark:hover:text-amber-400 dark:hover:ring-amber-400/50",
        
        PostBackButton: "bg-green-900/25 text-green-800 ring-green-400/25 dark:bg-green-900/25 dark:text-green-400 dark:ring-green-400/25 hover:bg-green-900/50 hover:text-green-400 hover:ring-green-400/50 dark:hover:bg-green-900/50 dark:hover:text-green-400 dark:hover:ring-green-400/50",
        JokerBlueButton: "bg-blue-900/25 text-blue-800 ring-blue-400/25 dark:bg-blue-900/25 dark:text-blue-400 dark:ring-blue-400/25 hover:bg-blue-900/50 hover:text-blue-400 hover:ring-blue-400/50 dark:hover:bg-blue-900/50 dark:hover:text-blue-400 dark:hover:ring-blue-400/50",
        // discord button with the same style as PostBackButton but using the color "#5865F2"
        Discord: "bg-[#5865F2]/25 text-[#5865F2] ring-[#5865F2]/25 dark:bg-[#5865F2]/25 dark:text-[#5865F2] dark:ring-[#5865F2]/25 hover:bg-[#5865F2]/50 hover:text-[#5865F2] hover:ring-[#5865F2]/50 dark:hover:bg-[#5865F2]/50 dark:hover:text-[#5865F2] dark:hover:ring-[#5865F2]/50",

        success: "bg-green-500/25 text-green-500 ring-green-500/25 dark:bg-green-500/25 dark:text-green-500 dark:ring-green-500/25 hover:bg-green-500/50 hover:text-green-500 hover:ring-green-500/50 dark:hover:bg-green-500/50 dark:hover:text-green-500 dark:hover:ring-green-500/50",
        error: "bg-red-500/25 text-red-500 ring-red-500/25 dark:bg-red-500/25 dark:text-red-500 dark:ring-red-500/25 hover:bg-red-500/50 hover:text-red-500 hover:ring-red-500/50 dark:hover:bg-red-500/50 dark:hover:text-red-500 dark:hover:ring-red-500/50",
        warning: "bg-yellow-500/25 text-yellow-500 ring-yellow-500/25 dark:bg-yellow-500/25 dark:text-yellow-500 dark:ring-yellow-500/25 hover:bg-yellow-500/50 hover:text-yellow-500 hover:ring-yellow-500/50 dark:hover:bg-yellow-500/50 dark:hover:text-yellow-500 dark:hover:ring-yellow-500/50",
        info: "bg-blue-500/25 text-blue-500 ring-blue-500/25 dark:bg-blue-500/25 dark:text-blue-500 dark:ring-blue-500/25 hover:bg-blue-500/50 hover:text-blue-500 hover:ring-blue-500/50 dark:hover:bg-blue-500/50 dark:hover:text-blue-500 dark:hover:ring-blue-500/50",
        neutral: "bg-gray-500/25 text-gray-500 ring-gray-500/25 dark:bg-gray-500/25 dark:text-gray-500 dark:ring-gray-500/25 hover:bg-gray-500/50 hover:text-gray-500 hover:ring-gray-500/50 dark:hover:bg-gray-500/50 dark:hover:text-gray-500 dark:hover:ring-gray-500/50",

        zinc: "bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:bg-zinc-900/50 hover:text-zinc-400 hover:ring-zinc-400/50 dark:hover:bg-zinc-900/50 dark:hover:text-zinc-400 dark:hover:ring-zinc-400/50",
        rose: "bg-rose-900/25 text-rose-800 ring-rose-400/25 dark:bg-rose-900/25 dark:text-rose-400 dark:ring-rose-400/25 hover:bg-rose-900/50 hover:text-rose-400 hover:ring-rose-400/50 dark:hover:bg-rose-900/50 dark:hover:text-rose-400 dark:hover:ring-rose-400/50",
        sky: "bg-sky-900/25 text-sky-800 ring-sky-400/25 dark:bg-sky-900/25 dark:text-sky-400 dark:ring-sky-400/25 hover:bg-sky-900/50 hover:text-sky-400 hover:ring-sky-400/50 dark:hover:bg-sky-900/50 dark:hover:text-sky-400 dark:hover:ring-sky-400/50",
        violet: "bg-violet-900/25 text-violet-800 ring-violet-400/25 dark:bg-violet-900/25 dark:text-violet-400 dark:ring-violet-400/25 hover:bg-violet-900/50 hover:text-violet-400 hover:ring-violet-400/50 dark:hover:bg-violet-900/50 dark:hover:text-violet-400 dark:hover:ring-violet-400/50",
        
      },
      size: {
        default: "p-4 h-5 w-20 text-xs",
        sm: "h-6 w-20 p-5 text-xs",
        md: "h-8 w-24 p-5.5 text-md",
        lg: "h-10 w-26 p-6 text-lg",
        xlg: "h-16 w-28 p-6.5 text-2xl",
        icon: "h-9 w-9",
      },
      rounded: {
        default: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
