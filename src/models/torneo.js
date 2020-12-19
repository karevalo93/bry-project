const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const torneoSchema = new mongoose.Schema({
        name: {
            type: String,
        },
        cuartos:[{
            player:{
                type: String,
            },
        }],
        semifinals:[{
            player:{
                type: String,
            }
        }],
        final: [{
            player:{
                type: String,
            }
        }]
},{
    timestamps: true,
})


const Torneo = mongoose.model('Torneo', torneoSchema)

module.exports = Torneo