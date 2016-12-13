var apiData = require('./nps-api.json');
let mongoose = require('mongoose');
let parkModel = require('../models/park.js');
let databaseURI = 'mongodb://localhost/project2';

var parsedDataArray = [];


// Separates state strings and puts data into array
var splitStates = function(state) {
    return state.split(",");
};

// Isolates degrees latitude
var separateLat = function(latLong) {
    if (latLong === "") {
      return "";
    } else {
        let latLongArray = latLong.split(",");
let latArray = latLongArray[0].split(":");
return latArray[1];
    }
};

// Isolates degrees longitutde
var separateLong = function(latLong) {
    if (latLong === "") {
        return "";
    } else {
    let latLongArray = latLong.split(",");
    let longArray = latLongArray[1].split(":");
    return longArray[1];
  }
};

// Puts API Data into schema format
for (let i = 0; i < apiData.data.length; i++) {

    var parsedDataObj = {
        name: apiData.data[i].name,
        state: splitStates(apiData.data[i].states),
        description: apiData.data[i].description,
        lat: separateLat(apiData.data[i].latLong),
        long: separateLong(apiData.data[i].latLong),
        url: apiData.data[i].url,
        weatherInfo: apiData.data[i].weatherInfo,
        designation: apiData.data[i].designation
    }
    parsedDataArray.push(parsedDataObj);
};

console.log(parsedDataArray);

// Pushes parsedDataArray into mongo (ran once to create and populate parks collection)
mongoose.connect(databaseURI, function (connectionError) {
    parkModel.create(parsedDataArray, function(err,result) {
        if (err) {
          console.log("ERROR:", err);
        } else {
          console.log("RESULT:", result);
        }
    });
});
