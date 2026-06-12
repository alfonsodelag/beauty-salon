import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'jdls3x4j',
  dataset: 'production',
  apiVersion: '2026-06-12',
  useCdn: false,
})

// Category slugs that belong to AURA Beauty Salon
// Add new category slugs here when created in Sanity Studio
export const AURA_CATEGORIES = [
  'cabello',
  'nails',
  'unas',
  'pestanas',
  'rizos',
  'curly',
  'tratamientos',
  'color',
  'maquillaje',
  'skincare',
  'belleza',
]
