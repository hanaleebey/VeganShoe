const express = require('express')
const app = express()
const port = 3000

//routes
app.get('/', (req, res) => {
  res.send('Hello NODE API')
})

app.listen(3001, () => {
  console.log('Node API app is running on port 3001')
})