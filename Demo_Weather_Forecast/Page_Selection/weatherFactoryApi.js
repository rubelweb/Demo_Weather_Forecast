var app = angular.module('weatherApp');
app.factory('weatherApi', ['myHttp',
  function (myHttp) {
      return {
          getLocation: function () {
              return myHttp.jsonp("http://ip-api.com/json/?callback=JSON_CALLBACK");
          },
          getWeeklyWeather: function (city) {
              return myHttp.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&mode=json&units=metric');
          }
      }
  }
]);