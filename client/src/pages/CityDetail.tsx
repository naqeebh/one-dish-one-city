import { useParams } from 'react-router-dom'

export default function CityDetail() {
  const { slug } = useParams()

  return (
    <section>
      <h1 className="text-3xl font-bold capitalize">
        {slug}
      </h1>
      <p className="mt-2 text-neutral-600">
        Recipe details will load here.
      </p>
    </section>
  )
}
