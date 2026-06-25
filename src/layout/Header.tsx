import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { Flourish } from '@components/Flourish'

export function Header() {
  return (
    <header className="flex w-full flex-col items-center justify-center gap-14 pt-20 pb-14">
      <Flourish />
      <div className="flex flex-col items-center justify-center gap-6">
        <Heading>Doug McDonald</Heading>
        <Text className="tracking-wide">Product Designer & Design Engineer</Text>
      </div>
    </header>
  )
}
