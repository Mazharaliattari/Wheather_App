const apiKey = "f83a4f596cd24f5ba73120829261907";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
    const city = document.getElementById("city").value;
    getWeather(city);
});

async function getWeather(city) {

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            alert("City Not Found");
            return;
        }

        document.getElementById("cityName").innerHTML = data.location.name;

        document.getElementById("temp").innerHTML =
            Math.round(data.current.temp_c) + "°C";

        document.getElementById("condition").innerHTML =
            data.current.condition.text;

        document.getElementById("humidity").innerHTML =
            "Humidity : " + data.current.humidity + "%";

        document.getElementById("wind").innerHTML =
            "Wind : " + data.current.wind_kph + " km/h";

        document.getElementById("icon").src =
            "https:" + data.current.condition.icon;

    } catch (error) {
        alert("Something went wrong");
        console.log(error);
    }
}