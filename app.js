const request = require('request')

//darksky.com
const url = 'https://api.darksky.net/forecast/482497ce549ab32f30de92e0e4a5aa84/37.8267,-122.4233?units=si'
request({url: url, json: true}, (error, response) => {
    //const dataJs = JSON.parse(response.body);
    // It is currently tempereture degree out. There is a % percent chance of rain.
    console.log(`It is currently ${response.body.currently.temperature} degree ${response.body.timezone}. There is a ${response.body.currently.precipProbability}% chance of rain.`);
    console.log(`Tomorro could be: ${response.body.daily.data[0].summary} `);  
})

//mapbox.com
const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/georgia.json?types=country&access_token=pk.eyJ1Ijoic2FlaWRpbnRoZWNhZ2UiLCJhIjoiY2p4MjAxejlwMGUyczQzcWY3dTYwcWJ4aiJ9.wgAjC3rEDM0NmImHE5iwBw&limit=1'
request({url: url2, json: true}, (error, response) => {
    //const dataJs = JSON.parse(response.body);
    // It is currently tempereture degree out. There is a % percent chance of rain.
    console.log(`
    latitude: ${response.body.features[0].center[0]} 
    langitude: ${response.body.features[0].center[1]}. `);
})