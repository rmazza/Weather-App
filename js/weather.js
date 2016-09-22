const api = "http://api.wunderground.com/api/fa5bdbfe08fb2ddf/conditions/q/";
const forcastAPI = "http://api.wunderground.com/api/fa5bdbfe08fb2ddf/forecast/q/";
const format = ".json";
const d = new Date();
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var validate = (str) => {
    var regEx = /\w+/g;
    str = str.trim();
    return str.match(regEx);
}

$(document).ready(function() {

     $("#userInput").keypress(function(e) {
           if(e.which == 13) {
                $('#sub').click();
          }
    });

    $("#sub").click(function() {
    
            $("#fiveDayForecast").empty();
            var conditionsURL = "";

            var selectedCity = validate($("#userInput").val());

            if(selectedCity.length > 1){
                conditionsURL +=  api + selectedCity[1] + "/" + selectedCity[0] + format;
            }else{
                conditionsURL += api + selectedCity[0] + format;
            }

            $.getJSON(conditionsURL, function(data){
                    var city = data.current_observation.display_location.full;
                    var currentDay = weekDay[d.getDay()];
                    var currentImg = "<img src='" + data.current_observation.icon_url + "'>"

                   $("#currentCity").html(city);

                   $("#currentDay").html(currentDay);

                   $("#currentTemp").html(data.current_observation.temperature_string);

                   $("#currentWeatherIcon").html(currentImg);

            });
    });

});