import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

// Load env from server/.env
dotenv.config()


// Safety check (fail fast if env is broken)
if (!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined')
}

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

// Routes (enable once ready)
// import cityRoutes from './routes/cities.js'
// app.use('/cities', cityRoutes)

// Connect DB & start server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB connected')

    app.listen(PORT, () => {
      console.log(
        `🚀 Server running on http://localhost:${PORT}`,
      )
    })
  })
  .catch((error) => {
    console.error(
      '❌ MongoDB connection error:',
      error,
    )
  })
