import Roomlist from "@/components/chat/chatroomlistview";


function isLogin() {
  return new RegExp('Token*').test(document.cookie);
}

function Chat() {
  return isLogin()?<Roomlist></Roomlist>:<p>please login</p>;
}

export default Chat;
