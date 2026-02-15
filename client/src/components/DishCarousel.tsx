import { useRef } from 'react'
import type { City } from '../api/cities'
import { countryFlags } from '../utils/countryFlags'

type Props = {
  cities: City[]
}

export default function DishCarousel({
  cities,
}: Props) {
  const scrollRef = useRef<HTMLDivElement | null>(
    null,
  )

  const scroll = (
    direction: 'left' | 'right',
  ) => {
    if (!scrollRef.current) return

    const amount = 420

    scrollRef.current.scrollBy({
      left:
        direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="mt-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-serif text-stone-100 tracking-tight">
          Iconic Dishes
        </h2>

        <div className="flex gap-3">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-stone-600 text-stone-200 hover:bg-stone-800 transition"
            aria-label="Scroll left"
          >
            ←
          </button>

          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-stone-600 text-stone-200 hover:bg-stone-800 transition"
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scroll-smooth pb-2"
      >
        {cities.map((city) => (
          <div
            key={city.id}
            className="min-w-[280px] max-w-[280px] group cursor-pointer"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src={`/images/dishes/${city.dish.image}`}
                alt={city.dish.name}
                className="w-full h-[210px] object-cover group-hover:scale-105 transition duration-500"
                loading="lazy"
              />
            </div>

            {/* Caption */}
            <div className="mt-4">
              <p className="text-sm text-stone-400 flex items-center gap-2">
                <span>
                  {city.cityName}, {city.country}
                </span>
                <span>
                  {countryFlags[city.country]}
                </span>
              </p>

              <h3 className="text-lg text-stone-100 font-medium leading-snug">
                {city.dish.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
