import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken =
  import.meta.env.VITE_MAPBOX_TOKEN

export default function Map() {
  const mapRef = useRef<HTMLDivElement | null>(
    null,
  )

  useEffect(() => {
    if (!mapRef.current) return

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [0, 20],
      zoom: 1.5,
      projection: 'mercator', // 👈 THIS makes it flat
    })

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
