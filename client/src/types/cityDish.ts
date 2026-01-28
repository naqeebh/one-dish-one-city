export type Coordinates = {
  lng: number
  lat: number
}

export type CityDish = {
  _id?: string
  slug: string
  cityName: string
  countryName: string
  countryCode: string
  coordinates: Coordinates
  dishName: string
  heroImageUrl: string
  shortDescription: string
  ingredients: string[]
  steps: string[]
  videoUrls?: string[]
  attribution?: string
  createdAt?: string
  updatedAt?: string
}

