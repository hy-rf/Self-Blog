import { useEffect } from 'react';
import Welcome from '../components/user/welcome';

// function getUserNameCookie() {
//   return document.cookie.split("; ").find(ele => new RegExp('Token*').test(ele)).split("=")[1];
// }
function isLogin() {
  return new RegExp('Token*').test(document.cookie);
}
function User() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.hide').classList.add('show');
    }, 0);
  }, []);
  return (
    <div className="hide">{isLogin() ? <p>user</p> : <Welcome></Welcome>}</div>
  );
}

export default User;
