var apiData = require('./nps-api.json');

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

console.log(parsedDataArray);
