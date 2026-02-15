import { useEffect, useState } from 'react'
import {
  fetchCities,
  type City,
} from '../api/cities'
import CityCard from '../components/CityCard'

export default function Cities() {
  const [cities, setCities] = useState<City[]>([])

  useEffect(() => {
    fetchCities().then((data) => setCities(data))
  }, [])

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="font-serif text-3xl mb-8">
          Cities
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      </div>
    </section>
  )
}
  