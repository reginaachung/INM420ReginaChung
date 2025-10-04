// let student = ["Alice", "Bob", "charlie", "David", "Eve"];

// getRandomNumber=()=>{
//     return Math.floor(Math.randon()*100);
// }

// console.log(getRandomNumber());

// getGrades = () => {
//   return Math.floor(Math.randon() * 100);
//   console.log(`${student}has grade of ${randonGrade}!`);
// };

// getGrades(student[0]);

// let person = {
//     name:"Regina",
//     age:"27",
//     address:{
//         city:"toronto",
//         province:"ON",
//         country:"CA"
//     }
// }

// API call using fetch
// fetch("https://jsonplaceholder.typicode.com/posts/30")
//   .then((response) => response.json())
//   .then((data) => console.log(data.body))
//   .catch((error) => console.log("Info not available!" + errow));

// fetch("https://jsonplaceholder.typicode.com/todos/33")
//   .then((response) => response.json())
//   .then((data) => console.log(data.completed))
//   .catch((error) => console.log(error));

// const ACCESS_KEY = "u-cy-mzXvDO6qG66dowq1QjM1hSgJZKEv61K_jDPmpc";

// fetch(`https://api.unplash.com/photos/random?client_id=${ACCESS_KEY}`)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.id);
//     console.log(data.user.name);
//     console.log(data.urls.regular);
//   })
//   .catch((error) => console.log(error));

// api key for weather api
const API_KEY = "05e0c71741fd48beb04210706250410";

// event listener for search button
document.getElementById("search-btn").addEventListener("click", () => {
  const city = document.getElementById("location").value;

  // validate city selection
  if (city === "") {
    document.getElementById("error").textContent = "Please select a location";
    document.getElementById("error").style.display = "block";
    return;
  }

  // hide error and previous results
  document.getElementById("error").style.display = "none";
  document.getElementById("weather-display").style.display = "none";

  // fetch weather data from api
  fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
    .then((response) => response.json())
    .then((data) => {
      // display location and country
      document.getElementById(
        "location-name"
      ).textContent = `${data.location.name}, ${data.location.country}`;

      // display temperature
      document.getElementById(
        "temperature"
      ).textContent = `${data.current.temp_c}°C`;

      // display weather description
      document.getElementById("description").textContent =
        data.current.condition.text;

      // display weather icon
      document.getElementById(
        "weather-icon"
      ).src = `https:${data.current.condition.icon}`;

      // display additional weather details
      document.getElementById(
        "feels-like"
      ).textContent = `${data.current.feelslike_c}°C`;
      document.getElementById(
        "humidity"
      ).textContent = `${data.current.humidity}%`;
      document.getElementById(
        "wind"
      ).textContent = `${data.current.wind_kph} km/h`;
      document.getElementById("uv").textContent = data.current.uv;

      // show weather display
      document.getElementById("weather-display").style.display = "block";
    })
    .catch((error) => console.log(error));
});
