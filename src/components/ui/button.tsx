import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'
import { Slot } from 'radix-ui'

const buttonVariants = cva(
  'inline-flex shrink-0 items-center justify-center gap-2 border-2 border-border text-center text-sm font-bold outline-none focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-neo-cyan hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground shadow-neo hover:bg-secondary/90',
        outline: 'bg-card text-card-foreground shadow-neo hover:bg-muted',
        ghost: 'border-transparent hover:bg-muted',
        link: 'border-transparent underline underline-offset-4 hover:decoration-2',
        destructive: 'bg-destructive text-black shadow-neo',
      },
      size: {
        default: 'min-h-11 px-5 py-2.5',
        xs: 'min-h-8 px-2 py-1 text-xs',
        sm: 'min-h-10 px-3 py-2 text-xs',
        lg: 'min-h-13 px-7 py-3.5 text-base',
        icon: 'size-11',
        'icon-xs': 'size-8',
        'icon-sm': 'size-10',
        'icon-lg': 'size-13',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'button'
  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button }
