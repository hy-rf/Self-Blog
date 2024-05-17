// import { useState } from 'react';

import User from './pages/user';
import Chat from './pages/chat';
import Post from './pages/post';
import Header from './components/header';
import Navigation from './components/navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  // function handleClickToCloseUserMenu(e) {
  //   if (e.target.id != 'Avatar') {
  //     document.getElementById('root').classList.remove('move-nav');
  //     e.stopPropagation();
  //   }
  // }
  // useEffect(() => {
  //   document
  //     .getElementById('root')
  //     .addEventListener('click', handleClickToCloseUserMenu);
  // }, []);
  return (
    <>
      <BrowserRouter>
        <header>
          <Header></Header>
        </header>
        <nav>
          <Navigation></Navigation>
        </nav>
        <main>
          <Routes>
            <Route path="*" element={<Post />}></Route>
            <Route path="user" element={<User />}></Route>
            <Route path="post" element={<Post />}></Route>
            <Route path="chat" element={<Chat />}></Route>
          </Routes>
        </main>
        {/* <div>
        <UserMenu isVisible={isVisible}></UserMenu>
      </div>
      <div id="ads">This is Ads</div> */}
      </BrowserRouter>
    </>
  );
}

export default App;
