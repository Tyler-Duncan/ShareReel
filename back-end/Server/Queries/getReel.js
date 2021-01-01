const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;

const getReel = (code, callback) => {
  mongoose.connection.db.collection("reels", function (err, collection) {
    if (err) {console.log('err: ', err)};
    collection.findOne({ "_id": ObjectId(code)})
      .then((result) => {
        callback(null, result);
      });
  });
}

module.exports = {
  getReel
}
