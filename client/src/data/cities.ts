export type CityPin = {
  id: string
  name: string
  country: string
  dish: string
  coordinates: { lng: number; lat: number }
}

export const cities: CityPin[] = [
  {
    id: 'lisbon',
    name: 'Lisbon',
    country: 'Portugal',
    dish: 'Pastel de Nata',
    coordinates: { lng: -9.1393, lat: 38.7223 },
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    dish: 'Ramen',
    coordinates: { lng: 139.6503, lat: 35.6762 },
  },
  {
    id: 'naples',
    name: 'Naples',
    country: 'Italy',
    dish: 'Pizza Margherita',
    coordinates: { lng: 14.2681, lat: 40.8518 },
  },
]
