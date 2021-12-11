let video_data = JSON.parse(localStorage.getItem("clicked_video"));
console.log("video_data:", video_data);

//description -> video_data.snippet.description

let video_div = document.getElementById("video_details");

let iframe = document.createElement("iframe");

iframe.src = `https://www.youtube.com/embed/${video_data.videoId}`;

iframe.height = "100%";
iframe.width = "80%";
iframe.setAttribute("allowfullscreen", true);

video_div.append(iframe);
