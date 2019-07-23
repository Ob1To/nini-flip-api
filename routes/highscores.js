const express = require('express')
const router = express.Router()
const Score = require('../models/score')

//Getting Highscore
router.get('/', async (req, res) => {
    try {
        const highscore = await Score.find()
        res.json(highscore);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Getting top 3 sorted by highscore
router.get('/top3', async (req, res) => {
    try {
        let highscore = await Score.find({}, { "name": 1, "time": 1, "_id": 0 }).sort({"time": 1}).limit(3);
        res.json(highscore);
    } catch (error) {
        res.status(500).json({ message: error.message })
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
        res.status(400).json({ error: error.message })
    }
})

//Updating

//Deleting

router.delete('/:id', (req, res) => {

})


async function getHighscore(req, res, next) {
    let highscoreById
    try {
        score = await Score.findById(req.params.id)
        if (score == null) {
            return res.status(404).json({ message: 'cannot find highscore' })
        }
    } catch (err) {

    }

    res.highscore = highscore;
}

module.exports = router