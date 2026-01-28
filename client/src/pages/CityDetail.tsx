import { useParams } from 'react-router-dom'

export default function CityDetail() {
  const { slug } = useParams()

  return (
    <main style={{ padding: 24 }}>
      <h1>City: {slug}</h1>
    </main>
  )
}
