import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { Article } from '@layout/Article'
import { Portfolio } from '@components/Portfolio'

export function Work() {
  return (
    <>
      <Article>
        <Heading level={2}>My work</Heading>
        <section className="flex flex-col gap-4">
          <Text>
            A lot of my work is historically behind NDA, below are some small examples I can share.
          </Text>
        </section>
      </Article>
      <Portfolio />
    </>
  )
}
