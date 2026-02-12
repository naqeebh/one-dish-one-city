import { useEffect, useState } from 'react'
import {
  useParams,
  useNavigate,
} from 'react-router-dom'
import { fetchCityById } from '../api/cities'
import type { City } from '../api/cities'

export default function CityDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [city, setCity] = useState<City | null>(
    null,
  )
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!id) return

    fetchCityById(id)
      .then((data) => {
        setCity(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf8f2] flex items-center justify-center">
        <p>Loading city...</p>
      </div>
    )
  }

  if (error || !city) {
    return (
      <div className="min-h-screen bg-[#faf8f2] flex items-center justify-center">
        <p>City not found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50 text-black">
      <div className="max-w-6xl mx-auto px-8 py-20">
  
        {/* Back Button */}
        <div className="mb-12">
          <button
            onClick={() => navigate("/")}
            className="text-sm hover:underline"
          >
            ← Back to Map
          </button>
        </div>
  
        {/* Brand */}
        <div className="text-center mb-6">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-500">
            One Dish One City
          </p>
        </div>
  
        {/* Title */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-6xl font-serif tracking-tight">
              {city.cityName}
            </h1>
            <span className="text-4xl">🇩🇪</span>
          </div>
        </div>
  
        {/* Hero Image */}
        <div className="mb-24">
          <img
            src={`/images/dishes/${city.dish.image}`}
            alt={city.dish.name}
            className="w-full h-[520px] object-cover"
          />
        </div>
  
        {/* Cultural Section */}
        <div className="max-w-3xl mx-auto text-center mb-28">
          <h2 className="text-3xl font-serif mb-8">
            The Story of {city.dish.name}
          </h2>
  
          <p className="text-lg leading-relaxed mb-6">
            Currywurst is more than a street snack — it is a symbol
            of post-war Berlin resilience.
          </p>
        </div>
  
      </div>
    </div>
  )
}  
