let navFunction = () => {
  return `<div>
      <label for="search">Search receipe: </label>
      <input type="text" id="search" placeholder="enter receipe name" />
      <button id="click">Enter</button>
      <br>
      <div id="dragBox"></div>
    </div>
    <div>
    <p><a href="index.html">Homele</a></p>
    </div>
    <div>
      <p id="randomRec"><a href="receipe_of_day.html">Receipe of the day</a></p>
    </div>
    <div>
      <p><a href="latest_receipe.html">Latest receipe</a></p>
    </div>`;
};

export default navFunction;
