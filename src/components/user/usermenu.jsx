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
      <h1>User Menu</h1>
    </div>
  );
}
export default UserMenu;
