import 'dotenv/config';

const express = require('express')
const app = express()
// const mongoose = require('mongoose')

app.get('/', (req, res) => {
  res.send('Routes in Express.js');
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);

// console.log('Hello Node.js project.');

// console.log(process.env.MY_SECRET);