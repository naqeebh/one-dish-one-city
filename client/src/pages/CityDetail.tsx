import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCityBySlug } from '../lib/api'
import type { CityDish } from '../types/cityDish'

export default function CityDetail() {
  const { slug } = useParams()
  const [city, setCity] =
    useState<CityDish | null>(null)
  const [error, setError] = useState<
    string | null
  >(null)

  useEffect(() => {
    if (!slug) return

    getCityBySlug(slug)
      .then(setCity)
      .catch(() => setError('City not found'))
  }, [slug])

  if (error) return <p>{error}</p>
  if (!city) return <p>Loading…</p>

  return (
    <section>
      <h1 className="text-3xl font-bold">
        {city.cityName}
      </h1>
      <p className="mt-2 text-neutral-600">
        {city.shortDescription}
      </p>
    </section>
  )
}
