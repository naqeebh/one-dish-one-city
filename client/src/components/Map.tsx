import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
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
  const mapInstanceRef =
    useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current) return
    if (mapInstanceRef.current) return // Prevent StrictMode double init

    async function initMap() {
      try {
        const cities: City[] = await fetchCities()

        const map = new mapboxgl.Map({
          container: mapRef.current!,
          style:
            'mapbox://styles/mapbox/light-v11',
          projection: 'mercator',
          center: [10, 20],
          zoom: 1.8,
          minZoom: 1.5,
          maxZoom: 4,
        })

        mapInstanceRef.current = map

        // Calm interactions (editorial feel)
        map.dragRotate.disable()
        map.touchZoomRotate.disableRotation()
        map.doubleClickZoom.disable()
        map.scrollZoom.setWheelZoomRate(1 / 600)

        const bounds = new mapboxgl.LngLatBounds()

        map.on('load', () => {
          // Subtle softness
          map.setFog({
            range: [-1, 2],
            color: '#f8fafc',
            'high-color': '#e2e8f0',
            'space-color': '#ffffff',
          })

          cities.forEach((city) => {
            const { lng, lat } = city.coordinates

            // Premium ring marker
            const el =
              document.createElement('div')

            el.className = `
              w-4 h-4
              rounded-full
              bg-orange-500
              shadow-lg
              ring-2 ring-white/70
              transition-all duration-200
              hover:scale-125
              hover:shadow-xl
              cursor-pointer
            `

            new mapboxgl.Marker(el)
              .setLngLat([lng, lat])
              .addTo(map)

            bounds.extend([lng, lat])
          })

          if (!bounds.isEmpty()) {
            map.fitBounds(bounds, {
              padding: 120,
              maxZoom: 3,
              duration: 900,
            })
          }
        })
      } catch (error) {
        console.error('Error loading map:', error)
      }
    }

    initMap()

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <div
      ref={mapRef}
      className="w-full h-[700px] rounded-3xl shadow-xl overflow-hidden bg-blue-50/30"
    />
  )  
}
