// eslint-disable-next-line react/prop-types
function Header({ setlocation }) {
  return (
    <>
      <div
        onClick={() => {
          setlocation('post');
        }}
      >
        logo
      </div>
      <div id="search-bar">searchbar</div>
      <div
        onClick={() => {
          setlocation('user');
        }}
      >
        user
      </div>
      <div
        onClick={() => {
          setlocation('chat');
        }}
      >
        chat
      </div>
    </>
  );
}

export default Header;
