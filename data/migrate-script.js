var apiData = require('./nps-api.json');
let mongoose = require('mongoose');
let myModel = require('../models/park.js');
let databaseURI = 'mongodb://localhost/project2';

var parsedDataArray = [];

var splitStates = function(state) {
    return state.split(",");
};

var separateLat = function(latLong) {
    if (latLong === "") {
      return "";
    } else {
        let latLongArray = latLong.split(",");
let latArray = latLongArray[0].split(":");
return latArray[1];
    }
};

var separateLong = function(latLong) {
    if (latLong === "") {
        return "";
    } else {
    let latLongArray = latLong.split(",");
    let longArray = latLongArray[1].split(":");
    return longArray[1];
  }
};

for (let i = 0; i < apiData.data.length; i++) {

    var parsedDataObj = {
        fullName: apiData.data[i].fullName,
        state: splitStates(apiData.data[i].states),
        description: apiData.data[i].description,
        lat: separateLat(apiData.data[i].latLong),
        long: separateLong(apiData.data[i].latLong),
        url: apiData.data[i].url,
        weatherInfo: apiData.data[i].weatherInfo
    }
    parsedDataArray.push(parsedDataObj);
};

// console.log(parsedDataArray);

// mongoose.connect(databaseURI, function (connectionError) {
//     myModel.create(parsedDataArray, function(err,result) {
//         if (err) {
//           console.log("ERROR:", err);
//         } else {
//           console.log("RESULT:", result);
//         }
//     });
// });

// db.parks.insertMany(
//   parsedDataArray
// );
