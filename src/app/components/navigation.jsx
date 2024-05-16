import './navigation.css';
import { Link } from 'react-router-dom';
function Navigation() {
  return (
    <>
      <Link to={'/'}>home</Link>
      <Link to={'/user'}>user</Link>
      <Link to={'/post'}>post</Link>
    </>
  );
}
export default Navigation;
