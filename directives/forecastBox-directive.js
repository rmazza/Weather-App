angular.module('weather-app')
    .directive('fiveDay', function () {
        return {
            restrict: 'E',
            templateUrl: '../views/forecastBox.html'
        };
    });