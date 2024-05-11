import api from '@/api';
import Proptypes from 'prop-types';
import { useEffect, useState } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import MessageUnit from './messageunit';

function MessageList(props) {
  const [conn, setconn] = useState();
  function handleChat() {
    'use strict';
    var connection = new HubConnectionBuilder()
      .withUrl('https://1stbbs.azurewebsites.net/chat')
      .build();

    setconn(connection);
  }
  const [messages, setmessages] = useState([]);
  useEffect(() => {
    (async () => {
      let ret = await api.getChatroomMessage(props.id);
      setmessages(ret);
    })().then(() => {
      handleChat();
    });
  }, []);
  useEffect(() => {
    if (conn) {
      conn
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
          conn.invoke('Join', props.id.toString());
          conn.on(
            'ReceiveMessage',
            function (roomid, userid, user, message, time) {
              if (roomid == props.id) {
                setmessages([
                  ...messages,
                  {
                    id: Math.random(99, 999),
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
              }
            }
          );
        });
    }
  }, [conn]);
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
              key={Math.random(100000, 100000000)}
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
