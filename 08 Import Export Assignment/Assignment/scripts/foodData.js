async function getData(url) {
  try {
    let response = await fetch(url);

    let data = await response.json();
    return data.meals;
  } catch (error) {
    console.log("error:", error);
    // let div = document.createElement("div")
    // div.setAttribute("class","error")
    // let img = document.createElement("img");
    // img.src =
    //   "https://media.istockphoto.com/vectors/error-404-vector-id538038858";
    // img.style.width = "100%";
    // img.style.height = "100%";

    // location.append(img);
  }
}

let appendData = (data, location) => {
  location.innerHTML = "";
  data.forEach(({ strMealThumb, strMeal, strCategory, strArea }) => {
    let div = document.createElement("div");

    div.setAttribute("class", "cardDiv");

    let img = document.createElement("img");
    img.src = strMealThumb;

    let h3 = document.createElement("h3");
    h3.innerText = strMeal;

    let p1 = document.createElement("p");
    p1.innerText = strCategory;

    let p2 = document.createElement("p");
    p2.innerText = strArea;

    div.append(img, h3, p1, p2);
    location.append(div);
  });
};

let appendLatest = (data, location) => {
  location.innerHTML = null;
  data.forEach(({ strCategoryThumb, strCategory }) => {
    let div = document.createElement("div");

    div.setAttribute("class", "cardDiv");

    let img = document.createElement("img");
    img.src = strCategoryThumb;

    let h2 = document.createElement("h2");
    h2.innerText = strCategory;

    div.append(img, h2);
    location.append(div);
  });
};

export { appendLatest };

export { getData, appendData };
