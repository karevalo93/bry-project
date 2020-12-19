const path = require('path')
const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const torneoRouter = require('./routers/torneo')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
// Setup static directory serve
app.use(express.static(publicDirectoryPath))
app.use(torneoRouter)


app.listen(port, () => {
    console.log('Server is up on port: ' + port)
})
