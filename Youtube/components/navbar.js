let navFunction = () => {
  return ` <div class="logo">
      <div>
        <img
          height="px"
          width="30px"
          src="https://cdn.pixabay.com/photo/2021/02/16/06/00/youtube-logo-6019878_960_720.png"
          alt=""
        />
        <div>
          <p>YouTube</p>
        </div>
      </div>
      <div class="searchBox">
        <div>
          <input type="text" id="search" />

          <button id="searchVideos">Search</button>
        </div>
      </div>

      <div>
        <div class="signIn">
          <a href="signIn.html"><p>Sign-In</p></a>
        </div>
        <div class="signUP">
          <a href="signUp.html"><p>Sign-Up</p></a>
        </div>
      </div>
    </div>`;
};

export default navFunction;
