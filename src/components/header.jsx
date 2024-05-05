import {Link} from 'react-aria-components';
// eslint-disable-next-line react/prop-types
function Header({ setlocation }) {
  return (
    <>
      <Link onClick={() => setlocation('user')}>user</Link>
      <Link onClick={() => setlocation('chat')}>chat</Link>
    </>
  );
}

export default Header;
