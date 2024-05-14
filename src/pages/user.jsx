import { useEffect } from 'react';
import Welcome from '../components/user/welcome';
import isLogin from '@/utility/islogin';
import UserInfo from '@/components/user/userinfo';

function User() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.hide').classList.add('show');
    }, 0);
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
