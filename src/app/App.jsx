// import { useState } from 'react';

import { useState } from 'react';
import User from './pages/user';
import Chat from './pages/chat';
import Post from './pages/post';
import Header from './components/header';
import Navigation from './components/navigation';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
function App() {
  var [location, setlocation] = useState('post');
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
          <Header setlocation={setlocation}></Header>
        </header>
        <nav>
          <Navigation></Navigation>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<User />}></Route>
            <Route path="/user" element={<User />}></Route>
            <Route path="/post" element={<Post />}></Route>
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
