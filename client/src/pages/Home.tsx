import Map from '../components/Map'

export default function Home() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">
          Explore Cities
        </h1>
        <p className="text-neutral-600">
          Click a city on the map to discover its
          signature dish.
        </p>
      </header>

      <Map />
    </section>
  )
}
