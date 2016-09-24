angular.module('weather-app')
    .factory('weatherService', function weatherServiceFactory($http) {
        //test

        const api = "https://api.wunderground.com/api/fa5bdbfe08fb2ddf/conditions/q/";
        const format = ".json";

        return {
            getToday: function (searchVal) {
                return $http(
                    {
                        method: 'GET',
                        url: api + searchVal + format
                    });
            }
        };
    });