import { Text } from '@components/Text'
import { Heading } from '@components/Heading'
import { Article } from '@layout/Article'

export function Home() {
  return (
    <Article className="gap-12">
      <Heading level={2}>It's nice to meet you</Heading>
      <section className="flex flex-col gap-4">
        <Text>
          I&apos;m Doug, and I help organisations create and solve product and engineering problems
          through deep expertise, collaboration and open, honest communication.
        </Text>
        <Text>
          I&apos;ve spent the last 20 years in technology, building & designing software products,
          leading teams, and solving problems in complex environments. From fast paced start-ups,
          regulated fintech or security focussed defence consultancies, it's fair to say I&apos;ve
          seen a lot over the years.
        </Text>
        <Text>
          {' '}
          This shapes my experience and passions, my core mantra is{' '}
          <span className="font-bold">design for change</span> as I believe this applies universally
          across design, engineering and organisations.
        </Text>
      </section>
    </Article>
  )
}
