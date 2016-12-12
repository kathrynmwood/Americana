var mongoose = require('mongoose');

var parkSchema = new mongoose.Schema({
  name: {type: String, required: true},
  location: {type: String, required: true},
});

module.exports = mongoose.model('Park', parkSchema);
