let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};

function search(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-text-input");

  let h2 = document.querySelector("#current-city");
  if (searchInput.value) {
    h2.innerHTML = `${searchInput.value}`;
  } else {
    h2.innerHTML = alert("Please type a city");
  }

  if (weather[searchInput.value] !== undefined) {
    let temperature = weather[searchInput.value].temp;
    let humidity = weather[searchInput.value].humidity;
    let farenheit = Math.round((temperature * 9) / 5 + 32);
    alert(
      `It is currently ${temperature}°C(${farenheit}°F) in ${searchInput.value} with a humidity of ${humidity}%`
    );
  } else {
    alert(
      `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${searchInput.value}`
    );
  }
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let now = new Date();

let p = document.querySelector("#current-date");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

let month = months[now.getMonth()];

p.innerHTML = `${hours}:${minutes}, ${day} ${month} ${date}, ${year}`;
