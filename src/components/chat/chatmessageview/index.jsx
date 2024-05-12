import api from '@/api';
import Proptypes from 'prop-types';
import { useEffect, useState } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import MessageUnit from './messageunit';
import './index.module.css';
function createHubConnection(roomid) {
  'use strict';
  var connection = new HubConnectionBuilder()
    .withUrl(`${api.baseurl}/chat`)
    .build();
  connection
    .start({
      accessTokenFactory: () => {
        return document.cookie
          .split('; ')
          .find((ele) => new RegExp('Token*').test(ele))
          .split('=')[1];
      },
      withCredentials: true,
    })
    .then(() => {
      connection.invoke('Join', roomid);
    });
  return connection;
}
function MessageList(props) {
  /**
   * @type {[HubConnection, React.Dispatch<HubConnection>]}
   */
  const [conn] = useState(createHubConnection(props.id.toString()));
  const [messages, setmessages] = useState([]);
  useEffect(() => {
    (async () => {
      let ret = await api.getChatroomMessage(props.id);
      setmessages(ret);
    })();
  }, []);
  useEffect(() => {
    if (messages.length > 0) {
      conn.on(
        'ReceiveMessage',
        function (id, roomid, userid, user, message, time) {
          setmessages([
            ...messages,
            {
              id: id,
              userId: userid,
              message: message,
              created: time,
              chatRoomId: roomid,
              user: {
                id: userid,
                name: user,
              },
            },
          ]);
          document
            .getElementById('messages')
            .lastElementChild.lastElementChild.scrollIntoView();
        }
      );
    }
  }, [messages]);
  function sendChatMessage(inputmessage) {
    conn.invoke('SendMessage', props.id.toString(), inputmessage);
  }
  return (
    <>
      <button
        onClick={() => {
          props.setchatlocation(['roomlist', null]);
          if (conn) {
            conn.delete();
          }
        }}
      >
        back
      </button>
      <button
        onClick={() => {
          props.setchatlocation(['chatroommemberlist', props.id]);
          if (conn) {
            conn.delete();
          }
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
      <input></input>
      <button
        type="submit"
        onClick={(e) => sendChatMessage(e.target.previousElementSibling.value)}
      >
        send msg
      </button>
    </>
  );
}
MessageList.propTypes = {
  setchatlocation: Proptypes.func,
  id: Proptypes.number,
};
export default MessageList;
