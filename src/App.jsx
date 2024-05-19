// import { useState } from 'react';

import Home from './pages/Home';
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
        <Header></Header>
        <Navigation></Navigation>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/user/*" element={<User />}></Route>
            <Route path="/post/*" element={<Post />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
            <Route path="/create/*" element={<Create />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
