var axios = require('axios');
var apiConstants = require('apiConstants');


const OPEN_WEATHER_MAP_URL = apiConstants.CONST_OPEN_WEATHER_MAP_URL;

module.exports ={
  getTemp: function (location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`


    return axios.get(requestUrl).then(function(res){
      // if(res.status === 200 && res.statusText === "OK"){
      //   return res.data.main.temp;
      // } else {
      //   throw new Error(res.response.data.message);
      // }
      // if(res.response && res.response){
      //   throw new Error(res.response.data.message);
      // } else {
      //   return res.data.main.temp;
      // }
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(err){
      throw new Error(err.response.data.message);
    });
  }
}
