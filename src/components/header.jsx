import { Link } from 'react-aria-components';
// eslint-disable-next-line react/prop-types
function Header({ setlocation }) {
  return (
    <>
      <div onClick={() => setlocation('post')}>logo</div>
      <div id="search-bar">searchbar</div>
      <Link onPress={() => setlocation('user')}>user</Link>
      <Link onPress={() => setlocation('chat')}>chat</Link>
    </>
  );
}

export default Header;
