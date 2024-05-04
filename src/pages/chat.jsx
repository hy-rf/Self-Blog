
import ChatWindow from "../components/chat/chatwindow";

function isLogin() {
  return new RegExp('Token*').test(document.cookie);
}

function Chat() {
  return isLogin()?<ChatWindow></ChatWindow>:<p>please login</p>;
}

export default Chat;
