const mongoose = require('mongoose')

const highscoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    highscoreDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Score', highscoreSchema)