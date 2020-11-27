const { GoogleSpreadsheet } = require('google-spreadsheet')

const credenciales = require('./json/credenciales.json')

let googleId = "1x1G4nKPQMRRlTCytBmwUQRQN09bJzj-rav7MRcdndsI"

async function accederGoogleSheet(){

    const document = new GoogleSpreadsheet(googleId)
    await document.useServiceAccountAuth(credenciales)
    await document.loadInfo()

    const sheet = document.sheetsByIndex[0]

    const registros = await sheet.getRows()

    return registros
}



module.exports = {
    accederGoogleSheet: accederGoogleSheet
}