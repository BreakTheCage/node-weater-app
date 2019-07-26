const request = require("request");

//darksky.com
const url =
  "https://api.darksky.net/forecast/482497ce549ab32f30de92e0e4a5aa84/37.8267,-122.4233?units=si&lang=en";
//   "https://api.darksky.net/forecast/482497ce549ab32f30de92e0e4a5aa84/37.8267,-122.4233?units=si&lang=en";
request({ url: url, json: true }, (error, response) => {
  //const dataJs = JSON.parse(response.body);
  // It is currently tempereture degree out. There is a % percent chance of rain.
  if (error) {
    console.log("Unable to connect to weather service!");
  } else if (response.body.error) {
    console.log("Unable to find location!");
  } else {
    console.log(
      `It is currently ${response.body.currently.temperature} degree ${
        response.body.timezone
      }. There is a ${
        response.body.currently.precipProbability
      }% chance of rain.`
    );
    console.log(`Tomorro could be: ${response.body.daily.data[0].summary} `);
  }
});

//mapbox.com
const url2 =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FlaWRpbnRoZWNhZ2UiLCJhIjoiY2p4MjAxejlwMGUyczQzcWY3dTYwcWJ4aiJ9.wgAjC3rEDM0NmImHE5iwBw&limit=1";
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/georgia.json?types=country&access_token=pk.eyJ1Ijoic2FlaWRpbnRoZWNhZ2UiLCJhIjoiY2p4MjAxejlwMGUyczQzcWY3dTYwcWJ4aiJ9.wgAjC3rEDM0NmImHE5iwBw&limit=1";
request({ url: url2, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location services!");
  } else if (!response.body.features) {
    console.log("You must choose a place!");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location! Try another search.");
    console.log(response.body);
  } else {
    console.log(`
        latitude: ${response.body.features[0].center[1]}
        langitude: ${response.body.features[0].center[0]}. `);
    console.log("Features: ", response.body.features);
  }
});
