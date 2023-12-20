function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let currentCity = searchInputElement.value;
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;


let key = "eb3cob03f4tb0a9096af3cf9de7ce5d9";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${currentCity}&key=${key}&units=metric`;
//api.shecodes.io/weather/v1/current?query={query}&key=eb3cob03f4tb0a9096af3cf9de7ce5d9

axios.get(apiUrl).then(showWeather);

 

}
 function showWeather(response) {
 console.log(response.data.temperature.current);
 let currentTemp = document.querySelector("#current-temperature-value");
 currentTemp.innerHTML = Math.round(response.data.temperature.current);
}



  


function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
