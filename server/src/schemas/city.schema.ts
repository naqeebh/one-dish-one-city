import { z } from 'zod'

export const dishSchema = z.object({
  name: z.string(),
  description: z.string(),
  image: z.string(),
})

export const coordinatesSchema = z.object({
  lat: z.number(),
  lng: z.number(),
})

export const citySchema = z.object({
  id: z.string(),
  cityName: z.string(),
  country: z.string(),
  coordinates: coordinatesSchema,
  dish: dishSchema,
})

export const citiesSchema = z.array(citySchema)

export type City = z.infer<typeof citySchema>
