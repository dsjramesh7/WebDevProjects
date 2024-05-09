getInfo("pune");
function search() {
  let location = document.querySelector(".inputCity").value;
  document.querySelector(".cityName").innerHTML = location;
  console.log(location);
  getInfo(location);
}

async function getInfo(loc) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=bb8a9c84682beff7be451b566d4e0f63`
  );
  let data = await response.json();
  document.querySelector(".temp").innerHTML = data.main.temp + " C";
  document.querySelector(".valueP").innerHTML = data.main.pressure;
  document.querySelector(".valueH").innerHTML = data.main.humidity;
  document.querySelector(".weatherDisc").innerHTML =
    data.weather[0].description;
  console.log(data);
}
