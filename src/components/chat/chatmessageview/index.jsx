import { api, BASE_URL } from '@/api';
import Proptypes from 'prop-types';
import { useEffect, useState } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import MessageUnit from './messageunit';
import './index.module.css';
function createHubConnection(roomid) {
  'use strict';
  var connection = new HubConnectionBuilder()
    .withUrl(`${BASE_URL}/chat`, {
      accessTokenFactory: () => {
        return localStorage.getItem('Token');
      },
    })
    .withAutomaticReconnect()
    .build();
  connection.start().then(() => {
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
    conn.on('ReceiveMessage', function (newmsg) {
      (async () => {
        setmessages([...messages, newmsg]);
      })().then(() => {});
    });
  }, [conn, messages]);
  useEffect(() => {
    document
      .getElementById('messages')
      .scrollTo(0, document.getElementById('messages').scrollHeight);
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
      <p>you are in chat room {props.id}</p>
      <div
        id="messages"
        style={{
          height: '90%',
          overflowY: 'auto',
        }}
      >
        {messages.map((ele) => {
          return (
            <MessageUnit
              key={ele.id}
              id={ele.id}
              username={ele.userName}
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
