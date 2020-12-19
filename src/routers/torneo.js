let googleSheet = require('../spreadsheet')
const express = require('express')
const Torneo = require('../models/torneo')
const bcrypt = require('bcrypt')
const router = new express.Router()


router.get('/index', async (req, res) => {
    try {
        res.render('index')
    } catch (error) {
        res.status(404).send(error)
    }
})

router.get('/torneo', async (req, res) => {
    try {
        sheet = await googleSheet.accederGoogleSheet()
        const array = []
        const arrayNames = []
    
        sheet.forEach(element => {
            array.push(element.name)
        });
    
        while (arrayNames.length < 4){
            arrayNames.push(array[Math.floor(Math.random() * array.length)])
        }

        console.log(arrayNames)

        res.render('torneo', {arrayNames})

    } catch (error) {
        res.status(400).send(error)
    }
})


router.get('/torneo/new', async (req, res) => {
    try {
    
        res.render('formName')
    } catch (error) {
        res.status(404).send(error)
    }
})

router.post('/torneo/create', async (req, res) => {
    try {
        console.log('NAME: ' + req.body.name)

        const t = new Torneo()
        
        t.name = req.body.name
        await t.save()
        // Redirigir a la pagina del torneo recien creado
        res.send()
    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports = router