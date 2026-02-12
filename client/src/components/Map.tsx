import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import mapboxgl from 'mapbox-gl'
import {
  fetchCities,
  type City,
} from '../api/cities'

mapboxgl.accessToken =
  import.meta.env.VITE_MAPBOX_TOKEN

// 🌍 Country → Flag map
const countryFlags: Record<string, string> = {
  Portugal: '🇵🇹',
  Japan: '🇯🇵',
  Italy: '🇮🇹',
  Mexico: '🇲🇽',
  USA: '🇺🇸',
  Brazil: '🇧🇷',
  'United Kingdom': '🇬🇧',
  'South Africa': '🇿🇦',
  India: '🇮🇳',
  Australia: '🇦🇺',
  Germany: '🇩🇪',
  Nigeria: '🇳🇬',
}

// 🎴 Hover Card Creator
function createHoverCard(city: City) {
  const root = document.createElement('div')

  const wrapper = document.createElement('div')
  wrapper.className =
    'w-[330px] bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-2xl text-white'

  // IMAGE
  const img = document.createElement('img')
  img.src = city.dish.image
  img.alt = city.dish.name
  img.className =
    'w-full h-[200px] object-cover block'

  // CONTENT
  const content = document.createElement('div')
  content.className = 'px-6 py-5 text-center'

  // Location
  const location = document.createElement('h3')
  location.className =
    'text-lg text-neutral-400 tracking-wide mb-3 font-serif'

  location.textContent = `${city.cityName}, ${
    city.country
  } ${countryFlags[city.country] ?? ''}`

  // Dish Name
  const dish = document.createElement('p')
  dish.className =
    'text-2xl font-semibold font-serif'

  dish.textContent = city.dish.name

  content.appendChild(location)
  content.appendChild(dish)

  wrapper.appendChild(img)
  wrapper.appendChild(content)
  root.appendChild(wrapper)

  return root
}

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
      const cities = await fetchCities()

      const map = new mapboxgl.Map({
        container: mapRef.current!,
        style: 'mapbox://styles/mapbox/light-v11',
        projection: 'mercator',
        center: [10, 20],
        zoom: 1.8,
        minZoom: 1.5,
        maxZoom: 4,
      })

      mapInstanceRef.current = map

      const bounds = new mapboxgl.LngLatBounds()

      map.on('load', () => {
        const hoverPopup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
          offset: 25,
          maxWidth: '360px',
        })

        cities.forEach((city) => {
          const { lng, lat } = city.coordinates

          // 🔘 Marker Element
          const el = document.createElement('div')
          el.className =
            'w-[14px] h-[14px] rounded-full bg-orange-500 cursor-pointer'

          new mapboxgl.Marker({
            element: el,
            anchor: 'center',
          })
            .setLngLat([lng, lat])
            .addTo(map)

          // 🖱 Hover Show Card
          el.addEventListener(
            'mouseenter',
            () => {
              const card = createHoverCard(city)

              hoverPopup
                .setLngLat([lng, lat])
                .setDOMContent(card)
                .addTo(map)
            },
          )

          el.addEventListener(
            'mouseleave',
            () => {
              hoverPopup.remove()
            },
          )

          // 🖱 Click Navigate
          el.addEventListener('click', () => {
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
    }

    initMap()

    return () => {
      mapInstanceRef.current?.remove()
      mapInstanceRef.current = null
    }
  }, [navigate])

  return (
    <div
      ref={mapRef}
      className="w-full h-[700px] rounded-3xl overflow-hidden shadow-xl"
    />
  )
}
