import api from '@/api';
import { useEffect, useState } from 'react';
import ChatroomPreview from './chatroompreview';
import Proptypes from 'prop-types';

function Roomlist(props) {
  const [roomlist, setroomlist] = useState([]);
  useEffect(() => {
    (async () => {
      var ret = await api.getJoinedChatroom();
      setroomlist(ret.payload);
      document.querySelector('.hide').classList.add('show');
    })();
  }, []);

  return (
    <>
      <ul className="hide">
        {roomlist.map((ele) => {
          return (
            <li
              onClick={() => props.setchatlocation(['messagelist', ele.id])}
              key={ele.id}
            >
              <p>{ele.name}</p>
              <ChatroomPreview chatroomid={ele.id}></ChatroomPreview>
            </li>
          );
        })}
      </ul>
    </>
  );
}
Roomlist.propTypes = {
  setchatlocation: Proptypes.func,
  id: Proptypes.number,
};
export default Roomlist;
