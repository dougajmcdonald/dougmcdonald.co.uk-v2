import type { ReactNode } from 'react'

export function Wrapper({ children }: { children: ReactNode }) {
  return (
    <main className="bg-primary-100 border-t-primary-800 flex min-h-screen border-t-8">
      <section className="border-primary-200 mx-12 flex w-full flex-col border border-b-0">
        {children}
      </section>
    </main>
  )
}
