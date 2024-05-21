import { useState, useEffect } from 'react';
import Welcome from '../components/user/Welcome';
import isLogin from '@/utility/islogin';
import UserInfo from '@/components/user/UserInfo';
import { api } from '@/api';

function User() {
  async function getUserName() {
    return await api.getself().then((res) => {
      return res.message;
    });
  }
  const [userName, setuserName] = useState('');
  useEffect(() => {
    if (isLogin()) {
      getUserName().then((res) => {
        setuserName(res);
      });
    }
  }, []);
  return (
    <>
      {isLogin() ? (
        <UserInfo>
          <p>{userName}</p>user
          <button
            onClick={() => {
              localStorage.removeItem('Token');
              console.info('log out');
              document.location.href = '/';
            }}
          >
            logout
          </button>
        </UserInfo>
      ) : (
        <Welcome></Welcome>
      )}
    </>
  );
}

export default User;
