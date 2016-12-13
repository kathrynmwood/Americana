var mongoose = require('mongoose');

var parkSchema = new mongoose.Schema({
  name: String,
  state: [String],
  description: String,
  lat: String,
  long: String,
  url: String,
  weatherInfo: String,
  designation: String,
});

module.exports = mongoose.model('Park', parkSchema);
