import axios from 'axios';

const url = {
  baseurl: new RegExp('https://hy-rf.github.io*').test(window.location.href)
    ? 'https://1stbbs.azurewebsites.net'
    : 'https://localhost:7064',
};

const api = {
  baseurl: new RegExp('https://hy-rf.github.io*').test(window.location.href)
    ? 'https://1stbbs.azurewebsites.net'
    : 'https://localhost:7064',
  async login(name, pwd) {
    const res = await axios({
      method: 'post',
      url: `${url.baseurl}/User/Login`,
      data: {
        Name: name,
        Pwd: pwd,
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return res.data;
  },
  async register(registerFormInfo) {
    const res = await axios({
      method: 'post',
      url: `${url.baseurl}/User/Signup`,
      data: registerFormInfo,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return res.data;
  },
  async getuser(id) {
    const res = await axios({
      method: 'get',
      url: `${url.baseurl}/User/${id}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return res.data;
  },
  async getJoinedChatroom() {
    const res = await axios({
      method: 'post',
      url: `${url.baseurl}/GetJoinedChatRoom`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return res.data;
  },
  async getChatroomMember(ChatRoomId) {
    const res = await axios({
      method: 'get',
      url: `${url.baseurl}/ChatRoomMember/${ChatRoomId}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return res.data;
  },
  async getChatroomMessage(ChatroomId) {
    const res = await axios({
      method: 'post',
      url: `${url.baseurl}/GetChatRoomMessages`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: {
        chatRoomId: ChatroomId.toString(),
      },
      withCredentials: true,
    });
    return res.data.payload;
  },
};

export default api;
