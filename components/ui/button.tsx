import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 text-xs font-medium uppercase tracking-[0.08em] transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-[hsl(340_65%_65%)] text-white hover:-translate-y-0.5 hover:bg-[hsl(340_70%_58%)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border border-[hsl(4_27%_22%_/_0.1)] bg-transparent text-foreground hover:-translate-y-0.5 hover:border-[hsl(340_65%_65%)] hover:bg-[hsl(340_80%_92%)]',
        secondary:
          'bg-[hsl(340_80%_92%)] text-foreground hover:-translate-y-0.5 hover:bg-[hsl(340_70%_85%)]',
        ghost:
          'hover:bg-[#f8f3ef] hover:text-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-5 has-[>svg]:px-4',
        sm: 'h-9 gap-1.5 px-4 text-[10px] has-[>svg]:px-3',
        lg: 'h-12 px-6 has-[>svg]:px-5',
        icon: 'size-11',
        'icon-sm': 'size-9',
        'icon-lg': 'size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
