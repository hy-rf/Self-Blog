// import { useState } from 'react';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('./pages/Home'));
const User = lazy(() => import('./pages/User'));
const Chat = lazy(() => import('./pages/Chat'));
const Post = lazy(() => import('./pages/Post'));
const Create = lazy(() => import('./pages/Create'));
import Header from './components/Header';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
            overflowY: 'auto',
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>loading</div>}>
                  <Home />
                </Suspense>
              }
            ></Route>
            <Route
              path="/user/*"
              element={
                <Suspense fallback={<div>loading</div>}>
                  <User />
                </Suspense>
              }
            ></Route>
            <Route
              path="/post/*"
              element={
                <Suspense fallback={<div>loading</div>}>
                  <Post />
                </Suspense>
              }
            ></Route>
            <Route
              path="/chat"
              element={
                <Suspense fallback={<div>loading</div>}>
                  <Chat />
                </Suspense>
              }
            ></Route>
            <Route
              path="/create/*"
              element={
                <Suspense fallback={<div>loading</div>}>
                  <Create />
                </Suspense>
              }
            ></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
