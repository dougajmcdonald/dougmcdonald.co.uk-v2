import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { Flourish } from '@components/Flourish'

export function Header() {
  return (
    <header className="flex w-full flex-col items-center justify-center gap-8 pt-20 pb-14 sm:gap-14">
      <Flourish />
      <div className="flex flex-col items-center justify-center gap-2 sm:gap-6">
        <Heading>Doug McDonald</Heading>
        <Text className="tracking-wide text-wrap">Product Designer & Design Engineer</Text>
      </div>
    </header>
  )
}
