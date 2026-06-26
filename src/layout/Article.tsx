import type { ReactNode } from 'react'

export function Article({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <article className={`${className} my-12 flex max-w-3xl flex-col gap-8 px-8 sm:my-24 sm:gap-12`}>
      {children}
    </article>
  )
}
