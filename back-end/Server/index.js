const express = require('express');
const mongoose = require('mongoose');

//Queries
const { addReel } = require('./Queries/addReel.js');
const { getReel } = require('./Queries/getReel.js');

//DB and Server start-up
const app = express();
const dbName = 'reels'
const port = 5000;
const dbURI = `mongodb+srv://server:server@mvp.w52eo.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI})`);
});

mongoose.connection.once('open', () => {
  console.log('Server Started');
  app.listen(port, () => {
    console.log(`server running at: http://localhost:${port}`);
  })
})

//Server

app.use(require('cors')());
app.use(express.json());

//Get a reel/After typing in the reel code
app.get(`/player/:reelCode`, (req, res) => {
  const reelCode = req.params.reelCode;

  getReel(reelCode, (err, reel) => {
    if (err) console.log('err: ', err);

    res.json(reel);
  })
})

//Posting a reel to the database

app.post(`/addReel`, (req, res) => {
  addReel(req.body, (err, reel) => {
    if (err) console.log('err: ', err);

    res.json(reel);
  })
})