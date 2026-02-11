import {
  useEffect,
  useRef,
  useState,
} from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import {
  fetchCities,
  type City,
} from '../api/cities'

mapboxgl.accessToken =
  import.meta.env.VITE_MAPBOX_TOKEN

export default function Map() {
  const mapRef = useRef<HTMLDivElement | null>(
    null,
  )
  const mapInstance = useRef<mapboxgl.Map | null>(
    null,
  )

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!mapRef.current) return
    if (mapInstance.current) return // prevent double init (StrictMode)

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [0, 20],
      zoom: 1.5,
    })

    mapInstance.current = map

    // ✅ Force flat map after style loads
    map.on('style.load', () => {
      map.setProjection('mercator')
    })

    map.on('load', async () => {
      try {
        const cities: City[] = await fetchCities()
        console.log('Fetched cities:', cities)

        cities.forEach((city) => {
          if (
            !city.coordinates ||
            typeof city.coordinates.lng !==
              'number' ||
            typeof city.coordinates.lat !==
              'number'
          ) {
            console.warn(
              'Invalid coordinates:',
              city,
            )
            return
          }

          const popup = new mapboxgl.Popup({
            offset: 16,
            closeButton: false,
          }).setHTML(`
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
          `)

          new mapboxgl.Marker()
            .setLngLat([
              city.coordinates.lng,
              city.coordinates.lat,
            ])
            .setPopup(popup)
            .addTo(map)
        })

        setLoading(false)
      } catch (err) {
        console.error('Fetch error:', err)
        setError(true)
        setLoading(false)
      }
    })

    return () => {
      map.remove()
      mapInstance.current = null
    }
  }, [])

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
      <div
        ref={mapRef}
        className="w-full h-full"
      />

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white">
          Loading map…
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-red-400">
          Failed to load map data
        </div>
      )}
    </div>
  )
}
