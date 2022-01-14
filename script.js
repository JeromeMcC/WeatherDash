var searchBtn = document.getElementById("search")
var city = document.getElementById("city").value

searchBtn.addEventListener("click", function () {
    city = document.getElementById("city").value
    console.log(city)
    var geoLoc = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=0e4933cb5bb805602e78f96a75879640'
    function latLon() {
        fetch(geoLoc)
            .then(function (response) {
                console.log(response)
                return response.json()

            })
            .then(function (jsonResponse) {
                console.log(jsonResponse[0])
                console.log(jsonResponse)
                var lat = jsonResponse[0].lat
                var lon = jsonResponse[0].lon

                var weather = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude={part}&units=imperial&appid=0e4933cb5bb805602e78f96a75879640'
                console.log(weather)
                weatherRequest(weather)
            })
    }
    latLon()

});
function weatherRequest(weather) {
    fetch(weather)
        .then(function (weatherData) {
            console.log(weatherData)
            return weatherData.json()

        })
        .catch(function (error) {
            console.log(error)
        })
        .then(function (jsonWeather) {
            console.log(jsonWeather)
            var cityName = city
            //created a gobal variable  and then updated it on line 5 alternatively could have passed weather request the var of city as additional argument
            var icon = jsonWeather.current.weather[0].icon//convert into actual icon?
            var temp = jsonWeather.current.temp
            var humidity = jsonWeather.current.humidity
            var uvi = jsonWeather.current.uvi
            var windspd = jsonWeather.current.wind_speed
            console.log(jsonWeather.daily)
            var currentCityNameEl = document.getElementById("location")

            var currentTempEl = document.getElementById("currentTemp")
            var currentHumidityEl = document.getElementById("currentHum")
            var currentUviEl = document.getElementById("currentUvi")
            var currentWindspdEl = document.getElementById("currentWspd")

            currentCityNameEl.innerHTML = cityName 
            var currentIconEl = document.getElementById("weatherIcon")
            currentIconEl.src = 'http://openweathermap.org/img/wn/' + icon + '.png'
            currentTempEl.innerHTML = temp
            currentHumidityEl.innerHTML = humidity
            currentUviEl.innerHTML = uvi
            currentWindspdEl.innerHTML = windspd

            var futureForecast = jsonWeather.daily
            for (let i = 1; i <= 5; i++) {
                //var icon = jsonWeather.daily.weather[i].icon
                var temp = jsonWeather.daily[i].temp.day
                var humidity = jsonWeather.daily[i].humidity
                //var uvi = jsonWeather.daily[1].uvi delete
                var windspd = jsonWeather.daily[i].wind_speed

                var indexTempEl = document.getElementById("index"+i+"Temp")
            var indexHumidityEl = document.getElementById("index"+i+"Hum")
            //var indexUviEl = document.getElementById("index"+i+"Uvi")delete
            var indexWindspdEl = document.getElementById("index"+i+"Wspd")

            //var indexIconEl = document.getElementById("weatherIcon")
            //indexIconEl.src = 'http://openweathermap.org/img/wn/' + icon + '.png'
            indexTempEl.innerHTML = temp
            indexHumidityEl.innerHTML = humidity
            //indexUviEl.innerHTML = uvi
            indexWindspdEl.innerHTML = windspd

            }
        })



}

//create the tables that the information will be appended to 
//create local storage to save last search request 
//create a search button for the page
