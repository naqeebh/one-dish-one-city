// API helpers for CityDish endpoints

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ??
  'http://localhost:3000'

import { API_BASE_URL } from './api'

export async function getCities() {
  const res = await fetch(
    `${API_BASE_URL}/cities`,
  )

  if (!res.ok) {
    throw new Error('Failed to fetch cities')
  }

  return res.json()
}



