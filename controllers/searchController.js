angular.module('weather-app')
    .controller('searchController', ['$scope', '$log', 'weatherService', 'fiveDay', function ($scope, $log, weatherService, fiveDay) {

        $scope.weatherData = {};
        $scope.displayLocation = {};
        $scope.fiveDayForecast = [];
        $scope.searchValue = '';

        $scope.getSearch = function (city) {

            weatherService.getToday(city)
                .then(function (response) {

                    $scope.weatherData = response.data;
                    $scope.displayLocation = response.data.current_observation.display_location;


                }, function (response) {
                    $log.log(response.data);
                });

            fiveDay.getFiveDay(city)
                .then(function (response) {

                    $scope.fiveDayForecast = response.data.forecast.txt_forecast.forecastday;

                }, function (response) {
                    $log.log(response.data);
                });

                $scope.searchValue = '';
        };

    }]);