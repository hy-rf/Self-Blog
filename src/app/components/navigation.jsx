import './navigation.css';
import { Link } from 'react-router-dom';
function Navigation() {
  return (
    <>
      <Link to={'/'}>home</Link>
      <Link to={'/user'}>user</Link>
      <Link to={'/post'}>post</Link>
      <Link to={'/chat'}>chat</Link>
    </>
  );
}
export default Navigation;
