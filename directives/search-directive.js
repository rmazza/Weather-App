angular.module('weather-app')
    .directive('searchDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '../views/search-template.html'
        };
    });