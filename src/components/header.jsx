import { Link } from 'react-aria-components';
import './header.css';
// eslint-disable-next-line react/prop-types
function Header({ setlocation }) {
  return (
    <>
      <div onClick={() => setlocation('post')}>logo</div>
      <div>searchbar</div>
      <Link onPress={() => setlocation('user')}>user</Link>
      <Link onPress={() => setlocation('chat')}>chat</Link>
    </>
  );
}

export default Header;
