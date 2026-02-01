import { Router } from 'express'
import City from '../models/City'

const router = Router()

// GET /api/cities
router.get('/', async (_req, res) => {
  const cities = await City.find()
  res.json(cities)
})

// GET /api/cities/:slug
router.get('/:slug', async (req, res) => {
  const city = await City.findOne({
    slug: req.params.slug,
  })

  if (!city) {
    return res
      .status(404)
      .json({ message: 'City not found' })
  }

  res.json(city)
})

export default router
