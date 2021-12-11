let main = document.querySelector("main");

//script for the slidercontainer

let slideBox = document.createElement("div");
slideBox.setAttribute("id", "slideBox");

let intervalVal;

let imgArr = [
  "https://images.unsplash.com/photo-1611873189125-324514ebd94e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnQlMjBiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1627570743910-4c982390f25f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnQlMjBiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1611873188272-be150afa64a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnQlMjBiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnQlMjBiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
];

let i = 0;

function slideShow() {
  intervalVal = setInterval(function () {
    if (i == imgArr.length) {
      i = 0;
    }

    slideBox.innerHTML = null;

    let img = document.createElement("img");

    img.setAttribute("src", imgArr[i]);

    slideBox.append(img);

    i++;
  }, 3000);
}

slideShow();

//script for the filter

let btn1 = document.createElement("button");
btn1.innerText = "Low To High";
btn1.addEventListener("click", function () {
  let sort = arr.sort(function (a, b) {
    return a.IMDb_rating - b.IMDb_rating;
  });
  showProduct(sort);
});

let btn2 = document.createElement("button");
btn2.innerText = "Heigh To Low";


btn2.addEventListener("click", function () {
  let sort = arr.sort(function (a, b) {
    return b.IMDb_rating - a.IMDb_rating;
  });
  showProduct(sort);
});

//script for the movid card details

function movieData(n, r, p, i) {
  this.name = n;
  this.release_date = r;
  this.poster_url = p;
  this.IMDb_rating = i;
}

let Mname = [
  "Sachin",
  "Raabta",
  "Back Chor",
  "Behen Hogi Teri",
  "Mom",
  "Munna Michael",
  "Half Girlfriend",
  "Bahubali 2",
  "Trapped",
];

let date = [
  "23rd Dec",
  "2nd Jan",
  "22nd oct",
  "21st Nov",
  "22nd Dec",
  "2nd Jan",
  "12th Feb",
  "13th Jan",
  "22nd Feb",
];

let url = [
  "https://igimages.gumlet.io/hindi/gallery/movies/sachin-abilliondreams/sachin_poster.jpg?w=240&dpr=1.0",
  "https://igimages.gumlet.io/hindi/gallery/movies/raabta/raaabta_poster.jpg?w=240&dpr=1.0",
  "https://igimages.gumlet.io/hindi/gallery/movies/bankchor/bank_poster.jpg?w=240&dpr=1.0",
  "https://igimages.gumlet.io/hindi/gallery/movies/behenhogiteri/behen_poster.jpg?w=240&dpr=1.0",
  "https://igimages.gumlet.io/hindi/gallery/movies/mom/mom_poster.jpg?w=240&dpr=1.0",
  "https://igimages.gumlet.io/hindi/gallery/movies/munnamichael/munni_poster.jpg?w=240&dpr=1.0",
  "https://igimages.gumlet.io/hindi/gallery/movies/halfgirlfriend/half_poster.jpg?w=240&dpr=1.0",
  "https://igimages.gumlet.io/hindi/gallery/movies/bahubali2/bahubali_poster.jpg?w=240&dpr=1.0",
  "https://igimages.gumlet.io/hindi/gallery/movies/trapped/trapped_poster.jpg?w=240&dpr=1.0",
];

let imdb = [8.2, 9, 7, 6.7, 8, 9, 7.7, 7.8, 9];

let arr = [];

for (let i = 0; i < Mname.length; i++) {
  arr.push(new movieData(Mname[i], date[i], url[i], imdb[i]));
}

let movieBox = document.createElement("div");
movieBox.setAttribute("id", "movieContain");

function showProduct(product) {
  movieBox.innerHTML = "";

  product.map(function (item) {
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "movieCard");

    let imgBox = document.createElement("div");
    imgBox.setAttribute("class", "imgBox");

    let img = document.createElement("img");
    img.setAttribute("src", item.poster_url);

    imgBox.appendChild(img);

    let secBox = document.createElement("div");

    let h2 = document.createElement("h2");

    h2.innerHTML = item.name;

    let h3 = document.createElement("h3");

    h3.innerHTML = item.IMDb_rating;

    let h4 = document.createElement("h4");

    h4.innerHTML = item.release_date;

    secBox.append(h2, h3, h4);

    mainDiv.append(imgBox, secBox);

    movieBox.append(mainDiv);
  });
}

showProduct(arr);

main.append(btn1, btn2, slideBox, movieBox);
