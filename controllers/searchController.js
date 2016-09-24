angular.module('weather-app')
    .controller('searchController', ['$scope', '$log', 'weatherService', function ($scope, $log, weatherService) {

        $scope.weatherData = {};
        $scope.searchValue = '';
        $scope.city = '';
        $scope.state = '';

        $scope.getSearch = function (city) {

            weatherService.getToday(city)
                .then(function (response) {

                    $scope.weatherData = response.data;
                    $scope.city = response.data.current_observation.display_location.city;
                    $scope.state = response.data.current_observation.display_location.state;


                    $scope.searchValue = '';

                }, function (response) {
                    $log.log(response.data);
                });
        };
        
    }]);