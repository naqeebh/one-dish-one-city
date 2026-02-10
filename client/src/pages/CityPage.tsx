import { useParams } from 'react-router-dom'
import { cities } from '../data/cities'

export default function CityPage() {
  // 1. Read the dynamic :id from the URL
  const { id } = useParams<{ id: string }>()

  // 2. Find the matching city from hardcoded data
  const city = cities.find((c) => c.id === id)

  // 3. Handle invalid / unknown city IDs
  if (!city) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-semibold">
          City not found
        </h1>
        <p className="mt-2 opacity-70">
          The city you’re looking for does not
          exist.
        </p>
        <a
          href="/"
          className="inline-block mt-6 underline opacity-80 hover:opacity-100"
        >
          ← Back to map
        </a>
      </div>
    )
  }

  // 4. Render city + dish details
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="px-6 py-10 border-b">
        <h1 className="text-4xl font-semibold tracking-tight">
          {city.name}
        </h1>
        <p className="mt-1 text-lg opacity-70">
          {city.country}
        </p>
      </header>

      {/* Content */}
      <main className="px-6 py-8 max-w-3xl">
        <section className="space-y-3">
          <h2 className="text-xl font-medium">
            Signature dish
          </h2>
          <p className="text-2xl">{city.dish}</p>
          <p className="opacity-70">
            A defining dish of {city.name}, loved
            by locals and visitors alike.
          </p>
        </section>

        {/* Actions */}
        <div className="mt-10">
          <a
            href="/"
            className="underline opacity-80 hover:opacity-100"
          >
            ← Back to map
          </a>
        </div>
      </main>
    </div>
  )
}
