const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { getNames } = require('../controllers/google.controller')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

// Setup static directory serve
app.use(express.static(publicDirectoryPath))

//routes
app.get('/torneo', getNames)



app.listen(3000, () => {
    console.log('Servidor all right')
})