import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
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
      <div className="text-center py-20 text-neutral-400">
        {error}
      </div>
    )
  }

  if (!city) {
    return (
      <div className="text-center py-20 text-neutral-400">
        Loading city…
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Top Row */}
      <div className="flex items-center justify-between mb-16">
        <Link
          to="/"
          className="text-sm text-neutral-400 hover:text-white transition"
        >
          ← Back to Map
        </Link>

        <p className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
          One Dish One City
        </p>
      </div>

      {/* City Title */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-serif text-white">
          {city.cityName}
        </h1>
        <p className="mt-4 text-neutral-400">
          {city.country}
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT — IMAGE */}
        <div>
          <img
            src={`/images/dishes/${city.dish.image}`}
            alt={city.dish.name}
            className="w-full h-[500px] object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* RIGHT — STORY + RECIPE */}
        <div className="space-y-12">
          {/* Story */}
          <section>
            <h2 className="text-2xl font-serif mb-6 text-white">
              The Story of {city.dish.name}
            </h2>

            <div className="space-y-5 text-neutral-300 leading-relaxed text-[17px]">
              <p>{city.dish.description}</p>

              <p>
                This dish reflects the culture,
                resilience, and everyday life of{' '}
                {city.cityName}. From street
                vendors to family kitchens, it
                remains a culinary symbol of the
                city.
              </p>

              <p>
                Today, it continues to connect
                generations through flavour and
                tradition.
              </p>
            </div>
          </section>

          {/* Recipe */}
          <section>
            <h2 className="text-2xl font-serif mb-6 text-white">
              How to Make {city.dish.name}
            </h2>

            <div className="space-y-6 text-neutral-300 text-[16px] leading-relaxed">
              <div>
                <h3 className="uppercase text-xs tracking-widest text-neutral-500 mb-3">
                  Ingredients
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Primary ingredient</li>
                  <li>Spices & seasoning</li>
                  <li>Oil or butter</li>
                  <li>Optional garnish</li>
                </ul>
              </div>

              <div>
                <h3 className="uppercase text-xs tracking-widest text-neutral-500 mb-3">
                  Instructions
                </h3>
                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    Prepare all ingredients.
                  </li>
                  <li>
                    Cook according to tradition.
                  </li>
                  <li>
                    Plate carefully and serve
                    warm.
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
