const request = require('request')


const options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    qs: {
      q: 'London,uk',
      lat: '0',
      lon: '0',
      callback: 'test',
      id: '2172797',
      lang: 'null',
      units: '"metric" or "imperial"',
      mode: 'xml, html'
    },
    headers: {
      'x-rapidapi-key': '50371e8b8dmsh8b7758c0c02c825p1967dcjsne11ec172eefa',
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      useQueryString: true
    }
  };
  
//   request(options, function (error, response,body) {
//       if (error) {
//           console.log("Unable To connect to web api services")
//       } else if (body.error){
//           console.log("Wrong longatiude")
//       }
//       else{
//         let data = JSON.parse(JSON.stringify(body)).split('test(')[1].slice(0,-1)
//         console.log(JSON.parse((data)));
//       }
        
//   });

//   ///////////////////////////////////

const GecodingUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWhtZWRoYXNzYW45NyIsImEiOiJja245NHc2cm4wZ2o2Mm9wZDl3Z25wMDJ2In0.3Z1tbuClTJ4YeVwon_eHaw&limit=1"
request({url: GecodingUrl, json:true}
,   (error,response)=>{
    if (error) {
        console.log("Unable to connect")
    }
    else if (response.body.error) {
        console.log("Wrong input")
    }
    else{
        const data= (response.body)
        const latitude= data.features[0].center[1]
        const longitude= data.features[0].center[0]
        console.log(latitude,longitude)
    }
    
})