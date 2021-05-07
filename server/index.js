const express = require('express')
const bodyParser = require('body-parser');
const db = require('../db/database.js')

const app = express()
const port = 8080

app.use(express.static('client/dist'))

app.get('/images', async (req, res) => {

  db.find()
  .then((data) => {
    res.send(data[1])
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})