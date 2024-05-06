import MessageList from '@/components/chat/chatmessageview';
import Roomlist from '@/components/chat/chatroomlistview';
import ChatRoomMemberList from '@/components/chat/chatroommemberlistview';
import { useState } from 'react';
import './chat.css';

function isLogin() {
  return new RegExp('Token*').test(document.cookie);
}

function Chat() {
  const [chatlocation, setchatlocation] = useState(['roomlist', null]);
  if (isLogin) {
    return (
      <>
        <div className="chatpage">
          {chatlocation[0] === 'roomlist' && (
            <Roomlist setchatlocation={setchatlocation}></Roomlist>
          )}
          {chatlocation[0] === 'messagelist' && (
            <MessageList
              setchatlocation={setchatlocation}
              id={chatlocation[1]}
            ></MessageList>
          )}
          {chatlocation[0] === 'chatroommemberlist' && (
            <ChatRoomMemberList
              setchatlocation={setchatlocation}
              id={chatlocation[1]}
            ></ChatRoomMemberList>
          )}
        </div>
      </>
    );
  }
}

export default Chat;
