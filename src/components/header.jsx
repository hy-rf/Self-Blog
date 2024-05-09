import { Link } from 'react-aria-components';
// eslint-disable-next-line react/prop-types
function Header({ setlocation }) {
  return (
    <>
      <Link onPress={() => setlocation('user')}>user</Link>
      <Link onPress={() => setlocation('chat')}>chat</Link>
      <Link onPress={() => setlocation('post')}>post</Link>
    </>
  );
}

export default Header;
