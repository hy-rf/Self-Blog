// import { useState } from 'react';

import { useState } from 'react';
import User from './pages/user';
import Chat from './pages/chat';
import Header from './components/header';
import api from '@/api/index';

function App() {
  // const [user, setuser] = useUser(null);
  // console.log(user);
  async function getUser() {
    var res = await api.getuser(1);
    console.log(res);
  }

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
      <footer onClick={getUser}>rf@@ 2024 ALL RIGHTS RESERVED</footer>
    </>
  );
}

export default App;
