import isLogin from '@/utility/islogin';
import './usermenu.css';
function UserMenu({ isVisible }) {
  return (
    <div
      style={{
        display: isVisible ? 'block' : 'none',
        backgroundColor: 'white',
        position: 'fixed',
      }}
      className="user-menu"
    >
      {isLogin ? <h1>User Menu</h1> : <h1>Please Login</h1>}
    </div>
  );
}
export default UserMenu;
