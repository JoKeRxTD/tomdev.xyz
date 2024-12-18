import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../utils/cn"

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-1.5 py-1 text-xs font-semibold transition-colors focus:outline-none ring-1 ring-inset",
  {
    variants: {
      variant: {
        // Default
        default: "bg-zinc-700/25 text-zinc-800 ring-zinc-700/25 dark:bg-zinc-700/25 dark:text-zinc-400 dark:ring-zinc-700/25",
        secondary: "bg-secondary/25 text-secondary ring-secondary/25 dark:bg-secondary/25 dark:text-secondary dark:ring-secondary/25",
        destructive: "bg-red-700/25 text-red-700 ring-red-700/25 dark:bg-red-700/25 dark:text-red-700 dark:ring-red-700/25",
        outline: "bg-transparent text-gray-700 ring-gray-700/25 dark:text-gray-700 dark:ring-gray-700/25",

        // Repo
        RepoArchived: "bg-orange-700/25 text-orange-700 ring-orange-700/25 dark:bg-orange-700/25 dark:text-orange-700 dark:ring-orange-700/25",
        
        // Languages
        Typescript: "bg-blue-900/75 text-blue-400 ring-blue-400/25 dark:bg-blue-900/25 dark:text-blue-400 dark:ring-blue-400/25",
        Python: "bg-blue-700/25 text-blue-700 ring-blue-700/25 dark:bg-blue-700/25 dark:text-blue-700 dark:ring-blue-700/25",
        Lua: "bg-yellow-700/25 text-yellow-700 ring-yellow-700/25 dark:bg-yellow-700/25 dark:text-yellow-700 dark:ring-yellow-700/25",
        Javascript: "bg-yellow-700/25 text-yellow-700 ring-yellow-700/25 dark:bg-yellow-700/25 dark:text-yellow-700 dark:ring-yellow-700/25",
        HTML: "bg-red-700/25 text-red-700 ring-red-700/25 dark:bg-red-700/25 dark:text-red-700 dark:ring-red-700/25",
        CSS: "bg-blue-700/25 text-blue-700 ring-blue-700/25 dark:bg-blue-700/25 dark:text-blue-700 dark:ring-blue-700/25",
        md: "bg-black/25 text-white ring-white/25 dark:bg-black/25 dark:text-white dark:ring-white/25",
        Vue:"bg-green-700/25 text-green-700 ring-green-700/25 dark:bg-green-700/25 dark:text-green-700 dark:ring-green-700/25",
        Ejs: "bg-green-700/25 text-green-700 ring-green-700/25 dark:bg-green-700/25 dark:text-green-700 dark:ring-green-700/25",
        Readme: "bg-black/25 text-white ring-white/25 dark:bg-black/25 dark:text-white dark:ring-white/25",
        Rd: "bg-black/25 text-white ring-white/25 dark:bg-black/25 dark:text-white dark:ring-white/25",
        Svelte: "bg-red-700/25 text-red-700 ring-red-700/25 dark:bg-red-700/25 dark:text-red-700 dark:ring-red-700/25",
        MDX: "bg-black/25 text-white ring-white/25 dark:bg-black/25 dark:text-white dark:ring-white/25",
        PHP: "bg-blue-700/25 text-blue-700 ring-blue-700/25 dark:bg-blue-700/25 dark:text-blue-700 dark:ring-blue-700/25",
        SCSS:"bg-pink-700/25 text-pink-700 ring-pink-700/25 dark:bg-pink-700/25 dark:text-pink-700 dark:ring-pink-700/25",
        Handlebars: "bg-yellow-700/25 text-yellow-700 ring-yellow-700/25 dark:bg-yellow-700/25 dark:text-yellow-700 dark:ring-yellow-700/25",
        Markdown: "bg-black/25 text-white ring-white/25 dark:bg-black/25 dark:text-white dark:ring-white/25",
        Rust: "bg-black/25 text-white ring-white/25 dark:bg-black/25 dark:text-white dark:ring-white/25",
        Null: "bg-black/25 text-white ring-white/25 dark:bg-black/25 dark:text-white dark:ring-white/25",
        NextJS: "bg-black/25 text-white ring-white/25 dark:bg-black/25 dark:text-white dark:ring-white/25",
        ShadCn: "bg-black/25 text-white ring-white/25 dark:bg-black/25 dark:text-white dark:ring-white/25",
        DiscordJS: "bg-blue-700/25 text-blue-700 ring-blue-700/25 dark:bg-blue-700/25 dark:text-blue-700 dark:ring-blue-700/25",
        NodeJS: "bg-green-700/25 text-green-700 ring-green-700/25 dark:bg-green-700/25 dark:text-green-700 dark:ring-green-700/25",
        FiveM: "bg-orange-700/25 text-orange-700 ring-orange-700/25 dark:bg-orange-700/25 dark:text-orange-700 dark:ring-orange-700/25",
        TailwindCSS: "bg-cyan-700/25 text-cyan-700 ring-cyan-700/25 dark:bg-cyan-700/25 dark:text-cyan-700 dark:ring-cyan-700/25",
        NextUI: "bg-black/25 text-white ring-white/25 dark:bg-black/25 dark:text-white dark:ring-white/25",
        // "Discord", "Hosting",  "ESX", "QBCore", "Servers", "Domains", "VPS", "ReactJS"
        Discord: "bg-blue-700/25 text-blue-700 ring-blue-700/25 dark:bg-blue-700/25 dark:text-blue-700 dark:ring-blue-700/25",
        Hosting: "bg-amber-700/25 text-amber-700 ring-amber-700/25 dark:bg-amber-700/25 dark:text-amber-700 dark:ring-amber-700/25",
        ESX: "bg-yellow-700/25 text-yellow-700 ring-yellow-700/25 dark:bg-yellow-700/25 dark:text-yellow-700 dark:ring-yellow-700/25",
        QBCore: "bg-red-700/25 text-red-700 ring-red-700/25 dark:bg-red-700/25 dark:text-red-700 dark:ring-red-700/25",
        Servers: "bg-orange-700/25 text-orange-700 ring-orange-700/25 dark:bg-orange-700/25 dark:text-orange-700 dark:ring-orange-700/25",
        Domains: "bg-green-700/25 text-green-700 ring-green-700/25 dark:bg-green-700/25 dark:text-green-700 dark:ring-green-700/25",
        VPS: "bg-black/25 text-white ring-white/25 dark:bg-black/25 dark:text-white dark:ring-white/25",
        ReactJS: "bg-yellow-700/25 text-yellow-700 ring-yellow-700/25 dark:bg-yellow-700/25 dark:text-yellow-700 dark:ring-yellow-700/25",

        // Status
        online: "bg-green-700/25 text-green-700 ring-green-700/25 dark:bg-green-700/25 dark:text-green-700 dark:ring-green-700/25",
        offline: "bg-gray-700/25 text-gray-700 ring-gray-700/25 dark:bg-gray-700/25 dark:text-gray-700 dark:ring-gray-700/25",
        dnd: "bg-red-700/25 text-red-700 ring-red-700/25 dark:bg-red-700/25 dark:text-red-700 dark:ring-red-700/25",
        idle: "bg-yellow-700/25 text-yellow-700 ring-yellow-700/25 dark:bg-yellow-700/25 dark:text-yellow-700 dark:ring-yellow-700/25",

        //! Colors
        red: "bg-red-700/25 text-red-700 ring-red-700/25 dark:bg-red-700/25 dark:text-red-700 dark:ring-red-700/25",
        green: "bg-green-700/25 text-green-700 ring-green-700/25 dark:bg-green-700/25 dark:text-green-700 dark:ring-green-700/25",
        blue: "bg-blue-700/25 text-blue-700 ring-blue-700/25 dark:bg-blue-700/25 dark:text-blue-700 dark:ring-blue-700/25",
        yellow: "bg-yellow-700/25 text-yellow-700 ring-yellow-700/25 dark:bg-yellow-700/25 dark:text-yellow-700 dark:ring-yellow-700/25",
        black: "bg-black/25 text-white ring-white/25 dark:bg-black/25 dark:text-white dark:ring-white/25",
        pink: "bg-pink-700/25 text-pink-700 ring-pink-700/25 dark:bg-pink-700/25 dark:text-pink-700 dark:ring-pink-700/25",
        purple: "bg-purple-700/25 text-purple-700 ring-purple-700/25 dark:bg-purple-700/25 dark:text-purple-700 dark:ring-purple-700/25",
        orange: "bg-orange-700/25 text-orange-700 ring-orange-700/25 dark:bg-orange-700/25 dark:text-orange-700 dark:ring-orange-700/25",
        gray: "bg-gray-700/25 text-gray-700 ring-gray-700/25 dark:bg-gray-700/25 dark:text-gray-700 dark:ring-gray-700/25",
        cyan: "bg-cyan-700/25 text-cyan-700 ring-cyan-700/25 dark:bg-cyan-700/25 dark:text-cyan-700 dark:ring-cyan-700/25",
        teal: "bg-teal-700/25 text-teal-700 ring-teal-700/25 dark:bg-teal-700/25 dark:text-teal-700 dark:ring-teal-700/25",
        lime: "bg-lime-700/25 text-lime-700 ring-lime-700/25 dark:bg-lime-700/25 dark:text-lime-700 dark:ring-lime-700/25",
        emerald: "bg-emerald-700/25 text-emerald-700 ring-emerald-700/25 dark:bg-emerald-700/25 dark:text-emerald-700 dark:ring-emerald-700/25",
        amber: "bg-amber-700/25 text-amber-700 ring-amber-700/25 dark:bg-amber-700/25 dark:text-amber-700 dark:ring-amber-700/25",




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
