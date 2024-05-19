import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import './welcome.css';
import { Card, ToggleButton, ToggleButtonGroup } from '@mui/material';
function Welcome() {
  var [panel, setpanel] = useState('login');
  return (
    <>
      <Card id="welcomeWrapper">
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
      </Card>
    </>
  );
}

export default Welcome;
