import Chat from "../pages/chat";

const setlocation = (e) => {
  e.preventDefault();
  location = e.target.href;
  console.log(location);
}

function Header({ location }) {
  return <a href="chat" onClick={setlocation}>chat</a>;
}

export default Header;
