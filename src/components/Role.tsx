import { Text } from '@components/Text'
import { Heading } from '@components/Heading'
import type { ReactNode } from 'react'

export function TimePoint() {
  return (
    <div className="border-primary-400 bg-primary-100 -ml-4 flex size-8 shrink-0 items-center justify-center rounded-full border-4 sm:-ml-6 sm:size-12">
      <div className="bg-primary-400 size-4 rounded-full sm:size-6"></div>
    </div>
  )
}

export interface RoleProps {
  title: string
  dates: string
  company: string
  industry?: string
  children: ReactNode
}

export function Role({ title, dates, company, industry, children }: RoleProps) {
  return (
    <section className="border-primary-400 flex border-l py-4 sm:py-8">
      <TimePoint />
      <div className="ml-4 flex flex-col sm:ml-6">
        <Heading level={3}>{title}</Heading>
        <Text tone="accent" size="sm" className="mt-1" weight="medium">
          {company}
          {industry && (
            <>
              {' '}
              · <span className="font-normal">{industry}</span>
            </>
          )}
        </Text>
        <Text tone="subtle" size="sm" className="mb-4">
          {dates}
        </Text>
        {children}
      </div>
    </section>
  )
}

// export function SubRole({ title, dates, company, children }: RoleProps) {
//   return (
//     <div className="ml-12 flex flex-col py-8">
//       <Heading level={3}>{title}</Heading>
//       <Text tone="accent" size="sm" className="mt-1" weight="medium">
//         {company}
//       </Text>
//       <Text tone="subtle" size="sm" className="mb-4">
//         {dates}
//       </Text>
//       {children}
//     </div>
//   )
// }
