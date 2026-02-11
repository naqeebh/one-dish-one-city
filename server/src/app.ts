import express from 'express'
import cors from 'cors'
import citiesRouter from './routes/cities.ts'

const app = express()

app.set('etag', false)

app.use(cors())
app.use(express.json())

app.use('/api/cities', citiesRouter)

export default app
