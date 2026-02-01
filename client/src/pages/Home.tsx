import { useEffect, useState } from 'react'
import { getCities } from '../lib/api'

type City = {
  _id: string
  cityName: string
  slug: string
  country: string
  lat: number
  lng: number
  dishName: string
  dishDescription: string
  imageUrl?: string
}

export default function Home() {
  const [cities, setCities] = useState<City[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<
    string | null
  >(null)

  useEffect(() => {
    getCities()
      .then((data) => {
        setCities(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to load cities')
        setLoading(false)
      })
  }, [])

  return (
    <section className="space-y-4">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">
          Explore Cities
        </h1>
        <p className="text-neutral-600">
          Click a city on the map to discover its
          signature dish.
        </p>
      </header>

      {loading && (
        <p className="text-sm text-neutral-500">
          Loading cities…
        </p>
      )}

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}

      {!loading && !error && (
        <p className="text-sm text-neutral-500">
          {cities.length} cities loaded
        </p>
      )}
    </section>
  )
}
