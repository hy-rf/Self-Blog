import { useState } from 'react';
import Login from './login';
import Signup from './signup';

function Welcome() {
  var [panel, setpanel] = useState('login');

  return (
    <>
      <div id="welcomeWrapper">
        <div id="toggleBtns">
          <button id="loginBtn" onClick={()=>setpanel('login')}>
            Login
          </button>
          <button id="signupBtn" onClick={()=>setpanel('signup')}>
            Singup
          </button>
        </div>
        <div id="togglePanel">
          {panel === 'login' && <Login></Login>}
          {panel === 'signup' && <Signup></Signup>}
        </div>
      </div>
    </>
  );
}

export default Welcome;
