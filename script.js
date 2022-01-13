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

                var weather = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude={part}&appid=0e4933cb5bb805602e78f96a75879640'
             console.log(weather)
            })
    }
    latLon()

});
function weatherRequest() {
    fetch(weather)
        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .catch(function (error) {
            console.log(error)
        })
}

//create the tables that the information will be appended to 
//create local storage to save last search request 
//create a search button for the page
