//async makes our function asynchronous
async function findWeather(city){
    const API_KEY="your api key";
    //where we are pulling our data info from our weather API
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    //await just reads like synchronous code and fetches our url
const res=await fetch(url);
//fetches the url and returns data to out website
const data=await res.json();
return data;
}
//were gonna hook up our form
const weatherResult = document.getElementById("weather-result");
const form = document.getElementById("city-form");
//our form eventlistener when we click our form
form.addEventListener("submit", async event => {
    event.preventDefault();
    //getting our element by city
    const city = document.getElementById("city-input").value;
    const weather = await findWeather(city);
    displayWeather(weather);
});//func to display weather
function displayWeather(data){
    if(data.cod !==200){
        weatherResult.textContent="City not found!";
        return;
    }
    //our inner html for our weather result text
    weatherResult.innerHTML=`
    <h2>${data.name}</h2>
    <p>${data.weather[0].description}</p>
    <p>Temp: ${data.main.temp} °C</p>`;
}



