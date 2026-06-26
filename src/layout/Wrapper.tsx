import type { ReactNode } from 'react'

export function Wrapper({ children }: { children: ReactNode }) {
  return (
    <main className="bg-primary-100 border-t-primary-800 flex min-h-screen min-w-96 border-t-8">
      <section className="border-primary-200 mx-2 flex w-full flex-col items-center border border-b-0 sm:mx-12">
        {children}
      </section>
    </main>
  )
}
