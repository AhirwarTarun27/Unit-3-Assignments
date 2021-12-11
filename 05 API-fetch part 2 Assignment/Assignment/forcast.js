function getForcast() {
  let search = JSON.parse(localStorage.getItem("search"));
  console.log("search:", search);

  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&cnt=7&appid=745d00deea3fcba7b2da5e883de2ea66`;
  console.log("url:", url);

  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (response) {
      // console.log("response:", response.list[0].main.temp_min);
      getSeven(response);
    });
  // getData();

  let count = 0;
  function getSeven(inputs) {
    // console.log("data:", inputs.list[0]);

    let one = document.getElementById("one");
    one.innerHTML = `<p>${inputs.list[0].main.temp_max}°C</p><br>
        <p>${inputs.list[0].main.temp_min}°C</p> `;

    let two = document.getElementById("two");
    two.innerHTML = `<p>${inputs.list[1].main.temp_max}°C</p><br>
        <p>${inputs.list[1].main.temp_min}°C</p> `;

    let three = document.getElementById("three");
    three.innerHTML = `<p>${inputs.list[2].main.temp_max}°C</p><br>
        <p>${inputs.list[2].main.temp_min}°C</p> `;

    let four = document.getElementById("four");
    four.innerHTML = `<p>${inputs.list[3].main.temp_max}°C</p><br>
        <p>${inputs.list[3].main.temp_min}°C</p> `;

    let five = document.getElementById("five");
    five.innerHTML = `<p>${inputs.list[4].main.temp_max}°C</p><br>
        <p>${inputs.list[4].main.temp_min}°C</p> `;

    let six = document.getElementById("six");
    six.innerHTML = `<p>${inputs.list[5].main.temp_max}°C</p><br>
        <p>${inputs.list[5].main.temp_min}°C</p> `;

    let seven = document.getElementById("seven");
    seven.innerHTML = `<p>${inputs.list[6].main.temp_max}°C</p><br>
        <p>${inputs.list[6].main.temp_min}°C</p> `;
  }
}

getForcast();
