var app = angular.module('weatherApp');
app.controller("GetWeatherCtrl", ['$scope', 'weatherApi',
  function ($scope, weatherApi) {
      var timezone = '';
      $scope.currentTime = moment().format('H:mm');
      weatherApi.getLocation().then(function (res) {
          //timezone=res.data.
          weatherApi.getWeeklyWeather(res.data.city).then(function (response) {
              $scope.data = response.data;
              if ($scope.data.list.length) {
                  $scope.data.list.forEach(function (i) {
                      var date = moment(i.dt * 1000); //receiving unix timestamp in seconds, convert to miliseconds
                      $scope.icon = i.weather[0].icon + '.png';
                      i.dt = {
                          day: date.format("ddd")
                      };
                      if (moment().format("d") == date.format("d")) {
                          i.dt.today = true;
                      }
                  });
              }
          });

          $scope.getWeather = function (city) {
              weatherApi.getWeeklyWeather(city).then(function (response) {
                  $scope.currentTime = moment().format('H:mm');
                  $scope.data = response.data;
                  if ($scope.data.list.length) {
                      $scope.data.list.forEach(function (i) {
                          var date = moment(i.dt * 1000); 
                          $scope.icon = i.weather[0].icon + '.png';
                          i.dt = {
                              day: date.format("ddd")
                          };
                          if (moment().format("d") == date.format("d")) {
                              i.dt.today = true;
                          }
                      });
                  }
              });
          };
      });
  }
]);