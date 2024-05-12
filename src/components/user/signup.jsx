import api from '@/api/index';
import { TextField } from '@mui/material';
import { useState } from 'react';

function Signup() {
  const [registerFormInfo, setRegisterFormInfo] = useState({
    Name: '',
    Pwd: '',
    RePwd: '',
  });
  async function submitRegister() {
    let res = await api.register(registerFormInfo);
    console.log(res);
  }
  return (
    <>
      <div>
        <TextField
          id="Name"
          name="Name"
          label="Name"
          variant="outlined"
          onChange={(e) =>
            setRegisterFormInfo({
              ...registerFormInfo,
              Name: e.target.value,
            })
          }
          required
        />
        <TextField
          id="Pwd"
          name="Pwd"
          label="Password"
          variant="outlined"
          type="password"
          onChange={(e) =>
            setRegisterFormInfo({
              ...registerFormInfo,
              Pwd: e.target.value,
            })
          }
          required
        />
        <TextField
          id="RePwd"
          name="RePwd"
          label="Re-Enter Password"
          variant="outlined"
          type="password"
          onChange={(e) =>
            setRegisterFormInfo({
              ...registerFormInfo,
              RePwd: e.target.value,
            })
          }
          required
        />
        <p></p>
        <button onClick={submitRegister}>sign up</button>
      </div>
    </>
  );
}

export default Signup;
