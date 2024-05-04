
import Welcome from "../components/user/welcome";

// function getUserNameCookie() {
//   return document.cookie.split("; ").find(ele => new RegExp('Token*').test(ele)).split("=")[1];
// }
function isLogin() {
  return new RegExp('Token*').test(document.cookie);
}
function User() {
  return isLogin()?<p>user</p>:<Welcome></Welcome>;
}

export default User;
