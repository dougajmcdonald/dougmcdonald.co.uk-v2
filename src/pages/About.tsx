import { Text } from '@components/Text'
import { Heading } from '@components/Heading'
import { Article } from '@layout/Article'

export function About() {
  return (
    <Article>
      <Heading level={2}>My story</Heading>
      <section className="flex flex-col gap-4">
        <Text>
          I&apos;ve always loved technology, from the first Amstrad my dad brought home from work to
          the advancements in AI today and this love is what drove my early career.
        </Text>
        <Text>
          At the age of ten I was writing BASIC programs, creating databases and designing websites.
          I&apos;m pretty sure my parents got tired of testing my “What do you know about Arsenal?”
          quiz, so when I said I wanted to do website design for a job, they guided me down the
          slightly more pragmatic route of studying computer science in university first.
        </Text>
        <Text>
          After uni, I worked my way up through various technical roles, everything from hardware
          support, to software development. I spent the next 15 years learning everything I could,
          new languages, tools, techniques and crucially, the softer skills and leadership qualities
          needed to succeed in software.
        </Text>
        <Text>
          At some point, my original desire to “design websites” came back and bit me, which caused
          me to explore technical routes that allowed me to do that and I entered the world of User
          Experience and Product.
        </Text>
        <Text>
          This seemed like the perfect combination of design, collaboration, strategic thinking. The
          intersection between product and engineering is where I find my most natural fit, I love
          strategising and leading product ideas and direction, but I also love designing the
          solutions and turning them into code.
        </Text>
        <Text>
          Having worked now in the product design side for five+ years, I was missing getting as
          hands on with the code as I used to and whilst I&apos;ve always contributed to code over
          that period, it wasn&apos;t my primary role.
        </Text>
        <Text>
          Only in the last few years, have I found companies carving out distinct roles for design
          engineers and product engineers which for me is exactly the niche that both motivates me
          most, and that which I fit into perfectly.
        </Text>
      </section>
    </Article>
  )
}
