import MessageList from '@/app/components/chat/chatmessageview';
import Roomlist from '@/app/components/chat/chatroomlistview';
import ChatRoomMemberList from '@/app/components/chat/chatroommemberlistview';
import { useState } from 'react';
import isLogin from '@/app/utility/islogin';

function Chat() {
  const [chatlocation, setchatlocation] = useState(['roomlist', null]);
  if (isLogin()) {
    return (
      <>
        <div
          className="chatpage"
          style={{
            height: '100%',
          }}
        >
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
  } else {
    return (
      <div className="chatpage">
        <p>Please Login</p>
      </div>
    );
  }
}

export default Chat;
