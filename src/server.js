const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Config template engine
console.log(__dirname)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.render('sample')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})