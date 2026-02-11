import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
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

  const navigate = useNavigate()

  useEffect(() => {
    if (!mapRef.current) return
    if (mapInstanceRef.current) return

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

        // Calm editorial interaction
        map.dragRotate.disable()
        map.touchZoomRotate.disableRotation()
        map.doubleClickZoom.disable()
        map.scrollZoom.setWheelZoomRate(1 / 600)
        map.dragPan.disable()

        const bounds = new mapboxgl.LngLatBounds()

        map.on('load', () => {
          map.setFog({
            range: [-1, 2],
            color: '#f8fafc',
            'high-color': '#e2e8f0',
            'space-color': '#ffffff',
          })

          cities.forEach((city) => {
            const { lng, lat } = city.coordinates

            // Stable marker (no scaling)
            const el =
              document.createElement('div')

            el.className = `
              w-4 h-4
              rounded-full
              bg-orange-500
              shadow-lg
              ring-2 ring-white/70
              cursor-pointer
            `

            const popup = new mapboxgl.Popup({
              offset: 15,
              closeButton: false,
              closeOnClick: false,
            }).setHTML(`
              <div style="font-family: serif; padding: 6px 10px;">
                <div style="font-weight: 600;">${city.name}</div>
                <div style="font-size: 13px; color: #6b7280;">
                  ${city.dish}
                </div>
              </div>
            `)

            const marker = new mapboxgl.Marker({
              element: el,
              anchor: 'center',
            })
              .setLngLat([lng, lat])
              .addTo(map)

            // Hover preview
            marker
              .getElement()
              .addEventListener(
                'mouseenter',
                () => {
                  popup
                    .setLngLat([lng, lat])
                    .addTo(map)
                },
              )

            marker
              .getElement()
              .addEventListener(
                'mouseleave',
                () => {
                  popup.remove()
                },
              )

            // Click → navigate
            marker
              .getElement()
              .addEventListener('click', () => {
                navigate(`/city/${city.id}`)
              })

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
  }, [navigate])

  return (
    <div
      ref={mapRef}
      className="w-full h-[700px] rounded-3xl shadow-xl overflow-hidden bg-blue-50/30"
    />
  )
}
