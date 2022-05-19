const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('API is live')
})

app.get('/api/data', (req, res) => {
  res.json('data data is here')
})

app.listen(5000, console.log('server started'))
