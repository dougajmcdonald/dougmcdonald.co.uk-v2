import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { Flourish } from '@components/Flourish'

export function Header() {
  return (
    <header className="flex w-full flex-col items-center justify-center gap-6 pt-8 pb-6 sm:gap-14 sm:pt-20 sm:pb-14">
      <Flourish />
      <div className="flex flex-col items-center justify-center gap-2 sm:gap-6">
        <Heading>Doug McDonald</Heading>
        <Text className="tracking-wide text-wrap">Product Designer & Design Engineer</Text>
      </div>
    </header>
  )
}
