import 'dotenv/config';
import cors from 'cors';

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('db connected'))

app.use(express.json());
app.use(cors());

const highscoreRouter = require('../routes/highscores')
app.use('/highscores', highscoreRouter)

// app.get('/', (req, res) => {
//   res.send('Routes in Express.js');
// });

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);

// console.log('Hello Node.js project.');