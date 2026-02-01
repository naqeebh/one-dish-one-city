import mongoose from 'mongoose'
import City from './models/City'
import { cities } from './data/cities'

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI!)
    await City.deleteMany()
    await City.insertMany(cities)
    console.log('🌱 Cities seeded successfully')
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

seed()
