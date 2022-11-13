
function searchCity(){
    let city = document.getElementById("input").value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=celcius`)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        const city_name = data.name
        const temprature = data.main.temp
        const min_temp = data.main.temp_min
        const max_temp = data.main.temp_max
        const weather_type = data.weather[0].main

        document.getElementById("city").innerText = city_name
        document.getElementById("temp").innerText = temprature
        document.getElementById("min-temp").innerText = min_temp
        document.getElementById("max-temp").innerText = max_temp
        document.getElementById("weather-type").innerText = weather_type
    })
    .catch(err => console.log(err))
}
