import api from '@/api/index';
import { TextField } from '@mui/material';
import { useState } from 'react';

function Login() {
  const [name, setname] = useState('');
  const [pwd, setpwd] = useState('');
  const [loggingin, setloggingin] = useState(false);
  async function handlelogin() {
    setloggingin(true);
    const result = await api.login(name, pwd);
    setloggingin(false);
    // document.cookie = `Token=${result.payload}`;
    localStorage.setItem('Token', result.payload);
    // document.location.reload();
  }
  return (
    <>
      <div>
        <TextField
          label="Name"
          variant="outlined"
          margin="dense"
          id="Name"
          name="Name"
          onChange={(e) => setname(e.target.value)}
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="dense"
          id="Pwd"
          name="Pwd"
          type="password"
          onChange={(e) => setpwd(e.target.value)}
          required
        />
        <p>{loggingin ? <span>logging in</span> : ''}</p>
        <button onClick={handlelogin}>login</button>
      </div>
    </>
  );
}

export default Login;
