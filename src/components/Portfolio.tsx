import { BalancedMasonryGrid as MasonryGrid, Frame } from '@masonry-grid/react'

export function Portfolio() {
  return (
    <section className="my-14 w-5xl">
      <MasonryGrid frameWidth={200} gap={10}>
        <Frame width={4} height={3}>
          <img src="https://picsum.photos/400/300" alt="Photo 1" />
        </Frame>
        <Frame width={1} height={1}>
          <img src="https://picsum.photos/200/200" alt="Photo 2" />
        </Frame>
        <Frame width={3} height={4}>
          <img src="https://picsum.photos/300/400" alt="Photo 3" />
        </Frame>
        <Frame width={3} height={4}>
          <img src="https://picsum.photos/300/400" alt="Photo 4" />
        </Frame>
        <Frame width={1} height={1}>
          <img src="https://picsum.photos/200/200" alt="Photo 5" />
        </Frame>
        <Frame width={4} height={3}>
          <img src="https://picsum.photos/400/300" alt="Photo 6" />
        </Frame>
        <Frame width={4} height={3}>
          <img src="https://picsum.photos/400/300" alt="Photo 1" />
        </Frame>
        <Frame width={1} height={1}>
          <img src="https://picsum.photos/200/200" alt="Photo 2" />
        </Frame>
        <Frame width={3} height={4}>
          <img src="https://picsum.photos/300/400" alt="Photo 3" />
        </Frame>
        <Frame width={3} height={4}>
          <img src="https://picsum.photos/300/400" alt="Photo 4" />
        </Frame>
        <Frame width={1} height={1}>
          <img src="https://picsum.photos/200/200" alt="Photo 5" />
        </Frame>
        <Frame width={4} height={3}>
          <img src="https://picsum.photos/400/300" alt="Photo 6" />
        </Frame>
      </MasonryGrid>
    </section>
  )
}
