function Signup() {
  return (
    <>
      <div>
        <label htmlFor="Name">Name</label>
        <input id="Name" name="Name" required />
        <label htmlFor="Pwd">Pwd</label>
        <input id="Pwd" name="Pwd" type="password" required />
        <input id="RePwd" name="RePwd" type="password" required />
        <p>Password Security</p>
        <div id="pwdSecurityIndicator">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p></p>
        <button id="submitSignupBtn" type="submit">
          sign up
        </button>
      </div>
    </>
  );
}

export default Signup;
