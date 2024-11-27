const express = require('express')
const path = require('path')
require('dotenv').config()
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./route/web')
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 3000
const hostname = process.env.HOSTNAME

// Config template engine 
configViewEngine(app)

// A simple SELECT query
connection.query(
  'SELECT * FROM Users u',
  function (err, results, fields) {
    console.log('>>> Result: ', results); // results contains rows returned by server 
  }
);

// route
app.use('/test', webRoutes)

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})