// import { useState } from 'react';

import User from './pages/User';
import Chat from './pages/Chat';
import Post from './pages/Post';
import Header from './components/Header';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './pages/Create';
function App() {
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
            <Route path="/*" element={<Post />}></Route>
            <Route path="/user/*" element={<User />}></Route>
            <Route path="/post" element={<Post />}></Route>
            <Route path="/chat/*" element={<Chat />}></Route>
            <Route path="/create/*" element={<Create />}></Route>
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
