import { Link } from "react-router-dom"
import type { City } from "../api/cities"

function getFlag(country: string) {
  const flags: Record<string, string> = {
    'United States': '🇺🇸',
    Mexico: '🇲🇽',
    Brazil: '🇧🇷',
    Portugal: '🇵🇹',
    Italy: '🇮🇹',
    'United Kingdom': '🇬🇧',
    Japan: '🇯🇵',
    Peru: '🇵🇪',
    Morocco: '🇲🇦',
    Lebanon: '🇱🇧',
    Pakistan: '🇵🇰',
    Thailand: '🇹🇭',
    Ethiopia: '🇪🇹',
    'Hong Kong': '🇭🇰',
  }

  return flags[country] ?? ''
}  

export default function CityCard({ city }: { city: City }) {
  return (
    <Link to={`/city/${city.id}`}>
      <article className="group">
        <img
          src={`/images/dishes/${city.dish.image}`}
          alt={city.dish.name}
          className="w-full h-auto rounded-lg"
        />

        <div className="mt-3">
          <h3 className="font-serif text-lg flex items-center justify-between">
            <span>
              {city.cityName}, {city.country}
            </span>
            <span className="ml-2">
              {getFlag(city.country)}
            </span>
          </h3>

          <p className="text-sm text-neutral-500">
            {city.dish.name}
          </p>
        </div>
      </article>
    </Link>
  )
}
