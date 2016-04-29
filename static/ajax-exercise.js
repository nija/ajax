"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    //$.get('/fortune', getFortune);

    $.get('/fortune', function (fortune) {
        // console.log(fortune);
        $('#fortune-text').html(fortune);
    });
}

// function getFortune(fortune) {
//     console.log(fortune);
//     $('#fortune-text').html(fortune);
// }

$('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info

    $.get(url, function (weatherDict) {
        $('#weather-info').html(weatherDict['forecast'])
    });
} 

// function getWeather(weatherDict) {
//     // console.log(weatherDict)
//     var forecast =  weatherDict['forecast']
//     $('#weather-info').html(forecast)
// }  

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


