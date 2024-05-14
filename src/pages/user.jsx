import { useEffect } from 'react';
import Welcome from '../components/user/welcome';
import isLogin from '@/utility/islogin';
import UserInfo from '@/components/user/userinfo';
import api from '@/api';

function User() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.hide').classList.add('show');
    }, 0);
    api.getself().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div className="hide">
      {isLogin() ? (
        <UserInfo>
          <p>testchildren</p>user
        </UserInfo>
      ) : (
        <Welcome></Welcome>
      )}
    </div>
  );
}

export default User;
