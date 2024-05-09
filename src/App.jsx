// import { useState } from 'react';

import { useState } from 'react';
import User from './pages/user';
import Chat from './pages/chat';
import Post from './pages/post';
import Header from './components/header';
import Navigation from './components/navigation';

function App() {
  var [location, setlocation] = useState(<User></User>);
  return (
    <>
      <header>
        <Header setlocation={setlocation}></Header>
      </header>
      <nav>
        <Navigation></Navigation>
      </nav>
      <main>
        {location === 'user' && <User></User>}
        {location === 'chat' && <Chat></Chat>}
        {location === 'post' && <Post></Post>}
      </main>
    </>
  );
}

export default App;
