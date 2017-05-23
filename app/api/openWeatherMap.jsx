var axios = require('axios');
var apiConstants = require('apiConstants');


const OPEN_WEATHER_MAP_URL = apiConstants.CONST_OPEN_WEATHER_MAP_URL;

module.exports ={
  getTemp: function (location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`


    return axios.get(requestUrl).then(function(res){
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
