import mongoose from 'mongoose'
import dotenv from 'dotenv'
import City from './models/city.ts'
import { cities } from './data/cities.ts'


dotenv.config()

async function seed() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI!,
    )
    console.log('✅ MongoDB connected')

    await City.deleteMany()
    console.log('🧹 Existing cities removed')

    await City.insertMany(cities)
    console.log('🌱 Cities seeded')

    process.exit(0)
  } catch (error) {
    console.error('❌ Seeding failed', error)
    process.exit(1)
  }
}

seed()
