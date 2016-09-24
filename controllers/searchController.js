angular.module('weather-app')
    .controller('searchController', ['$scope', '$log', 'weatherService', function ($scope, $log, weatherService) {
        //test
        //test

        $scope.weatherData = {};
        $scope.displayLocation = {};
        $scope.searchValue = '';

        $scope.getSearch = function (city) {

            weatherService.getToday(city)
                .then(function (response) {

                    $scope.weatherData = response.data;
                    $scope.displayLocation = response.data.current_observation.display_location;



                    $scope.searchValue = '';

                }, function (response) {
                    $log.log(response.data);
                });
        };
        
    }]);