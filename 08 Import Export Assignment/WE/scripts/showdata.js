//1. getData and (fetch, url)
//2. then appendData (data, location)

async function getData(url) {
  try {
    let res = await fetch(url);

    let data = await res.json();

    return data;
  } catch (err) {
    console.log("err:", err);
  }
}

//we need arguments so that we can add the location of the targeted file.

function appendData(data, location) {
  data.forEach((el) => {
    let div = document.createElement("div");

    let p = document.createElement("p");

    let img = document.createElement("img");

    img.src = el.image;

    p.innerText = el.title;

    div.append(img, p);

    location.append(div);
  });
}

export { getData, appendData };
