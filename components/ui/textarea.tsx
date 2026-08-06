import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/20 aria-invalid:ring-destructive/20 aria-invalid:border-destructive flex field-sizing-content min-h-28 w-full rounded-2xl border border-[hsl(4_27%_22%_/_0.1)] bg-[hsl(24_60%_97%)] px-4 py-3 text-base shadow-none transition-[border-color,box-shadow] duration-200 outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
