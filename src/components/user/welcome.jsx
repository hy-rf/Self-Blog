function Welcome() {
  return (
    <>
      <div id="welcomeWrapper">
        <div id="toggleBtns">
          <button id="loginBtn">Login</button>
          <button id="signupBtn">Singup</button>
        </div>
        <div id="togglePanel">
          <div>
            <label htmlFor="Name">Name</label>
            <input id="Name" name="Name" />
            <label htmlFor="Pwd">Pwd</label>
            <input id="Pwd" name="Pwd" type="password" />
            <p></p>
            <button id="submitLoginBtn" type="submit">
              login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
