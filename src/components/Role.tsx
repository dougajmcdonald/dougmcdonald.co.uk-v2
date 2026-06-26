import { Text } from '@components/Text'
import { Heading } from '@components/Heading'
import type { ReactNode } from 'react'

export function TimePoint() {
  return (
    <div className="border-primary-400 bg-primary-100 -ml-6 flex size-12 shrink-0 items-center justify-center rounded-full border-4">
      <div className="bg-primary-400 size-6 rounded-full"></div>
    </div>
  )
}

export interface RoleProps {
  title: string
  dates: string
  company: string
  children: ReactNode
}

export function Role({ title, dates, company, children }: RoleProps) {
  return (
    <section className="border-primary-400 flex border-l py-8">
      <TimePoint />
      <div className="ml-6 flex flex-col">
        <Heading level={3}>{title}</Heading>
        <Text tone="accent" size="sm" className="mt-1" weight="medium">
          {company}
        </Text>
        <Text tone="subtle" size="sm" className="mb-4">
          {dates}
        </Text>
        {children}
      </div>
    </section>
  )
}

export function SubRole({ title, dates, company, children }: RoleProps) {
  return (
    <div className="my-8 ml-12 flex flex-col">
      <Heading level={3}>{title}</Heading>
      <Text tone="accent" size="sm" className="mt-1" weight="medium">
        {company}
      </Text>
      <Text tone="subtle" size="sm" className="mb-4">
        {dates}
      </Text>
      {children}
    </div>
  )
}
