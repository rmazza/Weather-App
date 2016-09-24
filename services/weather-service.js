angular.module('weather-app')
    .factory('weatherService', function weatherServiceFactory($http) {

        const api = "http://api.wunderground.com/api/fa5bdbfe08fb2ddf/conditions/q/";
        const format = ".json";

        return {
            get: function (searchVal) {
                return $http(
                    {
                        method: 'GET',
                        url: api + searchVal + format
                    });
            }
        };
    });