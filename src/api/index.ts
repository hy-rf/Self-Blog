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
  async login(name: number, pwd: number) {
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
  async register(registerFormInfo: any) {
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
  async getself() {
    const res = await axios({
      method: 'get',
      url: `${url.baseurl}/User`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('Token')}`,
      },
      withCredentials: true,
    });
    return res.data;
  },
  async getuser(id: number) {
    const res = await axios({
      method: 'get',
      url: `${url.baseurl}/User/${id}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('Token')}`,
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
        Authorization: `${localStorage.getItem('Token')}`,
      },
      withCredentials: true,
    });
    return res.data;
  },
  async getChatroomMember(ChatRoomId: number) {
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
  async getChatroomMessage(ChatroomId: number) {
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
  mockPostApi: [
    {
      id: 1,
      title: 'title1',
      content: 'content1',
      created: '2021-01-01',
      modified: '2021-01-02',
      userId: 1,
      userName: 'user1',
      tags: ['tag1', 'tag2'],
    },
    {
      id: 2,
      title: 'title2',
      content: 'content2',
      created: '2021-01-11',
      modified: '2021-01-12',
      userId: 2,
      userName: 'user2',
      tags: ['tag1', 'tag2', 'tag3'],
    },
  ],
  async checkDuplicatedName(name: string) {
    const res = await axios({
      method: 'post',
      url: `${url.baseurl}/User/CheckDuplicatedName`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: {
        Name: name,
      },
    });
    return res.data;
  },
};

export default api;
