import './navigation.css';
function Navigation({ setIsUserMenuVisible, setlocation }) {
  return (
    <>
      <p
        onClick={() => {
          setlocation('post');
          setIsUserMenuVisible(false);
        }}
      >
        nav example
      </p>
      <div
        id="Avatar"
        onClick={() => {
          document.getElementById('root').classList.add('move-nav');
          setIsUserMenuVisible(true);
        }}
      ></div>
    </>
  );
}
export default Navigation;
