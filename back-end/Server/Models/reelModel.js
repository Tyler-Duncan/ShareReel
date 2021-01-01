const mongoose = require('mongoose');
const { Schema } = mongoose;

const reelSchema = new Schema ({
  name: String,
  photos: [
    {
      url: String,
      // description: String,
    }
  ]
});

const Reel = mongoose.model('Reel', reelSchema);

module.exports = {
  Reel
}