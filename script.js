$(document).ready(function(){
    $(".table").hide();
    $("#form-id").submit(function(event){
        performSearch(event);
    });
});

function performSearch(event){
    var request;
    event.preventDefault();

   request= $.ajax({
        url:'https://api.openweathermap.org/data/2.5/weather',
        type:"GET",
        data:{
            q:$("#city").val(),
            appid:'4880dabd29ad65fa41a6e6697594f222',
            units:'metric'
        }
    });
    request.done(function(response){
        formatSearch(response);
        $(".table").show();
    });
    request.fail(function(){
        $("#invalid").text("please try again, incorrect input!");
    
    });
}
function formatSearch(jsonObject){
    $("#invalid").text("");
    var city_name=jsonObject.name;
    var city_weather=jsonObject.weather[0].main;
    var city_temp=jsonObject.main.temp;
    var city_pressure=jsonObject.main.pressure;
    var city_humidity=jsonObject.main.humidity;
    var city_visibility=jsonObject.visibility;

    $("#city-name").text(city_name);
    $("#city-weather").text(city_weather);
    $("#city-temp").text(city_temp+ " Celsius");
    $("#city-pressure").text(city_pressure+"  hPa");
    $("#city-humidity").text(city_humidity+"%");
    $("#city-visibility").text(city_visibility+" meter");

}
