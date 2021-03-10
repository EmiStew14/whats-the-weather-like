function getWeather() {
    //API for current, minute, hourly, and daily forecast//
    fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={1a0eb2135e79b5e8e040af27fa108f81}".then(function(response){
            return response.json();
        })
    )
    .then(function(data){
        console.log(data);
    })
    // built in error catching
    .catch(function(){
        console.log('error');
    })
};
function getMore() {
    //API for historical weather data for last 5 days//
    fetch(
        "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={1a0eb2135e79b5e8e040af27fa108f81}".then(function(response){
            return response.json();
        })
    )
};