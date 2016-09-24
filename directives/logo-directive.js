angular.module('weather-app')
    .directive('logoTemplate', function () {
        return {
            restrict: 'E',
            templateUrl: '../views/logo-template.html'
        };
    });