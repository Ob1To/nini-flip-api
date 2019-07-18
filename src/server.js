import 'dotenv/config';

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('db connected'))

app.use(express.json())

const highscoreRouter = require('./../routes/highscore')
app.use('/highscore', highscoreRouter)

// app.get('/', (req, res) => {
//   res.send('Routes in Express.js');
// });

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);

// console.log('Hello Node.js project.');