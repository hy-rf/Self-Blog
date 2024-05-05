// import { useState } from 'react';

import { useEffect, useState } from 'react';
import User from './pages/user';
import Chat from './pages/chat';
import Header from './components/header';

function App() {
  var [location, setlocation] = useState(<User></User>);
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <>
      <header>
        <Header setlocation={setlocation}></Header>
      </header>
      {location === 'user' && (
        <main>
          <User></User>
        </main>
      )}
      {location === 'chat' && (
        <main>
          <Chat></Chat>
        </main>
      )}
      <footer>rf@@ 2024 ALL RIGHTS RESERVED</footer>
    </>
  );
}

export default App;
