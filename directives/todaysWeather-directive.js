angular.module('weather-app')
    .directive('todaysWeather',function(){
        return {
            restrict: 'E',
            templateUrl: '../views/today-template.html'
        };
    });