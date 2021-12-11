let navbar = () => {
  return `<div id="logo">
      <a href="/">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.C0It0Y9-HXIu_ieBD9beNwAAAA%26pid%3DApi&f=1"
          alt=""
          srcset=""
        />
      </a>
    </div>
    <div id="search">
      <input id="search-input" type="text" placeholder="Search Github" />
    </div>

    <div id="options">
      <ul id="list">
        <li>Pull Requests</li>
        <li>Issues</li>
        <li>Marketplace</li>
        <li><a href="explore.html"> Explore</a></li>
      </ul>
    </div>

    

    <div id="profile">
    <div>
    <p id="signInBtn">
    <a href="signIn.html">Sign-In</a></p>
    </div>
    <div>
    <p id="signUpBtn">
    <a href="signUp.html">Sign-Up</a></p>
    </div>
      <img
        id="profile-img"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.fRjYMjw7_Ymj8eNXiP5JNAHaEK%26pid%3DApi&f=1"
        alt=""
        srcset=""
      />
    </div>`;
};

export default navbar;
