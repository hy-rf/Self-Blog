import axios from 'axios';
import { useState } from 'react';

function Login() {
  const [name, setname] = useState('');
  const [pwd, setpwd] = useState('');
  function login() {
    axios({
      method: 'post',
      url: 'https://1stbbs.azurewebsites.net/api/User/Login',
      data: {
        "Name": name,
        "Pwd": pwd,
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      withCredentials: true
    }).then((res) => {
      console.log(res.data);
    });
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
        <button id="submitLoginBtn" value={name} onClick={login}>
          login
        </button>
      </div>
    </>
  );
}

export default Login;
