import './navigation.css';
function Navigation({ setIsUserMenuVisible, setlocation }) {
  return (
    <>
      <div onClick={() => setlocation('post')}>nav example</div>
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
