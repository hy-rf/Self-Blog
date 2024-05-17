import { api } from '@/app/api/index';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
// import { redirect } from 'react-router-dom';
function Login() {
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const [loggingin, setloggingin] = useState(false);
  const [nameProps, setNameProps] = useState({});
  const [pwdProps, setPwdProps] = useState({});
  async function handlelogin() {
    setloggingin(true);
    const result = await api.login(name, pwd);
    if (result.success) {
      setNameProps({});
      setPwdProps({});
      setloggingin(false);
      localStorage.setItem('Token', result.payload);
      return (document.location.href = '/');
    } else {
      setNameProps({ error: true, helperText: result.message });
      setPwdProps({ error: true, helperText: result.message });
      setloggingin(false);
    }
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
          onChange={(e) => setName(e.target.value)}
          value={name}
          {...nameProps}
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="dense"
          id="Pwd"
          name="Pwd"
          type="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          {...pwdProps}
          required
        />
        <p>{loggingin ? <span>logging in</span> : ''}</p>
        <Button variant="contained" onClick={handlelogin}>
          login
        </Button>
      </div>
    </>
  );
}

export default Login;
