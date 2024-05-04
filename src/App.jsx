// import { useState } from 'react';

import { useEffect, useState } from 'react';
import User from './pages/user';
import Chat from './pages/chat';

function App() {
  var [location, setlocation] = useState(<User></User>);
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <>
      <header>
        <p onClick={() => setlocation((location = <User></User>))}>user</p>
        <p onClick={() => setlocation((location = <Chat></Chat>))}>chat</p>
      </header>
      <main>{location}</main>
      <footer>rf@@ 2024 ALL RIGHTS RESERVED</footer>
    </>
  );
}

export default App;
