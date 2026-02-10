import { Router } from 'express'
import { cities } from '../data/cities.ts'

const router = Router()

// GET /api/cities
router.get('/', (_req, res) => {
  res.json(cities)
})

// GET /api/cities/:id
router.get('/:id', (req, res) => {
  const city = cities.find(
    (city) => city.id === req.params.id,
  )

  if (!city) {
    return res
      .status(404)
      .json({ message: 'City not found' })
  }

  res.json(city)
})

export default router
