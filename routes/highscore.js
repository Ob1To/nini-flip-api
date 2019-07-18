const express = require('express')
const router = express.Router()
const Score = require('../models/score')

//Getting Highscore
router.get('/', async (req, res) => {
    try {
        const highscore = await Score.find()
        res.json(highscore);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Adding a single score
router.post('/', async (req, res) => {
    const score = new Score({
        name: req.body.name,
        time: req.body.time
    })

    try {
        const newScore = await score.save()
        res.status(201).json(newScore)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//Updating

//Deleting

module.exports = router