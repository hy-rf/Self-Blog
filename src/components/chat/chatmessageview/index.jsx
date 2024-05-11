import api from '@/api';
import Proptypes from 'prop-types';
import { useEffect, useState } from 'react';
// import signalR, { HubConnectionBuilder } from '@microsoft/signalr';
import MessageUnit from './messageunit';
// function handleChat() {
//   'use strict';
//   var connection = new signalR.HubConnectionBuilder().withUrl('/chat').build();
//   connection.on(
//     'ReceiveMessage',
//     function (roomid, userid, user, message, time) {}
//   );
// }
function MessageList(props) {
  const [messages, setmessages] = useState([]);
  useEffect(() => {
    (async () => {
      let ret = await api.getChatroomMessage(props.id);
      setmessages(ret);
    })().then(() => {});
  }, []);
  return (
    <>
      <button
        onClick={() => {
          props.setchatlocation(['roomlist', null]);
        }}
      >
        back
      </button>
      <button
        onClick={() => {
          props.setchatlocation(['chatroommemberlist', props.id]);
        }}
      >
        members
      </button>
      <p>yout are in chat room {props.id}</p>
      <div id="messages">
        {messages.map((ele) => {
          return (
            <MessageUnit
              key={ele.id}
              id={ele.id}
              username={ele.user.name}
              created={ele.created}
              message={ele.message}
            ></MessageUnit>
          );
        })}
      </div>
    </>
  );
}
MessageList.propTypes = {
  setchatlocation: Proptypes.func,
  id: Proptypes.number,
};
export default MessageList;
