var app = angular.module('weatherApp');
app.factory('myCache', function ($cacheFactory) {
    return $cacheFactory('myCache', {
        capacity: 100
    });
});