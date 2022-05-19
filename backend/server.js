import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is live')
})

app.get('/api/data', (req, res) => {
  res.json('data data is here')
})

const PORT = process.env.PORT

app.listen(PORT, console.log('server started'))
