export type City = {
  id: string
  cityName: string
  country: string
  coordinates: {
    lat: number
    lng: number
  }
  dish: {
    name: string
    description: string
    image: string
  }
}

const API_BASE = 'http://localhost:4000/api'

export async function fetchCities(): Promise<
  City[]
> {
  const res = await fetch(`${API_BASE}/cities`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch cities')
  }

  const result = await res.json()
  return result.data
}

export async function fetchCityById(
  id: string,
): Promise<City> {
  const res = await fetch(
    `${API_BASE}/cities/${id}`,
  )

  if (!res.ok) {
    throw new Error('City not found')
  }

  const result = await res.json()

  return result.data 
}
