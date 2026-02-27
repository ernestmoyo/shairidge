import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'md', className, children, ...props },
    ref
  ) => {
    const variantStyles = {
      primary: 'bg-primary text-white hover:bg-[#243759]',
      secondary: 'bg-secondary text-white hover:bg-[#4a6180]',
      outline: 'border-[1.5px] border-primary text-primary hover:bg-primary hover:text-white',
    }

    const sizeStyles = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-7 py-3 text-base',
    }

    return (
      <button
        ref={ref}
        className={cn(
          'font-sans font-medium rounded-md transition-all duration-200',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
