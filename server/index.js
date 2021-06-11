const express = require('express')
const bodyParser = require('body-parser');
const db = require('../db/database.js')
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
const HOST = "localhost";
const API_SERVICE_URL = "https://jsonplaceholder.typicode.com";

const app = express()
const port = 8080

//serving static files
app.use(express.static('client/dist'))
//logging
app.use(morgan('dev'));

// Info GET endpoint
// app.get('/info', (req, res, next) => {
//   res.send('This is a proxy service which proxies to Billing and Account APIs.');
// });

app.get('/images/:itemId' , async (req, res) => {
  let itemId = req.params.itemId;
  //db.generateFakeData()

  db.findOne(itemId)
  .then((data) => {
    res.send(data)
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://${HOST}:${port}`)
})