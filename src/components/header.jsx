// eslint-disable-next-line react/prop-types
function Header({ setlocation }) {
  return (
    <>
      <p onClick={() => setlocation('user')}>user</p>
      <p onClick={() => setlocation('chat')}>chat</p>
    </>
  );
}

export default Header;
