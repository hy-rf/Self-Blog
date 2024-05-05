import api from '../../api/index';
import { useState } from 'react';

function Login() {
  const [name, setname] = useState('');
  const [pwd, setpwd] = useState('');
  function handlelogin() {
    const result = api.login(name, pwd);
    console.log(result);
  }

  return (
    <>
      <div>
        <label htmlFor="Name">Name</label>
        <input
          id="Name"
          name="Name"
          onChange={(e) => setname(e.target.value)}
        />
        <label htmlFor="Pwd">Pwd</label>
        <input
          id="Pwd"
          name="Pwd"
          type="password"
          onChange={(e) => setpwd(e.target.value)}
        />
        <p></p>
        <button id="submitLoginBtn" value={name} onClick={handlelogin}>
          login
        </button>
      </div>
    </>
  );
}

export default Login;
