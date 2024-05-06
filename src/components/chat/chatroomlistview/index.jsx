import api from '@/api';
import { useEffect, useState } from 'react';
import ChatroomPreview from './chatroompreview';

function Roomlist(props) {
  const [roomlist, setroomlist] = useState([]);
  useEffect(() => {
    (async () => {
      var ret = await api.getJoinedChatroom();
      setroomlist(ret.payload);
    })();
    (async () => {})();
  }, []);

  return (
    <>
      <ul>
        {roomlist.map((ele) => {
          return (
            <li onClick={()=>props.setchatlocation(['messagelist',ele.id])} key={ele.id}>
              <p>{ele.name}</p>
              <ChatroomPreview chatroomid={ele.id}></ChatroomPreview>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Roomlist;
