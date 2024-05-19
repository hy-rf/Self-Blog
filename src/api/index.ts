import axios from 'axios';
import { PostListViewModel } from '../types/PostListViewModel';
import { PostDetailViewModel } from '../types/PostDetailViewModel';
const url = {
  baseurl:
    new RegExp('https://hy-rf.github.io*').test(window.location.href) ||
    new RegExp(
      'https://victorious-cliff-0fe836900.5.azurestaticapps.net*'
    ).test(window.location.href)
      ? 'https://1stbbs.azurewebsites.net'
      : 'https://localhost:7064',
};
const BASE_URL = url.baseurl;
const api = {
  baseurl:
    new RegExp('https://hy-rf.github.io*').test(window.location.href) ||
    new RegExp(
      'https://victorious-cliff-0fe836900.5.azurestaticapps.net*'
    ).test(window.location.href)
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
  async getPosts(): Promise<PostListViewModel[]> {
    const res = await axios({
      method: 'get',
      url: `${url.baseurl}/post`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return res.data.payload;
  },
  async getPostDetail(id: number): Promise<PostDetailViewModel> {
    const res = await axios({
      method: 'get',
      url: `${url.baseurl}/post/detail`,
      params: {
        id: id,
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return res.data.payload;
  },
};

export { api, BASE_URL };
