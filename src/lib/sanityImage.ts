import { createImageUrlBuilder } from '@sanity/image-url'
import { sanityClient } from './sanityClient'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const builder = createImageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
