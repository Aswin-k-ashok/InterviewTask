import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import gigRoutes from './routes/gigRoutes.js'
import bodyparser from 'body-parser'

dotenv.config()

connectDB()

const app = express()
app.use(express.json())
app.use(morgan())

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.get('/', (req, res) => {
  res.send('API is live')
})

app.use('/api/gig', gigRoutes)

const PORT = process.env.PORT

app.listen(PORT, console.log(`server started on port ${PORT}`))
