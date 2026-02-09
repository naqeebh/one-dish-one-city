import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import { cities } from '../data/cities'

// Mapbox needs the access token BEFORE creating the map
mapboxgl.accessToken =
  import.meta.env.VITE_MAPBOX_TOKEN

export default function Map() {
  // Ref that will hold the div Mapbox mounts into
  const mapRef = useRef<HTMLDivElement | null>(
    null,
  )

  useEffect(() => {
    // Safety check: do nothing if the div is not ready yet
    if (!mapRef.current) return

    // 1. Create the Mapbox map instance
    const map = new mapboxgl.Map({
      container: mapRef.current, // DOM node
      style: 'mapbox://styles/mapbox/dark-v11', // map style
      center: [0, 20], // world view
      zoom: 1.5,
      projection: 'mercator', // flat world projection
    })

    // 2. Add markers + popups from city data
    cities.forEach((city) => {
      // Popup HTML (kept as a variable to avoid syntax issues)
      const popupHtml = `<div style="font-family:system-ui;font-size:14px;">
          <strong>${city.name}, ${city.country}</strong><br/>
          <span style="opacity:0.8">${city.dish}</span>
        </div>`

      // Create popup
      const popup = new mapboxgl.Popup({
        offset: 16,
        closeButton: false,
      }).setHTML(popupHtml)

      // Create marker and attach popup
      new mapboxgl.Marker()
        .setLngLat([
          city.coordinates.lng,
          city.coordinates.lat,
        ])
        .setPopup(popup)
        .addTo(map)
    })

    // 3. Cleanup on component unmount
    // This prevents memory leaks when React removes the component
    return () => map.remove()
  }, [])

  // 4. Render the container Mapbox will use
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden">
      <div
        ref={mapRef}
        className="w-full h-full"
      />
    </div>
  )
}
