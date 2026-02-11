import { Router } from 'express'
import { cities } from '../data/cities'

const router = Router()

// GET /api/cities
router.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    count: cities.length,
    data: cities,
  })
})

// GET /api/cities/:id
router.get('/:id', (req, res) => {
  const city = cities.find(
    (city) => city.id === req.params.id,
  )

  if (!city) {
    return res.status(404).json({
      success: false,
      message: 'City not found',
    })
  }

  res.status(200).json({
    success: true,
    data: city,
  })
})

export default router
