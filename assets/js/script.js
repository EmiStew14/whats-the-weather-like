function getWeather() {
    fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={API key}".then(function(response){
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