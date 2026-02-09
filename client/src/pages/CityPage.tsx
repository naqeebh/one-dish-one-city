import { useParams } from 'react-router-dom'

export default function CityPage() {
  const { id } = useParams()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">
        City: {id}
      </h1>
      <p className="mt-2 opacity-70">
        Dish details coming soon.
      </p>
    </div>
  )
}
