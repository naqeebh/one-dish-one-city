import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  fetchCityById,
  type City,
} from '../api/cities'

export default function CityDetail() {
  const { id } = useParams<{ id: string }>()
  const [city, setCity] = useState<City | null>(
    null,
  )
  const [error, setError] = useState<
    string | null
  >(null)

  useEffect(() => {
    if (!id) return

    fetchCityById(id)
      .then(setCity)
      .catch(() => setError('City not found'))
  }, [id])

  if (error) {
    return (
      <p className="text-sm text-red-600">
        {error}
      </p>
    )
  }

  if (!city) {
    return (
      <p className="text-sm text-neutral-500">
        Loading city…
      </p>
    )
  }

  return (
    <section>
      <h1 className="text-3xl font-bold">
        {city.cityName}
      </h1>

      <p className="mt-2 text-neutral-600">
        {city.country}
      </p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">
          {city.dish.name}
        </h2>

        <p className="mt-2 text-neutral-600">
          {city.dish.description}
        </p>

        <img
          src={`/images/dishes/${city.dish.image}`}
          alt={city.dish.name}
          className="mt-4 rounded-md"
        />
      </div>
    </section>
  )

}