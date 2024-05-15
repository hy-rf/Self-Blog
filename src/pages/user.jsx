import { useEffect } from 'react';
import Welcome from '../components/user/welcome';
import isLogin from '@/utility/islogin';
import UserInfo from '@/components/user/userinfo';
import { api } from '@/api';

function User() {
  useEffect(() => {
    if (isLogin()) {
      api.getself().then((res) => {
        console.log(res);
      });
    }
  }, []);
  return (
    <div>
      {isLogin() ? (
        <UserInfo>
          <p>testchildren</p>user
          <button
            onClick={() => {
              localStorage.removeItem('Token');
              console.info('log out');
              window.location.replace('/');
            }}
          >
            logout
          </button>
        </UserInfo>
      ) : (
        <Welcome></Welcome>
      )}
    </div>
  );
}

export default User;
