var mongoose = require('mongoose');

var parkSchema = new mongoose.Schema({
  fullName: String,
  state: [String],
  description: String,
  lat: String,
  long: String,
  url: String,
  weatherInfo: String
});

module.exports = mongoose.model('Park', parkSchema);
