import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

// Routes will go here
// app.use("/api/cities", cityRoutes)

// Connect DB & start server
mongoose
  .connect(process.env.MONGO_URI!)
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
