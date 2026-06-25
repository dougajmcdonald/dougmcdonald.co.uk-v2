import { Heading } from '@components/Heading'
import { Text } from '@components/Text'

export function Header() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-6 pt-20 pb-14">
      <Heading>Doug McDonald</Heading>
      <Text className="tracking-wide">Product Designer & Design Engineer</Text>
    </section>
  )
}
