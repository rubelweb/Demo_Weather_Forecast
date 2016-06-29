var App = angular.module("weatherApp", ['ngRoute', 'ngAnimate']);

App.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: '/Page_Selection/weather.html',
        controller: 'GetWeatherCtrl'
    });
  }
])