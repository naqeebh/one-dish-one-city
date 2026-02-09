import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import { cities } from '../data/cities'

mapboxgl.accessToken =
  import.meta.env.VITE_MAPBOX_TOKEN

export default function Map() {
  const mapRef = useRef<HTMLDivElement | null>(
    null,
  )

  useEffect(() => {
    if (!mapRef.current) return

    // 1. Create the map instance
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [0, 20],
      zoom: 1.5,
      projection: 'mercator', // flat world
    })

    // 2. Add markers from city data
    cities.forEach((city) => {
      const marker = new mapboxgl.Marker()
        .setLngLat([
          city.coordinates.lng,
          city.coordinates.lat,
        ])
        .addTo(map)

      // 3. Handle marker click
      marker
        .getElement()
        .addEventListener('click', (e) => {
          e.stopPropagation()
          console.log('Clicked city:', city.name)
        })
    })

    // 4. Cleanup on unmount
    return () => map.remove()
  }, [])

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden">
      <div
        ref={mapRef}
        className="w-full h-full"
      />
    </div>
  )
}
