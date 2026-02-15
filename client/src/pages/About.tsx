export default function About() {
  return (
    <section className="max-w-5xl mx-auto pt-22 space-y-20">
      {/* HERO */}
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-serif tracking-tight">
          About One Dish, One City
        </h1>
        <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
          A curated culinary journey through the
          world’s most iconic cities — explored
          one dish at a time.
        </p>
      </header>

      {/* STORY */}
      <section className="space-y-4 max-w-3xl">
        <h2 className="text-2xl font-semibold">
          The Idea
        </h2>
        <p className="text-neutral-300 leading-relaxed">
          Every city has a dish that tells its
          story. From the streets of Bangkok to
          the markets of Lagos, food reflects
          history, migration, culture, and
          identity.
        </p>
        <p className="text-neutral-300 leading-relaxed">
          <span className="italic">
            One Dish, One City
          </span>{' '}
          explores the world through these
          defining meals — pairing each city with
          a single iconic dish and presenting it
          through an interactive global map.
        </p>
      </section>

      {/* DISH GRID */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Iconic Dishes
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="/images/dishes/pizza-margherita.jpg"
            alt="Pizza Margherita"
            className="rounded-lg object-cover h-40 w-full"
          />
          <img
            src="/images/dishes/ramen.jpg"
            alt="Ramen"
            className="rounded-lg object-cover h-40 w-full"
          />
          <img
            src="/images/dishes/tacos-al-pastor.jpg"
            alt="Tacos al Pastor"
            className="rounded-lg object-cover h-40 w-full"
          />
          <img
            src="/images/dishes/feijoada.jpg"
            alt="Feijoada"
            className="rounded-lg object-cover h-40 w-full"
          />
          <img
            src="/images/dishes/pad-thai.jpg"
            alt="Pad Thai"
            className="rounded-lg object-cover h-40 w-full"
          />
          <img
            src="/images/dishes/jollof-rice.jpg"
            alt="Jollof Rice"
            className="rounded-lg object-cover h-40 w-full"
          />
        </div>

        <p className="text-neutral-400 text-sm">
          Each city is represented by a single
          defining dish.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="space-y-4 max-w-3xl">
        <h2 className="text-2xl font-semibold">
          How It Works
        </h2>
        <p className="text-neutral-300 leading-relaxed">
          The experience begins with an
          interactive world map. Each pin
          represents a city and its signature
          dish. Selecting a city reveals its
          culinary story — the ingredients,
          cultural roots, and local significance
          behind the meal.
        </p>
        <p className="text-neutral-300 leading-relaxed">
          The project blends geography,
          storytelling, and food culture into a
          visual journey designed to feel
          editorial, immersive, and intuitive.
        </p>
      </section>

      {/* MAP PREVIEW */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Interactive Map
        </h2>

        <img
          src="/images/about/map-preview.jpg"
          alt="One Dish One City map preview"
          className="rounded-xl border border-neutral-800"
        />

        <p className="text-neutral-400 max-w-2xl">
          Explore the world through cuisine. Each
          location reveals a city and its culinary
          identity through a single defining dish.
        </p>
      </section>

      {/* TECH STACK */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Built With
        </h2>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-neutral-400 max-w-2xl">
          <li>React + TypeScript</li>
          <li>Vite</li>
          <li>Mapbox GL JS</li>
          <li>Node.js + Express</li>
          <li>REST API</li>
          <li>Tailwind CSS</li>
        </ul>

        <p className="text-neutral-500 text-sm">
          Designed and developed as a full-stack
          portfolio project.
        </p>
      </section>

      {/* ARCHITECTURE */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Architecture
        </h2>

        <div className="space-y-4 max-w-3xl">
          <p className="text-neutral-300 leading-relaxed">
            One Dish, One City follows a simple
            full-stack architecture that connects
            a React frontend with a lightweight
            Node/Express API. City and dish data
            power the global map, interactive
            previews, and editorial detail pages.
          </p>

          <p className="text-neutral-300 leading-relaxed">
            When a user explores the map, the
            client requests city data from the
            API. The server returns structured
            city and dish information, which the
            interface renders as pins, popups, and
            city pages.
          </p>

          <p className="text-neutral-400 text-sm">
            Frontend: React, TypeScript, Mapbox GL
            JS Backend: Node.js, Express REST API
            Styling: Tailwind CSS
          </p>
        </div>
      </section>

      {/* VISION */}
      <section className="space-y-4 max-w-3xl">
        <h2 className="text-2xl font-semibold">
          Vision
        </h2>
        <p className="text-neutral-300 leading-relaxed">
          The long-term vision is to expand the
          map into a global culinary atlas —
          featuring more cities, deeper stories,
          cultural context, and community-curated
          dishes.
        </p>
        <p className="text-neutral-300 leading-relaxed">
          Ultimately, the project celebrates how
          food connects people across borders —
          one dish, one city at a time.
        </p>
      </section>

      {/* SIGNATURE */}
      <footer className="pt-10 border-t border-neutral-800 flex items-center justify-between text-sm text-neutral-500">
      </footer>
    </section>
  )
}
