// universal variables
var areaSearch= document.querySelector("#cities");
var city={};
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
var cityBlock= function(cityText, cityList) {
    // create elements that make up a list item
    var Li = $("<li>").addClass("list-group-item");
    var cityP = $("<p>")
      .addClass("m-1")
      .text(cityText);
  
    // append p element to parent li
    Li.append(cityP);
  
    // append to ul list on the page
    $("#list" + cityList).append(Li);
  };

  function loadIt() {
      city= localStorage.getItem("location")
    var values = [],
       keys = Object.keys(localStorage),
        i = keys.length;
   
    while ( i-- ) {
       values.push( localStorage.getItem(keys[i],("#cities").val) );
       }
   $("#city-block").append(values);
    return values;
};

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
    // var date = moment.unix(data.coord["dt"].format("MM/DD/YYYY"));
    // var seeWeather = document.createElement("img");
    var latitude = data.coord["lat"];
    console.log(latitude);
    var longitude = data.coord["lon"];
    console.log(longitude);

    document.querySelector('#name').appendChild(city);
    city.innerHTML=data.name;

    // document.querySelector("#date").innerHTML(date);

    document.querySelector('#temperature').appendChild(temp);
    temp.innerHTML="Temperature:"+ data.main["temp"] + "℉";

    document.querySelector('#humidity').appendChild(humid);
    humid.innerHTML="Humidity:"+ data.main["humidity"] + "%";

    document.querySelector('#wind-speed').appendChild(windSpeed);
    windSpeed.innerHTML="Wind Speed:"+ data.wind["speed"] + "MPH";

    // seeWeather.setAttribute('src',data.weather[0]["icon"]);
    // document.querySelector('#icon').appendChild(seeWeather);

    return fetch(
        'https://api.openweathermap.org/data/2.5/onecall?lat='+ latitude
        + '&lon='+ longitude + '&units=imperial&exclude=hourly&appid=1a0eb2135e79b5e8e040af27fa108f81'
    );
})
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
        newDate1 = moment.unix(data.daily[0].dt).format("MM/DD/YYYY");
        newDate2 = moment.unix(data.daily[1].dt).format("MM/DD/YYYY");
        newDate3 = moment.unix(data.daily[2].dt).format("MM/DD/YYYY");
        newDate4 = moment.unix(data.daily[3].dt).format("MM/DD/YYYY");
        newDate5 = moment.unix(data.daily[4].dt).format("MM/DD/YYYY");
        console.log(data);

        var temp = document.querySelector("#t1");
        var temp2= document.querySelector("#t2");
        var temp3= document.querySelector("#t3");
        var temp4= document.querySelector("#t4");
        var temp5= document.querySelector("#t5");
        var degrees = data.daily[0].temp.max;
        var degrees2 = data.daily[1].temp.max;
        var degrees3 = data.daily[2].temp.max;
        var degrees4 = data.daily[3].temp.max;
        var degrees5 = data.daily[4].temp.max;
        var humid = document.querySelector("#d1");
        var humid2 = document.querySelector("#d2");
        var humid3 = document.querySelector("#d3");
        var humid4 = document.querySelector("#d4");
        var humid5 = document.querySelector("#d5");
        var cond = data.daily[0].humidity;
        var cond2 = data.daily[1].humidity;
        var cond3 = data.daily[2].humidity;
        var cond4 = data.daily[3].humidity;
        var cond5 = data.daily[4].humidity;

        
        $(first).append("#1");
        $(first).html(newDate1);

        $(first).append(temp);
        $(temp).html("<p class='font-weight-bold'>Temp:"+ degrees + "℉<p>");
        console.log(degrees);
        $(first).append(humid);
        $(humid).html("<p class='font-weight-bold'>Humidity:"+ cond + "%</p>");
        console.log(cond);

        $(second).append("#2");
        $(second).html(newDate2);

        $(second).append(temp2);
        $(temp2).html("<p class='font-weight-bold'>Temp:"+ degrees2 + "℉<p>");
        console.log(degrees2);
        $(second).append(humid2);
        $(humid2).html("<p class='font-weight-bold'>Humidity:"+ cond2 + "%</p>");
        console.log(cond2);

        $(third).append("#3");
        $(third).html(newDate3);

        $(third).append(temp3);
        $(temp3).html("<p class='font-weight-bold'>Temp:"+ degrees3 + "℉<p>");
        console.log(degrees3);
        $(third).append(humid3);
        $(humid3).html("<p class='font-weight-bold'>Humidity:"+ cond3 + "%</p>");
        console.log(cond3);

        $(fourth).append("#4");
        $(fourth).html(newDate4);

        $(fourth).append(temp4);
        $(temp4).html("<p class='font-weight-bold'>Temp:"+ degrees4 + "℉<p>");
        console.log(degrees4);
        $(fourth).append(humid4);
        $(humid4).html("<p class='font-weight-bold'>Humidity:"+ cond4 + "%</p>");
        console.log(cond4);

        $(fifth).append("#5");
        $(fifth).html(newDate5);

        $(fifth).append(temp5);
        $(temp5).html("<p class='font-weight-bold'>Temp:"+ degrees5 + "℉<p>");
        console.log(degrees5);
        $(fifth).append(humid5);
        $(humid5).html("<p class='font-weight-bold'>Humidity:"+ cond5 + "%</p>");
        console.log(cond5);
    })

    // built in error catching
    .catch(function(){
        console.log('error');
    })
    // var areaSearch = weatherData.query
};

$("#search").click(function() {
    cityBlock;
    loadIt();
    getWeather();
    const location = $(this).siblings("#cities").val();
    console.log(location);
    localStorage.setItem("location",location);
})
$("#search").click(function(){});