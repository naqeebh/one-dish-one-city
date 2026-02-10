import {
  useEffect,
  useRef,
  useState,
} from 'react'
import mapboxgl from 'mapbox-gl'
import {
  fetchCities,
  type City,
} from '../api/cities'

// Mapbox needs the access token BEFORE creating the map
mapboxgl.accessToken =
  import.meta.env.VITE_MAPBOX_TOKEN

export default function Map() {
  const mapRef = useRef<HTMLDivElement | null>(
    null,
  )

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!mapRef.current) return

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [0, 20],
      zoom: 1.5,
      projection: 'mercator',
    })

    fetchCities()
      .then((cities: City[]) => {
        cities.forEach((city) => {
          const popupHtml = `
            <div style="font-family:system-ui;font-size:14px;">
              <strong>${city.cityName}, ${city.country}</strong><br/>
              <span style="opacity:0.8">${city.dish.name}</span><br/>
              <a
                href="/city/${city.id}"
                style="display:inline-block;margin-top:6px;text-decoration:underline;"
              >
                View city →
              </a>
            </div>
          `

          const popup = new mapboxgl.Popup({
            offset: 16,
            closeButton: false,
          }).setHTML(popupHtml)

          new mapboxgl.Marker()
            .setLngLat([
              city.coordinates.lng,
              city.coordinates.lat,
            ])
            .setPopup(popup)
            .addTo(map)
        })
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))

    return () => map.remove()
  }, [])

  if (loading) {
    return (
      <div className="w-full h-[500px] flex items-center justify-center">
        Loading map…
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full h-[500px] flex items-center justify-center">
        Failed to load map data
      </div>
    )
  }

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden">
      <div
        ref={mapRef}
        className="w-full h-full"
      />
    </div>
  )
}
