import app from './app.ts'

const PORT = 4000

app.listen(PORT, () => {
  console.log(
    `🚀 API running on http://localhost:${PORT}`,
  )
})
