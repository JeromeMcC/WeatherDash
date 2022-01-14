var searchBtn = document.getElementById("search")

searchBtn.addEventListener("click", function () {
    var city = document.getElementById("city").value
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
        .then(function (jsonWeather){
            console.log(jsonWeather)
        })
        // create var to for the info from jsonweather to be appended to view lines 17 and 18 for examples

        
        
}

//create the tables that the information will be appended to 
//create local storage to save last search request 
//create a search button for the page
