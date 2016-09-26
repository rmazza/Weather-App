angular.module('weather-app')
    .service('fiveDay', ['$http', function ($http) {

        const forecastAPI = "http://api.wunderground.com/api/fa5bdbfe08fb2ddf/forecast/q/";
        const format = ".json";

        this.getFiveDay = function(val) {
            return $http(
                {
                    method: 'GET',
                    url: forecastAPI + val + format
                }
            )
        };

    }]);