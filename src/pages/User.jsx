import Welcome from '../components/user/Welcome';
import isLogin from '@/utility/islogin';
import UserInfo from '@/components/user/UserInfo';

function User() {
  return <>{isLogin() ? <UserInfo></UserInfo> : <Welcome></Welcome>}</>;
}

export default User;
