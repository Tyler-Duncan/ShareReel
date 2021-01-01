const mongoose = require('mongoose');
const { Reel } = require('../Models/reelModel.js');

function addReel (data, callback) {
   return (
  Reel.create({
    name: data.name,
    photos: data.photos
  }, function (err, reel) {
    if (err) return console.log('err: ', err);
    callback(null, reel);
  })
 )
}

module.exports = {
  addReel
}