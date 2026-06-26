import type { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type HeadingLevel = 1 | 2 | 3 | 4
export type HeadingTag = `h${HeadingLevel}`

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel
  as?: HeadingTag
  children: ReactNode
}

export const headingLevelClasses: Record<HeadingLevel, readonly string[]> = {
  1: ['sm:text-6xl', 'text-4xl'],
  2: ['sm:text-3xl', 'text-2xl'],
  3: ['text-2xl'],
  4: ['text-base'],
}

const baseClasses = 'font-heading font-medium text-primary-800 tracking-tight'

export function Heading({ level = 1, as, children, ...rest }: HeadingProps) {
  const HtmlTag: HeadingTag = as ?? (`h${level}` as HeadingTag)

  const classes = twMerge(baseClasses, headingLevelClasses[level])

  return (
    <HtmlTag className={classes} {...rest}>
      {children}
      <span aria-hidden="true" className="text-accent">
        .
      </span>
    </HtmlTag>
  )
}
