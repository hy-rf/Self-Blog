import { api } from '@/api';
import { useEffect, useState } from 'react';
import ChatroomPreview from './chatroompreview';
import Proptypes from 'prop-types';

function Roomlist(props) {
  const [roomlist, setroomlist] = useState([]);
  useEffect(() => {
    (async () => {
      var ret = await api.getJoinedChatroom();
      setroomlist(ret.payload);
    })();
  }, []);
  if (roomlist.length >= 1) {
    return (
      <>
        <div>
          {roomlist.map((ele) => {
            return (
              <div
                onClick={() => props.setchatlocation(['messagelist', ele.id])}
                key={ele.id}
                style={{ display: 'flex', height: '4rem' }}
              >
                <p>{ele.name}</p>
                <ChatroomPreview chatroomid={ele.id}></ChatroomPreview>
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="hide">
          <p>no room list</p>
        </div>
      </>
    );
  }
}
Roomlist.propTypes = {
  setchatlocation: Proptypes.func,
  id: Proptypes.number,
};
export default Roomlist;
