// import { useState } from 'react';

import { useEffect, useState } from 'react';
import User from './pages/user';
import Chat from './pages/chat';
import Post from './pages/post';
import Header from './components/header';
import Navigation from './components/navigation';
import UserMenu from './components/user/usermenu';

function App() {
  var [location, setlocation] = useState('post');
  var [isVisible, setisVisible] = useState(false);
  function handleClickToCloseUserMenu(e) {
    if (e.target.id != 'Avatar') {
      document.getElementById('root').classList.remove('move-nav');
      e.stopPropagation();
    }
  }
  useEffect(() => {
    document
      .getElementById('root')
      .addEventListener('click', handleClickToCloseUserMenu);
  }, []);
  return (
    <>
      <header>
        <Header setlocation={setlocation}></Header>
      </header>
      <nav>
        <Navigation
          setIsUserMenuVisible={setisVisible}
          setlocation={setlocation}
        ></Navigation>
      </nav>
      <main>
        {location === 'user' && <User></User>}
        {location === 'chat' && <Chat></Chat>}
        {location === 'post' && <Post></Post>}
      </main>
      <div>
        <UserMenu isVisible={isVisible}></UserMenu>
      </div>
      <div id="ads">This is Ads</div>
    </>
  );
}

export default App;
