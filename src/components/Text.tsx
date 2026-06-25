import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface TextProps {
  children: React.ReactNode
  tone?: 'neutral' | 'subtle'
  weight?: 'regular' | 'medium' | 'strong'
  align?: 'left' | 'center' | 'right'
  size?: 'xs' | 'base' | 'sm' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
  as?: 'span' | 'p'
  className?: string
}

const textToneClasses = {
  neutral: ['text-primary-700'],
  subtle: ['text-primary-700'],
}

const textWeightClasses = {
  regular: ['font-normal'],
  medium: ['font-semibold'],
  strong: ['font-bold'],
}

const textAlignmentClasses = {
  left: ['text-left'],
  center: ['text-center'],
  right: ['text-right'],
}

const textSizeClasses = {
  xs: ['text-xs'],
  base: ['text-base'],
  sm: ['text-sm'],
  lg: ['text-lg'],
  xl: ['text-xl'],
  '2xl': ['text-2xl'],
  '3xl': ['text-3xl'],
  '4xl': ['text-4xl'],
  '5xl': ['text-5xl'],
  '6xl': ['text-6xl'],
}

export function Text({
  children,
  tone = 'neutral',
  weight = 'regular',
  align = 'left',
  size,
  as,
  className,
}: TextProps): ReactNode {
  const HtmlElement = as ? as : `span`

  const baseClasses = 'font-body'

  const toneClasses = textToneClasses[tone]
  const alignementClasses = textAlignmentClasses[align]
  const sizeClasses = textSizeClasses[size]
  const weightClasses = textWeightClasses[weight]

  const textClasses = twMerge(
    baseClasses,
    toneClasses,
    alignementClasses,
    sizeClasses,
    weightClasses,
  )

  return <HtmlElement className={twMerge(textClasses, className)}>{children}</HtmlElement>
}
