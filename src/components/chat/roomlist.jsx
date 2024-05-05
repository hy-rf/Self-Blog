import api from '@/api';
import { useEffect, useState } from 'react';
async function get() {
  var res = await api.getJoinedChatroom();
  return res.payload;
}
function Roomlist() {
  const [roomlist, setroomlist] = useState([]);
  useEffect(() => {
    (async () => {
      var ret = await get();
      setroomlist(ret);
    })();
  }, []);

  return (
    <>
      <ul>
        {roomlist.map((ele) => {
          return (
            <li key={ele.id}>
              <p>{ele.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Roomlist;
