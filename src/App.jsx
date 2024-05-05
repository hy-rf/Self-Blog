// import { useState } from 'react';

import { useState } from 'react';
import User from './pages/user';
import Chat from './pages/chat';
import Header from './components/header';

function App() {
  var [location, setlocation] = useState(<User></User>);
  return (
    <>
      <header>
        <Header setlocation={setlocation}></Header>
      </header>
      <main>
        {location === 'user' && <User></User>}
        {location === 'chat' && <Chat></Chat>}
      </main>
      <footer>rf@@ 2024 ALL RIGHTS RESERVED</footer>
    </>
  );
}

export default App;
