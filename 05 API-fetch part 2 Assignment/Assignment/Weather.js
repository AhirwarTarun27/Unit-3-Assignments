let key = "46f69faa3d26ab665869105775f5228f";

async function getWeather() {
  let city = document.getElementById("search").value;
  localStorage.setItem("search", JSON.stringify(city));
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    let result = await fetch(url);

    let data = await result.json();
    //     console.log("data:", data);
    weatherData(data);
  } catch (err) {
    console.log("err:", err);
  }

  function weatherData(inp) {
    //   console.log("inp:", inp.main);
    let minTemp = document.getElementById("minT");

    minTemp.innerHTML = `<h2>${Math.round(inp.main.temp_min - 273)}°C </h2>`;

    let maxTemp = document.getElementById("maxT");
    maxTemp.innerHTML = `<h2>${Math.round(inp.main.temp_max - 273)}°C </h2>`;

    let wind = document.getElementById("windC");

    wind.innerHTML = `<h2>Deg: ${inp.wind.deg}</h2><br>
        <h2>Gust: ${inp.wind.gust}</h2><br>
        <h2>Speed: ${inp.wind.speed}</h2>`;

    let cloud = document.getElementById("cloudC");
    cloud.innerHTML = `<h2>${inp.clouds.all}</h2>`;

    let sunrise = document.getElementById("sunriseC");
    sunrise.innerHTML = `<h2>${inp.sys.sunrise}</h2>`;

    let sunset = document.getElementById("sunsetC");

    sunset.innerHTML = `<h2>${inp.sys.sunset}</h2>`;
  }

  function map() {
    let mapB = document.getElementById("mapBox");
    let place = document.getElementById("search").value;
    console.log("place:", place);

    mapB.innerHTML = `<iframe
    width="450"
    height="500"
    frameborder="0" style="border:0"
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDS0uMVyG3mKUEro6d4Z_aplGifXboCJrQ&q=${place}" 
    allowfullscreen > </iframe>`;
  }
  map();
}

function getForcast() {
  window.location.href = "forcast.html";

  // let Nkey = `745d00deea3fcba7b2da5e883de2ea66`;
}
