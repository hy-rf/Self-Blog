import { api } from '@/app/api/index';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';

function Signup() {
  const [registerFormInfo, setRegisterFormInfo] = useState({
    Name: '',
    Pwd: '',
    RePwd: '',
  });
  const [nameProps, setNameProps] = useState({});
  const [pwdProps, setPwdProps] = useState({});
  const [rePwdProps, setRePwdProps] = useState({});
  async function submitRegister() {
    let res = await api.register(registerFormInfo);
    console.log(res);
  }
  async function checkName(Name) {
    let res = await api.checkDuplicatedName(Name);
    if (res.success) {
      setNameProps({ ...nameProps, error: false, helperText: res.message });
    } else {
      setNameProps({ ...nameProps, error: true, helperText: res.message });
    }
  }
  async function checkRePwd(value1, value2) {
    if (value1 !== value2) {
      setPwdProps({
        ...pwdProps,
        error: true,
        helperText: 'Password not match',
      });
      setRePwdProps({
        ...rePwdProps,
        error: true,
        helperText: 'Password not match',
      });
    } else {
      setPwdProps({ ...pwdProps, error: false, helperText: '' });
      setRePwdProps({ ...rePwdProps, error: false, helperText: '' });
    }
  }
  return (
    <>
      <div>
        <TextField
          id="Name"
          name="Name"
          label="Name"
          variant="outlined"
          margin="dense"
          onChange={async (e) => {
            setRegisterFormInfo({
              ...registerFormInfo,
              Name: e.target.value,
            });
            checkName(e.target.value);
          }}
          {...nameProps}
          required
        />
        <TextField
          id="Pwd"
          name="Pwd"
          label="Password"
          variant="outlined"
          margin="dense"
          type="password"
          onChange={(e) => {
            setRegisterFormInfo({
              ...registerFormInfo,
              Pwd: e.target.value,
            });
            checkRePwd(e.target.value, registerFormInfo.RePwd);
          }}
          {...pwdProps}
          required
        />
        <TextField
          id="RePwd"
          name="RePwd"
          label="Re-Enter Password"
          variant="outlined"
          margin="dense"
          type="password"
          onChange={(e) => {
            setRegisterFormInfo({
              ...registerFormInfo,
              RePwd: e.target.value,
            });
            checkRePwd(e.target.value, registerFormInfo.Pwd);
          }}
          {...rePwdProps}
          required
        />
        <p></p>
        <Button variant="contained" onClick={submitRegister}>
          sign up
        </Button>
      </div>
    </>
  );
}

export default Signup;
