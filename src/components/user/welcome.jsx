import { useState } from 'react';
import Login from './login';
import Signup from './signup';
import './welcome.css';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
function Welcome() {
  var [panel, setpanel] = useState('login');
  return (
    <>
      <div id="welcomeWrapper">
        <ToggleButtonGroup id="toggleBtns">
          <ToggleButton onClick={() => setpanel('login')} aria-label="Platform">
            Login
          </ToggleButton>
          <ToggleButton
            onClick={() => setpanel('signup')}
            aria-label="Platform"
          >
            Singup
          </ToggleButton>
        </ToggleButtonGroup>
        <div id="togglePanel">
          {panel === 'login' && <Login></Login>}
          {panel === 'signup' && <Signup></Signup>}
        </div>
      </div>
    </>
  );
}

export default Welcome;
