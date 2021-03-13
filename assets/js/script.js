// universal variables
var areaSearch= document.querySelector("#cities");
var first = document.querySelector("#days-1");
var second = document.querySelector("#days-2");
var third = document.querySelector("#days-3");
var fourth = document.querySelector("#days-4");
var fifth = document.querySelector("#days-5");
var latitude= 0;
var longitude= 0;
var temp = 0;
var humid = 0;
var windSpeed =0;
var UV = 0;

function getWeather() {

    fetch(
        "http://api.openweathermap.org/data/2.5/weather?q="
        + areaSearch.value + "&units=imperial&appid=1a0eb2135e79b5e8e040af27fa108f81"
    )
    .then(function(weatherResponse){
        console.log(weatherResponse);
        return weatherResponse.json();
    })
    .then(data => {areaSearch=data
    var city = document.createElement("span");
    var temp = document.createElement("span");
    var humid = document.createElement("span");
    var windSpeed = document.createElement("span");
    // var seeWeather = document.createElement("img");
    var latitude = data.coord["lat"];
    console.log(latitude);
    var longitude = data.coord["lon"];
    console.log(longitude);

    document.querySelector('#name').appendChild(city);
    city.innerHTML=data.name;

    document.querySelector('#temperature').appendChild(temp);
    temp.innerHTML=data.main["temp"];

    document.querySelector('#humidity').appendChild(humid);
    humid.innerHTML=data.main["humidity"];

    document.querySelector('#wind-speed').appendChild(windSpeed);
    windSpeed.innerHTML=data.wind["speed"];

    // seeWeather.setAttribute('src',data.weather[0]["icon"]);
    // document.querySelector('#icon').appendChild(seeWeather);

    return fetch(
        'https://api.openweathermap.org/data/2.5/onecall?lat='+ latitude
        + '&lon='+ longitude + '&exclude=hourly&appid=1a0eb2135e79b5e8e040af27fa108f81'
    );
})
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
        // console.log(data);
        // var dayindex = data.daily.length -1;
        // var counter = 0;
        // var value = data.daily[dayindex].dt
        newDate1 = moment.unix(data.daily[0].dt).format("MM/DD/YYYY");
        console.log(newDate1);
        newDate2 = moment.unix(data.daily[1].dt).format("MM/DD/YYYY");
        console.log(newDate2);
        newDate3 = moment.unix(data.daily[2].dt).format("MM/DD/YYYY");
        newDate4 = moment.unix(data.daily[3].dt).format("MM/DD/YYYY");
        newDate5 = moment.unix(data.daily[4].dt).format("MM/DD/YYYY");
        
    })

    // built in error catching
    .catch(function(){
        console.log('error');
    })
    // var areaSearch = weatherData.query
};
$("#search").click(function() {
    getWeather();
    const location = $(this).siblings("#cities").val();
    console.log(location);
    localStorage.setItem("location",location);
})
$("#search").click(function(){});