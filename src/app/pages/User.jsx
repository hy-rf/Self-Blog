import { useState, useEffect } from 'react';
import Welcome from '../components/user/Welcome';
import isLogin from '@/app/utility/islogin';
import UserInfo from '@/app/components/user/UserInfo';
import { api } from '@/app/api';

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
  console.log('rendered');
  return (
    <div>
      {isLogin() ? (
        <UserInfo>
          <p>{userName}</p>user
          <button
            onClick={() => {
              localStorage.removeItem('Token');
              console.info('log out');
              document.location.reload();
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
