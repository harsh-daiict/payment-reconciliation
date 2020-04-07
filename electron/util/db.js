var MongoClient     = require('mongodb').MongoClient;
var url             = 'mongodb://localhost:27017/epr';
var dbName          = 'epr';

var db = {};
db.open = function(cb) {
  MongoClient.connect(url, function (err, client) {
    if (err == null) {
      return cb(client.db(dbName));
    }
    else {
      console.log("Failed to open db.");
    }
  });
};
module.exports = db;
