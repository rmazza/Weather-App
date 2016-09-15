const api = "http://api.wunderground.com/api/fa5bdbfe08fb2ddf/conditions/q/";
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
            var url = "";

            var selectedCity = validate($("#userInput").val());

            if(selectedCity.length > 1){
                url +=  api + selectedCity[1] + "/" + selectedCity[0] + format;
            }else{
                url += api + selectedCity[0] + format;
            }

            $.getJSON(url, function(data){
                    var city = data.current_observation.display_location.city;
                    var currentDay = weekDay[d.getDay()];

                   $("#currentCity").html(city);

                   $("#currentDay").html(currentDay);

                   $("#currentTemp").html(data.current_observation.temperature_string);

                   $("#currentWeatherIcon").html("<img src='" + data.current_observation.icon_url + "'>")

            });
    });

});