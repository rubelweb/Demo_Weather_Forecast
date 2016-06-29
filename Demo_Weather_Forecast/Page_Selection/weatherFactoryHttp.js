var app = angular.module('weatherApp');
app.factory('myHttp', ['$http', 'myCache',
  function ($http, myCache) {

      var headers = {
          'cache': myCache,
          'dataType': 'json'
      };
      var APPID = "bc1e24c531732375aece237bb2a5d49a";
      return {
          config: headers,
          get: function (url, success, fail) {
              return $http.get(url + "&APPID=" + APPID, this.config);
          },
          getLocal: function (url, success, fail) {
              return $http.get(url);
          },
          jsonp: function (url, success, fail) {
              return $http.jsonp(url, this.config);
          }
      };
  }
]);