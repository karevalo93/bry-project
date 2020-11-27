let googleSheet = require('../spreadsheet')

const getNames =  async (req, res) => {
    
    registros = await googleSheet.accederGoogleSheet()

    res.render('torneo', {registros})
    
}

module.exports = {
    getNames: getNames
}