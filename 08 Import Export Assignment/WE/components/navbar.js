let navbar = () => {
  return `<div id="navbar">
      <h3><a href="/">Home</a></h3>

      <div id="options">
        <h3><a href="electronics.html">Electronics</a></h3>
        <h3><a href="jewellery.html">Jewellery</a></h3>
        <h3><a href="/">Sign In</a></h3>
        <h3><a href="/">Sign up</a></h3>
      </div>
    </div>`;
};

//onclick will not work on imported function
//for export this js module by
export default navbar;
