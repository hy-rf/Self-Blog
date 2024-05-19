// import { useState } from 'react';

import Home from './pages/Home';
import User from './pages/User';
import Chat from './pages/Chat';
import Post from './pages/Post';
import Header from './components/Header';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './pages/Create';
import { isMobile } from 'react-device-detect';
let desktopLayout = {
  display: 'grid',
  gridTemplateRows: '1fr 18fr',
  gridTemplateAreas: "'nav' 'main'",
  width: '100%',
  height: '100vh',
};
let mobileLayout = {
  display: 'grid',
  gridTemplateRows: '1fr 14fr 1fr',
  gridTemplateAreas: "'header' 'main' 'nav'",
  width: '100%',
  height: '100vh',
};
function App() {
  return (
    <div style={isMobile ? mobileLayout : desktopLayout}>
      <BrowserRouter>
        <Header></Header>
        <Navigation></Navigation>
        <main
          style={{
            gridArea: 'main',
            overflow: 'hidden',
            padding: '10px',
            backgroundColor: 'rgba(128, 128, 128, 0.2)',
          }}
        >
          {!isMobile && (
            <h1
              style={{
                fontSize: '5rem',
              }}
            >
              FIXING DESKTOP SITE
            </h1>
          )}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/user/*" element={<User />}></Route>
            <Route path="/post/*" element={<Post />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
            <Route path="/create/*" element={<Create />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
