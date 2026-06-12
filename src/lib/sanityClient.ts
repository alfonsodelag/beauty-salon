import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'jdls3x4j',
  dataset: 'production',
  apiVersion: '2026-06-12',
  useCdn: false,
})

export const AURA_PROJECT = 'aura'
