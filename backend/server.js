import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import connectDB from './config/db.js'
import gigRoutes from './routes/gigRoutes.js'

dotenv.config()

connectDB()

const app = express()
app.use(express.json())
app.use(morgan())

app.get('/', (req, res) => {
  res.send('API is live')
})

app.use('/api/gig', gigRoutes)

const PORT = process.env.PORT

app.listen(PORT, console.log(`server started on port ${PORT}`))
