// universal variables
var areaSearch= document.querySelector("#cities");
var city=[];
var first = document.querySelector("#days-1");
var second = document.querySelector("#days-2");
var third = document.querySelector("#days-3");
var fourth = document.querySelector("#days-4");
var fifth = document.querySelector("#days-5");

var cityBlock= function(cityText) {
    // create elements that make up a list item
    var Li = $("<button>").addClass("list-group-item card col bg-white");
    var cityP = $("<span>")
      .addClass("m-1")
      .text(cityText);
  
      Li.on("click", function () {
        console.log(this)

        console.log(($(this).children().text()))
        getWeather(($(this).children().text()));
        //   $(Li).each(function(){
        //       var btnName = parse($(().siblings(cityP).text()));
        //        console.log(btnName);
        //    })
    })

    // append p element to parent li
    Li.append(cityP);
  
    // append to ul list on the page
    $("#list").append(Li);

  };
//   city= JSON.parse(localStorage.getItem(city));

  function store() {
      var cityN = document.querySelector("#cities").value;
    city.push(cityN);
    // localStorage.setItem("location",location);
    localStorage.setItem("location", JSON.stringify(city));
}

  function loadIt() {
    var value = localStorage.getItem("location"); 
    console.log(value);   
    let i = 0; i < value.length; i++;
        cityBlock(value[i]);
        $("#city-block").append(cityBlock(value[i]));
    
};

function getWeather(location) {

    fetch(
        "http://api.openweathermap.org/data/2.5/weather?q="
        + location + "&units=imperial&appid=1a0eb2135e79b5e8e040af27fa108f81"
    )
    .then(function(weatherResponse){
        console.log(weatherResponse);
        return weatherResponse.json();
    })
    .then(data => {areaSearch=data
        var city = document.querySelector("#id");
        var temp = document.querySelector("#tmp");
        var humid = document.querySelector("#hmd");
        var windSpeed = document.querySelector("#windy");
        // var date = moment.unix(data.current.dt.format("MM/DD/YYYY"));
        var icon = data.weather[0].icon;
         var seeWeather = document.querySelector("img");
    console.log(data);
    var latitude = data.coord["lat"];
    console.log(latitude);
    var longitude = data.coord["lon"];
    console.log(longitude);

    document.querySelector("#date").innerHTML = date;
    // document.querySelector('#name').appendChild(city);
    city.innerHTML=data.name;

    // document.querySelector("#date").innerHTML(date);

    // document.querySelector('#temperature').appendChild(temp);
    temp.innerHTML="Temperature:"+ data.main["temp"] + "℉";

    // document.querySelector('#humidity').appendChild(humid);
    humid.innerHTML="Humidity:"+ data.main["humidity"] + "%";

    // document.querySelector('#wind-speed').appendChild(windSpeed);
    windSpeed.innerHTML="Wind Speed:"+ data.wind["speed"] + "MPH";

      seeWeather.setAttribute('src',"http://openweathermap.org/img/wn/"+ icon +".png");
      document.querySelector('#icon').appendChild(seeWeather);

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
         var icon1 = data.daily[0].weather[0].icon;
         console.log(icon1);
         var icon2 = data.daily[1].weather[0].icon;
         console.log(icon2);
         var icon3 = data.daily[2].weather[0].icon;
         console.log(icon3);
         var icon4 = data.daily[3].weather[0].icon;
         console.log(icon4);
         var icon5 = data.daily[4].weather[0].icon;
         console.log(icon5);
         var seeWeather = document.querySelector("img");

        var temp1 = document.querySelector("#t1");
        var temp2= document.querySelector("#t2");
        var temp3= document.querySelector("#t3");
        var temp4= document.querySelector("#t4");
        var temp5= document.querySelector("#t5");
        var degrees1 = data.daily[0].temp.max;
        var degrees2 = data.daily[1].temp.max;
        var degrees3 = data.daily[2].temp.max;
        var degrees4 = data.daily[3].temp.max;
        var degrees5 = data.daily[4].temp.max;
        var humid1 = document.querySelector("#d1");
        var humid2 = document.querySelector("#d2");
        var humid3 = document.querySelector("#d3");
        var humid4 = document.querySelector("#d4");
        var humid5 = document.querySelector("#d5");
        var cond1 = data.daily[0].humidity;
        var cond2 = data.daily[1].humidity;
        var cond3 = data.daily[2].humidity;
        var cond4 = data.daily[3].humidity;
        var cond5 = data.daily[4].humidity;

        //  seeWeather.setAttribute('src',"http://openweathermap.org/img/wn/"+ icon +".png");
        //   document.querySelector('#icon').appendChild(seeWeather);
        
        $(first).append("#1");
        $(first).html(newDate1);
        $(seeWeather).attr("src", "http://openweathermap.org/img/wn/"+ icon1 +".png");
        $("#icon1").append(seeWeather);

        $(first).append(temp1);
        $(temp1).html("<p class='font-weight-bold'>Temp:"+ degrees1 + "℉<p>");
        $(first).append(humid1);
        $(humid1).html("<p class='font-weight-bold'>Humidity:"+ cond1 + "%</p>");

        $(second).append("#2");
        $(second).html(newDate2);
        $(seeWeather).attr("src", "http://openweathermap.org/img/wn/"+ icon2 +".png");
        $("#icon2").append(seeWeather);

        $(second).append(temp2);
        $(temp2).html("<p class='font-weight-bold'>Temp:"+ degrees2 + "℉<p>");
        $(second).append(humid2);
        $(humid2).html("<p class='font-weight-bold'>Humidity:"+ cond2 + "%</p>");

        $(third).append("#3");
        $(third).html(newDate3);
        $(seeWeather).attr("src", "http://openweathermap.org/img/wn/"+ icon3 +".png");
        $("#icon3").append(seeWeather);

        $(third).append(temp3);
        $(temp3).html("<p class='font-weight-bold'>Temp:"+ degrees3 + "℉<p>");
        $(third).append(humid3);
        $(humid3).html("<p class='font-weight-bold'>Humidity:"+ cond3 + "%</p>");


        $(fourth).append("#4");
        $(fourth).html(newDate4);
        $(seeWeather).attr("src", "http://openweathermap.org/img/wn/"+ icon4 +".png");
        $("#icon4").append(seeWeather);

        $(fourth).append(temp4);
        $(temp4).html("<p class='font-weight-bold'>Temp:"+ degrees4 + "℉<p>");
        $(fourth).append(humid4);
        $(humid4).html("<p class='font-weight-bold'>Humidity:"+ cond4 + "%</p>");

        $(fifth).append("#5");
        $(fifth).html(newDate5);
        $(seeWeather).attr("src", "http://openweathermap.org/img/wn/"+ icon5 +".png");
        $("#icon5").append(seeWeather);

        $(fifth).append(temp5);
        $(temp5).html("<p class='font-weight-bold'>Temp:"+ degrees5 + "℉<p>");
        $(fifth).append(humid5);
        $(humid5).html("<p class='font-weight-bold'>Humidity:"+ cond5 + "%</p>");
    })

    // built in error catching
    .catch(function(){
        console.log('error');
    })
    // var areaSearch = weatherData.query
};


$("#search").click(function() {
    const location = $(this).siblings("#cities").val();
    cityBlock(location);
    console.log(location);
    store();
    loadIt();
    getWeather(location);
})