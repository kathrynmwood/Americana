var mongoose = require('mongoose');

// example model
// {
//   "states": "UT",
//   "latLong": "lat:37.2020727396, long:-112.988339067",
//   "description": "Follow the paths where ancient native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon. Zion’s unique array of plants and animals will enchant you as you absorb the rich history of the past and enjoy the excitement of present day adventures.",
//   "designation": "National Park",
//   "parkCode": "zion",
//   "id": "41BAB8ED-C95F-447D-9DA1-FCC4E4D808B2",
//   "directionsInfo": "Zion National Park is located on State Route 9 in Springdale, Utah.",
//   "directionsUrl": "http://www.nps.gov/zion/planyourvisit/directions.htm",
//   "fullName": "Zion National Park",
//   "url": "https://www.nps.gov/zion/index.htm",
//   "weatherInfo": "Zion is known for a wide range of weather conditions. Temperatures vary with changes in elevation and day/night temperatures may differ by over 30°F.\n\nIn summer, temperatures in Zion National Park often exceed 100°F/38°C. Zion experiences monsoons from mid-July into September that results in an increased risk of flash floods. Always be aware of the threat of storms and lightning and be prepared for a wide range of weather conditions. Winters are generally mild.",
//   "name": "Zion"
// }

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
