import type { ReactNode } from 'react'

export function Article({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <article className={`${className} mt-24 flex max-w-3xl flex-col gap-12 px-8`}>
      {children}
    </article>
  )
}
