import Map from '../components/Map'

export default function Home() {
  return (
    <section className="pt-3 pb-24">
      {/* Masthead */}
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="font-serif text-5xl md:text-7xl tracking-wide text-neutral-900">
          One Dish, One City
        </h1>

        <p className="mt-6 text-lg text-neutral-500 font-sans">
          Discover iconic dishes from cities
          around the world.
        </p>
      </div>

      {/* Space before map */}
      <div className="mt-16 max-w-7xl mx-auto px-6">
        <Map />
      </div>
    </section>
  )
}
